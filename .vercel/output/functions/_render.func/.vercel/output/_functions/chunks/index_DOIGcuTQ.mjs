import { c as callSafely, a as ActionError, b as ActionInputError, d as getApiContext$1 } from './shared_CKjjBf5V.mjs';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { f as firebase } from './config_COeD87Ye.mjs';
import { z } from 'zod';

const getApiContext = getApiContext$1;
function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  Object.assign(serverHandler, {
    safe: async (unparsedInput) => {
      return callSafely(() => serverHandler(unparsedInput));
    }
  });
  return serverHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!(inputSchema instanceof z.ZodObject)) return await handler(unparsedInput, getApiContext());
    const parsed = await inputSchema.safeParseAsync(formDataToObject(unparsedInput, inputSchema));
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, getApiContext());
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, getApiContext());
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, getApiContext());
  };
}
function formDataToObject(formData, schema) {
  const obj = {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    if (baseValidator instanceof z.ZodOptional || baseValidator instanceof z.ZodNullable) {
      validator = baseValidator._def.innerType;
    }
    if (validator instanceof z.ZodBoolean) {
      obj[key] = formData.has(key);
    } else if (validator instanceof z.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z.ZodOptional ? void 0 : null;
  }
  return validator instanceof z.ZodNumber ? Number(value) : value;
}

function toActionProxy(actionCallback = {}, aggregatedPath = "/_actions/") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target) {
        return target[objKey];
      }
      const path = aggregatedPath + objKey.toString();
      const action = (param) => actionHandler(param, path);
      action.toString = () => path;
      action.safe = (input) => {
        return callSafely(() => action(input));
      };
      action.safe.toString = () => path;
      action.$$FORM_ACTION = function() {
        const data = new FormData();
        data.set("_astroAction", action.toString());
        return {
          method: "POST",
          name: action.toString(),
          data
        };
      };
      action.safe.$$FORM_ACTION = function() {
        const data = new FormData();
        data.set("_astroAction", action.toString());
        data.set("_astroActionSafe", "true");
        return {
          method: "POST",
          name: action.toString(),
          data
        };
      };
      return toActionProxy(action, path + ".");
    }
  });
}
async function actionHandler(param, path) {
  {
    const { getAction } = await import('./shared_CKjjBf5V.mjs').then(n => n.u);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action(param);
  }
}
toActionProxy();

const logIn = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().min(2),
    password: z.string().min(6),
    remember_me: z.boolean().optional()
  }),
  handler: async ({ email, password }, { cookies }) => {
    try {
      const user = await signInWithEmailAndPassword(firebase.auth, email, password);
      return user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/user-not-found") {
        throw new Error("Credenciales inexistentes, intenta con otras");
      }
      throw new Error("Algo salio mal");
    }
    return { ok: true, msg: "Usuario logeado" };
  }
});

const loginGoogle = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);
    if (!credential) {
      throw new Error("Autenticación con google salio mal");
    }
    await signInWithCredential(firebase.auth, credential);
    return { ok: true, msg: "Usuario validado" };
  }
});

const logOut = defineAction({
  accept: "json",
  handler: async (_, { cookies }) => {
    return await signOut(firebase.auth);
  }
});

const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().min(2),
    password: z.string().min(6),
    remember_me: z.boolean().optional()
  }),
  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365),
        //1 año
        path: "/"
      });
    } else {
      cookies.delete("email", {
        path: "/"
      });
    }
    try {
      const user = await createUserWithEmailAndPassword(firebase.auth, email, password);
      if (!firebase.auth.currentUser) return;
      await updateProfile(firebase.auth.currentUser, {
        displayName: name
      });
      await sendEmailVerification(firebase.auth.currentUser, {
        //url: 'http://localhost:4321/protected'
        url: `${"http://localhost:4321"}/Verified`
      });
      return user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("Credenciales repetidas, intenta con otro email");
      }
      throw new Error("Algo salio mal");
    }
    return { ok: true, msg: "Usuario creado" };
  }
});

const server = {
  //actions
  //register y logout
  registerUser,
  logOut,
  logIn,
  loginGoogle
};

export { server };

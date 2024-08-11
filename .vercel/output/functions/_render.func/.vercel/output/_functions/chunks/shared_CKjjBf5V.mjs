import { AsyncLocalStorage } from 'node:async_hooks';
import { A as AstroError } from './astro/assets-service_CrVA10mL.mjs';

const ApiContextStorage = new AsyncLocalStorage();
function getApiContext() {
  const context = ApiContextStorage.getStore();
  if (!context) {
    throw new AstroError({
      name: "AstroActionError",
      message: "Unable to get API context.",
      hint: "If you attempted to call this action from server code, trying using `Astro.getActionResult()` instead."
    });
  }
  return context;
}

const formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
  const type = contentType.split(";")[0].toLowerCase();
  return expected.some((t) => type === t);
}
async function getAction(path) {
  const pathKeys = path.replace("/_actions/", "").split(".");
  let { server: actionLookup } = await import('./index_DOIGcuTQ.mjs');
  for (const key of pathKeys) {
    if (!(key in actionLookup)) {
      return void 0;
    }
    actionLookup = actionLookup[key];
  }
  if (typeof actionLookup !== "function") {
    return void 0;
  }
  return actionLookup;
}

const utils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  formContentTypes,
  getAction,
  hasContentType
}, Symbol.toStringTag, { value: 'Module' }));

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
const statusToCodeMap = Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);
class ActionError extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError.codeToStatus(params.code);
    if (params.stack) {
      this.stack = params.stack;
    }
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static async fromResponse(res) {
    const body = await res.clone().json();
    if (typeof body === "object" && body?.type === "AstroActionInputError" && Array.isArray(body.issues)) {
      return new ActionInputError(body.issues);
    }
    if (typeof body === "object" && body?.type === "AstroActionError") {
      return new ActionError(body);
    }
    return new ActionError({
      message: res.statusText,
      code: ActionError.statusToCode(res.status)
    });
  }
}
class ActionInputError extends ActionError {
  type = "AstroActionInputError";
  // We don't expose all ZodError properties.
  // Not all properties will serialize from server to client,
  // and we don't want to import the full ZodError object into the client.
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue of issues) {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue.message);
      }
    }
  }
}
async function callSafely(handler) {
  try {
    const data = await handler();
    return { data, error: void 0 };
  } catch (e) {
    if (e instanceof ActionError) {
      return { data: void 0, error: e };
    }
    return {
      data: void 0,
      error: new ActionError({
        message: e instanceof Error ? e.message : "Unknown error",
        code: "INTERNAL_SERVER_ERROR"
      })
    };
  }
}

export { ApiContextStorage as A, ActionError as a, ActionInputError as b, callSafely as c, getApiContext as d, formContentTypes as f, getAction as g, hasContentType as h, utils as u };

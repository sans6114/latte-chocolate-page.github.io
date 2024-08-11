/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent, q as addAttribute, v as renderScript } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$LoginGoogle, a as $$AuthLayout } from './LoginGoogle_B8AcQeU0.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const remember = !!email;
  console.log(remember);
  return renderTemplate`<!-- component -->${maybeRenderHead()}<div class="w-full bg-gray-100"> <div class="w-full rounded-lg bg-white p-8 shadow-lg"> <div class="mb-6 flex justify-center"> <span class="inline-block rounded-full bg-gray-200 p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg> </span> </div> <h2 class="mb-4 text-center text-2xl font-semibold">Entrar a tu cuenta</h2> <p class="mb-6 text-center text-gray-600">
Hola de nuevo! entra a tu cuenta y disgruta de nuestro portal personal
</p> ${renderComponent($$result, "LoginGoogle", $$LoginGoogle, {})} <div class="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
Or
</div> <form> <div class="mb-4"> <label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email*</label> <input type="email" id="email" name="email"${addAttribute(email, "value")} class="focus:ring-blue-500 form-input w-full rounded-lg border px-4 py-2 text-gray-700" required placeholder="ejemplo@gmail.com"> </div> <div class="mb-6"> <label for="password" class="mb-2 block text-sm font-semibold text-gray-700">Contraseña</label> <input type="password" id="password" name="password" class="focus:ring-blue-500 form-input w-full rounded-lg border px-4 py-2 text-gray-700" required placeholder="••••••••"> </div> <!-- Remember Me Checkbox --> <div class="mb-4 flex items-center"> <input type="checkbox"${addAttribute(remember, "checked")} id="remember_me" name="remember_me" class="text-blue-500"> <label for="remember" class="font-ex ml-2 text-gray-600">Recuerdame</label> </div> <div class="flex flex-col items-center"> <button id="btn-submit" type="submit" class="hover:bg-blue-600 focus:ring-blue-500 mx-auto w-1/2 rounded-lg bg-primary-100 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-opacity-50">Entrar</button> <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
No tenes cuenta?
<a href="/register" class="text-blue-600 dark:text-blue-500 font-medium decoration-2 hover:underline focus:underline focus:outline-none" href="#">
Resgistrate aqui
</a> </p> </div> </form> </div> </div> ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/auth/Login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/auth/Login.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormLogin", $$Login, {})} ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/login/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/login/index.astro";
const $$url = "/login";

export { $$Index as default, $$file as file, $$url as url };

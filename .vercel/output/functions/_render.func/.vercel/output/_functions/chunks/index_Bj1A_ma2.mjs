/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent, q as addAttribute, v as renderScript } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$LoginGoogle, a as $$AuthLayout } from './LoginGoogle_B8AcQeU0.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const remember = !!email;
  console.log(remember);
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-gray-100"> <div class="w-full rounded-lg bg-white p-8 shadow-lg"> <div class="mb-6 flex justify-center"> <span class="inline-block rounded-full bg-gray-200 p-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg> </span> </div> <h2 class="mb-4 text-center text-2xl font-semibold">Crear nueva vuenta</h2> <p class="mb-6 text-center text-gray-600">
Pone los detalles y crea tu nuevo acceso para el portal comercio.
</p> ${renderComponent($$result, "LoginGoogle", $$LoginGoogle, {})} <form action=""> <div class="mb-4"> <label for="fullName" class="mb-2 block text-sm font-semibold text-gray-700">Nombre</label> <input type="text" id="fullName" name="name" class="focus:ring-blue-500 form-input w-full rounded-lg border px-4 py-2 text-gray-700" required placeholder="tu nombre"> </div> <div class="mb-4"> <label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email*</label> <input type="email" id="email" name="email" class="focus:ring-blue-500 form-input w-full rounded-lg border px-4 py-2 text-gray-700" required placeholder="ejemplo@gmail.com"> </div> <div class="mb-6"> <label for="password" class="mb-2 block text-sm font-semibold text-gray-700">Contraseña</label> <input type="password" id="password" name="password" class="focus:ring-blue-500 form-input w-full rounded-lg border px-4 py-2 text-gray-700" required placeholder="••••••••"> <p class="mt-1 text-xs text-gray-600">
Debe contener al menos 6 caracteres
</p> </div> <!-- Remember Me Checkbox --> <div class="mb-4 flex items-center"> <input type="checkbox"${addAttribute(remember, "checked")} id="remember_me" name="remember_me" class="text-blue-500"> <label for="remember" class="font-ex ml-2 text-gray-600">Recuerdame</label> </div> <div class="flex flex-col items-center"> <button id="btn-submit" type="submit" class="hover:bg-blue-600 focus:ring-blue-500 mx-auto w-1/2 rounded-lg bg-primary-100 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:bg-gray-500">Resgitrarse</button> <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
Ya tenes cuenta?
<a href="/login" class="text-blue-600 dark:text-blue-500 font-medium decoration-2 hover:underline focus:underline focus:outline-none" href="#">
Ingresá aqui
</a> </p> </div> <p class="mt-4 text-center text-xs text-gray-600">
Al clickear registrarse estas aceptando los terminos legales y
        condiciones.
<a href="#" class="text-blue-500 hover:underline">Terminos y Condiciones</a>.
</p> </form> </div> </div> ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/auth/Register.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/auth/Register.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormAuth", $$Register, {})} ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/register/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/register/index.astro";
const $$url = "/register";

export { $$Index as default, $$file as file, $$url as url };
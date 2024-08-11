/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, s as renderComponent, p as maybeRenderHead, q as addAttribute } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { f as firebase } from './config_COeD87Ye.mjs';
import { $ as $$ComerciosLayout } from './ComerciosLayout_BEPut0NK.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$MiCuenta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MiCuenta;
  const userValue = firebase.auth.currentUser;
  await userValue?.reload();
  const { user } = Astro2.locals;
  if (!user) {
    return;
  }
  return renderTemplate`${renderComponent($$result, "ComerciosLayout", $$ComerciosLayout, { "title": "Mi usuario" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center gap-10"> <h1 class="text-3xl text-center my-4 font-extrabold mt-10">Hola latte user!</h1> <div class="card card-side bg-primary-100 shadow-3xl w-[500px] p-4 rounded-3xl flex flex-col items-center"> <figure> <!-- TODO:HACER ELECCION DE AVATAR --> ${user.avatar ? renderTemplate`<img${addAttribute(user.avatar, "src")}${addAttribute(`avatar de ${user.name}`, "alt")}>` : renderTemplate`<img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie">`} <button class="#">Cambiar avatar</button> </figure> <div class="card-body"> <h2 class="text-4xl font-bold">${user.name}</h2> <h2 class="card-title">${user.email}</h2> <p> ${user.emailVerified ? "Email verified" : "Email no verified"} </p> <div class="card-actions justify-end"> <button class="btn btn-primary">Watch</button> </div> </div> </div> </section> ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/miCuenta.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/miCuenta.astro";
const $$url = "/miCuenta";

export { $$MiCuenta as default, $$file as file, $$url as url };

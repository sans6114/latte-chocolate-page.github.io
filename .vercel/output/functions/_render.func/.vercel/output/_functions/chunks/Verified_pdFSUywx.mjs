/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, v as renderScript } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import 'clsx';
import { f as firebase } from './config_COeD87Ye.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Verified = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Verified;
  const userValue = firebase.auth.currentUser;
  await userValue?.reload();
  const { user } = Astro2.locals;
  if (!user) {
    return;
  }
  if (user.emailVerified) {
    Astro2.redirect("/comercios");
  }
  return renderTemplate`<!-- Hero -->${maybeRenderHead()}<div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"> <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10"> <!-- Announcement Banner --> <div class="flex justify-center"> <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="#"> <span class="flex items-center gap-x-1"> <span class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">Explore</span> <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </span> </a> </div> <!-- End Announcement Banner --> <!-- Title --> <div class="mt-5 max-w-xl text-center mx-auto"> <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
Hola ${user.name}!
</h1> </div> <!-- End Title --> <div class="mt-5 max-w-3xl text-center mx-auto"> <p class="text-lg text-gray-600 dark:text-neutral-400">Necesitamos que verifiques tu email, revisa tu correo y verifica tu cuenta para poder acceder a tu nuevo portal.</p> <div class="w-96 bg-secondary-100 bg-opacity-10 p-10 rounded-3xl mt-10 mx-auto"> <h2 class="text-lg text-gray-600 ">Te registraste con el email:</h2> <h3 class="text-lg text-black">${user.email}</h3> <p class="text-3xl mt-3"> ${user.emailVerified ? "Email verified" : "Email no verified"} </p> <div class="card-actions justify-end"></div> </div> </div> <!-- Buttons --> <div class="mt-8 gap-3 flex justify-center"> <button id="btn-comprobe" class="bg-primary-100 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-bold rounded-full py-3 px-4 cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M12.5 13.3c-.2-.5-.2-.9-.1-1.3H3V4.5l6 4l6-4v1.7c.6-.3 1.1-.3 1.4-.3c.1-.1.3-.2.5-.3v-3c.1-.9-.6-1.6-1.5-1.6H2.6C1.7 1 1 1.7 1 2.6v9.8c0 .9.7 1.6 1.6 1.6h10.3c-.2-.2-.3-.4-.4-.7M15 3L9 7L3 3zm7.6 6.9c-.2-.6-.7-.7-1-1c-.2-.3-.2-.9-.7-1.2c-.5-.4-1-.2-1.4-.3s-.7-.6-1.3-.6s-.9.4-1.3.6c-.4.1-.9-.1-1.4.3c-.5.3-.4.8-.7 1.2c-.3.3-.8.5-1 1c-.2.6.2 1 .2 1.4s-.4.8-.2 1.4s.7.7 1 1c.2.3.2.9.7 1.2c.5.4 1 .2 1.4.3s.7.6 1.3.6s.9-.4 1.3-.6c.4-.1.9.1 1.4-.3s.5-.9.7-1.2c.3-.3.8-.5 1-1c.2-.6-.2-1-.2-1.4s.4-.8.2-1.4m-4.4 4.5c-1.7 0-3-1.4-3-3s1.4-3 3-3s3 1.4 3 3s-1.3 3-3 3m1.5-3.1c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5m-.2 5.8l-.5 2.7l-.6 3.1l-2-1.9l-2.4 1.1l1-5.7c.4.2.9.3 1.4.3c.3.2.7.4 1 .5c.2.1.5.1.8.1c.5.1.9 0 1.3-.2m3.2 2.4l-2-.7l.4-2.2l.6-.3l.1-.1z"></path></svg>
Ya verifique mi cuenta
</button> </div> </div> </div> ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/Verified.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/Verified.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/Verified.astro";
const $$url = "/Verified";

export { $$Verified as default, $$file as file, $$url as url };
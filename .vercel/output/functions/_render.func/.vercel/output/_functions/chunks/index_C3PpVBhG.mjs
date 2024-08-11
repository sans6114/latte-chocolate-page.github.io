/* empty css                         */
import { n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent, m as createAstro } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from './MainLayout_WeXfuK4m.mjs';
import { $ as $$SecondaryCTA, a as $$AnnouncementBanner } from './SecondaryCTA_CZFfJhJB.mjs';
import { $ as $$HeroSectionAlt } from './HeroSectionAlt_vNebsabH.mjs';
import { S as SITE } from './NavLink_CCaNeEAr.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_CYLibHAE.mjs';

const $$ItemCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 lg:w-96"> <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"> <div class="p-4 md:p-5"> <h3 class="text-lg font-bold text-gray-800 dark:text-white">
Product title
</h3> <p class="mt-1 text-gray-500 dark:text-neutral-400">
Description product
</p> <div class="flex gap-4 w-full my-2"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": "comprar" })} ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": "agregar a favoritos" })} </div> </div> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/shop/ItemCard.astro", void 0);

const $$ShopLatte = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md: w-full gap-7 mb-[100px] items-center"> ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} ${renderComponent($$result, "ItemCard", $$ItemCard, {})} </section>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/shop/ShopLatte.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Bienvenido";
  const subTitle = "Adquiere tus productos Latte de la mejor forma, facil, sencillo, r\xE1pido para que sin que pase mucho tiempo puedas tener tu producto Latte en tus manos.";
  const pageTitle = `Tienda | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Tienda | Latte chocolate",
    "description": "Explora y descubr\xED lo que pueden generar nestros productos.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "Latte choclate",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "es"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full mb-[100px]"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h1 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h1> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> </section> ${renderComponent($$result2, "ShopLatte", $$ShopLatte, {})} ${renderComponent($$result2, "AnnouncementBanner", $$AnnouncementBanner, { "btnId": "dismiss-button", "btnTitle": "\xBFTenes un comercio? \xA1accede a tu cuenta personal!", "url": "#" })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "\xBFten\xE9s un comercio?", "subTitle": "Unite a nuestra red de revendedores y disfruta de m\xFAltiples beneficios", "url": "./contact.astro" })} ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/tienda/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/tienda/index.astro";
const $$url = "/tienda";

export { $$Index as default, $$file as file, $$url as url };

/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, s as renderComponent } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from './MainLayout_WeXfuK4m.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_CYLibHAE.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { $ as $$TestimonialProducts } from './TestimonialProducts_CDwiPJxZ.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_ged3YyNi.mjs';
import { S as SITE } from './NavLink_CCaNeEAr.mjs';

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- A clickable card that leads to the details of the product-->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/cards/CardSmall.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:col-span-2 md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/cards/CardWide.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="size-8 flex-shrink-0 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg> </div> <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Productos";
  const subTitle = "Explora la gran variedad de productos que ofrecemos, cada uno tiene un mensaje pensado y dise\xF1ado para un momento en especial.";
  const testimonials = [
    // First testimonial data
    {
      content: ' "Hola! C\xF3mo est\xE1n? Ayer descubr\xED sus chocolates s\xFAper originales en la Puro Dise\xF1o. Quer\xEDa saber d\xF3nde se pueden conseguir fuera de la Feria.\xA0Muchas\xA0gracias!." ',
      author: "Cliente minorista",
      role: "Instagram | Cliente minorista"
    },
    // Second testimonial data
    {
      content: ' "Son hermosos y se les nota el amor con el que est\xE1n hechos y sobre todo pensados, las ideas\xA0son\xA0hermosas.."',
      author: "Cliente minorista",
      role: "Instagram | Cliente minorista"
    },
    // Third testimonial data
    {
      content: ' "Son hermosos y se les nota el amor con el que est\xE1n hechos y sobre todo pensados, las ideas\xA0son\xA0hermosas.." ',
      author: "Comercio",
      role: "Instagram | Comercio"
    }
  ];
  const pageTitle = `Productos | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Productos | Latte chocolate",
    "description": "Explora y descubr\xED lo que pueden generar nestros productos.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "Latte choclate",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "es"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Que dicen sobre nuestros productos", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "TestimonialProducts", $$TestimonialProducts, { "title": "\xBFPor qu\xE9 elegir Latte?", "subTitle": "Latte tiene productos increibles, nuestro fuerte es transmitir mensajes a traves de nuestros productos. Compra ahora en nuestra tienda o contactanos para distribuir.", "benefits": [
    "Perfectos para regalar: Nuestros chocolates est\xE1n dise\xF1ados para expresar mensajes especiales, siendo el regalo perfecto para cualquier ocasi\xF3n.",
    "Innovaci\xF3n constante: Siempre estamos innovando de forma creativa para ofrecerte la mejor experiencia.",
    "Calidad: calidad excelente y sobre todo peso de a\xF1os de experiencia en la industria."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Que dicen nuestros clientes", "testimonials": testimonials })} ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/index.astro";
const $$url = "/products";

export { $$Index as default, $$file as file, $$url as url };

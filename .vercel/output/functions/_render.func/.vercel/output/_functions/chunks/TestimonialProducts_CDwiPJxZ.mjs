import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { f as featureImage } from './features-image_BczGJc94.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$TestimonialProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialProducts;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-primary-400 dark:text-primary-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": featureImage, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/products/TestimonialProducts.astro", void 0);

export { $$TestimonialProducts as $ };

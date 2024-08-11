/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, s as renderComponent, p as maybeRenderHead, v as renderScript } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from './MainLayout_WeXfuK4m.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as getCollection } from './_astro_content_ged3YyNi.mjs';
import { S as SITE } from './NavLink_CCaNeEAr.mjs';

const $$Astro = createAstro("https://screwfast.uk");
async function getStaticPaths() {
  const productEntries = await getCollection("products");
  return productEntries.map((product) => ({
    params: { slug: product.slug },
    props: { product }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { product } = Astro2.props;
  const pageTitle = `${product.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="overlay" class="fixed inset-0 bg-neutral-200 dark:bg-neutral-800"></div> <section class="mx-auto flex max-w-[85rem] flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <p id="fadeText" class="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl"> ${product.data.main.content} </p> </div> <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"> <div id="fadeInUp"> <h1 class="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl"> ${product.data.title} </h1> </div> <div> ${renderComponent($$result2, "Image", $$Image, { "id": "fadeInMoveRight", "src": product.data.main.imgMain, "class": "w-[600px]", "alt": product.data.main.imgAlt, "format": "avif", "loading": "eager" })} </div> </div> </section> ${renderScript($$result2, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/[...slug].astro?astro&type=script&index=1&lang.ts")}` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/[...slug].astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };

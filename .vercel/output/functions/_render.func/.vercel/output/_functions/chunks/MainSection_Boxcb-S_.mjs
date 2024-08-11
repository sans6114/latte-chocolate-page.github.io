import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as renderComponent } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$PrimaryCTA } from './PrimaryCTA_CYLibHAE.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { title, subTitle, btnExists, btnTitle, btnURL } = Astro2.props;
  return renderTemplate`<!-- Root section of the component -->${maybeRenderHead()}<section class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="max-w-screen-md"> <!-- Section title --> <h1 class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"> ${title} </h1> <!-- Section subtitle --> <p class="mb-8 max-w-prose text-pretty font-light text-neutral-600 dark:text-neutral-400 sm:text-xl"> ${subTitle} </p> <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy --> ${btnExists ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"> ${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": btnTitle, "url": btnURL })} </div>` : null} </div> </section>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/blocks/MainSection.astro", void 0);

export { $$MainSection as $ };

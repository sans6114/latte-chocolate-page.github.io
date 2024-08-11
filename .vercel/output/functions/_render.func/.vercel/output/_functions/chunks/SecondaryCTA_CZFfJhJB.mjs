import { m as createAstro, n as createComponent, o as renderTemplate, s as renderComponent, v as renderScript, p as maybeRenderHead, q as addAttribute } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './MainLayout_WeXfuK4m.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50  mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl p-4 text-center shadow-sm "${addAttribute({
    background: "rgb(108,109,178)",
    backgroundImage: "radial-gradient(circle, rgba(108,109,178,1) 40%, rgba(243,11,134,1) 90%)"
  }, "style")}> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/banners/AnnouncementBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/banners/AnnouncementBanner.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-bold text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300 cursor-pointer";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/buttons/SecondaryCTA.astro", void 0);

export { $$SecondaryCTA as $, $$AnnouncementBanner as a };

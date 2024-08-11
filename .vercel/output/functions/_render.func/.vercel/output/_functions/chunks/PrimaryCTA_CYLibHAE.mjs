import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, s as renderComponent } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './MainLayout_WeXfuK4m.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$PrimaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimaryCTA;
  const { title, url, noArrow } = Astro2.props;
  const baseClasses = "cursor-pointer group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-primary-100 hover:bg-primary-500  dark:focus:outline-none";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")}> ${title} <!-- Display the arrow based on the 'noArrow' property --> ${noArrow ? null : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowRight" })}`} </a>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/buttons/PrimaryCTA.astro", void 0);

export { $$PrimaryCTA as $ };

import { m as createAstro, n as createComponent, o as renderTemplate, u as unescapeHTML, q as addAttribute, s as renderComponent, F as Fragment, p as maybeRenderHead, v as renderScript } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { a as getImage } from './_astro_assets_dVBWH8v7.mjs';
import { i as icon } from './icon_BUdbhkFs.mjs';
import 'clsx';

const ogImageSrc = new Proxy({"src":"/_astro/social.CWnIx2-K.png","width":1200,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/images/social.png";
							}
							
							return target[name];
						}
					});

const SITE = {
  title: "Latte chocolate",
  tagline: "Chocolates y alfajores ideales para regalar y disfrutar",
  description: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos. Encuentra el regalo perfecto o disfruta de momentos dulces con nuestros productos. ¡Explora nuestro catálogo y déjate tentar!",
  description_short: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos.",
  url: "https://screwfast.uk",
  author: "Santiago Sosa"
};
const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};
const OG = {
  locale: "es",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Chocolates y alfajores ideales para regalar y disfrutar`,
  description: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos. Encuentra el regalo perfecto o disfruta de momentos dulces con nuestros productos. ¡Explora nuestro catálogo y déjate tentar!",
  image: ogImageSrc
};

const faviconSvgSrc = new Proxy({"src":"/_astro/icon.B7KHh505.svg","width":512,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/images/icon.svg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://screwfast.uk");
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Meta;
  const defaultProps = {
    meta: SITE.description,
    structuredData: SEO.structuredData
  };
  const {
    meta = defaultProps.meta,
    structuredData = defaultProps.structuredData
  } = Astro2.props;
  const URL = `${Astro2.site}`;
  const author = SITE.author;
  const canonical = Astro2.url.href;
  Astro2.url.pathname;
  const ogTitle = OG.title;
  const ogDescription = OG.description;
  const socialImageRes = await getImage({
    src: OG.image,
    width: 1200,
    height: 600
  });
  const socialImage = Astro2.url.origin + socialImageRes.src;
  const languages = {
    en: "",
    fr: "fr"
  };
  function createHref(lang, prefix, path) {
    const hasPrefix = path.startsWith(`/${prefix}/`);
    const basePath2 = hasPrefix ? path : `/${prefix}${path}`;
    const normalizedBasePath = basePath2.replace(/\/\/+/g, "/");
    return `${URL.slice(0, -1)}${normalizedBasePath}`;
  }
  const fullPath = Astro2.url.pathname;
  const alternateLanguageLinks = Object.entries(languages).map(([lang, prefix]) => {
    const basePath2 = lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;
    const href = createHref(lang, prefix, basePath2);
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  }).join("\n");
  const faviconSvg = await getImage({
    src: faviconSvgSrc,
    format: "svg"
  });
  const appleTouchIcon = await getImage({
    src: icon,
    width: 180,
    height: 180,
    format: "png"
  });
  return renderTemplate`<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->${structuredData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}<!-- Define the character set, description, author, and viewport settings --><meta charset="utf-8"><meta${addAttribute(meta, "content")} name="description"><meta name="web_author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="canonical"${addAttribute(canonical, "href")}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(alternateLanguageLinks)}` })}<!-- Facebook Meta Tags --><meta property="og:locale" content="en_US"><meta property="og:url"${addAttribute(URL, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(ogTitle, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:description"${addAttribute(ogDescription, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta content="1200" property="og:image:width"><meta content="600" property="og:image:height"><meta content="image/png" property="og:image:type"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(URL, "content")}><meta property="twitter:url"${addAttribute(URL, "content")}><meta name="twitter:title"${addAttribute(ogTitle, "content")}><meta name="twitter:description"${addAttribute(ogDescription, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><!-- Links to the webmanifest and sitemap --><link rel="manifest" href="/manifest.json"><!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ --><link rel="sitemap" href="/sitemap-index.xml"><!-- Links for favicons --><link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon"><link${addAttribute(faviconSvg.src, "href")} rel="icon" type="image/svg+xml" sizes="any"><meta name="mobile-web-app-capable" content="yes"><link${addAttribute(appleTouchIcon.src, "href")} rel="apple-touch-icon"><link${addAttribute(appleTouchIcon.src, "href")} rel="shortcut icon"><!-- Set theme color --><meta name="theme-color" content="#facc15">`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/Meta.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->${maybeRenderHead()}<button type="button" aria-label="Dark Theme Toggle" class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-primary-100 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-primary-100 dark:focus:outline-none" data-hs-theme-click-value="dark"> <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <!-- Light Theme Toggle Button --> <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme --> </button> <button type="button" aria-label="Light Theme Toggle" class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-primary-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-primary-300 dark:focus:outline-none" data-hs-theme-click-value="light"> <!-- The SVG displayed shows a standard sun icon that stands for the light theme --> <svg class="h-4 w-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ThemeIcon.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { url, name } = Astro2.props;
  return renderTemplate`<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->${maybeRenderHead()}<a${addAttribute(url === "/" ? "home" : url.replace("/", ""), "id")}${addAttribute(url, "href")} data-astro-prefetch class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"> ${name} </a> ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/links/NavLink.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/links/NavLink.astro", void 0);

export { $$NavLink as $, SITE as S, $$ThemeIcon as a, $$Meta as b };

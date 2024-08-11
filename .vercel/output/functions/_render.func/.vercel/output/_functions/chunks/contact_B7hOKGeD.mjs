/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, t as renderSlot, s as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from './MainLayout_WeXfuK4m.mjs';
import 'clsx';
import { S as SITE } from './NavLink_CCaNeEAr.mjs';

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$AuthBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AuthBtn;
  const { title } = Astro2.props;
  const baseClasses = "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:bg-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
  const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
  return renderTemplate`<!-- Styled submit button with dynamic title -->${maybeRenderHead()}<button type="submit"${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`, "class")}>${title}</button>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/buttons/AuthBtn.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$ContactIconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactIconBlock;
  const {
    heading,
    content,
    isAddressVisible,
    addressContent,
    isLinkVisible,
    linkTitle,
    linkURL,
    isArrowVisible
  } = Astro2.props;
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`<!-- Root container, which arranges the heading and content -->${maybeRenderHead()}<div class="flex gap-x-7 py-6"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3 class="font-bold text-neutral-700 dark:text-neutral-300"> ${heading} </h3> <!-- Content of the section --> <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">${content}</p> <!-- Conditional rendering of address content if isAddressVisible is true --> ${isAddressVisible ? renderTemplate`<p class="mt-1 text-sm italic text-neutral-500">${addressContent}</p>` : null} <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true --> ${isLinkVisible ? renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 "${addAttribute(linkURL, "href")}> ${linkTitle} ${isArrowVisible ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(arrowSVG)}` })}` : null} </a>` : null} </div> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/blocks/ContactIconBlock.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$TextInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/input/TextInput.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$EmailContactInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro2.props;
  return renderTemplate`<!-- Container for the label and email input field -->${maybeRenderHead()}<div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Email input field --> <input type="email" name="hs-email-contacts"${addAttribute(id, "id")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/input/EmailContactInput.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$PhoneInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PhoneInput;
  const label = "N\xFAmero de telefono";
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="tel" name="hs-phone-number"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/input/PhoneInput.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$TextAreaInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextAreaInput;
  const { label, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")} rows="4" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}></textarea> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/input/TextAreaInput.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const title = "Contactanos para ser ditribuidor";
  const subTitle = "description";
  const formTitle = "Llena el formulario y envianos tus datos";
  const formSubTitle = "Nos pondremos en contacto lo antes posible.";
  return renderTemplate`<!-- Contact Us -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p> </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"> ${formTitle} </h2> <!-- Form for user input with various input fields.--> <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)--> <form> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname-contacts", "label": "Nombre", "name": "hs-firstname-contacts" })} ${renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-contacts", "label": "Apellido", "name": "hs-firstname-contacts" })} </div> ${renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts" })} ${renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number" })} ${renderComponent($$result, "TextAreaInput", $$TextAreaInput, { "id": "hs-about-contacts", "label": "Detalles", "name": "hs-about-contacts" })} </div> <div class="mt-4 grid"> ${renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Enviar" })} </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div> <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.--> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "M\xE1s sobre nosotros", "content": "Aprende mas sobre la historia de Latte en nuestra secci\xF3n 'nosotros'", "isLinkVisible": true, "linkTitle": "Visitar secci\xF3n", "linkURL": "nosotros", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "question" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "FAQ", "content": "Visit\xE1 nuestra secci\xF3n home en la que respondemos las preguntas mas comunes.", "isLinkVisible": true, "linkTitle": "Preguntas frecuentes", "linkURL": "/", "isArrowVisible": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "chatBubble" })} ` })} ${renderComponent($$result, "ContactIconBlock", $$ContactIconBlock, { "heading": "Contactanos via email", "content": "\xBFPrefer\xEDs otra forma de contactarte? escribinos a traves de tu correo electr\xF3nico.", "isLinkVisible": true, "linkTitle": "support@lattechocolate.com", "linkURL": "#" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "envelopeOpen" })} ` })} </div> </div> </div> </section>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/misc/ContactSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Contact | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/contact",
    "url": "https://screwfast.uk/contact",
    "name": "Contact Us | ScrewFast",
    "description": "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/contact.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };

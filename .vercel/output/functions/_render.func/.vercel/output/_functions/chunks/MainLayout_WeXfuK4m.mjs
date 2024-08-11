import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, w as spreadAttributes, v as renderScript, s as renderComponent, q as addAttribute, t as renderSlot, x as renderHead } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$NavLink, a as $$ThemeIcon, S as SITE, b as $$Meta } from './NavLink_CCaNeEAr.mjs';
import 'clsx';
/* empty css                           */

const navBarLinks$1 = [
  { name: "Inicio", url: "/" },
  { name: "Nosotros", url: "/nosotros" },
  { name: "Products", url: "/products" },
  { name: "Tienda", url: "/tienda" },
  { name: "Emprender", url: "/emprender" }
];
const footerLinks$1 = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" }
    ]
  },
  {
    section: "Navegación",
    links: [
      { name: "Inicio", url: "/" },
      { name: "Nosotros", url: "/nosotros" },
      { name: "Productos", url: "/products" },
      { name: "Tienda", url: "/tienda" },
      { name: "Emprender", url: "/emprender" },
      { name: "Distribuir", url: "/contact" }
    ]
  }
];
const socialLinks$1 = {
  facebook: "https://www.facebook.com/p/Latte-Chocolate-100063782032795/?locale=es_LA",
  x: "https://www.instagram.com/latteechocolate/?hl=es",
  github: "#"
};
const enStrings = {
  navBarLinks: navBarLinks$1,
  footerLinks: footerLinks$1,
  socialLinks: socialLinks$1
};

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" }
];
const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" }
    ]
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" }
    ]
  }
];
const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#"
};
const frStrings = {
  navBarLinks,
  footerLinks,
  socialLinks
};

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BrandLogo;
  return renderTemplate`<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->${maybeRenderHead()}<svg class="w-[60px] md:w-[80px]"${spreadAttributes(Astro2.props)} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 549.02" style="enable-background:new 0 0 595.28 549.02;" xml:space="preserve"> <style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#E30613;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;}
	.st2{fill:#4F2814;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#4F2814;}
	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#E6007E;}
	.st5{fill:#FFFFFF;}
	.st6{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
</style> <path d="M96.17,113.08c-2.86-0.68-5.79-1.17-8.8-1.43c-2.98-0.28-5.78-0.43-8.37-0.43c-2.74,0-5.58,0.15-8.5,0.43
	c-2.93,0.26-5.91,0.75-8.9,1.43l-0.2,105.75h73.25c0.68-2.71,1.12-5.28,1.33-7.65c0.19-2.4,0.31-4.68,0.31-6.86
	c0-2.19-0.11-4.42-0.31-6.76c-0.2-2.32-0.65-4.84-1.33-7.57H95.98L96.17,113.08z"></path> <path d="M134.74,201.55c2.38,4.71,5.69,8.5,9.92,11.35c4.23,2.87,9.31,4.94,15.24,6.25c5.94,1.29,12.44,1.94,19.54,1.94
	c8.19,0,15.97-0.75,23.34-2.26c7.36-1.49,13.63-2.99,18.81-4.49V154.4c0-7.64-1.09-14.22-3.28-19.75
	c-2.18-5.51-5.28-10.05-9.31-13.58c-4.03-3.55-8.9-6.16-14.64-7.89c-5.71-1.7-12.13-2.54-19.21-2.54c-5.18,0-11.02,0.53-17.51,1.62
	c-6.46,1.09-12.98,2.72-19.55,4.92c0,2.72,0.11,5.15,0.33,7.25c0.19,2.12,0.54,4.17,1.02,6.13c0.48,1.98,1.17,3.93,2.04,5.84
	c0.88,1.92,1.95,4.01,3.17,6.34c4.64-1.64,9.14-2.82,13.5-3.57c4.37-0.74,8.19-1.12,11.45-1.12c2.45,0,4.83,0.17,7.17,0.51
	c2.31,0.34,4.42,0.94,6.34,1.84c1.9,0.87,3.48,2.17,4.71,3.78c1.24,1.63,1.9,3.69,2.04,6.16H177.4c-5.17,0-10.51,0.51-15.97,1.52
	c-5.45,1.02-10.43,2.83-14.94,5.43c-4.48,2.6-8.18,6.05-11.02,10.41c-2.88,4.37-4.3,9.91-4.3,16.59
	C131.17,191.09,132.35,196.87,134.74,201.55 M173.61,195.31c-2.12-0.26-4.09-0.82-5.94-1.63c-1.83-0.82-3.37-2.02-4.59-3.58
	c-1.24-1.56-1.84-3.72-1.84-6.45c0-3.66,1.63-6.53,4.9-8.59c3.28-2.03,7.29-3.05,12.09-3.05h11.65v22.5
	c-1.09,0.28-2.8,0.56-5.1,0.82c-2.34,0.27-4.09,0.41-5.33,0.41C177.66,195.72,175.73,195.58,173.61,195.31"></path> <path d="M252.68,218.64c3.41,0.54,6.55,0.95,9.41,1.22c2.86,0.27,5.45,0.39,7.77,0.39c2.34,0,4.92-0.11,7.78-0.39
	c2.87-0.27,6.07-0.68,9.63-1.22V141.9h30.26c0.69-2.71,1.12-5.27,1.34-7.65c0.19-2.38,0.29-4.68,0.29-6.86
	c0-2.19-0.1-4.42-0.29-6.75c-0.22-2.31-0.65-4.83-1.34-7.56H222.4c-0.68,2.73-1.13,5.25-1.33,7.56c-0.2,2.32-0.32,4.56-0.32,6.75
	c0,2.18,0.11,4.48,0.32,6.86c0.19,2.38,0.65,4.94,1.33,7.65h30.28V218.64z"></path> <path d="M342.9,218.64c3.4,0.54,6.55,0.95,9.4,1.22c2.88,0.27,5.48,0.39,7.78,0.39c2.32,0,4.92-0.11,7.78-0.39
	c2.87-0.27,6.08-0.68,9.62-1.22V141.9h30.29c0.67-2.72,1.11-5.27,1.32-7.65c0.22-2.38,0.31-4.68,0.31-6.86
	c0-2.19-0.09-4.42-0.31-6.75c-0.2-2.31-0.65-4.83-1.32-7.56h-95.13c-0.68,2.73-1.12,5.25-1.34,7.56c-0.19,2.32-0.29,4.56-0.29,6.75
	c0,2.18,0.1,4.48,0.29,6.86c0.22,2.38,0.66,4.94,1.34,7.65h30.28V218.64z"></path> <path d="M501.45,176.9c0.26-1.9,0.58-4.32,0.91-7.26c0.34-2.93,0.52-6.25,0.52-9.93c0-7.09-1.08-13.66-3.17-19.75
	c-2.12-6.05-5.16-11.24-9.11-15.53c-3.96-4.3-8.76-7.67-14.42-10.11c-5.66-2.47-12.11-3.69-19.33-3.69c-8.73,0-16.37,1.46-22.9,4.38
	c-6.55,2.95-12.01,6.94-16.36,11.97c-4.38,5.05-7.65,10.99-9.82,17.79c-2.19,6.83-3.3,14.13-3.3,21.91c0,7.9,1.08,15.21,3.19,21.88
	c2.12,6.68,5.39,12.44,9.82,17.28c4.42,4.84,10.15,8.64,17.19,11.35c7.03,2.74,15.44,4.12,25.25,4.12c12.69,0,25.12-2.27,37.24-6.75
	c-0.14-5.33-0.92-10.45-2.35-15.36c-1.42-4.91-3.1-9.12-5.01-12.68c-4.76,1.89-9.62,3.34-14.54,4.3c-4.91,0.95-9.33,1.43-13.3,1.43
	c-6.12,0-11.07-1.16-14.82-3.46c-3.75-2.34-6.37-6.29-7.87-11.88H501.45z M467.19,141.41c2.65,3.21,4.12,7.19,4.39,11.96h-32.72
	c0.53-5.73,2.38-9.97,5.51-12.68c3.14-2.73,6.89-4.09,11.26-4.09C460.67,136.6,464.51,138.2,467.19,141.41"></path> <path d="M54.65,311.62c2.32,6.75,5.76,12.54,10.34,17.38c4.57,4.85,10.18,8.57,16.86,11.16c6.68,2.59,14.4,3.89,23.12,3.89
	c5.19,0,10.38-0.35,15.56-1.03c5.18-0.69,10.91-2.23,17.18-4.71c0-5.85-0.68-11.07-2.04-15.66c-1.36-4.56-3.22-8.67-5.53-12.36
	c-3.96,1.51-7.38,2.59-10.31,3.27c-2.95,0.68-6.38,1.01-10.35,1.01c-3.13,0-6.1-0.4-8.9-1.22c-2.8-0.81-5.24-2.17-7.36-4.07
	c-2.11-1.92-3.82-4.55-5.1-7.89c-1.3-3.33-1.96-7.52-1.96-12.59c0-9.52,2.15-16.24,6.45-20.14c4.3-3.89,9.73-5.83,16.26-5.83
	c1.77,0,3.45,0.05,5.02,0.1c1.56,0.07,3.16,0.23,4.81,0.51c1.63,0.27,3.37,0.63,5.2,1.12c1.85,0.49,3.92,1.12,6.24,1.94
	c2.31-4.37,4.03-8.83,5.11-13.4c1.1-4.56,1.51-9.16,1.25-13.8c-3.29-1.22-6.25-2.26-8.91-3.07c-2.65-0.82-5.24-1.43-7.76-1.84
	c-2.54-0.41-5.09-0.69-7.69-0.83c-2.59-0.11-5.32-0.19-8.19-0.19c-8.45,0-15.95,1.36-22.51,4.09c-6.53,2.72-12.06,6.5-16.55,11.34
	c-4.5,4.85-7.93,10.68-10.24,17.5c-2.32,6.84-3.47,14.33-3.47,22.5C51.18,297.25,52.32,304.86,54.65,311.62"></path> <path d="M203.18,341.38c3.4,0.54,6.54,0.95,9.4,1.22c2.86,0.27,5.47,0.41,7.77,0.41c2.34,0,4.92-0.14,7.78-0.41
	c2.88-0.27,6.08-0.68,9.63-1.22V235.81c-2.86-0.66-5.81-1.16-8.8-1.43c-3-0.28-5.81-0.41-8.39-0.41c-2.72,0-5.57,0.12-8.48,0.41
	c-2.94,0.27-5.91,0.77-8.9,1.43v35.99h-30.29v-35.99c-2.86-0.66-5.79-1.16-8.8-1.43c-2.99-0.27-5.79-0.41-8.38-0.41
	c-2.73,0-5.56,0.14-8.49,0.41c-2.94,0.27-5.91,0.77-8.9,1.43v105.57c3.4,0.54,6.54,0.95,9.41,1.22c2.88,0.27,5.47,0.41,7.77,0.41
	c2.32,0,4.92-0.14,7.78-0.41c2.87-0.27,6.07-0.68,9.62-1.22v-38.87h30.29V341.38z"></path> <path d="M348.43,311.62c2.32,6.75,5.75,12.54,10.33,17.38c4.57,4.85,10.19,8.57,16.87,11.16c6.68,2.59,14.39,3.89,23.12,3.89
	c5.19,0,10.38-0.35,15.56-1.03c5.17-0.69,10.9-2.23,17.18-4.71c0-5.85-0.69-11.07-2.04-15.66c-1.36-4.56-3.22-8.67-5.53-12.36
	c-3.96,1.51-7.39,2.59-10.33,3.27c-2.93,0.68-6.38,1.01-10.34,1.01c-3.13,0-6.1-0.4-8.89-1.22c-2.79-0.81-5.24-2.17-7.37-4.07
	c-2.11-1.92-3.81-4.55-5.1-7.89c-1.29-3.33-1.96-7.52-1.96-12.59c0-9.52,2.17-16.24,6.45-20.14c4.3-3.89,9.73-5.83,16.27-5.83
	c1.77,0,3.45,0.05,5.01,0.1c1.55,0.07,3.17,0.23,4.82,0.51c1.63,0.27,3.37,0.63,5.22,1.12c1.83,0.49,3.91,1.12,6.23,1.94
	c2.31-4.37,4.03-8.83,5.11-13.4c1.09-4.56,1.51-9.16,1.24-13.8c-3.28-1.22-6.25-2.26-8.89-3.07c-2.66-0.82-5.26-1.43-7.79-1.85
	c-2.53-0.4-5.08-0.68-7.68-0.82c-2.59-0.11-5.32-0.19-8.18-0.19c-8.46,0-15.95,1.36-22.5,4.09c-6.54,2.72-12.08,6.5-16.58,11.34
	c-4.49,4.85-7.9,10.68-10.23,17.5c-2.32,6.84-3.48,14.33-3.48,22.5C344.95,297.25,346.1,304.86,348.43,311.62"></path> <path d="M96.17,358.58c-2.86-0.68-5.79-1.17-8.8-1.43c-2.98-0.28-5.78-0.43-8.37-0.43c-2.74,0-5.58,0.15-8.5,0.43
	c-2.93,0.26-5.91,0.75-8.9,1.43l-0.2,105.75h73.25c0.68-2.71,1.12-5.3,1.33-7.67c0.19-2.38,0.31-4.67,0.31-6.85
	c0-2.19-0.11-4.42-0.31-6.76c-0.2-2.32-0.65-4.84-1.33-7.55H95.98L96.17,358.58z"></path> <path d="M134.74,447.04c2.38,4.69,5.69,8.49,9.92,11.36c4.23,2.88,9.31,4.94,15.24,6.23c5.94,1.3,12.44,1.95,19.54,1.95
	c8.19,0,15.97-0.76,23.34-2.26c7.36-1.5,13.63-2.99,18.81-4.5v-59.93c0-7.63-1.09-14.22-3.28-19.74
	c-2.18-5.52-5.28-10.06-9.31-13.61c-4.03-3.55-8.9-6.17-14.64-7.88c-5.71-1.7-12.13-2.56-19.21-2.56c-5.18,0-11.02,0.57-17.51,1.64
	c-6.46,1.09-12.98,2.72-19.55,4.91c0,2.73,0.11,5.15,0.33,7.26c0.19,2.12,0.54,4.16,1.02,6.13c0.48,1.98,1.17,3.93,2.04,5.83
	c0.88,1.93,1.95,4.04,3.17,6.35c4.64-1.62,9.14-2.85,13.5-3.57c4.37-0.76,8.19-1.12,11.46-1.12c2.44,0,4.82,0.16,7.16,0.5
	c2.31,0.35,4.42,0.96,6.34,1.85c1.9,0.87,3.48,2.17,4.71,3.78c1.24,1.66,1.9,3.69,2.04,6.15H177.4c-5.17,0-10.51,0.51-15.97,1.53
	c-5.45,1.02-10.43,2.83-14.95,5.42c-4.48,2.61-8.18,6.07-11.02,10.44c-2.88,4.37-4.3,9.89-4.3,16.57
	C131.17,436.59,132.35,442.35,134.74,447.04 M173.61,440.8c-2.12-0.26-4.09-0.82-5.94-1.62c-1.83-0.83-3.37-2.03-4.59-3.59
	c-1.24-1.56-1.84-3.72-1.84-6.43c0-3.69,1.63-6.55,4.9-8.61c3.28-2.04,7.29-3.06,12.09-3.06h11.65v22.5
	c-1.09,0.26-2.8,0.56-5.1,0.82c-2.34,0.27-4.09,0.41-5.33,0.41C177.66,441.21,175.73,441.08,173.61,440.8"></path> <path d="M252.68,464.13c3.41,0.53,6.55,0.96,9.41,1.21c2.86,0.29,5.45,0.42,7.77,0.42c2.34,0,4.92-0.12,7.78-0.42
	c2.87-0.25,6.07-0.68,9.63-1.21v-76.71h30.26c0.69-2.74,1.12-5.3,1.34-7.67c0.19-2.39,0.29-4.67,0.29-6.86
	c0-2.18-0.1-4.43-0.29-6.77c-0.22-2.3-0.65-4.82-1.34-7.55H222.4c-0.68,2.73-1.13,5.25-1.33,7.55c-0.2,2.34-0.32,4.59-0.32,6.77
	c0,2.19,0.11,4.47,0.32,6.86c0.19,2.37,0.65,4.92,1.33,7.67h30.28V464.13z"></path> <path d="M411.23,422.39c0.27-1.89,0.59-4.33,0.92-7.25c0.35-2.94,0.51-6.25,0.51-9.93c0-7.09-1.05-13.66-3.16-19.73
	c-2.12-6.09-5.15-11.26-9.09-15.56c-3.97-4.3-8.78-7.67-14.43-10.11c-5.66-2.48-12.11-3.71-19.32-3.71c-8.73,0-16.37,1.49-22.93,4.4
	c-6.53,2.95-12,6.94-16.36,11.97c-4.38,5.06-7.63,10.99-9.82,17.79c-2.2,6.84-3.29,14.13-3.29,21.91c0,7.9,1.07,15.21,3.17,21.88
	c2.12,6.68,5.4,12.46,9.83,17.29c4.42,4.83,10.15,8.63,17.18,11.36c7.03,2.72,15.46,4.08,25.27,4.08c12.69,0,25.09-2.26,37.23-6.74
	c-0.14-5.33-0.92-10.47-2.35-15.36c-1.44-4.91-3.12-9.13-5.01-12.68c-4.77,1.89-9.62,3.34-14.53,4.3c-4.91,0.94-9.35,1.43-13.3,1.43
	c-6.13,0-11.08-1.16-14.83-3.47c-3.76-2.32-6.37-6.28-7.88-11.88H411.23z M376.96,386.91c2.66,3.21,4.13,7.19,4.4,11.96h-32.72
	c0.53-5.74,2.37-9.97,5.51-12.69c3.14-2.72,6.88-4.08,11.25-4.08C370.45,382.1,374.3,383.69,376.96,386.91"></path> <path class="st1" d="M528.97,266.4c-2.26-6.89-5.6-12.79-10.02-17.69c-4.43-4.91-9.93-8.71-16.48-11.36
	c-6.54-2.66-14.19-3.99-22.92-3.99c-8.58,0-16.16,1.33-22.7,3.99c-6.54,2.65-12.03,6.45-16.45,11.36
	c-4.46,4.9-7.79,10.79-10.02,17.69c-2.27,6.88-3.39,14.5-3.39,22.83c0,8.16,1.12,15.64,3.39,22.38c2.23,6.75,5.57,12.55,10.02,17.38
	c4.42,4.85,9.91,8.57,16.45,11.16c6.54,2.59,14.12,3.89,22.7,3.89c8.73,0,16.37-1.3,22.92-3.89c6.54-2.59,12.04-6.3,16.48-11.16
	c4.42-4.83,7.77-10.64,10.02-17.38c2.26-6.75,3.38-14.22,3.38-22.38C532.35,280.91,531.23,273.29,528.97,266.4 M492.97,309.06
	c-2.94,4.64-7.39,6.95-13.41,6.95c-6,0-10.42-2.31-13.3-6.95c-1.33-2.14-2.31-4.75-3.05-7.76c8.78,0.87,19.39-2.28,28.68-9.4
	c1.97-1.5,3.78-3.13,5.44-4.81c0.01,0.7,0.03,1.38,0.03,2.13C497.36,297.8,495.89,304.42,492.97,309.06"></path> <path class="st1" d="M343.21,266.4c-2.23-6.88-5.59-12.79-10.01-17.69c-4.44-4.91-9.94-8.7-16.48-11.36
	c-6.54-2.65-14.18-3.98-22.93-3.98c-8.58,0-16.16,1.33-22.71,3.98c-6.53,2.66-12.03,6.45-16.46,11.36
	c-4.43,4.9-7.77,10.81-10.02,17.69c-2.25,6.88-3.36,14.5-3.36,22.83c0,8.16,1.11,15.64,3.36,22.39c2.26,6.74,5.59,12.54,10.02,17.38
	c4.43,4.85,9.93,8.57,16.46,11.16c6.55,2.59,14.13,3.89,22.71,3.89c8.74,0,16.38-1.3,22.93-3.89c6.53-2.59,12.03-6.3,16.48-11.16
	c4.42-4.84,7.78-10.65,10.01-17.38c2.25-6.76,3.37-14.23,3.37-22.39C346.58,280.91,345.45,273.29,343.21,266.4 M293.79,316.02
	c-6,0-10.43-2.32-13.28-6.95c-2.88-4.64-4.31-11.27-4.31-19.84c0-0.84,0.02-1.61,0.06-2.38c4.09,4.41,9.52,8.28,16,11.04
	c6.07,2.6,12.21,3.86,17.93,3.95c-0.73,2.78-1.71,5.19-2.98,7.23C304.26,313.7,299.8,316.02,293.79,316.02"></path> <path class="st0" d="M533.88,396.77c0-16.45-13.15-31.05-31.85-31.05c-18.71,0-25.29,12.74-25.29,12.74l-0.2,0.23l-0.2-0.23
	c0,0-6.58-12.74-25.26-12.74c-18.72,0-31.89,14.59-31.89,31.05c0.01,30.96,50.99,62.44,56.97,66.05l0.16,0.35
	c0,0,0.1-0.07,0.23-0.15c0.14,0.08,0.2,0.15,0.2,0.15l0.16-0.35C482.89,459.21,533.88,427.72,533.88,396.77"></path> </svg>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/BrandLogo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://screwfast.uk");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const homeUrl = Astro2.currentLocale === "fr" ? "/fr" : "/";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = `*{transition: unset !important;}`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> ', ""], ["<!-- Main header component -->", '<header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"> <!-- Navigation container --> <nav class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto" aria-label="Global"> <div class="flex items-center justify-between"> <!-- Brand logo --> <a class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"', ' aria-label="Brand"> ', ' </a> <!-- Collapse toggle for smaller screens --> <div class="ml-auto mr-5 md:hidden"> <button type="button" class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" x2="21" y1="6" y2="6"></line> <line x1="3" x2="21" y1="12" y2="12"></line> <line x1="3" x2="21" y1="18" y2="18"></line> </svg> <svg class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg> </button> </div> <!-- ThemeIcon component specifically for smaller screens --> <span class="inline-block md:hidden"> ', ' </span> </div> <!-- Contains navigation links --> <div id="navbar-collapse-with-animation" class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"> <!-- Navigation links container --> <div class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"> <!-- Navigation links and Authentication component --> ', ' <!-- ThemeIcon component specifically for larger screens --> <span class="hidden md:inline-block"> ', ' </span> </div> </div> </nav> </header> <!-- Theme Appearance script to manage light/dark modes --> <script>\n  const HSThemeAppearance = {\n    init() {\n      const defaultTheme = "default";\n      let theme = localStorage.getItem("hs_theme") || defaultTheme;\n\n      if (document.querySelector("html").classList.contains("dark")) return;\n      this.setAppearance(theme);\n    },\n    _resetStylesOnLoad() {\n      const $resetStyles = document.createElement("style");\n      $resetStyles.innerText = \\`*{transition: unset !important;}\\`;\n      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");\n      document.head.appendChild($resetStyles);\n      return $resetStyles;\n    },\n    setAppearance(theme, saveInStore = true, dispatchEvent = true) {\n      const $resetStylesEl = this._resetStylesOnLoad();\n\n      if (saveInStore) {\n        localStorage.setItem("hs_theme", theme);\n      }\n\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n\n      document.querySelector("html").classList.remove("dark");\n      document.querySelector("html").classList.remove("default");\n      document.querySelector("html").classList.remove("auto");\n\n      document\n        .querySelector("html")\n        .classList.add(this.getOriginalAppearance());\n\n      setTimeout(() => {\n        $resetStylesEl.remove();\n      });\n\n      if (dispatchEvent) {\n        window.dispatchEvent(\n          new CustomEvent("on-hs-appearance-change", { detail: theme }),\n        );\n      }\n    },\n    getAppearance() {\n      let theme = this.getOriginalAppearance();\n      if (theme === "auto") {\n        theme = window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "default";\n      }\n      return theme;\n    },\n    getOriginalAppearance() {\n      const defaultTheme = "default";\n      return localStorage.getItem("hs_theme") || defaultTheme;\n    },\n  };\n  HSThemeAppearance.init();\n\n  window\n    .matchMedia("(prefers-color-scheme: dark)")\n    .addEventListener("change", () => {\n      if (HSThemeAppearance.getOriginalAppearance() === "auto") {\n        HSThemeAppearance.setAppearance("auto", false);\n      }\n    });\n\n  window.addEventListener("load", () => {\n    const $clickableThemes = document.querySelectorAll(\n      "[data-hs-theme-click-value]",\n    );\n    const $switchableThemes = document.querySelectorAll(\n      "[data-hs-theme-switch]",\n    );\n\n    $clickableThemes.forEach(($item) => {\n      $item.addEventListener("click", () =>\n        HSThemeAppearance.setAppearance(\n          $item.getAttribute("data-hs-theme-click-value"),\n          true,\n          $item,\n        ),\n      );\n    });\n\n    $switchableThemes.forEach(($item) => {\n      $item.addEventListener("change", (e) => {\n        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");\n      });\n\n      $item.checked = HSThemeAppearance.getAppearance() === "dark";\n    });\n\n    window.addEventListener("on-hs-appearance-change", (e) => {\n      $switchableThemes.forEach(($item) => {\n        $item.checked = e.detail === "dark";\n      });\n    });\n  });\n<\/script> <!--Import the necessary Collapse and Overlay plugins--> <!--https://preline.co/plugins/html/collapse.html--> <!--https://preline.co/plugins/html/overlay.html--> ', ""])), maybeRenderHead(), addAttribute(homeUrl, "href"), renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-24" }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), strings.navBarLinks.map((link) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "url": link.url, "name": link.name })}`), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/navbar&footer/Navbar.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/navbar&footer/Navbar.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/links/FooterSocialLink.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$EmailFooterInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = Astro2.currentLocale === "fr" ? "S'abonner" : "Subscribe",
    id = "footer-input"
  } = Astro2.props;
  const placeholder = Astro2.currentLocale === "fr" ? "Entrez votre email" : "Enter your email";
  return renderTemplate`${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <div class="w-full"> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-primary-400 focus:ring-primary-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300"${addAttribute(placeholder, "placeholder")}> </div> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-primary-400 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-primary-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/forms/input/EmailFooterInput.astro", void 0);

const Icons = {
  heart: {
    paths: [
      {
        d: "M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-primary-400 dark:fill-primary-300",
    width: 48,
    height: 48,
    viewBox: "0 0 24 24"
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-primary-400 dark:fill-primary-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-primary-400 dark:fill-primary-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z"
      }
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-primary-400 dark:fill-primary-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960"
  },
  latteLove: {
    paths: [
      {
        d: "M480.925,279.697c-11.272-12.285-32.272-9.672-46.316,0.716c-12.834,10.695-100.573,68.357-100.573,68.357 H227.397l-0.336,0.168c-5.617-0.186-10.006-4.902-9.84-10.509c0.205-5.618,4.93-10.017,10.51-9.822l-0.335-0.195 c19.065,0,78.569,0,78.569,0c15.773,0,28.571-12.779,28.571-28.542c0-15.792-12.798-28.58-28.571-28.58 c-14.285,0-42.838,0-114.246,0c-71.427,0-94.045,29.771-119.044,54.751l-45.348,39.62c-2.958,2.567-4.65,6.259-4.65,10.184V507.51 c0,1.739,1.042,3.348,2.641,4.083c1.6,0.726,3.479,0.474,4.818-0.688l87.646-75.147c3.088-2.623,7.217-3.739,11.198-3.023 l136.604,24.832c9.523,1.73,19.326-0.455,27.268-6.044c0,0,174.326-121.23,187.216-131.954 C492.327,308.315,492.197,291.983,480.925,279.697z"
      },
      {
        d: "M216.627,218.333c21.521,14.742,48.604,25.548,48.604,25.548c2.492,0.81,6.343,1.516,7.682,1.516 c1.321,0,5.171-0.706,7.664-1.516c0,0,27.064-10.806,48.603-25.548c32.774-22.34,85.935-66.191,85.935-128.01 c0-62.703-35.472-91.116-74.495-90.306c-29.761,0.539-47.339,18.126-59.132,35.462c-2.158,3.218-5.376,5.273-8.575,5.357 c-3.218-0.084-6.436-2.139-8.575-5.357c-11.793-17.336-29.389-34.923-59.15-35.462c-39.043-0.81-74.477,27.603-74.477,90.306 C130.711,152.142,183.852,195.994,216.627,218.333z M187.368,39.282c2.994-3.673,6.733-6.788,11.011-9.384 c4.223-2.548,9.71-1.2,12.258,3.023c2.568,4.222,1.209,9.719-3.014,12.258c-2.808,1.711-4.873,3.497-6.399,5.384 c-3.106,3.832-8.742,4.399-12.574,1.284C184.838,48.732,184.262,43.115,187.368,39.282z M166.442,96.192 c0-5.97,0.614-11.513,1.934-16.61c1.246-4.781,6.139-7.636,10.901-6.38c4.78,1.237,7.625,6.12,6.398,10.89 c-0.874,3.311-1.376,7.347-1.376,12.1c0,4.706,0.484,10.119,1.506,16.183c1.637,9.71,5.767,18.731,11.811,27.203 c2.865,4.008,1.935,9.588-2.083,12.453c-4.036,2.864-9.598,1.934-12.462-2.083c-7.31-10.203-12.723-21.791-14.881-34.597 C167.037,108.488,166.442,102.126,166.442,96.192z"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-primary-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 0 512 512"
  },
  latteFriends: {
    paths: [
      {
        d: "M389 40.84c18.5 0 35 18.79 35 44.03c0 25.33-16.5 44.03-35 44.03s-35-18.7-35-44.03c0-25.24 16.5-44.03 35-44.03m-132.9 0c18.4 0 35 18.79 35 44.03c0 25.33-16.6 44.03-35 44.03c-18.5 0-35.1-18.7-35.1-44.03c0-25.24 16.6-44.03 35.1-44.03m-133 0c18.5 0 35 18.79 35 44.03c0 25.33-16.5 44.03-35 44.03s-35.09-18.7-35.09-44.03c0-25.24 16.59-44.03 35.09-44.03m133 109.06c64 2 118 2 182.8 4.2c30.9 17.8 45.2 109 44.3 140.7l-17.6 17.7c-7.7-42.8-17.4-99.9-33.5-112.6v87.6l4.1 183.7H414l-16.7-184.7h-18l-16.7 184.7h-22.3l4.2-183.7l-8-88.5h-29.3l-7.2 88.2l4.2 183.7h-22.3l-16.8-184.7h-18l-16.8 184.7h-22.2l4.2-183.7L205 199h-29.3l-8 88.5l4.2 183.7h-22.3l-16.7-184.7h-18L98.01 471.2h-22.2l4.2-183.7v-87.6c-16.2 12.7-25.9 69.8-33.6 112.6l-17.6-17.7c-.9-31.7 13.5-122.9 44.3-140.7c64.99-2.2 118.99-2.2 182.99-4.2"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-primary-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 0 512 512"
  },
  latteCumpleaños: {
    paths: [
      {
        d: "m16 1.25l-.813 1.188s-.539.753-1.062 1.656c-.262.453-.508.926-.719 1.406c-.21.48-.406.922-.406 1.5c0 1.645 1.355 3 3 3s3-1.355 3-3c0-.578-.195-1.02-.406-1.5c-.211-.48-.457-.953-.719-1.406c-.523-.903-1.063-1.657-1.063-1.657zM16 10h-3v4H7c-2.21 0-4 1.79-4 4a4 4 0 0 0 1 2.656V28h24v-7.344A4 4 0 0 0 29 18c0-2.21-1.79-4-4-4h-6v-4zm0-5.125c.066.11.059.102.125.219c.238.41.492.847.656 1.218c.164.372.219.715.219.688c0 .555-.445 1-1 1c-.555 0-1-.445-1-1c0 .027.055-.316.219-.688c.164-.37.418-.808.656-1.218c.066-.117.059-.11.125-.219M15 12h2v2h-2zm-8 4h18c1.191 0 2 .809 2 2c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2h-2c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2h-2c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2H9c0 1.191-.809 2-2 2c-1.191 0-2-.809-2-2c0-1.191.809-2 2-2m3 4.656A3.99 3.99 0 0 0 13 22a3.99 3.99 0 0 0 3-1.344A3.99 3.99 0 0 0 19 22a3.99 3.99 0 0 0 3-1.344A3.99 3.99 0 0 0 25 22c.348 0 .68-.074 1-.156V26H6v-4.156c.32.082.652.156 1 .156a3.99 3.99 0 0 0 3-1.344"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-primary-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 32 32"
  },
  latteFestividades: {
    paths: [
      {
        d: "M18 8.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.91 3.91 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31c-.07.08-.15.13-.22.2c-3-2.41-6.29-3.77-7.9-2.16a2.16 2.16 0 0 0-.41.59v.1l-.18.53l-4.41 13.1A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17L20 17.28a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9V7a8.44 8.44 0 0 0-5 1.31M5.7 19.93a1.29 1.29 0 0 1-1.63-1.63l1.36-4.1a10.7 10.7 0 0 0 4.29 4.39zm7-2.33a8.87 8.87 0 0 1-6.3-6.29l1-3l.06.09c.11.22.25.45.39.68s.16.29.26.44s.33.48.51.73s.19.28.3.42s.43.55.66.82l.29.35c.34.39.7.77 1.08 1.16s.68.64 1 1l.33.28l.78.63l.37.28c.28.2.55.4.83.58l.31.2c.36.22.72.43 1.07.61h.05zm6.51-2.23h-.06c-.69.38-3.56-.57-6.79-3.81c-.34-.34-.66-.67-.95-1l-.29-.35l-.53-.64l-.29-.4c-.13-.19-.27-.37-.39-.55l-.26-.42l-.29-.47c-.08-.14-.14-.27-.21-.4s-.15-.26-.21-.4a3.31 3.31 0 0 1-.14-.36c-.05-.13-.11-.26-.15-.38S8.6 6 8.57 5.88s-.05-.22-.07-.32a2.26 2.26 0 0 1 0-.26a1 1 0 0 1 0-.24l.11-.31c.36-.36 2.23 0 4.73 1.9A4.13 4.13 0 0 1 12 7v2a6.45 6.45 0 0 0 3-.94l.48.46c.42.42.81.85 1.18 1.28a5.32 5.32 0 0 0-.6 3.4l2-.39a3.57 3.57 0 0 1 0-1.12a11.3 11.3 0 0 1 .81 1.45c.56 1.32.52 2.06.34 2.23"
      }
    ],
    class: "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-primary-400 dark:fill-neutral-300 dark:hs-tab-active:fill-primary-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7"
      },
      {
        d: "M12 19V5"
      }
    ],
    class: "h-5 w-5 flex-shrink-0 text-primary-400 dark:text-primary-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      }
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class: "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400"
      }
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      }
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      }
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  github: {
    paths: [
      {
        d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      }
    ],
    class: "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6"
      }
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      }
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6"
      }
    ],
    class: "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6"
      }
    ],
    class: "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  xFooter: {
    paths: [
      {
        d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Instagram"
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook"
  },
  githubFooter: {
    paths: [
      {
        d: "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub"
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google"
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      }
    ],
    class: "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack"
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
      }
    ],
    class: "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor"
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
      }
    ],
    class: "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
      }
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      }
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
      }
    ],
    class: "ms-2 size-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor"
  }
};

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  let icon = Icons[name] || {};
  let paths = icon.paths || [];
  return renderTemplate`${icon ? renderTemplate`${maybeRenderHead()}<svg${addAttribute(icon.class, "class")}${addAttribute(icon.height, "height")}${addAttribute(icon.viewBox, "viewBox")}${addAttribute(icon.width, "width")}${addAttribute(icon.fill, "fill")}${addAttribute(icon.clipRule, "clip-rule")}${addAttribute(icon.fillRule, "fill-rule")}${addAttribute(icon.stroke, "stroke")}${addAttribute(icon.strokeWidth, "stroke-width")}${addAttribute(icon.strokeLinecap, "stroke-linecap")}${addAttribute(icon.strokeLinejoin, "stroke-linejoin")}><title>${icon.title}</title>${paths.map((path) => renderTemplate`<path${addAttribute(path.d, "d")}${addAttribute(path.class || "", "class")}></path>`)}</svg>` : "Icon not found"}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/ui/icons/Icon.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSection;
  const strings = Astro2.currentLocale === "fr" ? frStrings : enStrings;
  const sectionThreeTitle = "Suscribite a nuestras ofertas";
  const sectionThreeContent = "A\xF1adiendo tu email podras enterarte de las nuevas novedades de la marca, productos, ofertas y m\xE1s.";
  const crafted = "creado por equipo de redes";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> <!-- Brand Logo --> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "class": "h-auto w-32" })} </div> <!-- An array of links for Product and Company sections --> ${strings.footerLinks.map((section) => renderTemplate`<div class="col-span-1"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${section.section} </h3> <ul class="mt-3 grid space-y-3"> ${section.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.url, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"> ${link.name} </a> ${section.section === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-primary-500 px-2 py-1 text-xs font-bold text-neutral-50">
We're hiring!
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-bold text-neutral-800 dark:text-neutral-200"> ${sectionThreeTitle} </h3> <form> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> ${SITE.title}. ${crafted} <a class="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300" href="https://sobstvennoai.dev" target="_blank" rel="noopener noreferrer"></a>.
</p> </div> <!-- Social Brands --> <div> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.facebook }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "facebookFooter" })} ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.x }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xFooter" })}` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": strings.socialLinks.github }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "githubFooter" })} ` })} </div> </div> ${renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/navbar&footer/FooterSection.astro?astro&type=script&index=0&lang.ts")} </div> </footer>`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/components/sections/navbar&footer/FooterSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = SITE.title, meta, structuredData, lang = "es" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!--\nThis is the main structure for the page.\nWe set the language of the page to English and add classes for scrollbar and scroll behavior.\n--><html", ' class="scrollbar-hide lenis lenis-smooth scroll-pt-16 astro-ouamjn2i"> <head><!-- Adding metadata to the HTML document -->', "<!-- Define the title of the page --><title>", '</title><script>\n      // Script to handle dark mode. It will check if the theme is stored in localStorage or if dark theme is preferred by system settings\n      if (\n        localStorage.getItem("hs_theme") === "dark" ||\n        (!("hs_theme" in localStorage) &&\n          window.matchMedia("(prefers-color-scheme: dark)").matches)\n      ) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', "", '</head> <body class="bg-neutral-200 selection:bg-primary-100 selection:text-neutral-700 dark:bg-neutral-800 astro-ouamjn2i"> <!--\n    Setting up the main structure of the page.\n    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.\n    --> <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 astro-ouamjn2i"> ', ' <main class="astro-ouamjn2i"> ', " </main> </div> ", "  </body> </html>"])), addAttribute(lang, "lang"), renderComponent($$result, "Meta", $$Meta, { "meta": meta, "structuredData": structuredData, "class": "astro-ouamjn2i" }), title, renderScript($$result, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-ouamjn2i" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FooterSection", $$FooterSection, { "class": "astro-ouamjn2i" }));
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/layouts/MainLayout.astro", void 0);

export { $$Icon as $, $$MainLayout as a };

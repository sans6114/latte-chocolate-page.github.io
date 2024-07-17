import ogImageSrc from '@images/social.png';

export const SITE = {
  title: "Latte chocolate",
  tagline: "Chocolates y alfajores ideales para regalar y disfrutar",
  description: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos. Encuentra el regalo perfecto o disfruta de momentos dulces con nuestros productos. ¡Explora nuestro catálogo y déjate tentar!",
  description_short: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos.",
  url: "https://screwfast.uk",
  author: "Santiago Sosa",
};

export const SEO = {
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
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : hocolates y alfajores ideales para regalar y disfrutar`,
  description: "Descubre Latte Chocolate, tu destino para chocolates y alfajores únicos. Encuentra el regalo perfecto o disfruta de momentos dulces con nuestros productos. ¡Explora nuestro catálogo y déjate tentar!",
  image: ogImageSrc,
};

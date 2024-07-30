// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Nosotros", url: "/nosotros" },
  { name: "Products", url: "/products" },
  { name: "Tienda", url: "/tienda" },
  { name: "Emprender", url: "/emprender" },
  { name: "Distribuir", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Navegación",
    links: [
      { name: "Inicio", url: "/" },
      { name: "Nosotros", url: "/nosotros" },
      { name: "Productos", url: "/products" },
      { name: "Tienda", url: "/tienda" },
      { name: "Emprender", url: "/emprender" },
      { name: "Distribuir", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/p/Latte-Chocolate-100063782032795/?locale=es_LA",
  x: "https://www.instagram.com/latteechocolate/?hl=es",
  github: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
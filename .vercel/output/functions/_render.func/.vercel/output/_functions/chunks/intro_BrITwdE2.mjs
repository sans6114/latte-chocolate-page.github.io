import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducción a los Servicios de ScrewFast",
  "description": "Explora la documentación completa de ScrewFast para obtener una visión detallada de nuestras herramientas premium y servicios de construcción.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "visión-general-de-los-servicios",
    "text": "Visión general de los Servicios"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Como parte de nuestro compromiso de proporcionar una solución integral para todas sus necesidades de construcción y hardware, en ScrewFast nos enorgullecemos de ofrecer una amplia gama de servicios profesionales. Desde consultas iniciales hasta inspecciones finales, nuestros servicios multifacéticos abarcan la totalidad de su proyecto, garantizando resultados de calidad y satisfacción del cliente. Esta sección de la documentación le guiará a través de todo lo que necesita saber para aprovechar al máximo nuestra experiencia.</p>\n<h2 id=\"visión-general-de-los-servicios\">Visión general de los Servicios</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Soluciones Personalizadas",
        "set:html": "<p>Cada proyecto de construcción conlleva sus desafíos y demandas únicas. En ScrewFast, personalizamos nuestros servicios para satisfacer sus necesidades específicas, asegurando que, independientemente de la escala o complejidad de su proyecto, nuestro equipo esté equipado para manejarlo con precisión y profesionalismo.</p>"
      }), createVNode($$TabItem, {
        label: "Equipo Experto",
        "set:html": "<p>Aproveche las habilidades de nuestro personal experimentado, desde arquitectos e ingenieros hasta obreros calificados, cada uno contribuyendo con su experiencia para dar vida a su visión.</p>"
      }), createVNode($$TabItem, {
        label: "Compromiso con la Calidad",
        "set:html": "<p>La calidad está en el corazón de todo lo que hacemos. Implementamos rigurosas medidas de control de calidad para asegurar que el trabajo que entregamos cumpla y supere los estándares de la industria.</p>"
      }), createVNode($$TabItem, {
        label: "Soporte Continuo",
        "set:html": "<p>Nuestra relación con nuestros clientes no termina una vez que se completa el proyecto. Brindamos apoyo continuo para abordar cualquier problema y garantizar una satisfacción duradera con su inversión.</p>"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/es/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/es/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/es/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

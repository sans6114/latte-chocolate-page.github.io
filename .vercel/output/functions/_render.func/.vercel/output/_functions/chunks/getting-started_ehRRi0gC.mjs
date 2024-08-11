import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comenzar",
  "description": "Explora la documentación completa de ScrewFast para obtener una visión detallada de nuestras herramientas premium y servicios de construcción.",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "descripción-general-de-las-herramientas",
    "text": "Descripción General de las Herramientas"
  }, {
    "depth": 2,
    "slug": "instrucciones-de-configuración",
    "text": "Instrucciones de Configuración"
  }, {
    "depth": 2,
    "slug": "limpieza-y-mantenimiento",
    "text": "Limpieza y Mantenimiento"
  }, {
    "depth": 2,
    "slug": "recursos-adicionales",
    "text": "Recursos Adicionales"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>¡Bienvenido a ScrewFast Docs! Estamos emocionados de ayudarte a comenzar con nuestras herramientas premium. Esta guía está diseñada para presentarte nuestra gama de herramientas, ayudarte a comprender los conceptos básicos y ponerte al día para tu primer proyecto. ¡Sumérgete en el mundo de la artesanía de alta calidad y confiabilidad con ScrewFast!</p>\n<h2 id=\"descripción-general-de-las-herramientas\">Descripción General de las Herramientas</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Juego de Destornilladores",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "Versátiles y ergonómicos, adecuados para todo tipo de tornillos."
        }), createVNode($$LinkCard, {
          title: "Aprende más",
          href: "/es/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Taladro Percutor",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "Rendimiento potente para perforación y conducción de impacto."
        }), createVNode($$LinkCard, {
          title: "Aprende más",
          href: "/es/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Sierras Eléctricas",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "Corte preciso con ajustes ajustables para varios materiales."
        }), createVNode($$LinkCard, {
          title: "Aprende más",
          href: "/es/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"instrucciones-de-configuración\">Instrucciones de Configuración</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Icono de Desempaque Desempaqueta tus Herramientas ScrewFast\nAbre cuidadosamente el empaque y verifica que todas las piezas estén presentes. Familiarízate con la herramienta y cualquier accesorio.</p>\n</li>\n<li>\n<p>Icono de Verificación de Seguridad Configuración Inicial y Verificaciones de Seguridad\nLee el manual de seguridad antes de manipular la herramienta. Verifica la herramienta en busca de cualquier daño durante el envío y asegúrate de que los protectores de seguridad estén en su lugar.</p>\n</li>\n<li>\n<p>Icono de Calibración Calibración y Preparación para el Primer Uso\nSigue las instrucciones del fabricante para calibrar tus herramientas según sea necesario. Asegúrate de que las baterías estén cargadas o que las conexiones eléctricas estén seguras.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"limpieza-y-mantenimiento\">Limpieza y Mantenimiento</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Siempre desconecta las herramientas antes de limpiarlas. Usa un paño suave y seco para limpiar el exterior y guárdalas en un lugar seco.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>El mantenimiento regular garantiza longevidad y seguridad. Limpia tus herramientas después de cada uso, verifica el desgaste y lubrica las piezas móviles según lo especificado en el manual de la herramienta.</p>\n<h2 id=\"recursos-adicionales\">Recursos Adicionales</h2>\n"
    }), createVNode($$LinkCard, {
      title: "Tutoriales Detallados",
      description: "Sumérgete en el uso de nuestras herramientas con tutoriales dirigidos por expertos.",
      href: "/es/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Demostraciones en Video",
      description: "Guías visuales para sacar el máximo provecho de tus herramientas.",
      href: "/es/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Información de Garantía",
      description: "Comprende tu cobertura y cómo hacer una reclamación si es necesario.",
      href: "/es/guides/getting-started"
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

const url = "src/content/docs/es/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/es/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/es/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

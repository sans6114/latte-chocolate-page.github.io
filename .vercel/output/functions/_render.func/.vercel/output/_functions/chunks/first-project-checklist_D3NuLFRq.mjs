import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, i as $$Steps, j as $$LinkCard } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Erste Projekt-Checkliste",
  "description": "Entdecken Sie die umfassende Dokumentation von ScrewFast für einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "projektvorbereitung",
    "text": "Projektvorbereitung"
  }, {
    "depth": 2,
    "slug": "projektumsetzung",
    "text": "Projektumsetzung"
  }, {
    "depth": 3,
    "slug": "erste-phase",
    "text": "Erste Phase"
  }, {
    "depth": 2,
    "slug": "zusätzliche-ressourcen",
    "text": "Zusätzliche Ressourcen"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Den Beginn eines neuen Projekts anzugehen kann gleichermaßen aufregend und herausfordernd sein. Mit der richtigen Vorbereitung und Anleitung ist Ihr Vorhaben auf Erfolgskurs. Die ScrewFast First Project Checklist wurde entwickelt, um einen klaren und strukturierten Ansatz zu bieten und sicherzustellen, dass Sie bei jedem Schritt des Weges gut vorbereitet sind.</p>\n<h2 id=\"projektvorbereitung\">Projektvorbereitung</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Umfang und Ziele",
        "set:html": "<ul>\n<li>Stellen Sie sicher, dass der Umfang des Projekts, die Liefergegenstände und die angestrebten Ergebnisse klar definiert sind.</li>\n<li>Legen Sie klare Ziele und Erfolgskriterien für den Abschluss des Projekts fest.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Werkzeuge und Ausrüstung",
        "set:html": "<ul>\n<li>Erstellen Sie eine Liste aller benötigten ScrewFast Werkzeuge und Ausrüstungen.</li>\n<li>Überprüfen Sie die Verfügbarkeit und den Zustand des Inventars vor Beginn.</li>\n</ul>"
      }), createVNode($$Card, {
        title: "Dienstleistungen arrangieren",
        "set:html": "<ul>\n<li>Wenn zusätzliche Expertise oder Arbeitskräfte benötigt werden, vereinbaren Sie rechtzeitig ScrewFast Bauarbeiten.</li>\n<li>Klären Sie Service Level Agreements und Zeitpläne mit Ihrem ScrewFast Vertreter.</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"projektumsetzung\">Projektumsetzung</h2>\n<h3 id=\"erste-phase\">Erste Phase</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Richten Sie den Projektstandort gemäß den ScrewFast Einrichtungsrichtlinien ein.</p>\n</li>\n<li>\n<p>Führen Sie ein erstes Teammeeting durch, um sich auf die Projektziele und ScrewFast Methodologien abzustimmen.</p>\n</li>\n<li>\n<p>Legen Sie Projektprüfpunkte und Meilensteine für regelmäßige Bewertungen fest.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"zusätzliche-ressourcen\">Zusätzliche Ressourcen</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Ausführliche Anleitungen",
        description: "Greifen Sie auf umfangreiche Dokumentationen und Benutzerhandbücher für ScrewFast Werkzeuge und Dienstleistungen zu.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Support-Kontakte",
        description: "Halten Sie die Kontaktdaten für den ScrewFast Support bereit, der Ihnen während Ihres Projekts zur Verfügung steht.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Fortgeschrittenes Lernen",
        description: "Erkunden Sie weitere Bildungsressourcen von ScrewFast, um Ihre Fähigkeiten und Ihr Wissensniveau zu verfeinern.",
        href: "de/guides/getting-started"
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

const url = "src/content/docs/de/guides/first-project-checklist.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/de/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/de/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

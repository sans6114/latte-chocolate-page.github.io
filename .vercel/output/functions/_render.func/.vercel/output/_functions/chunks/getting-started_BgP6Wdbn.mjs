import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Erste Schritte",
  "description": "Entdecken Sie die umfassende Dokumentation von ScrewFast für einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "übersicht-über-die-werkzeuge",
    "text": "Übersicht über die Werkzeuge"
  }, {
    "depth": 2,
    "slug": "einrichtungsanweisungen",
    "text": "Einrichtungsanweisungen"
  }, {
    "depth": 2,
    "slug": "reinigung-und-wartung",
    "text": "Reinigung und Wartung"
  }, {
    "depth": 2,
    "slug": "zusätzliche-ressourcen",
    "text": "Zusätzliche Ressourcen"
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
      "set:html": "<p>Willkommen bei ScrewFast Docs! Wir freuen uns, Ihnen den Einstieg mit unseren erstklassigen Werkzeugen zu erleichtern. Dieser Leitfaden soll Ihnen einen Überblick über unser Werkzeugsortiment verschaffen, Ihnen die Grundlagen vermitteln und Sie für Ihr erstes Projekt fit machen. Tauchen wir gleich ein in die Welt hochwertiger und zuverlässiger Handwerkskunst mit ScrewFast.</p>\n<h2 id=\"übersicht-über-die-werkzeuge\">Übersicht über die Werkzeuge</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Schraubendreher-Set",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "Vielseitig und ergonomisch, geeignet für alle Schraubentypen."
        }), createVNode($$LinkCard, {
          title: "Mehr erfahren",
          href: "de/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Schlagbohrmaschine",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "Leistungsstark für Bohr- und Schlagbohranwendungen."
        }), createVNode($$LinkCard, {
          title: "Mehr erfahren",
          href: "de/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Elektrosägen",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "Präzises Schneiden mit einstellbaren Einstellungen für verschiedene Materialien."
        }), createVNode($$LinkCard, {
          title: "Mehr erfahren",
          href: "de/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"einrichtungsanweisungen\">Einrichtungsanweisungen</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Auspacken Icon Ihre ScrewFast Werkzeuge auspacken<br>\nÖffnen Sie die Verpackung vorsichtig und überprüfen Sie, ob alle Komponenten vorhanden sind. Machen Sie sich mit dem Werkzeug und etwaigen Zubehörteilen vertraut.</p>\n</li>\n<li>\n<p>Sicherheitsüberprüfung Icon Erste Einrichtung und Sicherheitsüberprüfungen<br>\nLesen Sie das Sicherheitshandbuch, bevor Sie das Werkzeug verwenden. Überprüfen Sie das Werkzeug auf Transportschäden und stellen Sie sicher, dass Sicherheitsvorrichtungen vorhanden sind.</p>\n</li>\n<li>\n<p>Kalibrierung Icon Kalibrierung und Vorbereitung für die erste Verwendung\nBefolgen Sie die Anweisungen des Herstellers, um Ihre Werkzeuge bei Bedarf zu kalibrieren. Stellen Sie sicher, dass die Batterien geladen sind oder die elektrischen Anschlüsse sicher sind.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"reinigung-und-wartung\">Reinigung und Wartung</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Trennen Sie Werkzeuge immer vom Stromnetz, bevor Sie sie reinigen. Verwenden Sie ein weiches, trockenes Tuch, um die\nAußenseite abzuwischen und lagern Sie sie an einem trockenen Ort.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Regelmäßige Wartung gewährleistet Langlebigkeit und Sicherheit. Reinigen Sie Ihre Werkzeuge nach jedem Gebrauch, überprüfen Sie auf Abnutzung und schmieren Sie bewegliche Teile gemäß dem Handbuch des Werkzeugs.</p>\n<h2 id=\"zusätzliche-ressourcen\">Zusätzliche Ressourcen</h2>\n"
    }), createVNode($$LinkCard, {
      title: "Ausführliche Tutorials",
      description: "Tauchen Sie mit Experten-Tutorials tief in die Verwendung unserer Werkzeuge ein.",
      href: "de/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Video-Demos",
      description: "Visuelle Anleitungen, um das Beste aus Ihren Werkzeugen herauszuholen.",
      href: "de/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Garantieinformationen",
      description: "Verstehen Sie Ihre Deckung und wie Sie im Bedarfsfall einen Anspruch geltend machen können.",
      href: "de/guides/getting-started"
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

const url = "src/content/docs/de/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/de/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/de/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Démarrage",
  "description": "Explorez la documentation complète de ScrewFast pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "aperçu-des-outils",
    "text": "Aperçu des outils"
  }, {
    "depth": 2,
    "slug": "instructions-de-configuration",
    "text": "Instructions de configuration"
  }, {
    "depth": 2,
    "slug": "nettoyage-et-entretien",
    "text": "Nettoyage et Entretien"
  }, {
    "depth": 2,
    "slug": "ressources-supplémentaires",
    "text": "Ressources supplémentaires"
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
      "set:html": "<p>Bienvenue dans les Docs ScrewFast ! Nous sommes ravis de vous aider à démarrer avec nos outils haut de gamme. Ce guide est conçu pour vous présenter notre gamme d’outils, vous aider à comprendre les bases et vous préparer pour votre premier projet. Plongeons directement dans le monde de l’artisanat fiable et de haute qualité avec ScrewFast.</p>\n<h2 id=\"aperçu-des-outils\">Aperçu des outils</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Ensemble de tournevis",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "Polyvalent et ergonomique, adapté à tous les types de vis."
        }), createVNode($$LinkCard, {
          title: "En savoir plus ",
          href: "fr/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Perceuse à percussion",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "Performances puissantes pour le perçage et l’impact."
        }), createVNode($$LinkCard, {
          title: "En savoir plus ",
          href: "fr/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Scies électriques",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "Découpe précise avec des réglages ajustables pour divers matériaux."
        }), createVNode($$LinkCard, {
          title: "En savoir plus ",
          href: "fr/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"instructions-de-configuration\">Instructions de configuration</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Icône de déballage Déballez vos outils ScrewFast\nOuvrez soigneusement l’emballage et vérifiez que tous les composants sont présents. Familiarisez-vous avec l’outil et ses accessoires éventuels.</p>\n</li>\n<li>\n<p>Icône de vérification de sécurité Configuration initiale et vérifications de sécurité\nLisez le manuel de sécurité avant de manipuler l’outil. Vérifiez l’outil pour tout dommage dû à l’expédition et assurez-vous que les dispositifs de sécurité sont en place.</p>\n</li>\n<li>\n<p>Icône de calibrage Calibrage et préparation pour la première utilisation\nSuivez les instructions du fabricant pour calibrer vos outils si nécessaire. Assurez-vous que les batteries sont chargées ou que les connexions électriques sont sécurisées.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"nettoyage-et-entretien\">Nettoyage et Entretien</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Débranchez toujours les outils avant de les nettoyer. Utilisez un chiffon doux et sec pour essuyer l’extérieur et rangez-les dans un endroit sec.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Un entretien régulier assure la longévité et la sécurité. Nettoyez vos outils après chaque utilisation, vérifiez l’usure et lubrifiez les pièces mobiles comme spécifié dans le manuel de l’outil.</p>\n<h2 id=\"ressources-supplémentaires\">Ressources supplémentaires</h2>\n"
    }), createVNode($$LinkCard, {
      title: "Tutoriels approfondis",
      description: "Approfondissez l'utilisation de nos outils avec des tutoriels animés par des experts.",
      href: "fr/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Démos vidéo",
      description: "Guides visuels pour tirer le meilleur parti de vos outils.",
      href: "fr/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Informations sur la garantie",
      description: "Comprenez votre couverture et comment faire une réclamation si nécessaire.",
      href: "fr/guides/getting-started"
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

const url = "src/content/docs/fr/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction aux Services ScrewFast",
  "description": "Explorez la documentation complète de ScrewFast pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "aperçu-des-services",
    "text": "Aperçu des Services"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Dans le cadre de notre engagement à fournir une solution de bout en bout pour tous vos besoins en construction et matériel, nous, chez ScrewFast, sommes fiers de proposer une suite complète de services professionnels. Des consultations initiales aux inspections finales, nos services polyvalents englobent l’intégralité de votre projet, garantissant des résultats de qualité et la satisfaction du client. Cette section de la documentation vous guidera à travers tout ce que vous devez savoir pour exploiter pleinement notre expertise.</p>\n<h2 id=\"aperçu-des-services\">Aperçu des Services</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Solutions sur Mesure",
        "set:html": "<p>Chaque projet de construction comporte ses propres défis et exigences. Chez ScrewFast, nous personnalisons nos services pour correspondre à vos besoins spécifiques, garantissant que, quelle que soit l’échelle ou la complexité de votre projet, notre équipe est équipée pour le gérer avec précision et professionnalisme.</p>"
      }), createVNode($$TabItem, {
        label: "Équipe d'Experts",
        "set:html": "<p>Tire parti des compétences de notre personnel qualifié, des architectes et ingénieurs aux ouvriers qualifiés, chacun contribuant à apporter leur expertise pour donner vie à votre vision.</p>"
      }), createVNode($$TabItem, {
        label: "Engagement envers la Qualité",
        "set:html": "<p>La qualité est au cœur de tout ce que nous faisons. Nous mettons en œuvre des mesures rigoureuses de contrôle de qualité pour garantir que le travail que nous livrons répond et dépasse les normes de l’industrie.</p>"
      }), createVNode($$TabItem, {
        label: "Support Continu",
        "set:html": "<p>Notre relation avec nos clients ne se termine pas une fois le projet terminé. Nous fournissons un support continu pour résoudre tout problème et garantir une satisfaction durable avec votre investissement.</p>"
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

const url = "src/content/docs/fr/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

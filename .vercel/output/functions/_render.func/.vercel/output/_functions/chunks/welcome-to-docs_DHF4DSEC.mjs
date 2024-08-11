import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
/* empty css                                  */
import { h as $$Card, g as $$CardGrid } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Hub de Documentation",
    "tagline": "Votre centre central pour l'orientation simplifiée des outils, les documents de service détaillés et le soutien aux projets.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fr/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "link": "https://github.com/mearashadowfax/ScrewFast"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Guides de Démarrage Rapide",
      icon: "document",
      "set:html": "<p>Mettez-vous en route rapidement avec nos guides clairs et concis, adaptés aux nouveaux utilisateurs et aux experts chevronnés.</p>"
    }), createVNode($$Card, {
      title: "Outils et Équipements",
      icon: "seti:eslint",
      "set:html": "<p>Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance.</p>"
    }), createVNode($$Card, {
      title: "Services de Construction",
      icon: "seti:puppet",
      "set:html": "<p>Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance.</p>"
    }), createVNode($$Card, {
      title: "Sujets Avancés",
      icon: "seti:terraform",
      "set:html": "<p>Découvrez la gamme complète d’outils et d’équipements de qualité supérieure de ScrewFast. Chaque sous-section offre des spécifications détaillées, des instructions d’utilisation et des conseils de maintenance.</p>"
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
  }) : _createMdxContent();
}
const url = "src/content/docs/fr/welcome-to-docs.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fr/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

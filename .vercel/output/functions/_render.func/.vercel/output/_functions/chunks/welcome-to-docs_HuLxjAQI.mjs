import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
/* empty css                                  */
import { h as $$Card, g as $$CardGrid } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast Docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast Docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Documentation Hub",
    "tagline": "Your central hub for streamlined tool guidance, detailed service docs, and project support.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../images/starlight/screwfast_hero.svg",
      "light": "../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/guides/getting-started/"
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
      title: "Quick Start Guides",
      icon: "document",
      "set:html": "<p>Get up and running swiftly with our straightforward and concise guides, tailored for new users and seasoned experts alike.</p>"
    }), createVNode($$Card, {
      title: "Tools & Equipment",
      icon: "seti:eslint",
      "set:html": "<p>Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
    }), createVNode($$Card, {
      title: "Construction Services",
      icon: "seti:puppet",
      "set:html": "<p>Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
    }), createVNode($$Card, {
      title: "Advanced Topics",
      icon: "seti:terraform",
      "set:html": "<p>Discover the complete lineup of ScrewFast’s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.</p>"
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
const url = "src/content/docs/welcome-to-docs.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

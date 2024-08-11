import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { h as $$Card } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Custom Solutions for Complex Projects",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Custom Solutions",
    "order": 4
  }
};
function getHeadings() {
  return [];
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
      "set:html": "<p>Challenging projects demand innovative solutions. ScrewFast excels in delivering custom solutions engineered to address the most intricate and demanding construction requirements.</p>\n"
    }), createVNode($$Card, {
      title: "Our custom services provide:",
      icon: "puzzle",
      "set:html": "<ul>\n<li>Expert analysis of unconventional project demands</li>\n<li>Tailored construction methods for unique structures</li>\n<li>Specialized materials and equipment sourcing</li>\n<li>Collaboration with specialized subcontractors and consultants</li>\n</ul>"
    }), "\n", createVNode(_components.p, {
      "set:html": "No matter the complexity, our bespoke services ensure that your specialized project is not just completed, but mastered."
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

const url = "src/content/docs/construction/custom-solutions.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/construction/custom-solutions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/construction/custom-solutions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

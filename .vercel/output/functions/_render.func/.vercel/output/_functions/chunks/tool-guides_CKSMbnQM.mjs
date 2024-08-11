import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tool Guides",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Tool Guides",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tool-guides",
    "text": "Tool Guides"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>ScrewFast prides itself on a comprehensive range of high-grade tools and equipment. These resources are not just about delivering the performance you expect but ensuring they stand the test of time. Below, you will find a curated selection of guides geared towards helping you get the most out of our products.</p>\n<h3 id=\"tool-guides\">Tool Guides</h3>\n<p><strong>Machine Screws Manual</strong></p>\n<ul>\n<li>Detailed specifications and applications for ScrewFast’s variety of machine screws</li>\n<li>Visual guide for identifying screw types and choosing the right one for your project</li>\n</ul>\n<p><strong>Assorted Screw Set Handbook</strong></p>\n<ul>\n<li>Instructions on usage and selection from the assorted screw set</li>\n<li>Tips on organizing and storing your screw set for easy access</li>\n</ul>\n<p><strong>Tap Bolts and Nuts Catalog</strong></p>\n<ul>\n<li>Exploring the diverse range of tap bolts and nuts suitable for various construction environments</li>\n<li>Guidelines for selecting the correct bolt size and nut pairing for secure fastening</li>\n</ul>\n<p><strong>Hex Bolts Instructions</strong></p>\n<ul>\n<li>Comprehensive procedures on the use of hex bolts in your projects</li>\n<li>Strength ratings, threading information, and torque recommendations</li>\n</ul>"
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
const url = "src/content/docs/tools/tool-guides.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/tools/tool-guides.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/tools/tool-guides.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

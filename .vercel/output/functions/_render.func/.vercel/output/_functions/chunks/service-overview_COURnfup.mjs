import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comprehensive Service Overview",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Service Overview",
    "order": 1
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Welcome to ScrewFast Construction Services – your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency.</p>\n<p>At ScrewFast, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:</p>\n"
    }), createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Pre-construction Consultations",
        icon: "star",
        "set:html": "<p>A thorough assessment to understand your project requirements, site conditions, and to provide a clear roadmap for your project.</p>"
      }), createVNode($$Card, {
        title: "Design and Engineering",
        icon: "star",
        "set:html": "<p>Leveraging innovative software and expertise to craft bespoke solutions that bring your structural vision to life with accuracy and innovation.</p>"
      }), createVNode($$Card, {
        title: "Project Management",
        icon: "star",
        "set:html": "<p>Dedicated on-site leadership to ensure that your project runs smoothly, on time, and within budget.</p>"
      }), createVNode($$Card, {
        title: "Construction and Installation",
        icon: "star",
        "set:html": "<p>Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard.</p>"
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

const url = "src/content/docs/construction/service-overview.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/construction/service-overview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/construction/service-overview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

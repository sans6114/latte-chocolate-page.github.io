import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction to ScrewFast Services",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview-of-services",
    "text": "Overview of Services"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>As part of our commitment to providing an end-to-end solution for all your construction and hardware needs, we at ScrewFast are proud to offer a comprehensive suite of professional services. From initial consultations to final inspections, our multifaceted services encompass the entirety of your project, ensuring quality results and client satisfaction. This section of the documentation will guide you through everything you need to know to leverage our expertise to its fullest potential.</p>\n<h2 id=\"overview-of-services\">Overview of Services</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Tailored Solutions",
        "set:html": "<p>Each construction project carries its unique challenges and demands. At ScrewFast, we customize our services to match your specific needs, ensuring that no matter the scale or complexity of your project, our team is equipped to handle it with precision and professionalism.</p>"
      }), createVNode($$TabItem, {
        label: "Expert Team",
        "set:html": "<p>Leverage the skills of our knowledgeable staff, from architects and engineers to skilled laborers, each contributing their expertise to bring your vision to life.</p>"
      }), createVNode($$TabItem, {
        label: "Commitment to Quality",
        "set:html": "<p>Quality is at the heart of everything we do. We employ stringent quality control measures to assure that the work we deliver meets and exceeds industry standards.</p>"
      }), createVNode($$TabItem, {
        label: "Ongoing Support",
        "set:html": "<p>Our relationship with our clients doesn’t end once the project is completed. We provide continuous support to address any issues and ensure lasting satisfaction with your investment.</p>"
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

const url = "src/content/docs/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

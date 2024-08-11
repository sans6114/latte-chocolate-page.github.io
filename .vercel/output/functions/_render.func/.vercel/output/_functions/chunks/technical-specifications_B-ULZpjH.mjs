import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, i as $$Steps, j as $$LinkCard } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Technical Specifications",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Technical Specifications",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "product-integration-techniques",
    "text": "Product Integration Techniques"
  }, {
    "depth": 2,
    "slug": "advanced-use-cases",
    "text": "Advanced Use Cases"
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
      "set:html": "<p>Dive deep into the technicalities of our product offerings with ScrewFast’s comprehensive technical specifications documentation. Our detailed data sheets provide you with all the information you need on:</p>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Material properties and grades",
        icon: "star"
      }), createVNode($$Card, {
        title: "Mechanical strengths and tolerances",
        icon: "star"
      }), createVNode($$Card, {
        title: "Environmental resilience and sustainability ratings",
        icon: "star"
      }), createVNode($$Card, {
        title: "Compatibility and interoperability",
        icon: "star"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Understanding these specifications will help you select and use our products with confidence, ensuring optimal performance and longevity.</p>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p><strong>Material Specifications</strong><br>\nInsight into the materials used and their properties to assist you with informed decision-making.</p>\n</li>\n<li>\n<p><strong>Performance Metrics</strong><br>\nDocumented performance metrics that detail what you can expect from our products under various conditions.</p>\n</li>\n<li>\n<p><strong>Compliance Standards</strong><br>\nInformation about industry standards and regulatory compliance ensures your project adheres to necessary codes and practices.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"product-integration-techniques\">Product Integration Techniques</h2>\n<p>Unlock the full potential of ScrewFast products with our set of specialized integration techniques.</p>\n<p>Leverage our in-depth knowledge to enhance the efficiency and durability of your constructions by correctly incorporating our products.</p>\n<h2 id=\"advanced-use-cases\">Advanced Use Cases</h2>\n<p>Explore the possibilities with ScrewFast through real-world scenarios. Our catalog of advanced use cases demonstrates how our products can solve complex challenges and push the boundaries of conventional construction.</p>\n<p>See how ScrewFast products have been instrumental in:</p>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Major infrastructure projects",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Innovative architectural accomplishments",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "High-stress industrial applications",
        href: "/guides/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      "set:html": "These case studies serve as an inspiration and a learning tool, showcasing what can be achieved with the right expertise and ScrewFast’s superior product range."
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

const url = "src/content/docs/advanced/technical-specifications.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/advanced/technical-specifications.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/advanced/technical-specifications.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tools-overview",
    "text": "Tools Overview"
  }, {
    "depth": 2,
    "slug": "setup-instructions",
    "text": "Setup Instructions"
  }, {
    "depth": 2,
    "slug": "cleaning-and-maintenance",
    "text": "Cleaning and Maintenance"
  }, {
    "depth": 2,
    "slug": "additional-resources",
    "text": "Additional Resources"
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
      "set:html": "<p>Welcome to ScrewFast Docs! We’re excited to help you get started with our premium tools. This guide is designed to introduce you to our tool range, help you understand the basics, and get you up to speed for your first project. Let’s jump right into the world of high-quality, reliable craftsmanship with ScrewFast.</p>\n<h2 id=\"tools-overview\">Tools Overview</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "ScrewDriver Set",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "Versatile and ergonomic, suitable for all screw types."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Hammer Drill",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "Powerful performance for drilling and impact driving."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Power Saws",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "Precision cutting with adjustable settings for various materials."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"setup-instructions\">Setup Instructions</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Unboxing Icon Unbox Your ScrewFast Tools\nCarefully open the packaging and verify all components are present. Familiarize yourself with the tool and any accessories.</p>\n</li>\n<li>\n<p>Safety Check Icon Initial Setup and Safety Checks\nRead the safety manual before handling the tool. Check the tool for any shipping damage and ensure safety guards are in place.</p>\n</li>\n<li>\n<p>Calibration Icon Calibration and Preparation for First Use\nFollow the manufacturer’s instructions to calibrate your tools as required. Ensure batteries are charged or electrical connections are secure.</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"cleaning-and-maintenance\">Cleaning and Maintenance</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>Always unplug tools before cleaning. Use a soft, dry cloth to wipe the\nexterior and store in a dry place.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Regular maintenance ensures longevity and safety. Clean your tools after each use, check for wear, and lubricate moving parts as specified in the tool’s manual.</p>\n<h2 id=\"additional-resources\">Additional Resources</h2>\n"
    }), createVNode($$LinkCard, {
      title: "In-depth Tutorials",
      description: "Deep dive into using our tools with expert-led tutorials.",
      href: "/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Video Demos",
      description: "Visual guides to get the most out of your tools.",
      href: "/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Warranty Information",
      description: "Understand your coverage and how to make a claim if needed.",
      href: "/guides/getting-started"
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

const url = "src/content/docs/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

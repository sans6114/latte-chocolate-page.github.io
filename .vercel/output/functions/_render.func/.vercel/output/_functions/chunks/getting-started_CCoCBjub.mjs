import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "入门指南",
  "description": "探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "工具概述",
    "text": "工具概述"
  }, {
    "depth": 2,
    "slug": "设置说明",
    "text": "设置说明"
  }, {
    "depth": 2,
    "slug": "清洁和维护",
    "text": "清洁和维护"
  }, {
    "depth": 2,
    "slug": "额外资源",
    "text": "额外资源"
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
      "set:html": "<p>欢迎来到 ScrewFast 文档！我们很高兴能帮助您开始使用我们的优质工具。本指南旨在介绍我们的工具范围，帮助您了解基础知识，并为您的第一个项目做好准备。让我们立即进入高质量、可靠的工艺世界，与 ScrewFast 一起。</p>\n<h2 id=\"工具概述\">工具概述</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "螺丝刀套装",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "多功能且符合人体工程学设计，适用于各种螺丝类型。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "电钻锤",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "强大的钻孔和冲击驱动性能。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "电动锯",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "可调节设置，精准切割各种材料。"
        }), createVNode($$LinkCard, {
          title: "了解更多 ",
          href: "zh-cn/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"设置说明\">设置说明</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>解包图标 打开 ScrewFast 工具包\n小心打开包装，并确认所有零件齐全。熟悉工具及任何附件。</p>\n</li>\n<li>\n<p>安全检查图标 初始设置和安全检查\n在处理工具之前阅读安全手册。检查工具是否有运输损坏，并确保安全保护装置已安装到位。</p>\n</li>\n<li>\n<p>校准图标 校准和准备首次使用\n按照制造商的说明校准您的工具。确保电池已充电或电气连接安全可靠。</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"清洁和维护\">清洁和维护</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>清洁前务必拔掉工具插头。使用软、干的布擦拭外部，并存放在干燥的地方。</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>定期维护可确保工具的长期使用和安全性。每次使用后清洁工具，检查磨损，并按照工具手册中规定的方式润滑移动部件。</p>\n<h2 id=\"额外资源\">额外资源</h2>\n"
    }), createVNode($$LinkCard, {
      title: "深入教程",
      description: "深入了解如何使用我们的工具，由专家提供教程。",
      href: "zh-cn/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "视频演示",
      description: "视觉指南，帮助您充分利用我们的工具。",
      href: "zh-cn/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "保修信息",
      description: "了解您的保修范围，以及如何提出索赔。",
      href: "zh-cn/guides/getting-started"
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

const url = "src/content/docs/zh-cn/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

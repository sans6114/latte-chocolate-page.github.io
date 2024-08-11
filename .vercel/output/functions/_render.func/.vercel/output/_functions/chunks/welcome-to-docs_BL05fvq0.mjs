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
    "title": "文档中心",
    "tagline": "您的集中式工具指南、详细服务文档和项目支持中心。",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/zh-cn/guides/getting-started/"
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
      title: "快速入门指南",
      icon: "document",
      "set:html": "<p>通过我们简明扼要的指南，快速掌握使用技巧，适用于新手和老手用户。</p>"
    }), createVNode($$Card, {
      title: "工具与设备",
      icon: "seti:eslint",
      "set:html": "<p>探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
    }), createVNode($$Card, {
      title: "施工服务",
      icon: "seti:puppet",
      "set:html": "<p>探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
    }), createVNode($$Card, {
      title: "高级主题",
      icon: "seti:terraform",
      "set:html": "<p>探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。</p>"
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
const url = "src/content/docs/zh-cn/welcome-to-docs.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast 服务介绍",
  "description": "探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "服务概述",
    "text": "服务概述"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>作为我们致力于为您的所有建筑和硬件需求提供端到端解决方案的一部分，我们在 ScrewFast 自豪地提供一套全面的专业服务。从最初的咨询到最终的验收，我们多方位的服务涵盖了您项目的全部，确保质量的结果和客户满意度。本文档的本节将指导您了解如何充分利用我们的专业知识。</p>\n<h2 id=\"服务概述\">服务概述</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "定制解决方案",
        "set:html": "<p>每个建筑项目都带来了独特的挑战和需求。在 ScrewFast，我们定制我们的服务以满足您的特定需求，确保无论您的项目规模或复杂程度如何，我们的团队都能以精确和专业的方式处理。</p>"
      }), createVNode($$TabItem, {
        label: "专业团队",
        "set:html": "<p>利用我们熟练员工的技能，从建筑师和工程师到熟练的劳动者，每个人都为将您的愿景变为现实做出了贡献。</p>"
      }), createVNode($$TabItem, {
        label: "质量承诺",
        "set:html": "<p>质量是我们做的一切的核心。我们采用严格的质量控制措施，确保我们交付的工作符合甚至超出行业标准。</p>"
      }), createVNode($$TabItem, {
        label: "持续支持",
        "set:html": "<p>我们与客户的关系在项目完成后并不结束。我们提供持续支持，以解决任何问题，并确保您对投资的持久满意度。</p>"
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

const url = "src/content/docs/zh-cn/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

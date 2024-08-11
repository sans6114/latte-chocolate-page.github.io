import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, i as $$Steps, j as $$LinkCard } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "第一个项目清单",
  "description": "探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "项目准备",
    "text": "项目准备"
  }, {
    "depth": 2,
    "slug": "项目执行",
    "text": "项目执行"
  }, {
    "depth": 3,
    "slug": "初始阶段",
    "text": "初始阶段"
  }, {
    "depth": 2,
    "slug": "额外资源",
    "text": "额外资源"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>开始新项目既令人兴奋又具有挑战性。通过正确的准备和指导，您的冒险将更有成功的可能性。ScrewFast 第一个项目清单旨在提供清晰和结构化的方法，以确保您在每一步都做好了充分的准备。</p>\n<h2 id=\"项目准备\">项目准备</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "范围和目标",
        "set:html": "<ul>\n<li>确保项目的范围、交付内容和期望结果清晰明确</li>\n<li>为项目完成明确定义清晰的目标和成功标准</li>\n</ul>"
      }), createVNode($$Card, {
        title: "工具和设备",
        "set:html": "<ul>\n<li>列出所有需要的 ScrewFast 工具和设备</li>\n<li>在开始之前确认库存的可用性和状态</li>\n</ul>"
      }), createVNode($$Card, {
        title: "安排服务",
        "set:html": "<ul>\n<li>如果需要额外的专业知识或人力，请提前安排 ScrewFast 建筑服务</li>\n<li>与您的 ScrewFast 代表明确服务级别协议和时间表</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"项目执行\">项目执行</h2>\n<h3 id=\"初始阶段\">初始阶段</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>根据 ScrewFast 设置指南设置项目现场</p>\n</li>\n<li>\n<p>召开初始团队会议，就项目目标和 ScrewFast 方法达成一致</p>\n</li>\n<li>\n<p>建立项目检查点和里程碑，定期进行评估</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"额外资源\">额外资源</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "详细指南",
        description: "访问 ScrewFast 工具和服务的深度文档和用户手册。",
        href: "zh-cn/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "支持联系人",
        description: "保持 ScrewFast 支持的联系人详细信息，可在项目期间提供帮助。",
        href: "zh-cn/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "高级学习",
        description: "探索 ScrewFast 提供的进一步教育资源，以完善您的技能和知识基础。",
        href: "zh-cn/guides/getting-started"
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

const url = "src/content/docs/zh-cn/guides/first-project-checklist.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/zh-cn/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

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
    "title": "ドキュメンテーションハブ",
    "tagline": "効率的なツールのガイド、詳細なサービス文書、およびプロジェクトのサポートのための中心的なハブ。",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/ja/guides/getting-started/"
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
      title: "クイックスタートガイド",
      icon: "document",
      "set:html": "<p>当社のわかりやすく簡潔なガイドで迅速に立ち上がり、新規ユーザーと熟練した専門家の両方に適したものを利用してください。</p>"
    }), createVNode($$Card, {
      title: "ツール＆装備",
      icon: "seti:eslint",
      "set:html": "<p>ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
    }), createVNode($$Card, {
      title: "建設サービス",
      icon: "seti:puppet",
      "set:html": "<p>ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
    }), createVNode($$Card, {
      title: "高度なトピック",
      icon: "seti:terraform",
      "set:html": "<p>ScrewFastの優れた品質の完全なツールと装備を発見してください。各サブセクションには詳細な仕様、使用方法の説明、およびメンテナンスのヒントが提供されています。</p>"
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
const url = "src/content/docs/ja/welcome-to-docs.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

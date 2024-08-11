import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "はじめに",
  "description": "ScrewFastの包括的なドキュメントを探索して、プレミアムツールと建設サービスを詳しく見てください。",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "サービスの概要",
    "text": "サービスの概要"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>私たちの建設およびハードウェアニーズに対するエンドツーエンドのソリューションを提供することへの取り組みの一環として、ScrewFastは、プロフェッショナルなサービスの包括的なスイートを提供することを誇りに思っています。初回の相談から最終検査まで、私たちの多面的なサービスは、あなたのプロジェクト全体を包括し、品質の結果と顧客満足を保証します。このドキュメントのこのセクションでは、私たちの専門知識を最大限に活用するために知っておく必要があるすべてのことを案内します。</p>\n<h2 id=\"サービスの概要\">サービスの概要</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "カスタマイズされたソリューション",
        "set:html": "<p>各建設プロジェクトには独自の課題と要求があります。ScrewFastでは、サービスをカスタマイズして、プロジェクトのスケールや複雑さに関係なく、チームが正確かつプロフェッショナルに対応できるようにします。</p>"
      }), createVNode($$TabItem, {
        label: "専門チーム",
        "set:html": "<p>私たちの知識豊富なスタッフ、建築家からエンジニアまで、各々が専門知識を活かし、あなたのビジョンを実現します。</p>"
      }), createVNode($$TabItem, {
        label: "品質へのコミットメント",
        "set:html": "<p>品質は私たちのすべての活動の中心にあります。私たちは厳格な品質管理策を採用して、提供する作業が業界基準を満たし、それを上回ることを保証します。</p>"
      }), createVNode($$TabItem, {
        label: "継続的なサポート",
        "set:html": "<p>プロジェクトが完了したら、私たちとの関係は終わりません。問題を解決し、あなたの投資に対する持続的な満足を保証するために、継続的なサポートを提供します。</p>"
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

const url = "src/content/docs/ja/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, i as $$Steps, j as $$LinkCard } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "ファーストプロジェクトチェックリスト",
  "description": "ScrewFastの包括的なドキュメントを探索して、プレミアムツールと建設サービスを詳しく見てください。",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "プロジェクト準備",
    "text": "プロジェクト準備"
  }, {
    "depth": 2,
    "slug": "プロジェクトの実行",
    "text": "プロジェクトの実行"
  }, {
    "depth": 3,
    "slug": "初期フェーズ",
    "text": "初期フェーズ"
  }, {
    "depth": 2,
    "slug": "その他のリソース",
    "text": "その他のリソース"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>新しいプロジェクトに着手することは、興奮と挑戦の両方が同じ程度であり得ます。適切な準備とガイダンスがあれば、貴社の事業は成功する準備が整っています。ScrewFastのファーストプロジェクトチェックリストは、段階を踏んだ明確で構造化されたアプローチを提供するよう設計されています。</p>\n<h2 id=\"プロジェクト準備\">プロジェクト準備</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "スコープと目標",
        "set:html": "<ul>\n<li>プロジェクトのスコープ、成果物、および希望される成果の明確さを確保する</li>\n<li>プロジェクト完了のための明確な目標と成功基準を定義する</li>\n</ul>"
      }), createVNode($$Card, {
        title: "ツールと機器",
        "set:html": "<ul>\n<li>必要なすべてのScrewFastツールと機器のリストを作成する</li>\n<li>開始前に在庫の可用性と状態を確認する</li>\n</ul>"
      }), createVNode($$Card, {
        title: "サービスの手配",
        "set:html": "<ul>\n<li>追加の専門知識や労働力が必要な場合は、事前にScrewFast建設サービスを手配する</li>\n<li>あなたのScrewFast代表者とのサービスレベル契約とタイムラインを明確にする</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"プロジェクトの実行\">プロジェクトの実行</h2>\n<h3 id=\"初期フェーズ\">初期フェーズ</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>ScrewFastの設定ガイドラインに従ってプロジェクトサイトを設定する</p>\n</li>\n<li>\n<p>プロジェクトの目標とScrewFastの方法論を合わせるための初期チームミーティングを実施する</p>\n</li>\n<li>\n<p>定期的な評価のためのプロジェクトのチェックポイントとマイルストーンを設定する</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"その他のリソース\">その他のリソース</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "詳細なガイド",
        description: "ScrewFastツールとサービスの詳細なドキュメントとユーザーマニュアルにアクセスします。",
        href: "ja/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "サポート連絡先",
        description: "プロジェクト全体で利用可能なScrewFastサポートの連絡先の詳細を手元に保管してください。",
        href: "ja/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "高度な学習",
        description: "ScrewFastが提供するさらなる教育リソースを探索して、スキルと知識を磨きます。",
        href: "ja/guides/getting-started"
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

const url = "src/content/docs/ja/guides/first-project-checklist.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

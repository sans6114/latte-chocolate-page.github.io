import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, j as $$LinkCard, i as $$Steps, k as $$Aside } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "入門",
  "description": "ScrewFastの包括的なドキュメントを探索して、プレミアムツールと建設サービスを詳しく見てください。",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ツールの概要",
    "text": "ツールの概要"
  }, {
    "depth": 2,
    "slug": "設定手順",
    "text": "設定手順"
  }, {
    "depth": 2,
    "slug": "清掃とメンテナンス",
    "text": "清掃とメンテナンス"
  }, {
    "depth": 2,
    "slug": "その他のリソース",
    "text": "その他のリソース"
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
      "set:html": "<p>ScrewFast Docsへようこそ！私たちは、プレミアムツールでのスタートをお手伝いできることを楽しみにしています。このガイドは、私たちのツールの範囲を紹介し、基本を理解し、最初のプロジェクトに備えるための設計されています。ScrewFastとともに、高品質で信頼性の高い技術の世界に飛び込みましょう。</p>\n<h2 id=\"ツールの概要\">ツールの概要</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "スクリュードライバーセット",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "多目的でエルゴノミックで、すべてのねじに適しています。"
        }), createVNode($$LinkCard, {
          title: "詳細はこちら ",
          href: "ja/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "ハンマードリル",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "ドリルとインパクトドライブのためのパワフルな性能。"
        }), createVNode($$LinkCard, {
          title: "詳細はこちら ",
          href: "ja/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "電動ノコギリ",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "各種材料に対応した可変設定での精密な切断。"
        }), createVNode($$LinkCard, {
          title: "詳細はこちら ",
          href: "ja/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"設定手順\">設定手順</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>アンボックスアイコン ScrewFastのツールをアンボックスする\n慎重にパッケージを開封し、すべてのコンポーネントが揃っていることを確認してください。ツールとアクセサリーに慣れてください。</p>\n</li>\n<li>\n<p>セーフティチェックアイコン 初期設定と安全チェック\nツールを取り扱う前に安全マニュアルを読みます。ツールに配送時の損傷がないか確認し、安全ガードが取り付けられていることを確認してください。</p>\n</li>\n<li>\n<p>キャリブレーションアイコン キャリブレーションと初使用の準備\n必要に応じて、製造元の指示に従ってツールのキャリブレーションを行います。バッテリーが充電されているか、電気接続が確実に接続されているか確認してください。</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"清掃とメンテナンス\">清掃とメンテナンス</h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      "set:html": "<p>清掃前に常にツールの電源を切ってください。柔らかい乾いた布で外部を拭き取り、乾燥した場所に保管してください。</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>定期的なメンテナンスは、寿命と安全性を確保します。各使用後にツールを清掃し、摩耗のチェックを行い、ツールのマニュアルで指定された通りに動く部品に潤滑油を塗布してください。</p>\n<h2 id=\"その他のリソース\">その他のリソース</h2>\n"
    }), createVNode($$LinkCard, {
      title: "詳細なチュートリアル",
      description: "専門家によるチュートリアルでツールの使用法を詳しく学びます。",
      href: "ja/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "ビデオデモ",
      description: "ツールを最大限に活用するためのビジュアルガイド。",
      href: "ja/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "保証情報",
      description: "保証範囲と必要に応じて請求方法を理解します。",
      href: "ja/guides/getting-started"
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

const url = "src/content/docs/ja/guides/getting-started.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/ja/guides/getting-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

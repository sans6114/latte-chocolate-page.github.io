import pLimit from 'p-limit';
import { A as AstroError, Z as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_CrVA10mL.mjs';
import { n as createComponent, y as renderUniqueStylesheet, z as renderScriptElement, B as createHeadAndContent, o as renderTemplate, s as renderComponent, u as unescapeHTML } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined, "ACTIONS_PATH": "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/actions"}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_ChtSefwA.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_B66VCSmI.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BS9ZbV22.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_ClyMa4SN.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_CIgk8xfR.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Bzv0FJF4.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_22WTx4I1.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_Ct67CDve.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_Bs1zBt8Q.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D1q7fZlg.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CJFDuVjv.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_CHn6s3-0.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_CW_Evo_N.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DN2bae66.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DKnilrQ3.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_CQK_0l3N.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_DeuLfwk9.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DebB5PSv.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_D-oNYzx5.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_B-RaMdHK.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_ClAxTa4Z.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DtcUgN35.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_CZQYKUY3.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_DdEwjNML.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D8pMDJJr.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BxJ-YrkP.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_D7DYFw9T.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_-R1hU1KB.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_B82Ndop-.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_C1IFUZDY.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_CEb2QPu8.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_eaNNrGqe.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_CAuNK4n3.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_BYVmGgXO.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_civVHnjF.mjs'),"/src/content/products/latteAmistad.md": () => import('./latteAmistad_DsgyxHJo.mjs'),"/src/content/products/latteAmor.md": () => import('./latteAmor_BW6DGizc.mjs'),"/src/content/products/latteCumpleaños.md": () => import('./latteCumpleaños_Dz3ZKP1c.mjs'),"/src/content/products/latteEspeciales.md": () => import('./latteEspeciales_Dlphuofb.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/author/bob-williams.yml": () => import('./bob-williams_sz7kYiet.mjs'),"/src/content/author/felizDia.yml": () => import('./felizDia_CSS70Tv2.mjs'),"/src/content/author/teAmo.yml": () => import('./teAmo_pVkCfzzb.mjs'),"/src/content/author/teQuieroMucho.yml": () => import('./teQuieroMucho_GPsuKwmh.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"author":{"type":"data","entries":{"bob-williams":"/src/content/author/bob-williams.yml","felizDia":"/src/content/author/felizDia.yml","teAmo":"/src/content/author/teAmo.yml","teQuieroMucho":"/src/content/author/teQuieroMucho.yml"}},"products":{"type":"content","entries":{"latte-amistad":"/src/content/products/latteAmistad.md","latte-amor":"/src/content/products/latteAmor.md","latte-cumpleaños":"/src/content/products/latteCumpleaños.md","latte-fechas":"/src/content/products/latteEspeciales.md"}},"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_Dj39X3pd.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_0ITS9hDN.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_CzDRE5G6.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_DKe0cDx6.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_Cng4BbUF.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_C5WbwR9c.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_Doe3Eh5p.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_DvG8KyNu.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_5JHVdhdJ.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CnPeKBEF.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_bkOCU2RZ.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_YFWNYpOx.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_BqVXrrpp.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_C6pJilI-.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_BNR7ijBu.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_MzkR0lwk.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_5TZWanEa.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D2308e6m.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_C-gsdn3A.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_DZlYdb8N.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_Mi7G1O54.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DWhvt35k.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_6xXJBlhG.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_QvljCDhB.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Cl_Q1qTj.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_Ckj13JZb.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CIXBCibM.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_Cfm88yCV.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BODm3gNM.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_-RN_w4xt.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_IjmM9-b2.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_C8yHAOwt.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_CHGYsSKR.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_Cey7bkA_.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_cqMniam4.mjs'),"/src/content/products/latteAmistad.md": () => import('./latteAmistad_CQTPvaN7.mjs'),"/src/content/products/latteAmor.md": () => import('./latteAmor_l6d85Sp_.mjs'),"/src/content/products/latteCumpleaños.md": () => import('./latteCumpleaños_B1grtsv9.mjs'),"/src/content/products/latteEspeciales.md": () => import('./latteEspeciales_DVZeJsaX.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };

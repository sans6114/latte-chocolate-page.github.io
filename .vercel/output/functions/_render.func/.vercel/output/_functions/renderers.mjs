import { defineComponent, h, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { z as AstroUserError, A as AstroError } from './chunks/astro/assets-service_CrVA10mL.mjs';
import { k as AstroJSX, b as renderJSX, l as createVNode } from './chunks/astro/server_DyaX1Ozq.mjs';

const setup = () => {};

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
		hydrate: {
			type: Boolean,
			default: true,
		},
	},
	setup({ name, value, hydrate }) {
		if (!value) return () => null;
		let tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
		return () => h(tagName, { name, innerHTML: value });
	},
});

function check$1(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup$1(Component, inputProps, slotted, metadata) {
	const slots = {};
	const props = { ...inputProps };
	delete props.slot;
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			h(StaticHtml, {
				value,
				name: key === 'default' ? undefined : key,
				// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
				hydrate: metadata.astroStaticSlot ? !!metadata.hydrate : true,
			});
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	await setup();
	const html = await renderToString(app);
	return { html };
}

const _renderer0 = {
	name: '@astrojs/vue',
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
	supportsAstroStaticSlot: true,
};

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function") return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  try {
    const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
    return { html };
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
    throw e;
  }
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
  if (Component[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(error)) return;
    throw new AstroError({
      message: error.message,
      title: error.name,
      hint: `This issue often occurs when your MDX component encounters runtime errors.`,
      name: error.name,
      stack: error.stack
    });
  }
}
const renderer = {
  name: "astro:jsx",
  check,
  renderToStaticMarkup
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer0 }),Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { renderers };

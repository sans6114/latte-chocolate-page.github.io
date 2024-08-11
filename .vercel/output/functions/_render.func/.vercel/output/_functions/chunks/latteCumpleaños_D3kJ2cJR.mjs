import { n as createComponent, o as renderTemplate, p as maybeRenderHead, u as unescapeHTML } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Latte cumpleaños","description":"Latte cumpleaños","main":{"id":1,"content":"Descubrí lo que nuestro segmento \"caja amor\" puede hacer. Este segmento sirve para esos momentos en los que queres regalar algo copado y amoroso pero no sabes que..\n","imgCard":"@/images/product-image-3.avif","imgMain":"@/images/product-image-main-3.avif","imgAlt":"Mockup boxes of the chocolate Latte love"},"slug":"latte-cumpleaños"};
				const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/products/latteCumpleaños.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

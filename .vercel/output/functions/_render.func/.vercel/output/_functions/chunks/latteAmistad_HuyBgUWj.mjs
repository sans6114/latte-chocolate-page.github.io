import { n as createComponent, o as renderTemplate, p as maybeRenderHead, u as unescapeHTML } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Latte amistad","description":"Latte amistad","main":{"id":2,"content":"Descubrí lo que nuestro segmento \"caja amistad\" puede hacer. Este segmento sirve para esos momentos en los que queres regalar algo copado para tu amigo y no sabes que...\n","imgCard":"@/images/product-image-4.avif","imgMain":"@/images/product-image-main-4.avif","imgAlt":"Mockup boxes of the chocolate Latte love"},"slug":"latte-amistad"};
				const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/products/latteAmistad.md";
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

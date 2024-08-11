import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { m as $$Tabs, n as $$TabItem } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "معرفی به خدمات اسکروفست",
  "description": "مستندات جامع اسکروفست را برای بررسی دقیق‌تر ابزارها و خدمات ساخت و ساز بررسی کنید.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "مروری-بر-خدمات",
    "text": "مروری بر خدمات"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>به عنوان بخشی از تعهد ما به ارائه یک راه‌حل از ابتدا تا انتها برای همه نیازهای ساخت و ساز و سخت‌افزار شما، ما در اسکروفست به افتخار یک سری خدمات حرفه‌ای جامع ارائه می‌دهیم. از مشاوره‌های ابتدایی تا بازرسی‌های نهایی، خدمات چند‌گانه ما شامل کلیه جنبه‌های پروژه شما را در بر می‌گیرد و اطمینان از نتایج با کیفیت و رضایت مشتری را فراهم می‌کند. این بخش از مستندات شما را از همه چیزی که باید بدانید برای بهره‌گیری از تخصص ما به حداکثر برساند.</p>\n<h2 id=\"مروری-بر-خدمات\">مروری بر خدمات</h2>\n"
    }), createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "راه‌حل‌های سفارشی",
        "set:html": "<p>هر پروژه ساخت و ساز چالش‌ها و اقتضاهای منحصربه‌فرد خود را دارد. در اسکروفست، ما خدمات خود را به منظور تطبیق با نیازهای خاص شما سفارشی‌سازی می‌کنیم، تضمین می‌کنیم که مهمانه مقیاس یا پیچیدگی پروژه شما با دقت و حرفه‌ایترین نیروهای ما مدیریت شود.</p>"
      }), createVNode($$TabItem, {
        label: "تیم متخصص",
        "set:html": "<p>از مهارت‌های کارکنان ما با تجربه استفاده کنید، از معماران و مهندسان تا کارگران ماهر، هر کدام به تجربه خود به منظور برگرداندن دیدگاه شما به واقعیت کمک می‌کنند.</p>"
      }), createVNode($$TabItem, {
        label: "تعهد به کیفیت",
        "set:html": "<p>کیفیت در مرکز تمام اعمال ما قرار دارد. ما اقدامات سختگیرانه کنترل کیفیت را برای اطمینان از اینکه کاری که ارائه می‌دهیم با استانداردهای صنعتی مطابقت دارد و آن را بیشتر می‌کند.</p>"
      }), createVNode($$TabItem, {
        label: "پشتیبانی مداوم",
        "set:html": "<p>رابطه ما با مشتریان ما پس از اتمام پروژه به پایان نمی‌رسد. ما پشتیبانی مداوم را برای حل هرگونه مشکل و اطمینان از رضایت دائمی از سرمایه‌اینستمان فراهم می‌کنیم.</p>"
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

const url = "src/content/docs/fa/guides/intro.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fa/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fa/guides/intro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

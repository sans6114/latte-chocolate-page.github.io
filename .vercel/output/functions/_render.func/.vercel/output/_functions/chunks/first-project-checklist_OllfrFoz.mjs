import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DyaX1Ozq.mjs';
import { $ as $$Image } from './_astro_assets_dVBWH8v7.mjs';
import { g as $$CardGrid, h as $$Card, i as $$Steps, j as $$LinkCard } from './Code_DbY-F7em.mjs';
import 'clsx';

const frontmatter = {
  "title": "چک لیست اولین پروژه",
  "description": "مستندات جامع ScrewFast را بررسی کنید تا به طور کامل به ابزارها و خدمات ساخت و ساز ویژه ما نگاه کنید.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "آمادهسازی-پروژه",
    "text": "آماده‌سازی پروژه"
  }, {
    "depth": 2,
    "slug": "اجرای-پروژه",
    "text": "اجرای پروژه"
  }, {
    "depth": 3,
    "slug": "فاز-اولیه",
    "text": "فاز اولیه"
  }, {
    "depth": 2,
    "slug": "منابع-اضافی",
    "text": "منابع اضافی"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>شروع یک پروژه جدید ممکن است هم به اندازه‌ای هیجان‌انگیز و هم چالش برانگیز باشد. با آماده‌سازی و هدایت مناسب، پروژه شما برای موفقیت آماده است. چک لیست اولین پروژه ScrewFast طراحی شده است تا یک رویکرد واضح و ساختارمند را برای اطمینان از آمادگی خود در هر مرحله ارائه دهد.</p>\n<h2 id=\"آمادهسازی-پروژه\">آماده‌سازی پروژه</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "دامنه و اهداف",
        "set:html": "<ul>\n<li>اطمینان از وضوح دامنه پروژه، خروجی‌ها و نتایج مورد نظر</li>\n<li>تعریف اهداف روشن و شاخص‌های موفقیت برای اتمام پروژه</li>\n</ul>"
      }), createVNode($$Card, {
        title: "ابزارها و تجهیزات",
        "set:html": "<ul>\n<li>تهیه لیستی از تمامی ابزارها و تجهیزات مورد نیاز ScrewFast</li>\n<li>بررسی دسترسی و شرایط موجودی قبل از شروع</li>\n</ul>"
      }), createVNode($$Card, {
        title: "مرتب‌سازی خدمات",
        "set:html": "<ul>\n<li>در صورت نیاز به تخصص یا نیروی انسانی اضافی، برنامه‌ریزی خدمات ساخت و ساز ScrewFast را به صورت پیشگامانه انجام دهید</li>\n<li>ابهامات توافق‌نامه‌های سطح خدمات و زمانبندی را با نماینده ScrewFast خود روشن کنید</li>\n</ul>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"اجرای-پروژه\">اجرای پروژه</h2>\n<h3 id=\"فاز-اولیه\">فاز اولیه</h3>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>سایت پروژه را براساس راهنمای تنظیم ScrewFast راه‌اندازی کنید</p>\n</li>\n<li>\n<p>یک جلسه اولیه تیم برگزار کنید تا در مورد اهداف پروژه و روش‌های ScrewFast هماهنگ شوید</p>\n</li>\n<li>\n<p>نقاط کنترل و مراحل مهم پروژه را برای ارزیابی منظم تعیین کنید</p>\n</li>\n</ol>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"منابع-اضافی\">منابع اضافی</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "آموزش‌های عمیق",
        description: "عمق به راهنمایی در استفاده از ابزارها و خدمات ما با آموزش‌های تخصصی.",
        href: "fa/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "ویدیوهای دمو",
        description: "راهنمایی‌های تصویری برای بهره‌برداری بهتر از ابزارهای ما.",
        href: "fa/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "اطلاعات گارانتی",
        description: "پوشش خود را درک کنید و چگونگی ارائه ادعا را در صورت نیاز بفهمید.",
        href: "fa/guides/getting-started"
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

const url = "src/content/docs/fa/guides/first-project-checklist.mdx";
const file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fa/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/content/docs/fa/guides/first-project-checklist.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

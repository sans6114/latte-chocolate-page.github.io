/* empty css                         */
import { m as createAstro, n as createComponent, o as renderTemplate, s as renderComponent, p as maybeRenderHead } from './astro/server_DyaX1Ozq.mjs';
import 'kleur/colors';
import { $ as $$ComerciosLayout } from './ComerciosLayout_BEPut0NK.mjs';
import { f as firebase } from './config_COeD87Ye.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userValue = firebase.auth.currentUser;
  await userValue?.reload();
  const { user, isLoggedIn } = Astro2.locals;
  if (!user || !isLoggedIn) {
    return;
  }
  return renderTemplate`${renderComponent($$result, "ComerciosLayout", $$ComerciosLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>
COmercios
</h1> <button>LogOut</button> ` })}`;
}, "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/comercios/index.astro", void 0);

const $$file = "C:/Users/PC/Desktop/latte-chocolate-page/latte-page/src/pages/comercios/index.astro";
const $$url = "/comercios";

export { $$Index as default, $$file as file, $$url as url };

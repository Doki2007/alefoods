import { v as decodeKey } from './chunks/astro/server_Ct1hUgM1.mjs';
import './chunks/astro-designed-error-pages_CXwJCqY3.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CpaoEn3X.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/webs/alefoods/","cacheDir":"file:///D:/webs/alefoods/node_modules/.astro/","outDir":"file:///D:/webs/alefoods/dist/","srcDir":"file:///D:/webs/alefoods/src/","publicDir":"file:///D:/webs/alefoods/public/","buildClientDir":"file:///D:/webs/alefoods/dist/client/","buildServerDir":"file:///D:/webs/alefoods/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact-us","isIndex":false,"type":"page","pattern":"^\\/contact-us\\/?$","segments":[[{"content":"contact-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-us.astro","pathname":"/contact-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"products/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products","isIndex":true,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/index.astro","pathname":"/products","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"recipes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recipes","isIndex":true,"type":"page","pattern":"^\\/recipes\\/?$","segments":[[{"content":"recipes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recipes/index.astro","pathname":"/recipes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"site":"https://alefoods.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/webs/alefoods/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/contact-us.astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/products/[slug].astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/products/index.astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/recipes/[slug].astro",{"propagation":"none","containsHead":true}],["D:/webs/alefoods/src/pages/recipes/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/contact-us@_@astro":"pages/contact-us.astro.mjs","\u0000@astro-page:src/pages/products/[slug]@_@astro":"pages/products/_slug_.astro.mjs","\u0000@astro-page:src/pages/products/index@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/recipes/[slug]@_@astro":"pages/recipes/_slug_.astro.mjs","\u0000@astro-page:src/pages/recipes/index@_@astro":"pages/recipes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CAjIYFmi.mjs","D:/webs/alefoods/node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_lfv02PV8.mjs","D:/webs/alefoods/src/pages/contact-us.astro?astro&type=script&index=0&lang.ts":"_astro/contact-us.astro_astro_type_script_index_0_lang.CVPaA5zg.js","D:/webs/alefoods/src/pods/recipe-collection/recipe-collection.pod.astro?astro&type=script&index=0&lang.ts":"_astro/recipe-collection.pod.astro_astro_type_script_index_0_lang.BgB1URnD.js","D:/webs/alefoods/src/pods/recipe/recipe.pod.astro?astro&type=script&index=0&lang.ts":"_astro/recipe.pod.astro_astro_type_script_index_0_lang.2Hyk7XBY.js","D:/webs/alefoods/src/pods/products-collection/products-collection.pod.astro?astro&type=script&index=0&lang.ts":"_astro/products-collection.pod.astro_astro_type_script_index_0_lang.DWVxeq7X.js","D:/webs/alefoods/src/pods/product/product.pod.astro?astro&type=script&index=0&lang.ts":"_astro/product.pod.astro_astro_type_script_index_0_lang.Bcjbpm8Y.js","D:/webs/alefoods/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.oSpXw1XK.js","D:/webs/alefoods/node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.COPH5o9P.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/webs/alefoods/src/pods/recipe-collection/recipe-collection.pod.astro?astro&type=script&index=0&lang.ts","function c(){const s=document.querySelectorAll(\".filter-btn-recipe\"),o=document.querySelectorAll(\".recipe-card\");function l(t){o.forEach(e=>{const r=e.getAttribute(\"data-category\");if(!r){e.classList.add(\"hidden\");return}t===\"all\"||t===r?e.classList.remove(\"hidden\"):(e.classList.add(\"hidden\"),e.classList.remove(\"block\"))})}function a(t){s.forEach(e=>{e.classList.remove(\"bg-green-500\",\"border-green-600\",\"text-white\"),e.classList.add(\"bg-white\",\"border-green-500\",\"text-black\"),e.ariaPressed=\"false\"}),t.classList.remove(\"bg-white\",\"border-green-500\",\"text-black\"),t.classList.add(\"bg-green-500\",\"border-green-600\",\"text-white\"),t.ariaPressed=\"true\"}s.forEach(t=>{t.addEventListener(\"click\",e=>{const r=e.currentTarget;if(!r)return;const n=r.getAttribute(\"data-filter\");n&&(l(n),a(r))})});const i=document.querySelector('[data-filter=\"all\"]');i&&a(i)}c();document.addEventListener(\"astro:page-load\",c);"],["D:/webs/alefoods/src/pods/recipe/recipe.pod.astro?astro&type=script&index=0&lang.ts","function c(){const n=document.getElementById(\"copy-link-btn\"),e=document.querySelector(\".copy-link-btn-text\");if(!n)return;const t=e.textContent||\"Copy Link\";n.addEventListener(\"click\",()=>{const o=window.location.href;navigator.clipboard.writeText(o),e.textContent=\"Link copied!\",setTimeout(()=>{e.textContent=t},2e3)})}function i(){document.querySelectorAll(\".ingredient-item\").forEach(e=>{const t=e.querySelector(\".checkbox\"),o=e.querySelector(\".ingredient-name\");t.addEventListener(\"change\",()=>{o.classList.toggle(\"line-through\",t.checked)})})}c();i();document.addEventListener(\"astro:page-load\",c);document.addEventListener(\"astro:page-load\",i);"],["D:/webs/alefoods/src/pods/products-collection/products-collection.pod.astro?astro&type=script&index=0&lang.ts","function c(){const s=document.querySelectorAll(\".filter-btn-product\"),d=document.querySelectorAll(\".product-card\");function n(e){d.forEach(t=>{const r=t.getAttribute(\"data-category\");if(!r){t.classList.add(\"hidden\");return}e===\"all\"||e===r?t.classList.remove(\"hidden\"):(t.classList.remove(\"block\"),t.classList.add(\"hidden\"))})}function a(e){s.forEach(t=>{t.classList.remove(\"bg-green-500\",\"border-2\",\"border-green-600\",\"text-white\"),t.classList.add(\"bg-white\",\"text-black\"),t.setAttribute(\"aria-pressed\",\"false\")}),e.classList.remove(\"bg-white\",\"text-black\"),e.classList.add(\"bg-green-500\",\"border-2\",\"border-green-600\",\"text-white\"),e.setAttribute(\"aria-pressed\",\"true\")}s.forEach(e=>{e.addEventListener(\"click\",t=>{const r=t.currentTarget;if(!r)return;const o=r.getAttribute(\"data-filter\");o&&(n(o),a(r))})});const i=document.querySelector('[data-filter=\"all\"]');i&&a(i)}c();document.addEventListener(\"astro:page-load\",c);"],["D:/webs/alefoods/src/pods/product/product.pod.astro?astro&type=script&index=0&lang.ts","function m(){const s=document.querySelector(\".gallery-container\"),a=document.getElementById(\"big-image\"),i=document.querySelectorAll(\".mini\"),l=document.querySelectorAll(\".accordion\"),u=document.querySelector(\".quantity\"),g=document.querySelector(\".qty-container\");let o=1;const r=document.getElementById(\"whatsapp-btn\");!s||!a||(i[0]?.classList.add(\"ring-2\",\"ring-green-500\",\"opacity-100\"),s.addEventListener(\"click\",e=>{const n=e.target;if(n.classList.contains(\"mini\")){const t=n;a.src=t.src,a.alt=t.alt,i.forEach(c=>c.classList.remove(\"ring-2\",\"ring-green-500\",\"opacity-100\")),t.classList.add(\"ring-2\",\"ring-green-500\",\"opacity-100\"),a.animate([{opacity:.5},{opacity:1}],{duration:250})}}),l.forEach(e=>{const n=e.querySelector(\".accordion-header\"),t=e.querySelector(\".accordion-content\"),c=e.querySelector(\".chevron\");n?.addEventListener(\"click\",()=>{!t?.classList.contains(\"hidden\")?(t?.classList.add(\"hidden\"),t?.classList.remove(\"grid\"),c?.classList.remove(\"rotate-180\")):(t?.classList.remove(\"hidden\"),t?.classList.add(\"grid\"),c?.classList.add(\"rotate-180\"))})}),g?.addEventListener(\"click\",e=>{const n=e.target;if(!n.classList.contains(\"qty-btn\"))return;const t=n.dataset.action;t===\"increase\"&&o++,t===\"decrease\"&&o>1&&o--,u.textContent=o.toString()}),r?.addEventListener(\"click\",()=>{const e=\"51932120023\",n=r.getAttribute(\"data-product-title\")??\"el producto\",t=`Buen día! Me gustaría comprar ${o} unidad(es) de ${n}.`,c=encodeURIComponent(t),d=`https://wa.me/${e}?text=${c}`;window.open(d,\"_blank\")}))}document.addEventListener(\"astro:page-load\",m);"],["D:/webs/alefoods/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","function d(){const t=document.getElementById(\"burguer-menu\"),n=document.getElementById(\"close-burger-menu\"),e=document.getElementById(\"mobile-menu\"),s=document.getElementById(\"mobile-menu-links\");t?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),e?.classList.toggle(\"flex\")}),n?.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\"),e?.classList.remove(\"flex\")}),s?.querySelectorAll(\"a\").forEach(l=>{l.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\"),e?.classList.remove(\"flex\")})})}document.addEventListener(\"astro:page-load\",d);"]],"assets":["/_astro/error02.DRvyWkfv.webp","/_astro/bgpattern.BR4UynxJ.webp","/_astro/background-2.CHYdBl0D.webp","/_astro/background.TBx4ADos.webp","/_astro/logo1.LSPk117l.webp","/_astro/organica.CfT_nX7B.png","/_astro/ecovive.Ckx1tJhH.png","/_astro/capon.Q-P76xQA.png","/_astro/franco.D4e3o4FY.webp","/_astro/marketgreta.DALUx_hs.png","/_astro/marketholi.CowcQyDL.png","/_astro/union1.6dt_MQIX.webp","/_astro/ojedamarket.BE8QDrUN.png","/_astro/about-us.DFxXqhK0.css","/alefoods-socials.png","/favicon.ico","/robots.txt","/_astro/client.B9YBqyHK.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.COPH5o9P.js","/_astro/contact-us.astro_astro_type_script_index_0_lang.CVPaA5zg.js","/repo-assets/image-2.png","/repo-assets/image-3.png","/repo-assets/image-4.png","/repo-assets/image-5.png","/404.html","/about-us/index.html","/contact-us/index.html","/products/index.html","/recipes/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"V1Dxl++7QW8bxPNt6khG2CIVmwVAlgVGmQCLWSkhdpg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

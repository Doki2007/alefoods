import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_JPzD2GGM.mjs';
import { manifest } from './manifest_wMkEQMbH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about-us.astro.mjs');
const _page4 = () => import('./pages/contact-us.astro.mjs');
const _page5 = () => import('./pages/products/_slug_.astro.mjs');
const _page6 = () => import('./pages/products.astro.mjs');
const _page7 = () => import('./pages/recipes/_slug_.astro.mjs');
const _page8 = () => import('./pages/recipes.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.15.4_@netlify+blobs_5b1a3b07fa3f0eabe3005c13c7d0a1f0/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/contact-us.astro", _page4],
    ["src/pages/products/[slug].astro", _page5],
    ["src/pages/products/index.astro", _page6],
    ["src/pages/recipes/[slug].astro", _page7],
    ["src/pages/recipes/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ad09afd6-9786-4992-aab0-6f12c3926de6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

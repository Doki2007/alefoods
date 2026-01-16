// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://alefoods-2026.netlify.app", // ✅ Ya lo tienes
  output: 'static', // ✅ Ya lo tienes
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'), // Excluir página 404
    }),
  ],

  server: {
    host: true, // Permite acceso desde otros dispositivos en la red local
    port: 4321, // Puerto por defecto de Astro (opcional)
  },
  adapter: netlify({
  }),
  vite: {
    plugins: /** @type {any}  */ ([tailwindcss()])
  },
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN',
      }),
      FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_EMAIL',
      }),
      TO_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_EMAIL',
      }),
    },
  },
});
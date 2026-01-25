// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://alefoods.vercel.app",
  output: 'static', 
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),  
    }),
  ],

  server: {
    host: true,  
    port: 4321,  
  },
  adapter: vercel({
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
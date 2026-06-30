import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://luna-landing-rust.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), robotsTxt()],
});

// nuxt.config.ts

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: [
    { src: "~/assets/plugins/bootstrap.js", mode: "client" },
    { src: "~/assets/plugins/sweetalert.js", mode: "client" },
  ],
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      apiBase: process.env.CAT_API_KEY,
    },
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "https://api.thecatapi.com/v1",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});

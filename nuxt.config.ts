// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  modules: ["bootstrap-vue-3/nuxt", "@vueuse/nuxt", "@pinia/nuxt"],
  ssr: true,

  // plugins: ["~/plugins/bootstrap.js"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/css/variables.scss";'
        },
      },
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});

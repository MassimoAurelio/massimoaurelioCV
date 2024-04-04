// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],
  css: ["@/assets/scss/global.scss"],
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});

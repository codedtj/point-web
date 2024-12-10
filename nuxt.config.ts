// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],

  plugins: ['~/plugins/localePath.ts'],

  colorMode: {
    classSuffix: ''
  },

  i18n: {
    lazy: true, // Enable lazy loading
    langDir: 'locales/', // Directory where translation files are stored
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'ru', file: 'ru.json', name: 'Русский' }
    ],
    defaultLocale: 'ru',
    vueI18n: './i18n.config.ts', // Use i18n config
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://bbauuntpeliikurte3ku.containers.yandexcloud.net/v1', // Public API base URL
    },
  },




})

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    strategy: 'prefix_except_default', // Change strategy here
}));
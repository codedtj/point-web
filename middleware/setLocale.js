// middleware/setLocale.js
export default function ({ route, store }) {
    // Get the locale from the route parameters
    const locale = route.params.locale || 'ru'; // Default to 'ru'
    // Set the i18n locale
    store.$i18n.setLocale(locale);
}

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) { // Ensure this runs only on the client
        const token = localStorage.getItem('auth_token')
        if (!token && to.fullPath.startsWith('/admin')) {
            return navigateTo('/login')
        }
    }
})

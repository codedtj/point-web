export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem('auth_token')
    if (!token && to.fullPath.startsWith('/admin')) {
        return navigateTo('/login')
    }
})

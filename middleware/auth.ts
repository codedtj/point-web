// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = localStorage.getItem('auth_token')
        if (!token && to.fullPath.startsWith('/admin')) {
            return navigateTo('/auth/login')
        }
    }
})

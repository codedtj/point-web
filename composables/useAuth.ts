// composables/useAuth.ts
import { useRouter } from 'vue-router'

export function useAuth() {
    const router = useRouter()

    const logout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        router.push('/auth/login')
    }

    return { logout }
}

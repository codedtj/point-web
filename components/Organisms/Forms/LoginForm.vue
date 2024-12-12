<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const payload = { username: email.value, password: password.value }
    console.log('Payload being sent:', payload) // Debug log

    const { data } = await useFetch('/api/login', {
      method: 'POST',
      body: payload,
    })

    if (!data.value || !data.value.token) {
      throw new Error('Invalid response')
    }

    // Save token and user data to localStorage
    localStorage.setItem('auth_token', data.value.token) // Save token
    localStorage.setItem('auth_user', JSON.stringify(data.value.user)) // Save user object as string
    router.push('/admin/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed. Please check your credentials and try again.')
  }
}

</script>

<template>
  <AtomsCardsPrimaryCard class="py-5 md:w-1/4 w-full px-6 mx-3">
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4 pb-4">
      <h1 class="text-2xl font-bold dark:text-white capitalize">{{ $t('label.login') }}</h1>
      <AtomsInputsInputField
          v-model="email"
          label="Email"
          name="email"
          type="email"
          placeholder="email@example.com"
      />
      <AtomsInputsInputField
          v-model="password"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
      />
      <p v-if="error" class="text-red-500">{{ error }}</p>
      <button type="submit">
        <AtomsButtonsLogin class="capitalize w-full">{{ $t('label.login') }}</AtomsButtonsLogin>
      </button>
    </form>
    <div class="flex w-full">
      <div class="text-sm mx-auto">
        <NuxtLink
            :to="$localPath('/auth/register')"
            class="cursor-pointer ml-3 text-cyan-500 underline hover:text-cyan-600 capitalize"
        >
          {{ $t('label.register') }}
        </NuxtLink>
      </div>
    </div>
  </AtomsCardsPrimaryCard>
</template>

<template>
  <AtomsCardsPrimaryCard class="py-5 md:w-1/4">
    <form @submit.prevent="handleRegister" class="flex flex-col gap-4 pb-4">
      <h1 class="text-2xl font-bold dark:text-white capitalize">{{ $t('label.register') }}</h1>

      <AtomsInputsInputField v-model="firstName" label="First Name" name="firstName" placeholder="John" :rules="{ required: true }" />
      <AtomsInputsInputField v-model="lastName" label="Last Name" name="lastName" placeholder="Doe" :rules="{ required: true }" />
      <AtomsInputsInputField v-model="phone" label="Phone" name="phone" placeholder="+992939939393" :rules="{ required: true, min: 10, max: 15 }" />
      <AtomsInputsInputField v-model="email" label="Email" name="email" type="email" placeholder="email@example.com" :rules="{ required: true, email: true }" />
      <AtomsInputsInputField v-model="password" label="Password" name="password" type="password" placeholder="Password" :rules="{ required: true, min: 8 }" />
      <AtomsInputsInputField v-model="confirmPassword" label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password" :rules="{ required: true, sameAs: password }" />

      <p v-if="error" class="text-red-500">{{ error }}</p>
      <button type="submit" :disabled="isLoading">
        <AtomsButtonsLogin class="capitalize w-full">
          {{ isLoading ? 'Registering...' : $t('label.register') }}
        </AtomsButtonsLogin>
      </button>
    </form>
    <div class="flex w-full">
      <div class="text-sm mx-auto">
        <NuxtLink :to="$localPath('/auth/login')" class="cursor-pointer ml-3 text-cyan-500 underline hover:text-cyan-600 capitalize">
          {{ $t('label.login') }}
        </NuxtLink>
      </div>
    </div>
  </AtomsCardsPrimaryCard>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const isLoading = ref(false)

const router = useRouter()

const handleRegister = async () => {
  error.value = ''; // Clear any previous error messages

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  isLoading.value = true; // Set loading state

  try {
    const payload = {
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    };

    const { data, error: fetchError } = await useFetch('/api/register', {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (fetchError.value) {
      throw new Error(fetchError.value.message || 'Registration failed');
    }

    if (!data.value || !data.value.token) {
      throw new Error('Invalid response from server');
    }

    // Save token and user data to localStorage
    localStorage.setItem('auth_token', data.value.token);
    localStorage.setItem('auth_user', JSON.stringify(data.value.user));

    // Redirect to dashboard
    router.push('/admin/dashboard');
  } catch (err: any) {
    error.value = err?.message || 'Registration failed. Please try again.';
  } finally {
    isLoading.value = false; // Reset loading state
  }
};

// Clear error when user types
watch([firstName, lastName, phone, email, password, confirmPassword], () => {
  error.value = ''
});
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = ref('')
const password = ref('')

const submitForm = () => {
  console.log({ email, password })
}
</script>

<template>
  <AtomsCardsPrimaryCard class="py-5 md:w-1/4 w-full px-6 mx-3">
    <form @submit.prevent="submitForm" class="flex flex-col gap-4 pb-4">
      <h1 class="text-2xl font-bold dark:text-white capitalize">{{ t('label.login') }}</h1>
      <AtomsInputsInputField v-model="email" label="Email" name="email" type="email" placeholder="email@example.com" />
      <AtomsInputsInputField v-model="password" label="Password" name="password" type="password" placeholder="Password" />
      <button type="submit">
        <AtomsButtonsLogin class="capitalize w-full">{{ $t('label.login') }}</AtomsButtonsLogin>
      </button>
    </form>
    <div class="flex w-full">
      <div class="text-sm mx-auto">
        <NuxtLink to="/auth/register" class="cursor-pointer ml-3 text-cyan-500 underline hover:text-cyan-600 capitalize " >{{ $t('label.register') }}</NuxtLink>
      </div>
    </div>
  </AtomsCardsPrimaryCard>

</template>

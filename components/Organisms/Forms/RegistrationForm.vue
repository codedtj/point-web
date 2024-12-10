<template>
  <AtomsCardsPrimaryCard class="py-5 md:w-1/4">
    <form @submit.prevent="submitRegister" class="flex flex-col gap-4 pb-4">
      <h1 class="text-2xl font-bold dark:text-white capitalize">{{ t('label.register') }}</h1>
      <AtomsInputsInputField v-model="firstName" label="First Name" name="firstName" placeholder="John Doe" :rules="{ required: true }" />
      <AtomsInputsInputField v-model="lastName" label="Last Name" name="lastName" placeholder="John Doe" :rules="{ required: true }" />
      <AtomsInputsInputField v-model="phone" label="Phone" name="phone" placeholder="+992939939393" :rules="{ required: true, min: 10, max: 15 }" />
      <AtomsInputsInputField v-model="email" label="Email" name="email" type="email" placeholder="email@example.com" :rules="{ required: true, email: true }" />
      <AtomsInputsInputField v-model="password" label="Password" name="password" type="password" placeholder="Password" :rules="{ required: true, min: 8 }" />
      <AtomsInputsInputField v-model="confirmPassword" label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password" :rules="{ required: true, sameAs: password }" />
      <button type="submit">
        <AtomsButtonsLogin class="capitalize w-full">{{ $t('label.register') }}</AtomsButtonsLogin>
      </button>
    </form>
    <div class="flex w-full">
      <div class="text-sm mx-auto">
        <NuxtLink :to="$localPath('/auth/login')"  class="cursor-pointer ml-3 text-cyan-500  underline hover:text-cyan-600 capitalize " >{{ $t('label.login') }}</NuxtLink>
      </div>
    </div>
  </AtomsCardsPrimaryCard>
</template>

<script>

</script>
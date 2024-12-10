<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const mobileMenuOpen = ref(false)
const openDrop = ref(false)
const router = useRouter()

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

watch(() => router.currentRoute.value, closeMobileMenu)

// Use global state to detect dark mode
const isDarkMode = useState('darkMode', () => ref(true))

// Check localStorage and set dark mode accordingly on mount
onMounted(() => {
  const savedMode = localStorage.getItem('theme')
  isDarkMode.value = savedMode ? savedMode === 'dark' : true
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <div  class="dark:bg-primary-500 dark:text-white bg-white text-zinc-500">
      <div class="container mx-auto md:w-5/6">
        <div class="relative">
          <div class="mx-auto px-4 sm:px-6">
            <div class="flex  justify-between   py-4 md:py-6  md:space-x-10">
              <div class="lg:flex-1">
                <NuxtLink :to="$localPath('/')" class="flex">
                  <img
                      class="h-5 md:h-8 w-auto my-auto  rounded-xl px-3 py-1 dark:text-black"
                      src="/images/png/logo-colored.png"
                      alt="logo"
                  />
                </NuxtLink>
              </div>
              <div class="-mr-2 -my-2 md:hidden flex">
                <button
                    @click="mobileMenuOpen = !mobileMenuOpen"
                    type="button"
                    class="justify-end inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Open menu"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <nav class="hidden md:flex space-x-10 my-auto text-xs">
                <NuxtLink :to="$localPath('/')" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.home') }}</NuxtLink>
                <NuxtLink :to="$localPath('/news')" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.news') }}</NuxtLink>
                <NuxtLink :to="$localPath('/contacts')" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.contacts') }}</NuxtLink>
                <NuxtLink :to="$localPath('/about')" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.about') }}</NuxtLink>
              </nav>
              <OrganismsColorModeSelector class="hidden md:flex"/>
              <OrganismsLanguageSelector class="hidden md:flex"/>
              <NuxtLink :to="$localPath('/auth/login')">
                <div class="hidden md:flex">
                  <AtomsButtonsLogin class="capitalize">{{ $t('label.login') }}</AtomsButtonsLogin>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div v-if="mobileMenuOpen" class="absolute top-0 inset-x-0 z-50 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-lg">
              <div class="rounded-lg shadow-xs bg-black divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 space-y-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <img class="h-3" src="/images/png/logo-colored.png" alt="Workflow" />
                    </div>
                    <div class="-mr-2">
                      <button
                          @click="mobileMenuOpen = false"
                          type="button"
                          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                          aria-label="Close menu"
                      >
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <nav class="grid gap-6 text-sm">
                      <NuxtLink to="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-cbrown transition ease-in-out duration-150" @click="closeMobileMenu">
                        <span class=" leading-6 font-medium text-white capitalize">{{ $t('label.home') }}</span>
                      </NuxtLink>
                      <NuxtLink to="/news" class="-m-3 p-3 flex items-center rounded-md hover:bg-cbrown transition ease-in-out duration-150" @click="closeMobileMenu">
                        <span class=" leading-6 font-medium text-white capitalize">{{ $t('label.news') }}</span>
                      </NuxtLink>
                      <NuxtLink to="/contact" class="-m-3 p-3 flex items-center rounded-md hover:bg-cbrown transition ease-in-out duration-150" @click="closeMobileMenu">
                        <span class=" leading-6 font-medium text-white capitalize">{{ $t('label.contacts') }}</span>
                      </NuxtLink>
                      <NuxtLink to="/about" class="-m-3 p-3 flex items-center rounded-md hover:bg-cbrown transition ease-in-out duration-150" @click="closeMobileMenu">
                        <span class=" leading-6 font-medium text-white capitalize">{{ $t('label.about') }}</span>
                      </NuxtLink>
                      <AtomsButtonsLogin class="capitalize">{{ $t('label.login') }}</AtomsButtonsLogin>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark:bg-primary-900 dark:text-white h-screen bg-tertiaty">
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>
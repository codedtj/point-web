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
    <div class="min-w-site text-sm font-medium min-h-full text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
      <div>
        <div>
          <div>
            <header
                class="bg-white dark:bg-gray-800 flex items-center h-14 shadow-b dark:border-b dark:border-gray-700">
              <button
                  class="lg:hidden inline-flex items-center justify-center ml-1 w-12 h-12 rounded-lg focus:ring focus:ring-inset focus:outline-none ring-primary-200 dark:ring-gray-600"
                  aria-label="Toggle Sidebar" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24"
                     height="24" class="inline-block" role="presentation">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <div class="hidden lg:w-60 flex-shrink-0 md:flex items-center">
                <a class="text-gray-900 hover:text-gray-500 active:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 dark:active:text-gray-500 h-12 rounded-lg flex items-center ml-2 focus:ring focus:ring-inset focus:outline-none ring-primary-200 dark:ring-gray-600 px-4"
                   aria-label="Point Local" href="/admin/dashboards/main">
                  <span>
                    <img class="h-4" src="/images/png/logo-colored.png">
                  </span>
                </a>
              </div>

              <div class="flex flex-1 px-4 sm:px-8 lg:px-12">
                <nav class="hidden md:flex space-x-10 my-auto text-xs">
                  <NuxtLink to="/" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.home') }}</NuxtLink>
                  <NuxtLink to="/news" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.news') }}</NuxtLink>
                  <NuxtLink to="/contact" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.contacts') }}</NuxtLink>
                  <NuxtLink to="/about" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.about') }}</NuxtLink>
                </nav>

                <div class="flex items-center pl-6 ml-auto">
                  <div>
                    <OrganismsColorModeSelector class="hidden md:flex"/>
                  </div>
                  <div>
                    <OrganismsLanguageSelector class="hidden md:flex"/>
                  </div>
                  <div class="items-center hidden md:flex ml-2">
                    <button aria-expanded="false"
                            class="rounded active:outline-none active:ring focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-gray-600"
                            type="button">
                      <div class="toolbar-button flex items-center cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-700 h-10 focus:outline-none focus:ring rounded-lg   text-sm font-semibold text-gray-600 dark:text-gray-400 px-3">
                        <span class="whitespace-nowrap">Test</span>
                        <svg class="flex-shrink-0 ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="6"
                             viewBox="0 0 10 6">
                          <path class="fill-current"
                                d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div :class="{ dark: isDarkMode }">
    <div  class="dark:bg-primary-500 dark:text-white bg-white text-zinc-500">
      <div class="container mx-auto md:w-5/6">
        <div class="relative">
          <div class="mx-auto px-4 sm:px-6">
            <div class="flex  justify-between   py-4 md:py-6  md:space-x-10">
              <div class="lg:flex-1">
                <NuxtLink to="/" class="flex">
                  <img
                      class="h-5 md:h-8 w-auto my-auto  rounded-xl px-3 py-1 dark:text-black"
                      src="/images/png/logo-colored.png"
                      alt="logo"
                  />
                </NuxtLink>
              </div>
              <div class="-mr-2 -my-2 md:hidden ml-48">
                <button
                    @click="mobileMenuOpen = !mobileMenuOpen"
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Open menu"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <nav class="hidden md:flex space-x-10 my-auto text-xs">
                <NuxtLink to="/" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.home') }}</NuxtLink>
                <NuxtLink to="/news" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.news') }}</NuxtLink>
                <NuxtLink to="/contact" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.contacts') }}</NuxtLink>
                <NuxtLink to="/about" class=" leading-6 font-medium transition ease-in-out duration-150 capitalize">{{ $t('label.about') }}</NuxtLink>
              </nav>
              <OrganismsColorModeSelector class="hidden md:flex"/>
              <OrganismsLanguageSelector class="hidden md:flex"/>
              <NuxtLink to="/auth/login">
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
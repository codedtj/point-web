<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Section (Navigation) -->
    <header class="bg-white dark:bg-gray-800 h-14 flex items-center shadow-b dark:border-b dark:border-gray-700">
      <!--      Mobile Menu Button-->
      <button
          class="lg:hidden inline-flex items-center justify-center ml-1 w-12 h-12 rounded-lg focus:ring focus:ring-inset focus:outline-none ring-primary-200 dark:ring-gray-600"
          aria-label="Toggle Sidebar" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24"
             height="24" class="inline-block" role="presentation">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <!--      Mobile Menu Button-->
      <div class="hidden lg:w-60 flex-shrink-0 md:flex items-center">
        <NuxtLink
            class="text-gray-900 hover:text-gray-500 active:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 dark:active:text-gray-500 h-12 rounded-lg flex items-center ml-2 focus:ring focus:ring-inset focus:outline-none ring-primary-200 dark:ring-gray-600 px-4"
            aria-label="Point Local" to="/admin/dashboard">
          <span>
            <img class="h-4" src="/images/png/logo-colored.png">
          </span>
        </NuxtLink>
      </div>

      <div class="flex flex-1 px-4 sm:px-8 lg:px-12">
        <OrganismsSearchBar/>
        <div class="flex items-center pl-6 ml-auto space-x-2">
          <OrganismsColorModeSelector class="hidden md:flex"/>
          <OrganismsLanguageSelector class="hidden md:flex"/>
          <OrganismsNotificationBar/>
        </div>
      </div>
    </header>

    <!-- Main Layout (Sidebar + Content) -->
    <div class="flex flex-1 h-full">
      <!-- Sidebar -->
      <div class="hidden lg:block lg:w-60 bg-tertiaty dark:bg-primary-900 dark:text-gray-400 text-gray-700 px-2 py-8">
        <OrganismsSidebar/>
      </div>

      <!-- Main Content Section -->
      <div class="bg-tertiaty dark:bg-primary-900 overflow-y-auto w-full md:pl-20">
        <slot/>
        <div class=" leading-normal text-xs text-gray-500 space-y-1">
          <div class="text-center">
            All Rights Reserved. Developed by <a href="https://coded.tj/">coded.tj</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

// Use global state to detect dark mode
const isDarkMode = useState('darkMode', () => ref(true));

// Check localStorage and set dark mode accordingly on mount
onMounted(() => {
  const savedMode = localStorage.getItem('theme');
  isDarkMode.value = savedMode ? savedMode === 'dark' : true;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>

<style scoped>
.h-screen {
  height: 100vh;
}
</style>

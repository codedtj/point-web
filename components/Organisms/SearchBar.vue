<script setup lang="ts">

</script>

<template>
  <div class="flex items-center w-full max-w-xs h-12 relative z-50" dusk="global-search-component">
    <div class="flex-1 relative">
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             width="20" height="24" class="inline-block absolute ml-2 text-gray-400" role="presentation"
             style="top: 4px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input  type="search" :placeholder="$t('label.search')"
               class="appearance-none rounded-full h-8 pl-10 w-full bg-gray-100 dark:bg-gray-900 dark:focus:bg-gray-800 focus:bg-white focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-gray-600"
               aria-label="Поиск" aria-expanded="false" spellcheck="false"></div>
      <div class="w-full max-w-lg" style="display: none;"><!----><!---->
        <div
             class="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg w-full mt-2 max-h-search overflow-y-auto">
          <h3 class="text-xs font-bold uppercase tracking-wide bg-40 py-4 px-3"> {{ $t('guide.nothing_found') }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
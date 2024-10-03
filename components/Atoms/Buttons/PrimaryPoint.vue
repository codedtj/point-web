<script setup lang="ts">

</script>

<template>
  <button class="flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-secondary hover:bg-cyan-500 active:bg-primary-600 text-white dark:text-white inline-flex items-center font-bold px-4 h-9 text-sm dark:bg-secondary">
    <span class="hidden md:inline-block capitalize"><slot name="long"/></span>
    <span class="inline-block md:hidden capitalize"><slot name="short" /></span>
  </button>
</template>

<style scoped>

</style>
<script setup lang="ts">

</script>

<template>
  <div class="flex w-full gap-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow relative px-6 py-4 md:col-span-4 min-h-40 h-full w-full">
      <div class="h-6 flex items-center mb-4">
        <h3 class="mr-3 leading-tight dark:text-white text-sm font-semibold capitalize">
          <slot name="title"></slot>
        </h3>
        <div class="flex relative ml-auto w-[6rem] flex-shrink-0">
<!--          Place for date filter-->
        </div>
      </div>
      <div class="flex items-center mb-4 space-x-4">
        <div class="rounded-lg bg-secondary text-white h-14 w-14 flex items-center justify-center">
          <slot name="icon"></slot>
        </div>
        <div>
          <p class="flex items-center text-4xl" >
            <span class="dark:text-white "><slot name="value"></slot></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
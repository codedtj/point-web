<script setup lang="ts">

</script>

<template>
  <div class="flex w-full gap-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow relative px-6 py-4 md:col-span-4 min-h-40 h-full">
      <div class="h-6 flex items-center mb-4">
        <h3 class="mr-3 leading-tight dark:text-white text-sm font-semibold">
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
        <div><p class="flex items-center text-4xl" ><span
            class="dark:text-white">0</span></p>
          <div>
            <p class="flex items-center font-bold text-sm">
              <span class="text-gray-400 font-semibold">
                <span>
                  Нет данных
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
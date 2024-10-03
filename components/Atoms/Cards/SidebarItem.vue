<script setup lang="ts">

</script>

<template>
  <div class="flex hover:bg-gray-300 rounded py-2 px-2 dark:hover:bg-gray-700">
    <slot name="icon"></slot>
    <h1 class=" ml-4 capitalize" >
      <slot name="title" ></slot>
    </h1>
  </div>
</template>

<style scoped>

</style>
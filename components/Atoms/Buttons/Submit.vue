<script setup>
defineProps({
  label: String
})
</script>

<template>
  <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
    {{ label }}
  </button>
</template>

<template>
  <div class="flex items-center space-x-4">
    <button
        @click="toggleDarkMode"
        class="h-10 w-10 my-auto  font-bold text-xl text-cyan-500  flex items-center justify-center hover:bg-gray-700 rounded"
    >
      <span v-if="isDarkMode">
        <AtomsIconsSunIcon />
      </span>
      <span v-else>
        <AtomsIconsMoonIcon />
      </span>
    </button>

  </div>
</template>

<script setup>
import { useState } from '#app'
import { ref, onMounted } from 'vue'


// Use the global state for dark mode
const isDarkMode = useState('darkMode', () => ref(true))

// On mount, check localStorage for saved mode
onMounted(() => {
  const savedMode = localStorage.getItem('theme')
  isDarkMode.value = savedMode ? savedMode === 'dark' : true
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})

// Function to toggle dark mode
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}

svg {
  transition: transform 0.3s ease; /* Smooth transition for the icon change */
}
</style>

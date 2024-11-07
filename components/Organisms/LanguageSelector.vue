<template>
  <div>
    <select
        class="text-xs p-2 bg-white dark:bg-primary-500 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="language-select"
        v-model="currentLocale"
        @change="changeLocale"
    >
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useNuxtApp } from '#app';
definePageMeta({
  middleware: ["setLocale"]
})
const { $i18n } = useNuxtApp();
const locales = [
  { code: 'ru', name: 'RU' },
  { code: 'en', name: 'EN' },
];

// Initialize the current locale
const currentLocale = ref('');

// Retrieve the locale from localStorage on mount
onMounted(() => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    currentLocale.value = savedLocale;
    $i18n.setLocale(currentLocale.value); // Set the i18n locale if saved
  } else {
    currentLocale.value = $i18n.locale.value; // Default locale
  }
});

const changeLocale = () => {
  $i18n.setLocale(currentLocale.value);
  localStorage.setItem('locale', currentLocale.value); // Save to localStorage
};
</script>

<template>
  <div>
    <select class="text-xs p-2 bg-white dark:bg-primary-500 dark:text-white rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" id="language-select" v-model="currentLocale" @change="changeLocale">
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useNuxtApp } from '#app';

const { availableLocales, locale } = useI18n();
const { $i18n } = useNuxtApp();

const locales = [
  { code: 'ru', name: 'RU' },
  { code: 'en', name: 'EN' }
];

// Initialize the current locale
const currentLocale = ref($i18n.locale.value);

const changeLocale = () => {
  $i18n.setLocale(currentLocale.value);
};
</script>

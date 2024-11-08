// plugins/localePath.ts
import { defineNuxtPlugin, useNuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('localPath', useLocalePath());
});

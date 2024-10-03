<template>
  <div>
    <div class="">
      <h2 class="cursor-pointer flex">
        <button
            @click="toggleAccordion"
            class="flex items-center  w-full px-2 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            :class="{ 'bg-gray-100': isActive }"
        >
          <slot name="icon"></slot>
          <span class="ml-4 capitalize"><slot name="title"></slot></span>
        </button>
      </h2>
      <div
          class="overflow-hidden transition-all duration-300 ease-in-out"
          :class="{ 'max-h-0': !isActive, 'max-h-screen': isActive }"
      >
        <div class="p-3">
          asjxiasciasca
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// The accordion is open by default
const isActive = ref(true);

// Toggle the accordion state
function toggleAccordion() {
  isActive.value = !isActive.value;
}
</script>

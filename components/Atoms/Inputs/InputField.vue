<script setup lang="ts">
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  name: String,
  placeholder: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="name" class="text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">{{ label }}:</label>
    <div class="flex w-full rounded-lg pt-1">
      <div class="relative w-full">
        <input
            :id="name"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block w-full  bg-tertiaty border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-primary-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
            required
        />
      </div>
    </div>
  </div>
</template>

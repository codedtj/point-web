<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
    <div class="flex flex-col md:flex-row md:items-center py-3 border-b border-gray-200 dark:border-gray-700">
      <slot name="header" />
      <div class="flex items-center flex-1">
        <slot name="filter-selector" />
      </div>
    </div>
    <div class="relative">
      <div class="overflow-hidden overflow-x-auto relative">
        <table class="w-full divide-y divide-gray-100 dark:divide-gray-700" data-testid="resource-table">
          <thead>
          <tr>
            <th class="td-fit uppercase text-xxs text-gray-500 tracking-wide pl-5 pr-2 py-2" scope="col">
              <span class="sr-only">Selected Resources</span>
            </th>
            <th v-for="(column, index) in columns" :key="index" class="text-left px-2 whitespace-nowrap capitalize text-gray-500 text-xxs tracking-wide py-2" scope="col">
              <slot :name="column.key">{{ column.label }}</slot>
            </th>
            <th class="uppercase text-xxs tracking-wide px-2 py-2" scope="col">
              <span class="sr-only">Controls</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in data" :key="index" class="group dark:text-white">
            <td class="py-2 cursor-pointer td-fit pl-5 pr-5 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
              <slot name="checkbox" :row="row" />
            </td>
            <td v-for="(column, index) in columns" :key="index" class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
              <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>
            </td>
            <td class="py-2 cursor-pointer px-2 td-fit text-right align-middle dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
              <slot name="actions" :row="row" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <slot name="pagination" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>
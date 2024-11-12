<template>
  <OrganismsBaseTable
      :columns="translatedColumns"
      :data="paginatedData"
  >
    <template #checkbox="{ row }">
      <input type="checkbox" :value="row.id" />
    </template>

    <template #actions="{ row }">
      <button @click="editRow(row)">
        <AtomsIconsEditIcon class="text-2xl text-gray-500 hover:text-blue-500"/>
      </button>
      <button @click="deleteRow(row)">
        <AtomsIconsDeleteIcon class="text-2xl mx-3 text-gray-500 hover:text-red-500"/>
      </button>
    </template>
  </OrganismsBaseTable>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Define table columns with translations
const columns = [
  { key: 'point', label: t('label.point') },
  { key: 'location', label: t('label.location') },
  { key: 'purchaseDate', label: t('label.purchaseDate') },
  { key: 'expiryDate', label: t('label.expiryDate') }
];

// Translated columns (ensures reactive updates on language change)
const translatedColumns = computed(() => columns.map(column => ({
  ...column,
  label: t(column.label)
})));

// Sample data for the table
const tableData = ref([
  { id: 1, point: 'A', location: 'City A', purchaseDate: '2024-11-01', expiryDate: '2024-12-01' },
  // Add more rows as needed
]);

// Pagination state
const currentPage = ref(1);
const rowsPerPage = 10;
const totalPages = computed(() => Math.ceil(tableData.value.length / rowsPerPage));

// Computed data for the current page
const paginatedData = computed(() =>
    tableData.value.slice((currentPage.value - 1) * rowsPerPage, currentPage.value * rowsPerPage)
);

// Pagination methods
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

// Action methods
function editRow(row) {
  // Handle edit logic here
  console.log('Editing row:', row);
}

function deleteRow(row) {
  // Handle delete logic here
  console.log('Deleting row:', row);
}
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

</script>

<template>
  <AtomsCardsPointContainer>
    <div class="relative space-y-3 ">
      <div>
        <div>
          <!--          Hide Button-->
          <button
              class="md:hidden h-8 py-3 mb-3 uppercase tracking-widest font-bold text-xs inline-flex items-center justify-center focus:outline-none focus:ring-primary-200 border-1 border-primary-500 focus:ring focus:ring-offset-4 focus:ring-offset-gray-100 dark:ring-gray-600 dark:focus:ring-offset-gray-900 rounded">
            <span>Hide Cards</span>
            <svg class="flex-shrink-0 transform ml-1" xmlns="http://www.w3.org/2000/svg" width="10" height="6"
                 viewBox="0 0 10 6">
              <path class="fill-current"
                    d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"></path>
            </svg>
          </button>
          <!--          Hide Button-->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <AtomsCardsStatisticsCard>
              <template #title>
                {{$t('label.new_users')}}
              </template>
              <template #icon>
                <AtomsIconsStatisticsIcon class="text-2xl"/>
              </template>
              <template #value>
                0
              </template>
            </AtomsCardsStatisticsCard>
            <AtomsCardsStatisticsCard>
              <template #title>
                {{$t('label.balance')}}
              </template>
              <template #icon>
                <AtomsIconsBalanceIcon class="text-2xl"/>
              </template>
              <template #value>
                0$
              </template>
            </AtomsCardsStatisticsCard>


          </div>

        </div>
      </div>
    </div>
  </AtomsCardsPointContainer>
</template>

<style scoped>

</style>
<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <AtomsCardsPointContainer>
    <h1 class="font-normal text-base md:text-xl mb-3 flex items-center dark:text-white capitalize">
      {{ $t('label.organizations') }}
    </h1>
    <div class="flex">
      <AtomsInputsCategoricalSearch/>
      <div class="w-full flex items-center mb-6">
        <div class="flex-shrink-0 ml-auto">
          <NuxtLink to="/admin/organizations/create">
            <AtomsButtonsPrimaryPoint>
              <template #long>
                {{ $t('label.create_organization') }}
              </template>
              <template #short>
                {{ $t('label.create') }}
              </template>
            </AtomsButtonsPrimaryPoint>
          </NuxtLink>

        </div>
      </div>
    </div>

    <OrganismsOrganizationTable/>

<!--    <div class="bg-white dark:bg-gray-800 rounded-lg shadow">-->
<!--      <div class="flex flex-col md:flex-row md:items-center py-3 border-b border-gray-200 dark:border-gray-700">-->
<!--        <div class="flex items-center flex-1">-->
<!--          <div class="h-9 ml-auto flex items-center pr-2 md:pr-3">-->
<!--            <div class="hidden md:flex px-2">&lt;!&ndash;&ndash;&gt;</div>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--            <div class="flex h-9 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" dusk="filter-selector">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="relative">-->
<!--        <div class="overflow-hidden overflow-x-auto relative">-->
<!--          <table class="w-full divide-y divide-gray-100 dark:divide-gray-700" data-testid="resource-table">-->
<!--            <thead class="bg-gray-50 dark:bg-gray-800">-->
<!--            <tr>-->
<!--              <th class="td-fit uppercase text-xxs text-gray-500 tracking-wide pl-5 pr-2 py-2"><span class="sr-only">Selected Resources</span>-->
<!--              </th>-->
<!--              <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">-->
<!--                <div-->
<!--                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"><span-->
<!--                    class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Point</span>-->
<!--                </div>-->
<!--              </th>-->
<!--              <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">-->
<!--                <div-->
<!--                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"><span-->
<!--                    class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Location</span>-->
<!--                </div>-->
<!--              </th>-->
<!--              <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">-->
<!--                <div-->
<!--                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"><span-->
<!--                    class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Purchase Day</span>-->
<!--                </div>-->
<!--              </th>-->
<!--              <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">-->
<!--                <div-->
<!--                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"><span-->
<!--                    class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Expire Day</span>-->
<!--                </div>-->
<!--              </th>-->
<!--              <th class="uppercase text-xxs tracking-wide px-2 py-2"><span class="sr-only">Controls</span></th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">-->
<!--            <tr dusk="9b8616de-f447-4c6b-b2cd-45f30beb6cae-row" class="group">-->
<!--              <td class="py-2 cursor-pointer td-fit pl-5 pr-5 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <input type="checkbox" class="checkbox" aria-label="Select Resource Test"-->
<!--                       data-testid="users-items-0-checkbox" dusk="9b8616de-f447-4c6b-b2cd-45f30beb6cae-checkbox"></td>-->
<!--              <td class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <div class="text-left" resource="[object Object]"><span class="whitespace-nowrap">Test</span></div>-->
<!--              </td>-->
<!--              <td class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <div class="text-left" resource="[object Object]"><span class="whitespace-nowrap">Khorog</span></div>-->
<!--              </td>-->
<!--              <td class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <div class="text-left" resource="[object Object]"><span class="whitespace-nowrap">20-09-2010</span></div>-->
<!--              </td>-->
<!--              <td class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <div class="text-left" resource="[object Object]"><span class="whitespace-nowrap">20-09-2010</span></div>-->
<!--              </td>-->
<!--              <td class="py-2 cursor-pointer px-2 td-fit text-right align-middle dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">-->
<!--                <div class="flex items-center justify-end space-x-0 text-gray-400">-->
<!--                  <div>-->
<!--                    <div>-->
<!--                      <button aria-expanded="false"-->
<!--                              class="rounded active:outline-none active:ring focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-gray-600"-->
<!--                              type="button"><span class="sr-only">Выпадающий список строк ресурсов</span>-->
<!--                        <div class="toolbar-button flex items-center cursor-pointer select-none"-->
<!--                             dusk="9b8616de-f447-4c6b-b2cd-45f30beb6cae-control-selector"><span-->
<!--                            class="py-0.5 px-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"-->
<!--                                                             fill="currentColor" width="20" height="20"-->
<!--                                                             class="inline-block" role="presentation"><path-->
<!--                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></span>-->
<!--                          &lt;!&ndash;&ndash;&gt;</div>-->
<!--                      </button>-->
<!--                    </div>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;</div>-->
<!--                  <a disabled="false" aria-label="Просмотр" dusk="9b8616de-f447-4c6b-b2cd-45f30beb6cae-view-button"-->
<!--                     class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper&#45;&#45;has-tooltip"-->
<!--                     href="#">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"-->
<!--                         width="24" height="24" class="inline-block" role="presentation">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>-->
<!--                    </svg>-->
<!--                  </a>-->
<!--                  <a  aria-label="Редактировать"-->

<!--                         class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper&#45;&#45;has-tooltip"-->
<!--                         href="#">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"-->
<!--                       width="24" height="24" class="inline-block" role="presentation">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>-->
<!--                  </svg>-->
<!--                </a>-->
<!--                  <button aria-label="Удалить" data-testid="users-items-0-delete-button"-->
<!--                          class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper&#45;&#45;has-tooltip">-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"-->
<!--                         width="24" height="24" class="inline-block" role="presentation">-->
<!--                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>-->
<!--                    </svg>-->
<!--                  </button>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>&lt;!&ndash;&ndash;&gt;</tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--        <div class="border-t border-gray-200 dark:border-gray-700">-->
<!--          <div class="bg-20 rounded-b-lg" per-page="25">-->
<!--            <nav class="flex justify-between items-center">-->
<!--              <button-->
<!--                  class="text-xs font-bold py-3 px-4 focus:outline-none rounded-bl-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"-->
<!--                  rel="prev" dusk="previous">Предыдущий-->
<!--              </button>-->
<!--              <span class="text-xs px-4">1-1 из 1</span>-->
<!--              <button-->
<!--                  class="text-xs font-bold py-3 px-4 focus:outline-none rounded-br-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"-->
<!--                  rel="next" dusk="next">Следующий-->
<!--              </button>-->
<!--            </nav>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </AtomsCardsPointContainer>
</template>

<style scoped>

</style>
<script setup lang="ts">

</script>

<template>
  <div class="h-full space-y-6 ">
    <NuxtLink to="/admin/dashboard" active-class="text-blue-500 font-bold" exact>
      <AtomsCardsSidebarItem>
        <template #icon>
          <AtomsIconsStatisticsIcon class="my-auto text-2xl"/>
        </template>
        <template #title>
          {{ $t('label.review') }}
        </template>
      </AtomsCardsSidebarItem>
    </NuxtLink>
    <NuxtLink to="/admin/billing" active-class="text-blue-500 font-bold" exact>
      <AtomsCardsSidebarItem>
        <template #icon>
          <AtomsIconsWalletIcon class="my-auto text-2xl"/>
        </template>
        <template #title>
          {{ $t('label.billing') }}
        </template>
      </AtomsCardsSidebarItem>
    </NuxtLink>
    <NuxtLink to="/admin/organizations" active-class="text-blue-500 font-bold" exact>
      <AtomsCardsSidebarItem>
        <template #icon>
          <AtomsIconsOrganizationIcon class="my-auto text-2xl"/>
        </template>
        <template #title>
          {{ $t('label.organizations') }}
        </template>
      </AtomsCardsSidebarItem>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
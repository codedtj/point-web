<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <AtomsCardsPointContainer>
    <div class="h-64 rounded-md overflow-hidden bg-cover bg-center  "
         style="background-image: url('https://bogatyr.club/uploads/posts/2023-06/1686878233_bogatyr-club-p-oboi-kosmos-abstraktsiya-vkontakte-7.jpg')">
      <div class="flex bg-gray-900 bg-opacity-50  items-center h-full w-full justify-between px-2 md:px-10">
        <div class="max-w-xl">
          <h2 class="text-xl md:text-2xl text-white font-semibold capitalize">{{ $t('label.current_plan') }}</h2>
          <h1 class="text-xl md:text-3xl text-white font-bold">Basic: 30$</h1>
        </div>
        <AtomsButtonsUpgrade class="mt-3 capitalize">{{ $t('label.upgrade') }}</AtomsButtonsUpgrade>
      </div>
    </div>

    <section>
      <div class="container max-w-full mx-auto py-12 px-6">
        <h1 class="text-center text-2xl text-black font-medium capitalize dark:text-white">
          {{ $t('massage.find_price') }}
        </h1>
        <p class="text-center text-lg text-gray-700 mt-2 px-6 capitalize dark:text-white">
          {{ $t('massage.choose_a_license') }}
        </p>
        <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <!--        Plans-->
        <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8 ">
          <div class="relative block flex flex-col md:flex-row items-center">
            <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
              <div class="bg-white dark:bg-gray-800 text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div
                    class="dark:text-white block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide dark:text-white">
                    Hobby
                  </h1>
                  <h2 class="text-sm text-gray-500 text-center pb-6 dark:text-white">FREE</h2>

                  Stripe offers everything needed to run an online business at scale. Get in touch for details.
                </div>

                <div class="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3">No setup</span
                      >
                    </li>
                    <li class="flex items-center">
                      <div
                          class=" rounded-full p-2 fill-current text-green-700"
                      >
                        <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3"
                      >No setups</span
                      >
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3">Speed</span>
                    </li>
                  </ul>
                </div>
                <div class="block flex items-center p-8  uppercase">
                  <button class="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div
                class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div
                  class="text-sm  leading-none rounded-t-lg bg-gray-200 dark:bg-black dark:text-white text-black font-semibold uppercase py-4 text-center tracking-wide">
                Most Popular
              </div>
              <div
                  class=" dark:text-white block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 class="dark:text-white text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Expert
                </h1>
                <h2 class="text-sm text-gray-500 text-center pb-6 dark:text-white"><span class="text-3xl">€19</span> /mo
                </h2>

                Stripe offers everything needed to run an online business at scale. Get in touch for details.
              </div>
              <div class="flex pl-12 justify-start sm:justify-start mt-3">
                <ul>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="dark:text-white text-gray-700 text-lg ml-3">No setup</span>
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="dark:text-white text-gray-700 text-lg ml-3">Hidden fees</span
                    >
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="dark:text-white text-gray-700 text-lg ml-3">Original</span>
                  </li>
                </ul>
              </div>

              <div class="block flex items-center p-8  uppercase">
                <button class="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                  Select
                </button>
              </div>
            </div>
            <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
              <div class="bg-white dark:bg-gray-800 text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                <div
                    class="dark:text-white block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide dark:text-white">
                    Hobby
                  </h1>
                  <h2 class="text-sm text-gray-500 text-center pb-6 dark:text-white">FREE</h2>

                  Stripe offers everything needed to run an online business at scale. Get in touch for details.
                </div>

                <div class="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3">No setup</span
                      >
                    </li>
                    <li class="flex items-center">
                      <div
                          class=" rounded-full p-2 fill-current text-green-700"
                      >
                        <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3"
                      >No setups</span
                      >
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg class="w-6 h-6 align-middle" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path
                              d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                          ></path>
                          <polyline
                              points="22 4 12 14.01 9 11.01"
                          ></polyline>
                        </svg>
                      </div>
                      <span class="text-gray-700 dark:text-white text-lg ml-3">Speed</span>
                    </li>
                  </ul>
                </div>
                <div class="block flex items-center p-8  uppercase">
                  <button class="mt-3 text-lg font-semibold
	bg-black w-full text-white rounded-lg
	px-6 py-3 block shadow-xl hover:bg-gray-700">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        Plans-->

        <!--        History of Payment-->

        <!--        History of Payment-->
      </div>
    </section>

  </AtomsCardsPointContainer>
</template>

<style scoped>

</style>
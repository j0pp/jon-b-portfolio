<script setup lang="ts">
import Draggable from "../Draggable.vue";
</script>

<template>
  <!-- <Draggable :x="100" :y="350"> -->
  <div
    class="
      max-w-sm
      drop-shadow-2xl
      rounded-xl
      bg-sky-400
      dark:bg-gray-900
      text-slate-50
      dark:text-white
      py-2
      px-4
      mb-4
    "
  >
    <h1 class="text-sm dark:text-sky-500 mb-2">
      <span class="font-bold text-xl">#</span> Latest Tweets
    </h1>

    <div class="flex flex-row mb-2">
      <img
        src="../../assets/headshot.png"
        class="rounded-full w-12 h-12 inline"
      />
      <div class="grow ml-2">
        <h1 class="font-bold">Jonathan Beaubien</h1>
        <p class="text-sm text-gray-600">@JopDaMan</p>
      </div>
    </div>

    <div class="text-md w-96 mb-2">
      Wow! I just heard that Jonathan has made multiple side projects that you
      can view on the projects page!?
    </div>

    <div class="flex justify-evenly text-sky-800 dark:text-sky-400">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
          class="w-4 inline"
        >
          <path
            d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"
          />
        </svg>
        <span class="ml-2">102</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          class="w-4 inline"
        >
          <path
            d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
          />
        </svg>
        <span class="ml-2">5k</span>
      </div>
    </div>
  </div>
  <!-- </Draggable> -->
</template>

<style scoped>
</style>

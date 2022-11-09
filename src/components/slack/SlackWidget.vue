<script setup lang="ts">
// import Draggable from "./Draggable.vue";
</script>

<template>
  <!-- <Draggable :x="100" :y="350"> -->
  <div
    class="
      max-w-md
      drop-shadow-2xl
      rounded-xl
      bg-stone-50
      dark:bg-black
      text-black
      dark:text-white
      py-2
      px-4
      mb-4
      relative
    "
  >
    <div
      class="
        absolute
        top-0
        left-0
        bg-gray-200
        dark:bg-black
        w-full
        h-8
        rounded-t-xl
        flex
      "
    >
      <div class="ml-1 my-auto">
        <img src="../../assets/Slack_Mark.svg" class="w-8 h-8" />
      </div>
      <div class="ml-4 my-auto grow font-bold">Latest</div>
      <div
        class="
          mr-4
          my-auto
          bg-rose-700
          text-stone-50
          h-4
          w-6
          rounded-full
          flex
          justify-center
          items-center
          text-xs
        "
      >
        5
      </div>
    </div>

    <div class="mt-8">
      <div class="flex flex-row mb-2">
        <img
          src="../../assets/headshot.png"
          class="rounded-full w-9 h-9 inline my-auto"
        />
        <div class="grow ml-2">
          <h1 class="font-bold text-sm">
            I have experience with using Vue and React,
          </h1>
          <p class="text-sm text-gray-600">Sarah Maison</p>
        </div>
      </div>
      <hr />
      <div class="flex flex-row mb-2 mt-2">
        <img
          src="../../assets/headshot.png"
          class="rounded-full w-9 h-9 inline my-auto"
        />
        <div class="grow ml-2">
          <h1 class="font-bold text-sm">
            using Tailwind and Bootstrap along with CSS,
          </h1>
          <p class="text-sm text-gray-600">Craig Matthews</p>
        </div>
      </div>
      <hr />
      <div class="flex flex-row mb-2 mt-2">
        <img
          src="../../assets/headshot.png"
          class="rounded-full w-9 h-9 inline my-auto"
        />
        <div class="grow ml-2">
          <h1 class="font-bold text-sm">
            and writing unit tests in Jest and Cypress!
          </h1>
          <p class="text-sm text-gray-600">Craig Matthews</p>
        </div>
      </div>
      <hr />
      <div class="flex flex-row mb-2 mt-2">
        <img
          src="../../assets/headshot.png"
          class="rounded-full w-9 h-9 inline my-auto"
        />
        <div class="grow ml-2">
          <h1 class="font-bold text-sm">OMG DID YOU SEE BRIAN'S NEW HAT?</h1>
          <p class="text-sm text-gray-600">Craig Matthews</p>
        </div>
      </div>
      <hr />
      <div class="flex flex-row mb-2 mt-2">
        <img
          src="../../assets/headshot.png"
          class="rounded-full w-9 h-9 inline my-auto"
        />
        <div class="grow ml-2">
          <h1 class="font-bold text-sm">
            I think he has dice but he's afraid to show...
          </h1>
          <p class="text-sm text-gray-600">Craig Matthews</p>
        </div>
      </div>
    </div>
  </div>
  <!-- </Draggable> -->
</template>

<style scoped>
</style>

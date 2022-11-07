<script setup lang="ts">
import Draggable from "./Draggable.vue";
import BBCIcon from "./icons/IconBBC.vue";
import { ref, computed } from "vue";

const panels = ["breaking-news", "top-stories", "pictures", "more"];

const index = ref(0);
const panel = computed(() => panels[index.value]);
</script>

<template>
  <Draggable :x="600" :y="100">
    <div class="max-w-md rounded-sm py-2 px-4 w-96">
      <div class="bg-bbc-red text-white font-bbc">
        <div class="flex justify-center"><BBCIcon class="" /></div>
        <div class="flex justify-evenly">
          <button
            :class="
              panel == 'breaking-news' ? 'underline underline-offset-8' : ''
            "
            @click="index = 0"
          >
            Breaking News
          </button>
          <button
            :class="
              panel == 'top-stories' ? 'underline underline-offset-8' : ''
            "
            @click="index = 1"
          >
            Top Stories
          </button>
          <button
            :class="panel == 'pictures' ? 'underline underline-offset-8' : ''"
            @click="index = 2"
          >
            Pictures
          </button>
          <button
            :class="panel == 'more' ? 'underline underline-offset-8' : ''"
            @click="index = 3"
          >
            More
          </button>
        </div>
      </div>
      <div class="bg-white dark:bg-black text-black dark:text-white font-bbc">
        <div v-if="panel == 'breaking-news'">
          <img
            src="../assets/headshot.png"
            class="w-96 h-64 block m-auto pointer-events-none"
          />
          <h1 class="p-2">
            AP: Jonathan has skills in front-end development using Vue 3, HTML,
            CSS, Tailwind, and modern JavaScript.
          </h1>
          <p class="px-2 font-light text-sm inline">1 hour ago</p>
          <span>|</span>
          <p class="pl-2 font-bold text-bbc-red text-sm inline">Technology</p>
        </div>
        <div v-if="panel == 'top-stories'" class="text-white">
          <img
            src="../assets/tech.jpg"
            class="w-96 relative pointer-events-none"
          />
          <div class="absolute w-full h-32 bg-black bottom-0 opacity-50"></div>
          <div class="absolute bottom-24 mx-3 font-bold">
            Beep beep boop boop.
          </div>
        </div>
      </div>
    </div>
  </Draggable>
</template>

<style scoped>
</style>

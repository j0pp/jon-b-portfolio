<script setup lang="ts">
import { ref } from "vue";
import { useDateFormat, useNow } from "@vueuse/core";
// const formatter = ref("");
// const formatted = useDateFormat(useNow(), formatter);
const time = "6:30";
const dayOW = "Monday";
const day = "November 11";
</script>

<template>
  <!-- <Draggable :x="100" :y="350"> -->
  <div
    class="
      max-w-sm
      drop-shadow-2xl
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
      dark:from-cyan-600 dark:to-blue-600
      text-slate-50
      dark:text-white
      relative
      py-2
      px-4
      mb-4
      h-96
      w-96
    "
  >
    <h1 class="text-[75px] absolute right-4 top-0 mb-2 opacity-50">
      {{ time }}
    </h1>
  </div>
  <!-- </Draggable> -->
</template>

<style scoped>
</style>

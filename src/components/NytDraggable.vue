<script setup lang="ts">
import Draggable from "./Draggable.vue";
import NytIconNew from "./icons/IconNyt.vue";
</script>

<template>
  <!-- <Draggable :x="100" :y="100"> -->
  <div
    class="
      max-w-md
      rounded-xl
      bg-white
      dark:bg-black
      text-black
      dark:text-white
      py-2
      px-4
      mb-4
    "
  >
    <div class="mb-4">
      <h1 class="font-nytheader text-lg inline">NYT Top Stories</h1>
      <NytIconNew class="inline float-right" />
    </div>
    <div>
      <p class="text-rose-600 font-bold">LIVE</p>
      <h2 class="font-nytheader text-md">
        Jonathan Beaubien is looking for a job in the Seattle, WA area or
        remote!
      </h2>
      <hr class="my-2" />
      <p class="font-serif text-sm">
        He has a B.S. in
        <i>Applied and Computational Mathematical Sciences</i> and 2 years of
        experience as a student and contract software engineer for UW-IT
      </p>
    </div>
  </div>
  <!-- </Draggable> -->
</template>

<style scoped>
</style>

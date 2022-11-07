<script setup lang="ts">
import Draggable from "../Draggable.vue";
import SpotifyIcon from "./IconSpotify.vue";
import PlayIcon from "./IconPlay.vue";
import SpotifyMusicLabel from "./SpotifyMusicLabel.vue";
</script>

<template>
  <!-- <Draggable :x="100" :y="350"> -->
  <div class="max-w-xs rounded-xl bg-green-500 text-white py-2 px-4 mb-4">
    <div class="flex">
      <SpotifyIcon class="ml-auto my-2" />
    </div>
    <div
      class="
        rounded-xl
        bg-green-400
        w-52
        h-52
        drop-shadow-2xl
        my-4
        mx-auto
        relative
      "
    >
      <div class="flex justify-between p-2">
        <SpotifyIcon class="w-4 h-4" />
      </div>
      <p class="font-bbc text-center py-4 font-bold">/////</p>
      <img
        src="../../assets/Montains.svg"
        class="pointer-events-none absolute bottom-8 mx-4"
      />
    </div>
    <div class="my-4 px-2">
      <h1 class="text-xl">Other technologies</h1>
      <div class="flex justify-between">
        <div>
          <h2 class="text-md">Jonathan Beaubien</h2>
          <SpotifyMusicLabel>DOCKER</SpotifyMusicLabel>
          <SpotifyMusicLabel>GIT</SpotifyMusicLabel>
          <SpotifyMusicLabel>JIRA</SpotifyMusicLabel>
        </div>
        <PlayIcon class="w-10 h-10 cursor-pointer" />
      </div>
    </div>
  </div>
  <!-- </Draggable> -->
</template>

<style scoped>
</style>

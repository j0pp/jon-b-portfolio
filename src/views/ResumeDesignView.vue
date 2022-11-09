<script setup lang="ts">
import NytDraggable from "@/components/NytDraggable.vue";
import BBCDraggable from "@/components/BBCDraggable.vue";
import SpotifyDraggable from "@/components/spotify/SpotifyDraggable.vue";
import TwitterDraggable from "@/components/twitter/TwitterDraggable.vue";
import CalendlyDraggable from "@/components/CalendlyDraggable.vue";
import SlackWidget from "@/components/slack/SlackWidget.vue";
</script>

<template>
  <div class="container mx-auto font-mono" ref="container">
    <p class="mx-auto max-w-md text-center px-3">
      This is a version of my resume that I made by imitating popular tech
      products. I am in no way associated with these companies, however.
    </p>

    <div class="mt-8 flex flex-col items-center">
      <SlackWidget />
      <NytDraggable />
      <!-- <BBCDraggable /> -->
      <TwitterDraggable />
      <SpotifyDraggable />
    </div>
  </div>
</template>

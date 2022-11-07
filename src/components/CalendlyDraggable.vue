<script setup lang="ts">
import Draggable from "./Draggable.vue";
</script>

<template>
  <Draggable :x="100" :y="350">
    ASD
    <!-- Calendly inline widget begin -->
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/jon-beaubien/30min"
      style="min-width: 320px; height: 630px"
    ></div>
    <!-- Calendly inline widget end -->
  </Draggable>
</template>

<style scoped>
</style>

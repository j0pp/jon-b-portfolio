<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import NytIconNew from "./icons/IconNyt.vue";

const props = defineProps<{
  x: number;
  y: number;
}>();

const el = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(el, {
  initialValue: { x: props.x, y: props.y },
  preventDefault: true,
});
</script>

<template>
  <div
    ref="el"
    :style="style"
    style="touch-action: none"
    class="fixed select-none cursor-move z-24"
    :prevent-default="true"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
</style>

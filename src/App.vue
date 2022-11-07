<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="mt-6 flex justify-center font-mono text-2xl">
    <a href="/">
      <h1 class="font-bold text-emerald-900 dark:text-emerald-100">
        Jonathan Beaubien
      </h1>
    </a>
  </div>
  <header>
    <div class="container mx-auto flex justify-center my-3 font-mono">
      <nav>
        <RouterLink
          to="/"
          class="
            bg-emerald-800
            dark:bg-emerald-800/30
            rounded
            p-1
            mx-1
            text-white
          "
          >Home</RouterLink
        >
        <RouterLink
          to="/resume"
          class="
            bg-emerald-800
            dark:bg-emerald-800/30
            rounded
            p-1
            mx-1
            text-white
          "
          >Resume</RouterLink
        >
      </nav>
      <button @click="toggleDark()" class="">
        {{ isDark ? "☀️" : "🌙" }}
      </button>
    </div>
  </header>

  <RouterView class="text-teal-700 dark:text-gray-400" />
</template>

<style scoped>
</style>

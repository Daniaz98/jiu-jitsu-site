<script setup lang="ts">
import { useTheme } from './hooks/useTheme'

useTheme()
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #ffffff;
  color: #000000;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark {
  background-color: #1a1a1a;
  color: #ffffff;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

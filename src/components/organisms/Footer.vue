<template>
  <footer class="mt-0 border-t border-primary/20 bg-surface-muted pt-2 pb-2 transition-colors duration-300 dark:bg-surface-dark">
    <div class="mx-auto grid max-w-[2200px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 px-4 max-md:grid-cols-1 max-md:gap-8">
      <div class="flex flex-col gap-1">
        <Logo size="sm" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from '../atoms/Logo.vue'
</script>

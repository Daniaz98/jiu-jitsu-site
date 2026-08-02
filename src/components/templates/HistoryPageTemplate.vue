<template>
  <div class="flex min-h-screen flex-col bg-surface transition-colors duration-300 dark:bg-surface-dark">
    <slot name="header" />

    <slot name="hero" />

    <main class="flex-1 py-8">
      <Container size="large">
        <slot name="content" />
        <slot name="nav" />
      </Container>
    </main>

    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import Container from '../atoms/Container.vue';
</script>

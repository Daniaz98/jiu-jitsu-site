<template>
  <div class="graduacao-template">
    <slot name="header" />
    
    <slot name="hero" />
    
    <main class="graduacao-template__main">
      <Container size="large">
        <slot name="content" />
      </Container>
    </main>
    
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import Container from '../atoms/Container.vue';
</script>

<style scoped>
.graduacao-template {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.dark .graduacao-template {
  background-color: #1a1a1a;
}

.graduacao-template__main {
  flex: 1;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .graduacao-template__main {
    padding: 2rem 0;
  }
}
</style>


<template>
  <div class="history-template">
    <slot name="header" />
    
    <slot name="hero" />
    
    <main class="history-template__main">
      <Container size="medium">
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
.history-template {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.dark .history-template {
  background-color: #1a1a1a;
}

.history-template__main {
  flex: 1;
  padding: 4rem 0;
}

@media (max-width: 768px) {
  .history-template__main {
    padding: 2rem 0;
  }
}
</style>
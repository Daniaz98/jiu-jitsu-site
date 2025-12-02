<template>
  <div class="competicoes-template">
    <slot name="header" />
    
    <slot name="hero" />
    
    <main class="competicoes-template__main">
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
.competicoes-template {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.dark .competicoes-template {
  background-color: #1a1a1a;
}

.competicoes-template__main {
  flex: 1;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .competicoes-template__main {
    padding: 2rem 0;
  }
}
</style>


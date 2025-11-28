<template>
  <header class="header">
    <div class="header__container">
      <Logo />
      <div class="header__right">
        <Navigation :links="navLinks" />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '../atoms/Logo.vue'
import Navigation from '../molecules/Navigation.vue'
import ThemeToggle from '../atoms/ThemeToggle.vue'

const route = useRoute()

const navLinks = computed(() => [
  { href: '/', label: 'Início' },
  { href: '/historia', label: 'História' },
  { href: '/federacoes', label: 'Federações' },
  { href: '/competicoes', label: 'Competições' },
  { href: '/contato', label: 'Encontre uma Academia' }
])
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(211, 47, 47, 0.2);
  transition: background-color 0.3s ease;
}

.dark .header {
  background-color: rgba(0, 0, 0, 0.9);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .header__container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
}
</style>


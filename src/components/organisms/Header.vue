<template>
  <header class="header">
    <div class="header__container">
      <Logo />
      <Navigation :links="navLinks" />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '../atoms/Logo.vue'
import Navigation from '../molecules/Navigation.vue'

const navLinks = [
  { href: '#home', label: 'Início', active: true },
  { href: '#sobre', label: 'Sobre' },
  { href: '#aulas', label: 'Aulas' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' }
]
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(211, 47, 47, 0.2);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .header__container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
}
</style>


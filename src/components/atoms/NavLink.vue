<template>
  <a :href="href" :class="['nav-link', { 'nav-link--active': active }]">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  active?: boolean
}>()
</script>

<style scoped>
.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.1);
}

.nav-link--active {
  color: #d32f2f;
}

.nav-link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background-color: #d32f2f;
}
</style>


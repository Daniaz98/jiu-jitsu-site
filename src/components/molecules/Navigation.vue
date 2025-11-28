<template>
  <nav class="navigation">
    <NavLink v-for="link in links" :key="link.href" :href="link.href" :active="link.active">
      {{ link.label }}
    </NavLink>
  </nav>
</template>

<script setup lang="ts">
import NavLink from '../atoms/NavLink.vue'

defineProps<{
  links: Array<{ href: string; label: string; active?: boolean }>
}>()
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    width: 100%;
    gap: 0.25rem;
  }
}
</style>


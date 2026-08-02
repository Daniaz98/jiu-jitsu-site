<template>
  <nav class="flex items-center gap-2 max-md:flex-col max-md:w-full max-md:gap-1">
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

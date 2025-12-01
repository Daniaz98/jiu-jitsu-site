<template>
  <RouterLink :to="href" :class="['nav-link', { 'nav-link--active': isActive }]">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  href: string
  active?: boolean
}>()

const route = useRoute()

const isActive = computed(() => {
  if (props.active !== undefined) {
    return props.active
  }
  if (props.href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(props.href)
})
</script>

<style scoped>
.nav-link {
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.dark .nav-link {
  color: #ffffff;
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


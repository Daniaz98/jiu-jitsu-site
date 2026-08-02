<template>
  <RouterLink
    :to="href"
    :class="[
      'relative px-4 py-2 rounded font-medium no-underline transition-all duration-300',
      'text-black dark:text-white hover:text-primary hover:bg-primary/10',
      isActive && 'text-primary after:content-[\'\'] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary',
    ]"
  >
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

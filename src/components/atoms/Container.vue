<template>
  <div :class="['mx-auto px-4 md:px-8', sizeClasses[size]]">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'small' | 'medium' | 'large' | 'full'
}>(), {
  size: 'medium',
})

const sizeClasses = {
  small: 'max-w-3xl',
  medium: 'max-w-[900px]',
  large: 'max-w-[1200px]',
  full: 'max-w-full',
} as const
</script>

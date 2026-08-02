<template>
  <p :class="[baseClasses, sizeClasses[size], colorClasses[color]]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'white'
}>(), {
  size: 'medium',
  color: 'primary',
})

const baseClasses = 'm-0 leading-relaxed'

const sizeClasses = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
} as const

const colorClasses = {
  primary: 'text-black transition-colors duration-300 dark:text-white',
  secondary: 'text-secondary-light transition-colors duration-300 dark:text-[#b0b0b0]',
  white: 'text-white',
} as const
</script>

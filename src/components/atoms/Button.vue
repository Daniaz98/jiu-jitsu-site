<template>
  <button
    :class="[baseClasses, variantClasses[variant], sizeClasses[size]]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}>(), {
  variant: 'primary',
  size: 'medium',
})

defineEmits<{
  click: []
}>()

const baseClasses =
  'inline-flex items-center justify-center rounded-lg border-2 border-transparent font-semibold cursor-pointer font-inherit no-underline transition-all duration-300'

const variantClasses = {
  primary:
    'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(211,47,47,0.3)]',
  secondary:
    'bg-secondary text-white hover:bg-secondary-light hover:-translate-y-0.5',
  outline:
    'bg-transparent text-primary border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
} as const

const sizeClasses = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
} as const
</script>

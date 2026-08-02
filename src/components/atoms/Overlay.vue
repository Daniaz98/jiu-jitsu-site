<template>
  <div
    :class="['absolute inset-0 pointer-events-none', variantClasses[variant]]"
    :style="{ opacity }"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'dark' | 'light' | 'gradient' | 'primary';
  opacity?: number;
}>(), {
  variant: 'dark',
  opacity: 0.6,
});

const variantClasses = {
  dark: 'bg-black/70',
  light: 'bg-white/70',
  gradient: 'bg-[linear-gradient(135deg,rgba(211,47,47,0.85)_0%,rgba(0,0,0,0.75)_100%)]',
  primary: 'bg-primary/80',
} as const;
</script>

<template>
  <p :class="['text', `text--${size}`, `text--${color}`]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'white'
}>()
</script>

<style scoped>
.text {
  margin: 0;
  line-height: 1.6;
}

.text--small {
  font-size: 0.875rem;
}

.text--medium {
  font-size: 1rem;
}

.text--large {
  font-size: 1.125rem;
}

.text--primary {
  color: #000000;
  transition: color 0.3s ease;
}

.dark .text--primary {
  color: #ffffff;
}

.text--secondary {
  color: #616161;
  transition: color 0.3s ease;
}

.dark .text--secondary {
  color: #b0b0b0;
}

.text--white {
  color: #ffffff;
}
</style>


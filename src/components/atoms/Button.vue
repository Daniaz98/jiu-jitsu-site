<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn--small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn--medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn--primary {
  background-color: #d32f2f;
  color: white;
}

.btn--primary:hover {
  background-color: #b71c1c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
}

.btn--secondary {
  background-color: #424242;
  color: white;
}

.btn--secondary:hover {
  background-color: #616161;
  transform: translateY(-2px);
}

.btn--outline {
  background-color: transparent;
  color: #d32f2f;
  border: 2px solid #d32f2f;
}

.btn--outline:hover {
  background-color: #d32f2f;
  color: white;
  transform: translateY(-2px);
}
</style>


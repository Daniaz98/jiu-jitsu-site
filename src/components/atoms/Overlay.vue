<template>
  <div 
    :class="['overlay', `overlay--${variant}`]"
    :style="{ opacity }"
  />
</template>

<script setup lang="ts">
interface Props {
  variant?: 'dark' | 'light' | 'gradient' | 'primary';
  opacity?: number;
}

withDefaults(defineProps<Props>(), {
  variant: 'dark',
  opacity: 0.6,
});
</script>

<style scoped>
.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.overlay--dark {
  background-color: rgba(0, 0, 0, 0.7);
}

.overlay--light {
  background-color: rgba(255, 255, 255, 0.7);
}

.overlay--gradient {
  background: linear-gradient(
    135deg,
    rgba(211, 47, 47, 0.85) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
}

.overlay--primary {
  background-color: rgba(211, 47, 47, 0.8);
}
</style>
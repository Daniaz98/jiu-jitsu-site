<template>
  <div :class="['container', `container--${size}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'small' | 'medium' | 'large' | 'full';
}

withDefaults(defineProps<Props>(), {
  size: 'medium',
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 2rem;
}

.container--small {
  max-width: 768px;
}

.container--medium {
  max-width: 900px;
}

.container--large {
  max-width: 1200px;
}

.container--full {
  max-width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
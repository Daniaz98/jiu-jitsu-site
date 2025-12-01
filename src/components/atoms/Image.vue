<template>
  <img
    :src="src"
    :alt="alt"
    :class="['image', `image--${variant}`, { 'image--loading': loading }]"
    :loading="lazyLoad ? 'lazy' : 'eager'"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  src: string;
  alt: string;
  variant?: 'cover' | 'contain' | 'rounded' | 'circle';
  lazyLoad?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'cover',
  lazyLoad: true,
});

const loading = ref(true);
const emit = defineEmits(['load', 'error']);

const handleLoad = () => {
  loading.value = false;
  emit('load');
};

const handleError = () => {
  loading.value = false;
  emit('error');
};
</script>

<style scoped>
.image {
  display: block;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.image--cover {
  object-fit: cover;
}

.image--contain {
  object-fit: contain;
}

.image--rounded {
  border-radius: 0.5rem;
}

.image--circle {
  border-radius: 50%;
}

.image--loading {
  opacity: 0.5;
}
</style>
<template>
  <img
    :src="src"
    :alt="alt"
    :class="[
      'block w-full h-full transition-opacity duration-300',
      variantClasses[variant],
      loading && 'opacity-50',
    ]"
    :loading="lazyLoad ? 'lazy' : 'eager'"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
  src: string;
  alt: string;
  variant?: 'cover' | 'contain' | 'rounded' | 'circle';
  lazyLoad?: boolean;
}>(), {
  variant: 'cover',
  lazyLoad: true,
});

const loading = ref(true);
const emit = defineEmits(['load', 'error']);

const variantClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  rounded: 'object-cover rounded-lg',
  circle: 'object-cover rounded-full',
} as const;

const handleLoad = () => {
  loading.value = false;
  emit('load');
};

const handleError = () => {
  loading.value = false;
  emit('error');
};
</script>

<template>
  <component :is="tag" :class="['heading', `heading--${level}`]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
}>()

const tag = computed(() => `h${props.level || 1}`)
</script>

<style scoped>
.heading {
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
}

.heading--1 {
  font-size: 3.5rem;
}

.heading--2 {
  font-size: 2.5rem;
}

.heading--3 {
  font-size: 2rem;
}

.heading--4 {
  font-size: 1.5rem;
}

.heading--5 {
  font-size: 1.25rem;
}

.heading--6 {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .heading--1 {
    font-size: 2.5rem;
  }
  
  .heading--2 {
    font-size: 2rem;
  }
  
  .heading--3 {
    font-size: 1.75rem;
  }
}
</style>


<template>
  <component :is="tag" :class="[baseClasses, levelClasses[level]]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
}>(), {
  level: 1,
})

const tag = computed(() => `h${props.level}`)

const baseClasses =
  'm-0 font-bold leading-tight text-black transition-colors duration-300 dark:text-white'

const levelClasses = {
  1: 'text-[2.5rem] md:text-[3.5rem]',
  2: 'text-[2rem] md:text-[2.5rem]',
  3: 'text-[1.75rem] md:text-[2rem]',
  4: 'text-2xl',
  5: 'text-xl',
  6: 'text-base',
} as const
</script>

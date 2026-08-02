<template>
  <div :class="['flex items-center gap-2 font-bold text-primary no-underline leading-none', sizeClasses[size].root]">
    <slot>
      <img
        :src="logo"
        alt="Atlas Jiu Jitsu"
        :class="['block w-auto object-contain shrink-0 mt-[0.3rem]', sizeClasses[size].img]"
      >
      <span class="tracking-[2px]">ATLAS JIU JITSU</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import logo from '../../assets/red_pyramid.png'

withDefaults(defineProps<{
  size?: 'sm' | 'md'
}>(), {
  size: 'md',
})

const sizeClasses = {
  sm: { root: 'text-base', img: 'h-6' },
  md: { root: 'text-xl', img: 'h-8' },
} as const
</script>

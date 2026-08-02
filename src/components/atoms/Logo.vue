<template>
  <div class="logo" :class="`logo--${size}`">
    <slot>
      <img :src="logo" alt="Atlas Jiu Jitsu" class="logo__img">
      <span class="logo-text">ATLAS JIU JITSU</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import logo from '../../assets/red_pyramid.png'

withDefaults(defineProps<{
  size?: 'sm' | 'md'
}>(), {
  size: 'md'
})
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: #d32f2f;
  text-decoration: none;
  line-height: 1;
}

.logo__img {
  display: block;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
  margin-top: 0.3rem;
}

.logo--sm {
  font-size: 1rem;
}

.logo--sm .logo__img {
  height: 1.5rem;
}

.logo--md {
  font-size: 1.25rem;
}

.logo--md .logo__img {
  height: 2rem;
}

.logo-text {
  letter-spacing: 2px;
}
</style>

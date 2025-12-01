<template>
  <div class="hero-content">
    <Heading :level="1" class="hero-content__title">
      <slot name="title" />
    </Heading>
    <Text size="large" class="hero-content__subtitle">
      <slot name="subtitle" />
    </Text>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';
</script>

<style scoped>
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content__title {
  color: #ffffff !important;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 0.8s ease-out;
}

.hero-content__subtitle {
  color: #ffffff !important;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
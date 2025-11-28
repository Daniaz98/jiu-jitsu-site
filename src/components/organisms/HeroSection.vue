<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <Heading :level="1" class="hero__title">
        {{ title }}
      </Heading>
      <Text size="large" color="primary" class="hero__subtitle">
        {{ subtitle }}
      </Text>
      <div class="hero__actions">
        <Button variant="primary" size="large" @click="$emit('cta-click')">
          {{ ctaText }}
        </Button>
        <Button variant="outline" size="large" @click="$emit('secondary-click')">
          {{ secondaryText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import Text from '../atoms/Text.vue'
import Button from '../atoms/Button.vue'

defineProps<{
  title?: string
  subtitle?: string
  ctaText?: string
  secondaryText?: string
}>()

defineEmits<{
  'cta-click': []
  'secondary-click': []
}>()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(234, 215, 215, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(211, 47, 47, 0.05) 0%, transparent 50%);
  overflow: hidden;
  transition: background 0.3s ease;
}

.dark .hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(211, 47, 47, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(211, 47, 47, 0.1) 0%, transparent 50%);
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  transition: background 0.3s ease;
}

.dark .hero__overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  animation: fadeInUp 1s ease-out;
}

.hero__title {
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: text-shadow 0.3s ease;
}

.dark .hero__title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero__subtitle {
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
}

.hero__subtitle .text--primary {
  color: #424242;
}

.dark .hero__subtitle .text--primary {
  color: #ffffff;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .hero__content {
    padding: 1rem;
  }
  
  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .hero__actions .btn {
    width: 100%;
  }
}
</style>


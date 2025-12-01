<template>
  <div 
    class="history-section" 
    :style="{ animationDelay: `${animationDelay}s` }"
  >
    <Heading :level="2" class="history-section__title">
      {{ title }}
    </Heading>
    <div class="history-section__text">
      <Text
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        size="medium"
        color="primary"
        class="history-section__paragraph"
      >
        {{ paragraph }}
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';

defineProps<{
  title: string;
  paragraphs: string[];
  animationDelay?: number;
}>();
</script>

<style scoped>
.history-section {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.history-section__title {
  margin-bottom: 1.5rem;
  color: #d32f2f;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(211, 47, 47, 0.3);
  transition: border-color 0.3s ease;
}

.dark .history-section__title {
  border-bottom-color: rgba(211, 47, 47, 0.5);
}

.history-section__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.history-section__paragraph {
  text-align: justify;
  line-height: 1.8;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .history-section__title {
    font-size: 1.75rem;
  }

  .history-section__paragraph {
    text-align: left;
  }
}
</style>


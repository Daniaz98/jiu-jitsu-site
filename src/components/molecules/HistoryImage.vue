<template>
  <figure class="history-image">
    <div class="history-image__wrapper">
      <Image
        :src="src"
        :alt="alt"
        variant="rounded"
        :lazy-load="true"
        class="history-image__img"
      />
    </div>
    <figcaption v-if="caption" class="history-image__caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import Image from '../atoms/Image.vue';

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

withDefaults(defineProps<Props>(), {
  caption: '',
});
</script>

<style scoped>
.history-image {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.history-image__wrapper {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.history-image__wrapper:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.dark .history-image__wrapper {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dark .history-image__wrapper:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
}

.history-image__img {
  width: 100%;
  height: auto;
  display: block;
}

.history-image__caption {
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
  padding: 0 1rem;
  line-height: 1.5;
}

.dark .history-image__caption {
  color: #999;
}

@media (max-width: 768px) {
  .history-image {
    margin: 1.5rem 0;
  }

  .history-image__caption {
    font-size: 0.8125rem;
    padding: 0 0.5rem;
  }
}
</style>


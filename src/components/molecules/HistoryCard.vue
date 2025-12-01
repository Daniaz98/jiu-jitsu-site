<template>
  <RouterLink :to="href" class="history-card">
    <div class="history-card__image-wrapper">
      <Heading :level="3" class="history-card__title">
        {{ title }}
      </Heading>
      <Image
        :src="imageSrc"
        :alt="imageAlt"
        variant="cover"
        class="history-card__image"
      />
      <div class="history-card__overlay"></div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Image from '../atoms/Image.vue';
import Heading from '../atoms/Heading.vue';

interface Props {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

defineProps<Props>();
</script>

<style scoped>
.history-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.history-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(211, 47, 47, 0.2);
}

.dark .history-card {
  background-color: #2d2d2d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.dark .history-card:hover {
  box-shadow: 0 12px 24px rgba(211, 47, 47, 0.3);
}

.history-card__image-wrapper {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.history-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.history-card:hover .history-card__image {
  transform: scale(1.1);
}

.history-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  transition: background 0.3s ease;
}

.history-card:hover .history-card__overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(211, 47, 47, 0.4) 100%
  );
}

.history-card__content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-card__title {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin: 0;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .history-card__image-wrapper {
    height: 220px;
  }

  .history-card__content {
    padding: 1.25rem;
  }
}
</style>


<template>
  <article
    class="content-section"
    :style="{ animationDelay: `${animationDelay}s` }"
  >
    <header class="content-section__header">
      <Heading :level="2" class="content-section__title">
        {{ title }}
      </Heading>
    </header>

    <div class="content-section__body">
      <template v-for="(paragraph, index) in paragraphs" :key="`paragraph-${index}`">
        <ContentParagraph :text="paragraph" />
        <template v-for="(image) in getImagesAfterParagraph(index)" :key="`image-${index}-${imageIndex}`">
          <HistoryImage
            :src="image.src"
            :alt="image.alt"
            :caption="image.caption"
          />
        </template>
      </template>
    </div>
  </article>
</template>

<script setup lang="ts">
import Heading from "../atoms/Heading.vue";
import ContentParagraph from "../molecules/ContentParagraph.vue";
import HistoryImage from "../molecules/HistoryImage.vue";

export interface HistoryImageData {
  src: string;
  alt: string;
  caption?: string;
  position: number;
}

interface Props {
  title: string;
  paragraphs: string[];
  images?: HistoryImageData[];
  animationDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  images: () => [],
  animationDelay: 0,
});

const getImagesAfterParagraph = (paragraphIndex: number): HistoryImageData[] => {
  return props.images?.filter(img => img.position === paragraphIndex) || [];
};
</script>

<style scoped>
.content-section {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.content-section:last-child {
  border-bottom: none;
}

.dark .content-section {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.content-section__header {
  margin-bottom: 1.5rem;
}

.content-section__title {
  color: #d32f2f;
  position: relative;
  padding-bottom: 0.75rem;
}

.content-section__title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background-color: #d32f2f;
}

.content-section__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@keyframes fadeIn {
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
  .content-section {
    padding: 1.5rem 0;
  }
}
</style>

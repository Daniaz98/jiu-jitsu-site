<template>
  <article
    class="animate-[fade-in_0.6s_ease-out_forwards] border-b border-black/10 py-8 opacity-0 last:border-b-0 dark:border-white/10 max-md:py-6"
    :style="{ animationDelay: `${animationDelay}s` }"
  >
    <header class="mb-6">
      <Heading :level="2" class="relative pb-3 text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[60px] after:bg-primary after:content-['']">
        {{ title }}
      </Heading>
    </header>

    <div class="flex flex-col gap-6">
      <template v-for="(paragraph, index) in paragraphs" :key="`paragraph-${index}`">
        <ContentParagraph :text="paragraph" />
        <HistoryImage
          v-for="image in getImagesAfterParagraph(index)"
          :key="`${image.src}-${index}`"
          :src="image.src"
          :alt="image.alt"
          :caption="image.caption"
        />
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

const props = withDefaults(defineProps<{
  title?: string;
  paragraphs?: string[];
  images?: HistoryImageData[];
  animationDelay?: number;
}>(), {
  images: () => [],
  animationDelay: 0,
});

const getImagesAfterParagraph = (paragraphIndex: number): HistoryImageData[] => {
  return props.images?.filter(img => img.position === paragraphIndex) || [];
};
</script>

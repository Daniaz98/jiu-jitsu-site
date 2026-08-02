<template>
  <div
    class="animate-[fade-in-up_0.6s_ease-out_forwards] opacity-0"
    :style="{ animationDelay: `${animationDelay}s` }"
  >
    <Heading
      :level="2"
      class="mb-6 border-b border-primary/30 pb-2 text-primary transition-[border-color] duration-300 dark:border-primary/50 max-md:text-[1.75rem]"
    >
      {{ title }}
    </Heading>
    <div class="flex flex-col gap-6">
      <Text
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        size="medium"
        color="primary"
        class="text-justify leading-[1.8] max-md:text-left"
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

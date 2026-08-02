<template>
  <RouterLink
    :to="href"
    class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white no-underline shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(211,47,47,0.2)] dark:bg-surface-dark-muted dark:shadow-[0_4px_6px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_24px_rgba(211,47,47,0.3)]"
  >
    <div class="relative h-[70vh] w-full overflow-hidden max-md:h-[220px]">
      <Heading
        :level="3"
        class="absolute bottom-6 left-6 right-6 z-[2] m-0 !text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)] transition-transform duration-300"
      >
        {{ title }}
      </Heading>
      <Image
        :src="imageSrc"
        :alt="imageAlt"
        variant="cover"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.3)_100%)] transition-[background] duration-300 group-hover:bg-[linear-gradient(to_bottom,transparent_0%,rgba(211,47,47,0.4)_100%)]"
      />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Image from '../atoms/Image.vue';
import Heading from '../atoms/Heading.vue';

defineProps<{
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}>();
</script>

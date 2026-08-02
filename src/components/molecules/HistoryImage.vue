<template>
  <figure class="my-8 flex flex-col gap-3 max-md:my-6">
    <div
      class="mx-auto w-full max-w-[500px] overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_6px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_8px_12px_rgba(0,0,0,0.5)]"
    >
      <Image
        :src="src"
        :alt="alt"
        variant="rounded"
        :lazy-load="true"
        class="block h-auto w-full"
      />
    </div>
    <figcaption
      v-if="caption"
      class="px-4 text-center text-sm italic leading-normal text-[#666] dark:text-[#999] max-md:px-2 max-md:text-[0.8125rem]"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import Image from '../atoms/Image.vue';

withDefaults(defineProps<{
  src: string;
  alt: string;
  caption?: string;
}>(), {
  caption: '',
});
</script>

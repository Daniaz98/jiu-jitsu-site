<template>
  <div class="relative z-[1] mx-auto max-w-[800px] p-8 text-center">
    <Heading
      :level="1"
      class="mb-4 !text-white text-[clamp(2rem,5vw,3.5rem)] [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] animate-[fade-in-up_0.8s_ease-out]"
    >
      <slot name="title" />
    </Heading>
    <Text
      size="large"
      color="white"
      class="!text-white text-[clamp(1rem,2.5vw,1.25rem)] [text-shadow:1px_1px_4px_rgba(0,0,0,0.5)] animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
    >
      <slot name="subtitle" />
    </Text>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';
</script>

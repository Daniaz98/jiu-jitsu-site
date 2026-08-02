<template>
  <Text
    :size="size"
    color="secondary"
    class="mb-6 text-justify leading-[1.8] last:mb-0"
  >
    {{ text }}
  </Text>
</template>

<script setup lang="ts">
import Text from '../atoms/Text.vue';

withDefaults(defineProps<{
  text: string;
  size?: 'small' | 'medium' | 'large';
}>(), {
  size: 'medium',
});
</script>

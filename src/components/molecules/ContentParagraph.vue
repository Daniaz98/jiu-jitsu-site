<template>
  <Text 
    :size="size" 
    color="secondary" 
    class="content-paragraph"
  >
    {{ text }}
  </Text>
</template>

<script setup lang="ts">
import Text from '../atoms/Text.vue';

interface Props {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

withDefaults(defineProps<Props>(), {
  size: 'medium',
});
</script>

<style scoped>
.content-paragraph {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.content-paragraph:last-child {
  margin-bottom: 0;
}
</style>
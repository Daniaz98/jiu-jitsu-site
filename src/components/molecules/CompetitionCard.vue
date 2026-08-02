<template>
  <div
    class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(211,47,47,0.2)] dark:bg-surface-dark-muted dark:shadow-[0_4px_6px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_24px_rgba(211,47,47,0.3)]"
  >
    <div class="relative h-[250px] w-full overflow-hidden max-md:h-[200px]">
      <Image
        :src="imageSrc"
        :alt="imageAlt"
        variant="cover"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_100%)] transition-[background] duration-300 group-hover:bg-[linear-gradient(to_bottom,transparent_0%,rgba(211,47,47,0.3)_100%)]"
      />
      <div
        v-if="badge"
        class="absolute top-4 right-4 z-[2] rounded-[20px] bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.5px] text-white"
      >
        {{ badge }}
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-6 max-md:gap-3 max-md:p-5">
      <Heading :level="3" class="m-0 text-primary">
        {{ title }}
      </Heading>

      <div class="flex flex-col gap-3">
        <div v-if="date" class="flex flex-col gap-1">
          <Text size="small" color="secondary" class="text-xs font-semibold uppercase tracking-[0.5px]">
            Data
          </Text>
          <Text size="medium" color="primary" class="font-medium">
            {{ date }}
          </Text>
        </div>

        <div v-if="location" class="flex flex-col gap-1">
          <Text size="small" color="secondary" class="text-xs font-semibold uppercase tracking-[0.5px]">
            Local
          </Text>
          <Text size="medium" color="primary" class="font-medium">
            {{ location }}
          </Text>
        </div>

        <div v-if="type" class="flex flex-col gap-1">
          <Text size="small" color="secondary" class="text-xs font-semibold uppercase tracking-[0.5px]">
            Tipo
          </Text>
          <Text size="medium" color="primary" class="font-medium">
            {{ type }}
          </Text>
        </div>
      </div>

      <Text v-if="description" size="medium" color="secondary" class="flex-1">
        {{ description }}
      </Text>

      <div v-if="href" class="mt-auto pt-4">
        <Button variant="primary" size="medium" @click="handleClick">
          Ver Detalhes
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '../atoms/Image.vue';
import Heading from '../atoms/Heading.vue';
import Text from '../atoms/Text.vue';
import Button from '../atoms/Button.vue';

const props = defineProps<{
  title: string;
  imageSrc: string;
  imageAlt: string;
  date?: string;
  location?: string;
  type?: string;
  description?: string;
  badge?: string;
  href?: string;
}>();

const emit = defineEmits<{
  click: []
}>();

const handleClick = () => {
  if (props.href) {
    window.open(props.href, '_blank');
  }
  emit('click');
};
</script>

<template>
  <section
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f5_100%)] transition-[background] duration-300 dark:bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_100%)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_50%,rgba(234,215,215,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(211,47,47,0.05)_0%,transparent_50%)] dark:before:bg-[radial-gradient(circle_at_20%_50%,rgba(211,47,47,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(211,47,47,0.1)_0%,transparent_50%)]"
  >
    <div
      class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_100%)] transition-[background] duration-300 dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.6)_100%)]"
    />
    <div class="relative z-[1] max-w-[800px] animate-fade-in-up p-8 text-center max-md:p-4">
      <Heading :level="1" class="mb-6 text-shadow-sm dark:drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
        {{ title }}
      </Heading>
      <Text size="large" color="secondary" class="mb-10 text-xl dark:text-white">
        {{ subtitle }}
      </Text>
      <div class="flex flex-wrap justify-center gap-4 max-md:flex-col max-md:items-stretch [&>button]:max-md:w-full">
        <Button variant="primary" size="large" @click="$emit('cta-click')">
          {{ ctaText }}
        </Button>
        <Button variant="outline" size="large" @click="$emit('secondary-click')">
          {{ secondaryText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue'
import Text from '../atoms/Text.vue'
import Button from '../atoms/Button.vue'

defineProps<{
  title?: string
  subtitle?: string
  ctaText?: string
  secondaryText?: string
}>()

defineEmits<{
  'cta-click': []
  'secondary-click': []
}>()
</script>

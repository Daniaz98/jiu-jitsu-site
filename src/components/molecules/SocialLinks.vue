<template>
  <div class="flex items-center gap-4">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-2xl text-black no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20 hover:text-primary dark:bg-white/10 dark:text-white"
    >
      <slot :name="link.icon" :link="link">
        {{ link.label }}
      </slot>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{ href: string; label: string; icon?: string }>
}>()
</script>

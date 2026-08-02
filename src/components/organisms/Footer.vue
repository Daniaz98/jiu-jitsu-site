<template>
  <footer class="mt-0 border-t border-primary/20 bg-surface-muted pt-8 pb-4 transition-colors duration-300 dark:bg-surface-dark">
    <div class="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 px-4 max-md:grid-cols-1 max-md:gap-8">
      <div class="flex flex-col gap-4">
        <Logo size="sm" />
        <Text size="medium" color="secondary" class="mt-2">
          {{ description }}
        </Text>
      </div>

      <div class="flex flex-col gap-4">
        <Heading :level="4" class="mb-2 text-lg">Links Rápidos</Heading>
        <nav class="flex flex-col gap-2">
          <a
            v-for="link in quickLinks"
            :key="link.href"
            :href="link.href"
            class="text-secondary-light no-underline transition-colors duration-300 hover:text-primary dark:text-[#b0b0b0]"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>

    <div class="mx-auto mt-8 max-w-[1200px] border-t border-black/10 px-8 pt-6 text-center transition-colors duration-300 dark:border-white/10">
      <Text size="small" color="secondary">
        &copy; {{ currentYear }} {{ siteName }}. Todos os direitos reservados.
      </Text>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Logo from '../atoms/Logo.vue'
import Heading from '../atoms/Heading.vue'
import Text from '../atoms/Text.vue'

defineProps<{
  description?: string
  siteName?: string
  quickLinks?: Array<{ href: string; label: string }>
  contactInfo?: {
    address: string
    phone: string
    email: string
  }
  socialLinks?: Array<{ href: string; label: string; icon?: string }>
}>()

const currentYear = computed(() => new Date().getFullYear())
</script>

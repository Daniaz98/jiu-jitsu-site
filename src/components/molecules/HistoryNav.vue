<template>
  <nav
    class="mt-12 flex flex-col gap-4 border-t border-primary/20 pt-8 sm:flex-row sm:items-center sm:justify-between"
    aria-label="Navegação entre páginas da história"
  >
    <div class="flex min-h-[3rem] flex-1 justify-start">
      <RouterLink
        v-if="prev"
        :to="prev.path"
        :class="linkClasses"
      >
        <span aria-hidden="true">←</span>
        <span class="flex flex-col items-start">
          <Text size="small" color="secondary" class="!text-inherit opacity-70">Anterior</Text>
          <span>{{ prev.title }}</span>
        </span>
      </RouterLink>
    </div>

    <div class="flex justify-center">
      <RouterLink
        to="/historia"
        class="text-sm font-medium text-secondary-light no-underline transition-colors duration-300 hover:text-primary dark:text-[#b0b0b0]"
      >
        Todas as histórias
      </RouterLink>
    </div>

    <div class="flex min-h-[3rem] flex-1 justify-end">
      <RouterLink
        v-if="next"
        :to="next.path"
        :class="[linkClasses, 'text-right']"
      >
        <span class="flex flex-col items-end">
          <Text size="small" color="secondary" class="!text-inherit opacity-70">Próxima</Text>
          <span>{{ next.title }}</span>
        </span>
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Text from '../atoms/Text.vue'
import { useHistoryNavigation } from '../../composables/useHistoryNavigation'

const { prev, next } = useHistoryNavigation()

const linkClasses =
  'inline-flex items-center gap-3 rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white'
</script>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { historyPages } from './useHistoryContent'

export function useHistoryNavigation() {
  const route = useRoute()

  const index = computed(() =>
    historyPages.findIndex((page) => page.path === route.path),
  )

  const prev = computed(() =>
    index.value > 0 ? historyPages[index.value - 1] : null,
  )

  const next = computed(() =>
    index.value >= 0 && index.value < historyPages.length - 1
      ? historyPages[index.value + 1]
      : null,
  )

  return {
    prev,
    next,
    index,
  }
}

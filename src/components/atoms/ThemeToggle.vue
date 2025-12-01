<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="
      theme === 'dark'
        ? 'Alternar para modo claro'
        : 'Alternar para modo escuro'
    "
    type="button"
  >
    <svg
      v-if="theme === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="theme-toggle__icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="theme-toggle__icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "../../composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: currentColor;
}

.theme-toggle:hover {
  transform: scale(1.1);
  background-color: rgba(211, 47, 47, 0.1);
  border-color: #d32f2f;
}

.theme-toggle__icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .theme-toggle__icon {
  transform: rotate(15deg);
}
</style>

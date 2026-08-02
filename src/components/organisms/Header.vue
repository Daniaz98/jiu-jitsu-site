<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-[1000] border-b border-primary/20 bg-white/90 py-4 backdrop-blur-[10px] transition-[transform,background-color] duration-300 ease-in-out dark:bg-black/90',
      showHeader ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <div class="mx-auto flex max-w-[1200px] items-center justify-between px-8 max-md:flex-col max-md:gap-4 max-md:px-4">
      <Logo size="md" />
      <div class="flex items-center gap-4">
        <Navigation :links="navLinks" />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import Logo from '../atoms/Logo.vue'
import Navigation from '../molecules/Navigation.vue'
import ThemeToggle from '../atoms/ThemeToggle.vue'

const showHeader = ref(true)
let lastScrollY = window.scrollY
let ticking = false

const navLinks = computed(() => [
  { href: '/', label: 'Início' },
  { href: '/historia', label: 'História' },
  { href: '/graduacao', label: 'Graduação' },
  { href: '/competicoes', label: 'Competições' },
  { href: '/busca-academia', label: 'Encontre uma Academia' }
])

function handleScroll() {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    showHeader.value = false
  } else {
    showHeader.value = true
  }

  lastScrollY = currentScrollY
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

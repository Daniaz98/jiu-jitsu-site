import { ref } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('dark')

// Inicializa o tema imediatamente (antes do mount)
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  
  if (savedTheme) {
    theme.value = savedTheme
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = prefersDark ? 'dark' : 'light'
  }
  
  applyTheme(theme.value)
}

const applyTheme = (newTheme: Theme) => {
  const root = document.documentElement
  const body = document.body
  
  if (newTheme === 'dark') {
    root.classList.add('dark')
    body.classList.add('dark')
  } else {
    root.classList.remove('dark')
    body.classList.remove('dark')
  }
}

export function useTheme() {
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  // Inicializa o tema se ainda não foi inicializado
  if (typeof document !== 'undefined' && !localStorage.getItem('theme')) {
    initializeTheme()
  } else if (typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      theme.value = savedTheme
      applyTheme(savedTheme)
    }
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
}

// Inicializa o tema quando o módulo é carregado
if (typeof document !== 'undefined') {
  initializeTheme()
}


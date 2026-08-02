<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <HeroSection
      title="Jiu Jitsu"
      subtitle="Desenvolva sua técnica, força e disciplina. Junte-se à nossa comunidade de praticantes dedicados."
      cta-text="Comece Agora"
      secondary-text="Saiba Mais"
      @cta-click="handleCtaClick"
      @secondary-click="handleSecondaryClick"
    />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/organisms/Header.vue'
import HeroSection from '../components/organisms/HeroSection.vue'
import Footer from '../components/organisms/Footer.vue'

const handleCtaClick = () => {
  console.log('CTA clicked')
}

const handleSecondaryClick = () => {
  console.log('Secondary clicked')
}
</script>

<template>
  <div class="home-page">
    <Header />
    <HeroSection
      title="Brazilian Jiu Jitsu"
      subtitle="Desenvolva sua técnica, força e disciplina. Junte-se à nossa comunidade de praticantes dedicados."
      cta-text="Comece Agora"
      secondary-text="Saiba Mais"
      @cta-click="handleCtaClick"
      @secondary-click="handleSecondaryClick"
    />
    <Footer
      description="Site dedicado ao Jiu Jitsu, conheça a história, busque sobre competições e encontre a academia mais próxima."
      site-name="BJJ Academy"
      :quick-links="quickLinks"
      :contact-info="contactInfo"
      :social-links="socialLinks"
    />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/organisms/Header.vue'
import HeroSection from '../components/organisms/HeroSection.vue'
import Footer from '../components/organisms/Footer.vue'

const quickLinks = [
  { href: '#historia', label: 'História' },
  { href: '#aulas', label: 'Aulas' },
  { href: '#horarios', label: 'Horários' },
  { href: '#faq', label: 'FAQ' }
]

const contactInfo = {
  address: 'Rua Exemplo, 123 - Cidade, Estado',
  phone: '(11) 99999-9999',
  email: 'contato@bjjacademy.com'
}

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
  { href: 'https://youtube.com', label: 'YouTube', icon: 'youtube' }
]

const handleCtaClick = () => {
  console.log('CTA clicked')
  // Implementar navegação ou ação
}

const handleSecondaryClick = () => {
  console.log('Secondary clicked')
  // Implementar navegação ou ação
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>


<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__section">
        <Logo />
        <Text size="medium" color="secondary" class="footer__description">
          {{ description }}
        </Text>
      </div>
      
      <div class="footer__section">
        <Heading :level="4" class="footer__title">Links Rápidos</Heading>
        <nav class="footer__nav">
          <a v-for="link in quickLinks" :key="link.href" :href="link.href" class="footer__link">
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
    
    <div class="footer__bottom">
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

<style scoped>
.footer {
  background-color: #f5f5f5;
  border-top: 1px solid rgba(211, 47, 47, 0.2);
  padding: 2rem 0 1rem;
  margin-top: 0rem;
  transition: background-color 0.3s ease;
}

.dark .footer {
  background-color: #1a1a1a;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__title {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.footer__description {
  margin-top: 0.5rem;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__link {
  color: #616161;
  text-decoration: none;
  transition: color 0.3s ease;
}

.dark .footer__link {
  color: #b0b0b0;
}

.footer__link:hover {
  color: #d32f2f;
}

.footer__contact {
  margin: 0.25rem 0;
}

.footer__bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: border-color 0.3s ease;
}

.dark .footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>


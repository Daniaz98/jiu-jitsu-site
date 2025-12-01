import { computed } from 'vue';
import { historyContent } from '../data/historyContent';

export function useHistoryContent() {
  const heroData = computed(() => ({
    title: 'História do Jiu Jitsu',
    subtitle: 'Conheça a origem e evolução desta arte marcial milenar',
  }));

  const historySections = computed(() => historyContent.sections);

  const footerData = computed(() => ({
    quickLinks: [
      { href: '/historia', label: 'História' },
      { href: '/aulas', label: 'Aulas' },
      { href: '/horarios', label: 'Horários' },
      { href: '/faq', label: 'FAQ' },
    ],
    contactInfo: {
      address: 'Rua Exemplo, 123 - Cidade, Estado',
      phone: '(11) 99999-9999',
      email: 'contato@bjjacademy.com',
    },
    socialLinks: [
      { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
      { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
      { href: 'https://youtube.com', label: 'YouTube', icon: 'youtube' },
    ],
  }));

  return {
    heroData,
    historySections,
    footerData,
  };
}
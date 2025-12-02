import { computed } from 'vue';
import { competitionsContent } from '../data/competitionsContent';

export function useCompetitionsContent() {
  const heroData = computed(() => ({
    title: 'Competições de Jiu Jitsu',
    subtitle: 'Descubra os principais campeonatos e torneios de Jiu Jitsu ao redor do mundo',
  }));

  const competitions = computed(() => competitionsContent.competitions);

  const footerData = computed(() => ({
    quickLinks: [
      { href: '/historia', label: 'História' },
      { href: '/competicoes', label: 'Competições' },
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
    competitions,
    footerData,
  };
}


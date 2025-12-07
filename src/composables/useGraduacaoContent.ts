import { computed } from 'vue';
import { graduacaoContent } from '../data/graduacaoContent';

export function useGraduacaoContent() {
  const heroData = computed(() => ({
    title: 'Graduação no Jiu Jitsu',
    subtitle: 'Conheça o sistema de faixas e a história por trás de cada graduação na arte suave',
  }));

  const faixas = computed(() => graduacaoContent.faixas);

  const footerData = computed(() => ({
    quickLinks: [
      { href: '/', label: "Início"},
      { href: '/historia', label: 'História' },
      { href: '/graduacao', label: 'Graduação' },
    ],
  }));

  return {
    heroData,
    faixas,
    footerData,
  };
}


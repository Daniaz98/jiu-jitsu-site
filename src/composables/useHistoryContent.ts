import { computed } from 'vue';
import { historyContent } from '../data/historyContent';

export function useHistoryContent() {
  const heroData = computed(() => ({
    title: 'História do Jiu Jitsu',
    subtitle: 'Conheça a origem e evolução desta arte marcial milenar',
  }));

  const historySections = computed(() => historyContent.sections);


  return {
    heroData,
    historySections,
  };
}

export const historyPages = [
  {path: '/historia/origem', title: 'Origem'},
  {path: '/historia/chegada-ao-brasil', title: 'Chegada ao Brasil'},
  {path: '/historia/atualmente', title: 'Atualmente'},
] as const
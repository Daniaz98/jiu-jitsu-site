import brasilXJapao from '../assets/brasilxjapao.webp';
import adcc from '../assets/ADCC_Submission_Wrestling_World_Championship.png'

export interface Competition {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  location: string;
  type: string;
  description: string;
  badge?: string;
  href?: string;
}

export const competitionsContent = {
  competitions: [
    {
      id: 'adcc',
      title: 'ADCC South American Championship',
      imageSrc: adcc,
      imageAlt: 'Mundial IBJJF - Campeonato Mundial de Jiu Jitsu',
      date: '13 de Dezembro',
      location: 'Buenos Aires, Argentina',
      type: 'No-Gi',
      description: 'Campeonato regional da maior federação de grappling do mundo.',
      badge: 'Premium',
      href: 'https://adcclatinamerica.com/pages/eventos',
    },
    {
      id: 'pan-americano',
      title: 'Pan-Americano IBJJF',
      imageSrc: brasilXJapao,
      imageAlt: 'Pan-Americano IBJJF - Campeonato Pan-Americano',
      date: '20-24 de Março, 2024',
      location: 'Irvine, California, EUA',
      type: 'Gi e No-Gi',
      description: 'Um dos principais campeonatos do calendário IBJJF, reunindo atletas de todo o continente americano.',
      badge: 'Premium',
      href: 'https://ibjjf.com',
    },
  ] as Competition[],
};


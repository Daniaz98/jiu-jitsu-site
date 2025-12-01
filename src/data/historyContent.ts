import type { HistoryImageData } from '../components/organisms/ContentSection.vue';
import japaneseOfficers from '../assets/japanese-general-and-officers.webp';
import earlyJiuJitsu from '../assets/Early-Jiu-Jitsu.webp';
import jj1906 from '../assets/jj_1906.jpg';
import samuraiHero from '../assets/samurai-hero-yashitzone.webp';
import carlosGracie from '../assets/Carlos-Gracie-Action.webp';
import helioGracie from '../assets/HelioGracie.webp';

export interface HistorySection {
  id: string;
  title: string;
  paragraphs: string[];
  images?: HistoryImageData[];
}

export interface HistoryContent {
  sections: HistorySection[];
}

export const historyContent: HistoryContent = {
  sections: [
    {
      id: 'origins',
      title: 'Origens do Jiu Jitsu',
      paragraphs: [
        'O Jiu Jitsu é uma arte-marcial de origem japonesa que se desenvolveu ao longo de séculos. Sua história remonta aos guerreiros samurais do Japão feudal, que desenvolveram técnicas de combate corpo a corpo para situações em que não podiam usar armas.',
        'A palavra "Jiu Jitsu", originalmente "Jujutsu", significa "arte suave" em japonês, refletindo o princípio fundamental de usar a força e o peso do oponente contra ele mesmo, permitindo que um praticante menor e mais fraco possa se defender contra um oponente maior e mais forte.',
      ],
      images: [
        {
          src: samuraiHero,
          alt: 'Guerreiro samurai, origem das técnicas de combate corpo a corpo do Jiu Jitsu',
          caption: 'Guerreiro samurai, origem das técnicas de combate do Jiu Jitsu',
          position: 0,
        },
        {
          src: earlyJiuJitsu,
          alt: 'Práticas antigas de Jiu Jitsu no Japão',
          caption: 'Práticas antigas de Jiu Jitsu no Japão na era Sengoku, século XVI',
          position: 0,
        },
        {
          src: japaneseOfficers,
          alt: 'Oficiais japoneses do período Meiji, época em que o Jiu Jitsu se desenvolveu',
          caption: 'Oficiais japoneses do período Meiji',
          position: 1,
        },
        {
          src: jj1906,
          alt: 'Prática de Jiu Jitsu no início do século XX, demonstrando técnicas tradicionais',
          caption: 'Prática de Jiu Jitsu no início do século XX',
          position: 1,
        },
      ],
    },
    {
      id: 'brazil-arrival',
      title: 'Chegada ao Brasil',
      paragraphs: [
        'O Jiu Jitsu chegou ao Brasil no início do século XX, trazido por Mitsuyo Maeda, também conhecido como Conde Koma. Maeda era um expert em Judo que viajou pelo mundo demonstrando suas técnicas.',
        'Maeda mudou-se para Belém do Pará, onde estabeleceu sua própria academia e transmitiu seus ensinamentos a Carlos Gracie e a Luiz França — este último responsável por desenvolver outro ramo do Jiu-Jitsu Brasileiro. Em 1925, Carlos Gracie retornou ao Rio de Janeiro e inaugurou a primeira Academia Gracie de Jiu-Jitsu, consolidando o início da expansão dessa arte marcial no país.'      ],
      images: [
        {
          src: carlosGracie,
          alt: 'Carlos Gracie em ação, um dos pioneiros do Jiu Jitsu no Brasil',
          caption: 'Carlos Gracie, fundador da primeira Academia Gracie de Jiu-Jitsu',
          position: 1,
        },
      ],
    },
    {
      id: 'bjj-development',
      title: 'Desenvolvimento do Brazilian Jiu Jitsu',
      paragraphs: [
        'Hélio Gracie, devido à sua estrutura física mais leve, adaptou as técnicas para enfatizar a alavanca, o timing e a técnica sobre a força bruta. Essas adaptações foram fundamentais para o desenvolvimento do Brazilian Jiu Jitsu moderno.',
        'A família Gracie popularizou o BJJ através de desafios e competições, demonstrando a eficácia da arte marcial contra oponentes maiores e mais fortes.',
      ],
      images: [
        {
          src: helioGracie,
          alt: 'Hélio Gracie, adaptador das técnicas de Jiu Jitsu para o Brazilian Jiu Jitsu',
          caption: 'Hélio Gracie, responsável pelas adaptações que deram origem ao Brazilian Jiu Jitsu',
          position: 0,
        },
      ],
    },
    {
      id: 'modern-bjj',
      title: 'Jiu Jitsu Moderno',
      paragraphs: [
        'Hoje, o Brazilian Jiu Jitsu é praticado em todo o mundo, com milhares de academias e milhões de praticantes. A arte marcial continua evoluindo, mantendo seus princípios fundamentais de eficiência técnica, respeito e disciplina.',
        'O BJJ não é apenas uma forma de defesa pessoal, mas também um esporte competitivo, uma filosofia de vida e uma ferramenta poderosa para o desenvolvimento físico e mental de seus praticantes.',
      ],
    },
  ],
};
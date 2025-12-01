import type { HistoryImageData } from '../components/organisms/ContentSection.vue';
import japaneseOfficers from '../assets/japanese-general-and-officers.webp';
import earlyJiuJitsu from '../assets/Early-Jiu-Jitsu.webp';
import jj1906 from '../assets/jj_1906.jpg';
import samuraiHero from '../assets/samurai-hero-yashitzone.webp';
import carlosGracie from '../assets/Carlos-Gracie-Action.webp';
import helioGracie from '../assets/HelioGracie.webp';
import kimuragracie from '../assets/brasilxjapao.webp'
import kimuragracie2 from '../assets/helio-grace-and-masahiko-kimura.webp'
import kimuragracie3 from '../assets/heliogracie_kimura_1951_oglobo.webp'
import nogi from '../assets/bjj_no_gi.jpg'
import maeda from '../assets/Mitsuyo_Maeda.jpg'

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
        {
          src: maeda,
          alt: 'Carlos Gracie em ação, um dos pioneiros do Jiu Jitsu no Brasil',
          caption: 'Mitsuyo Maeda, o “Conde”',
          position: 0,
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
    {
      id: 'gracie-desafios',
      title: 'Desafios Gracie',
      paragraphs: [
        'A família Gracie popularizou o Jiu Jitsu através de desafios, consideradas super-lutas, contra oponentes de outras artes-marciais, como Luta Livre, Judo, Boxe. Construindo os pilares do vale-tudo e predecessor do UFC.',
        'Entre suas grandes lutas, destacou-se o confronto contra Masahiko Kimura, lendário judoca japonês, múltiplo campeão e considerado um dos maiores atletas de sua época.',
        'A luta entre Gracie e Kimura aconteceu novamente no Estádio do Maracanã, diante de um público de 20.000 pessoas, incluindo o presidente do Brasil, Getúlio Vargas. A expectativa era tão grande que, segundo uma fonte, Kimura teria sido avisado pela embaixada japonesa de que não seria bem-vindo de volta ao Japão caso perdesse a luta.',
        'Após uma série de golpes aplicados pelo japonês, incluindo kesa-gatame, sankaku-jime e do-jime, o brasileiro parecia incapaz de respirar sob Kimura, mas perseverou até tentar mudar de posição empurrando com o braço. Nesse momento, Kimura agarrou o membro e executou gyaku-ude-garami. Hélio não desistiu, e Kimura girou o braço até quebrá-lo. Como Gracie ainda se recusava a desistir, Masahiko torceu o braço novamente e o quebrou pela segunda vez.',
        'Finalmente, quando o judoca estava prestes a torcer o braço pela terceira vez, o corner de Gracie jogou a toalha, e Kimura foi declarado vencedor. Uma multidão de japoneses veio e ergueu Kimura em comemoração, enquanto médicos tratavam o braço de Hélio. Como tributo à vitória de Kimura, a chave de braço que ele usou para derrotar Gracie passou a ser comumente chamada de Kimura lock, ou simplesmente Kimura, no jiu-jitsu brasileiro e, mais recentemente, no cenário de artes marciais mistas.'
      ],
      images: [
        {
          src: kimuragracie,
          alt: 'Brasil x Japão',
          caption: 'Pôster da super luta entre Kimura e Hélio Gracie',
          position: 1
        },
        {
          src: kimuragracie2,
          alt: 'Kimura e Hélio cumprimentando-se',
          caption: 'Kimura e Hélio cumprimentando-se',
          position: 2
        },
        {
          src: kimuragracie3,
          alt: 'Kimura e Hélio durante a luta',
          caption: 'Kimura e Hélio durante a luta',
          position: 3
        }
      ]
    },
    {
      id: 'bjj-hoje',
      title: 'No Gi',
      paragraphs: [
        'O Brazilian Jiu-Jitsu vive hoje um dos momentos mais dinâmicos de sua história. Embora o tradicional treino com kimono continue sendo a base técnica da arte, a modalidade No-Gi ganhou enorme protagonismo na última década, impulsionada por competições profissionais, maior visibilidade nas redes e a entrada de novos atletas atraídos pelo formato mais rápido e físico.',
        'O ADCC, considerado o maior evento de grappling do mundo, teve papel central nessa transformação. Sua proposta de regras voltadas para o combate real, a presença de atletas de diferentes estilos e premiações cada vez mais atraentes elevaram o nível competitivo e colocaram o No-Gi em evidência global. Como consequência, equipes tradicionais passaram a investir em treinos específicos, estratégias de leg locks, wrestling aplicado e sistemas modernos de controle.',
        'O estado atual do BJJ, portanto, é de coexistência entre tradição e inovação: enquanto o Jiu-Jitsu com kimono permanece como fundamento técnico e cultural, o No-Gi — impulsionado pelo ADCC — vem liderando a expansão esportiva, atraindo novos praticantes e redefinindo o jogo para um cenário mais profissional, dinâmico e internacional.'
      ],
      images: [
       { 
          src: nogi,
          alt: 'Combate No Gi',
          caption: 'Luta de No Gi',
          position: 1
        }
      ]
    }
  ],
};
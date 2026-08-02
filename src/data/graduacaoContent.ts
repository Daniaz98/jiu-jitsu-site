export interface Faixa {
  id: string;
  nome: string;
  cor: string;
  ordem: number;
  imagemSrc?: string;
  imagemAlt?: string;
  historia: string;
  tempoMinimo?: string;
  caracteristicas: string[];
}

export const graduacaoContent = {
  faixas: [
    {
      id: 'branca',
      nome: 'Faixa Branca',
      cor: '#FFFFFF',
      ordem: 1,
      historia: 'A faixa branca é o início da jornada no Jiu Jitsu. Representa a pureza e a mente aberta do iniciante, pronto para absorver os conhecimentos fundamentais da arte suave. Tradicionalmente, os praticantes começam na faixa branca, onde aprendem os movimentos básicos, posições fundamentais e os princípios essenciais do Jiu Jitsu.',
      tempoMinimo: '6-12 meses',
      caracteristicas: [
        'Aprendizado das posições básicas (guarda, montada, costas)',
        'Desenvolvimento da base e equilíbrio',
        'Aprendizado de escapes fundamentais',
        'Introdução aos princípios de alavancas e pressão'
      ]
    },
    {
      id: 'azul',
      nome: 'Faixa Azul',
      cor: '#0000FF',
      ordem: 2,
      historia: 'A faixa azul simboliza o céu, representando o crescimento e a expansão do conhecimento. É na faixa azul que o praticante começa a desenvolver sua própria identidade no tatame, experimentando diferentes estilos e técnicas. Esta é uma das faixas mais longas da jornada, onde o atleta consolida seus fundamentos e começa a desenvolver um jogo mais pessoal.',
      tempoMinimo: '2-3 anos',
      caracteristicas: [
        'Consolidação dos fundamentos',
        'Desenvolvimento de um jogo pessoal',
        'Aprendizado de técnicas mais complexas',
        'Início da compreensão estratégica do jogo'
      ]
    },
    {
      id: 'roxa',
      nome: 'Faixa Roxa',
      cor: '#800080',
      ordem: 3,
      historia: 'A faixa roxa representa a transição entre o aluno intermediário e o avançado. É uma fase de refinamento técnico, onde o praticante começa a entender as nuances mais sutis do Jiu Jitsu. A faixa roxa é considerada por muitos como uma das mais desafiadoras, pois é quando o atleta precisa demonstrar não apenas técnica, mas também maturidade e compreensão profunda da arte.',
      tempoMinimo: '1.5-2 anos',
      caracteristicas: [
        'Refinamento técnico avançado',
        'Desenvolvimento de jogo estratégico',
        'Compreensão de timing e transições',
        'Início do ensino e mentoria de alunos iniciantes'
      ]
    },
    {
      id: 'marrom',
      nome: 'Faixa Marrom',
      cor: '#6c3c0c',
      ordem: 4,
      historia: 'A faixa marrom simboliza a terra, representando solidez e maturidade técnica. Nesta fase, o praticante já possui um conhecimento profundo do Jiu Jitsu e está se preparando para a faixa preta. É um período de polimento final, onde o atleta refina cada detalhe de seu jogo e desenvolve a capacidade de adaptação e inovação técnica.',
      tempoMinimo: '1-2 anos',
      caracteristicas: [
        'Excelência técnica em múltiplas áreas',
        'Capacidade de adaptação e inovação',
        'Mentoria ativa de alunos',
        'Preparação para a faixa preta'
      ]
    },
    {
      id: 'preta',
      nome: 'Faixa Preta',
      cor: '#000000',
      ordem: 5,
      historia: 'A faixa preta é o símbolo máximo de dedicação e maestria no Jiu Jitsu. Representa não apenas o conhecimento técnico, mas também a responsabilidade de preservar e transmitir a arte. Receber a faixa preta é o reconhecimento de anos de dedicação, disciplina e paixão pelo Jiu Jitsu. É o início de uma nova jornada, onde o praticante se torna um guardião da arte suave.',
      caracteristicas: [
        'Maestria técnica completa',
        'Responsabilidade de ensino e preservação da arte',
        'Desenvolvimento contínuo através de graus (dan)',
        'Liderança e exemplo para a comunidade'
      ]
    }
  ] as Faixa[],
};


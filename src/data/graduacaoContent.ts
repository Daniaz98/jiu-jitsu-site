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
      tempoMinimo: 'Até 6 graus',
      caracteristicas: [
        'Maestria técnica completa',
        'Responsabilidade de ensino e preservação da arte',
        'Desenvolvimento contínuo através de graus (dan)',
        'Liderança e exemplo para a comunidade'
      ]
    },
    {
      id: 'coral',
      nome: 'Faixa Coral',
      cor: 'linear-gradient(90deg, #000000 0% 40%, #FF0000 40% 80%, #FFFFFF 80% 100%)',
      ordem: 6,
      historia: 'A Faixa Coral foi criada para dar reconhecimento aos mestres que dedicaram décadas ao ensino e à preservação da arte, mas que ainda não atingiam os requisitos históricos para a faixa vermelha. Ela simboliza autoridade, experiência, legado e contribuição.',
      tempoMinimo: '31 anos de faixa preta e 7 anos no 7º grau',
      caracteristicas: [
        'São faixas reservadas para mestres com décadas de prática e ensino',
        'Representam profundo conhecimento técnico, histórico e filosófico.',
        'Mestres coral geralmente são responsáveis por formar muitos faixas pretas e liderar grandes escolas.',
        'Envolvem papel de liderança, não apenas habilidade técnica.'
      ]
    },
    {
      id: 'vermelha',
      nome: 'Faixa Vermelha',
      cor: '#FF2C2C',
      ordem: 6,
      historia: 'A Faixa Vermelha é o “ápice” do Jiu-Jitsu. Ela representa o nível máximo de maestria. A Faixa Vermelha foi criada para homenagear os grandes mestres que preservaram e formaram a arte.',
      tempoMinimo: '10 anos no 8° grau.',
      caracteristicas: [
        'Simboliza sabedoria, tradição e legado máximo',
        'Mestres faixa vermelha geralmente formaram diversas gerações de professores e mestres',
        'Foco muito maior em ensino, filosofia e história do que em competição'
      ]
    }
  ] as Faixa[],
};


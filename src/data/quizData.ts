export type QuestionType = 
  | 'entrada'
  | 'single-select'
  | 'multi-select'
  | 'image-single-select'
  | 'number-input'
  | 'info'
  | 'loading'
  | 'result';

export interface QuizOption {
  id: string;
  label: string;
  imageUrl?: string;
}

export interface QuizStepData {
  id: number;
  type: QuestionType;
  headline?: string;
  question?: string;
  sub?: string;
  options?: QuizOption[];
  footerText?: string;
  badges?: string[];
  testimonial?: { text: string; author: string };
  chartImage?: string;
  list?: string[];
}

export const quizSteps: QuizStepData[] = [
  // TELA 0 — ENTRADA
  {
    id: 0,
    type: 'entrada',
    headline: 'PROTOCOLO DE DESINFLAMAÇÃO PARA PERDER PESO',
    question: 'Quanto peso você quer perder nos próximos 10 dias?',
    options: [
      { id: '1-2', label: '1-2 kg' },
      { id: '3-4', label: '3-4 kg' },
      { id: '5+', label: '5+ kg' },
      { id: 'desinchar', label: 'Só quero desinchar' }
    ],
    footerText: '⚠️ Método validado por mais de 7.274 pessoas'
  },
  // TELA 1 — OBJETIVO PRINCIPAL
  {
    id: 1,
    type: 'multi-select',
    question: 'Qual é o seu principal objetivo?',
    options: [
      { id: 'peso-rapido', label: 'Perder peso rápido' },
      { id: 'eliminar-inchaco', label: 'Eliminar o inchaço' },
      { id: 'caber-roupas', label: 'Voltar a caber nas roupas' },
      { id: 'mais-disposicao', label: 'Melhorar a disposição' }
    ]
  },
  // TELA 2 — PROVA SOCIAL (INFORMATIVA)
  {
    id: 2,
    type: 'info',
    headline: '+7.274 pessoas já usaram esse método',
    sub: 'Nosso protocolo de desinflamação ajuda você a perder no mínimo 3kg em 10 dias — sem dietas malucas.',
    testimonial: {
      text: "O método foi muito eficaz pra mim, perdi 3kg nesses 10 dias. Nem todos os dias consegui bater a meta certinho, mas mesmo assim fui até o fim.",
      author: 'Samuel T.'
    },
    badges: ['7.274+ Alunos', 'Protocolo Testado']
  },
  // TELA 3 — TIPO FÍSICO ATUAL
  {
    id: 3,
    type: 'image-single-select',
    question: 'Qual é o seu tipo físico atual?',
    options: [
      { id: 'magro', label: 'Magro', imageUrl: '/quiz/magro.png' },
      { id: 'regular', label: 'Regular', imageUrl: '/quiz/regular.png' },
      { id: 'sobrepeso', label: 'Sobrepeso', imageUrl: '/quiz/sobrepeso.png' }
    ]
  },
  // TELA 4 — TIPO FÍSICO IDEAL
  {
    id: 4,
    type: 'image-single-select',
    question: 'Qual é o seu objetivo de shape?',
    options: [
      { id: 'definido', label: 'Definido (tanquinho leve)', imageUrl: '/quiz/regular.png' },
      { id: 'atletico', label: 'Atlético (shape forte)', imageUrl: '/quiz/regular.png' },
      { id: 'magro', label: 'Apenas mais magro', imageUrl: '/quiz/magro.png' }
    ]
  },
  // TELA 5 — ÁREA PROBLEMÁTICA
  {
    id: 5,
    type: 'image-single-select',
    question: 'Qual área te incomoda mais?',
    options: [
      { id: 'barriga', label: 'Barriga', imageUrl: '/quiz/belly_pochete.png' },
      { id: 'rosto', label: 'Rosto/papada', imageUrl: '/quiz/sobrepeso.png' },
      { id: 'corpo', label: 'Corpo inteiro', imageUrl: '/quiz/sobrepeso.png' }
    ]
  },
  // TELA 6 — TIPO DE BARRIGA
  {
    id: 6,
    type: 'image-single-select',
    question: 'Que tipo de barriga você tem?',
    options: [
      { id: 'cerveja', label: 'Barriga de álcool', imageUrl: '/quiz/belly_muito.png' },
      { id: 'estresse', label: 'Barriga de estresse', imageUrl: '/quiz/belly_dilatada.png' },
      { id: 'inchaco', label: 'Inchaço/retenção', imageUrl: '/quiz/belly_flat.png' },
      { id: 'alimentacao', label: 'Alimentação ruim', imageUrl: '/quiz/belly_pochete.png' },
      { id: 'normal', label: 'Normal (secar mais)', imageUrl: '/quiz/belly_flat.png' }
    ]
  },
  // TELA 7 — MOTIVAÇÃO
  {
    id: 7,
    type: 'multi-select',
    question: 'O que te motiva a perder peso agora?',
    options: [
      { id: 'aparencia', label: 'Melhorar minha aparência' },
      { id: 'energia', label: 'Ter mais energia' },
      { id: 'roupas', label: 'Caber nas roupas' },
      { id: 'evento', label: 'Evento chegando' },
      { id: 'saude', label: 'Saúde' },
      { id: 'outro', label: 'Outro' }
    ]
  },
  // TELA 8 — VALIDAÇÃO EDUCATIVA (INFORMATIVA)
  {
    id: 8,
    type: 'info',
    headline: 'A maioria das pessoas não consegue emagrecer porque está INFLAMADA.',
    sub: 'Aquele peso que não sai não é só gordura, é retenção de líquido, inchaço e glicogênio acumulado.\nO Protocolo de Desinflamação elimina esse "peso falso" primeiro. Resultado? Você vê o peso diminuir na balança em DIAS, não semanas.',
    chartImage: '/quiz/chart_metabolism.png'
  },
  // TELA 9 — TENTATIVAS ANTERIORES
  {
    id: 9,
    type: 'multi-select',
    question: 'O que você já tentou para emagrecer?',
    options: [
      { id: 'dietas', label: 'Dietas restritivas' },
      { id: 'academia', label: 'Academia/exercícios' },
      { id: 'suplementos', label: 'Suplementos/shakes' },
      { id: 'jejum', label: 'Jejum intermitente' },
      { id: 'nada-funcionou', label: 'Nada funcionou direito' },
      { id: 'nunca-tentei', label: 'Nunca tentei seriamente' }
    ]
  },
  // TELA 10 — TEMPO DE LUTA
  {
    id: 10,
    type: 'single-select',
    question: 'Há quanto tempo você tenta perder esse peso?',
    options: [
      { id: 'menos-6m', label: 'Menos de 6 meses' },
      { id: '6m-1ano', label: '6 meses a 1 ano' },
      { id: '1-3anos', label: '1-3 anos' },
      { id: 'mais-3anos', label: 'Mais de 3 anos' },
      { id: 'sempre', label: 'Sempre foi uma luta' }
    ]
  },
  // TELA 11 — VALIDAÇÃO (INFORMATIVA)
  {
    id: 11,
    type: 'info',
    headline: 'Você não falhou. Os métodos falharam com você.',
    sub: 'Dietas restritivas causam efeito sanfona. Cardio excessivo aumenta cortisol (que CAUSA inchaço). A maioria dos métodos ataca o sintoma, não a causa.\n\nO Protocolo de Desinflamação vai direto na raiz: elimina a inflamação que trava seu metabolismo.'
  },
  // TELA 12 — ALIMENTAÇÃO ATUAL
  {
    id: 12,
    type: 'single-select',
    question: 'Como é sua alimentação hoje?',
    options: [
      { id: 'de-tudo', label: 'Como de tudo, sem regra' },
      { id: 'tento-comer-bem', label: 'Tento comer bem, mas escorrego' },
      { id: 'dieta-sem-resultado', label: 'Sigo uma dieta, mas sem resultado' },
      { id: 'caos', label: 'Alimentação é um caos total' }
    ]
  },
  // TELA 13 — HÁBITOS PROBLEMÁTICOS
  {
    id: 13,
    type: 'multi-select',
    question: 'Você tem algum desses hábitos?',
    options: [
      { id: 'tarde', label: 'Como tarde da noite' },
      { id: 'pouca-agua', label: 'Bebo pouca água' },
      { id: 'muito-carbo', label: 'Consumo muito carboidrato/açúcar' },
      { id: 'alcool', label: 'Bebo álcool regularmente' },
      { id: 'pulo-refeicoes', label: 'Pulo refeições' },
      { id: 'nenhum', label: 'Nenhum desses' }
    ]
  },
  // TELA 14 — OBJEÇÕES
  {
    id: 14,
    type: 'multi-select',
    question: 'O que mais te preocupa em começar um novo protocolo?',
    options: [
      { id: 'medo-fome', label: 'Medo de passar fome' },
      { id: 'medo-nao-seguir', label: 'Medo de não conseguir seguir' },
      { id: 'nao-parar-comer', label: 'Não quero parar de comer o que gosto' },
      { id: 'sem-tempo', label: 'Não tenho tempo pra cozinhar' },
      { id: 'tentei-de-tudo', label: 'Já tentei de tudo e nada funciona' },
      { id: 'pronto', label: 'Nada, estou pronto(a)' }
    ]
  },
  // TELA 15 — VALIDAÇÃO / QUEBRA DE OBJEÇÕES (INFORMATIVA)
  {
    id: 15,
    type: 'info',
    headline: 'O Protocolo foi criado para pessoas como você.',
    list: [
      'Não passa fome — você come refeições completas',
      'Não é matriculado em academia — opções de treinos em casa ou na rua',
      'Ingredientes de supermercado comum — nada caro ou difícil',
      '10 dias — se não funcionar, você perdeu menos de 2 semanas'
    ],
    testimonial: {
      text: "Infelizmente não segui à risca, foi o máximo que pude. Mas funcionou pra mim! Nos 10 dias acabei perdendo os 3,7kg!!!",
      author: "Aluno do Protocolo"
    }
  },
  // TELA 16 — PESO ATUAL
  {
    id: 16,
    type: 'number-input',
    question: 'Qual é o seu peso atual?',
    sub: 'Usamos isso para personalizar seu resultado esperado.'
  },
  // TELA 17 — PESO DESEJADO
  {
    id: 17,
    type: 'number-input',
    question: 'Qual peso você gostaria de alcançar?',
    sub: 'Seja realista, o protocolo é focado em te fazer perder entre 3 e 7kg em 10 dias.'
  },
  // TELA 18 — LOADING / PROCESSAMENTO
  {
    id: 18,
    type: 'loading',
    headline: 'Analisando suas respostas...',
  },
  // TELA 19 — RESULTADO + CTA
  {
    id: 19,
    type: 'result',
    headline: 'Seu Diagnóstico Personalizado',
  }
];

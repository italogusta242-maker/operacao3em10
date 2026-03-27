export type QuestionType = 
  | 'entrada'
  | 'single-select'
  | 'multi-select'
  | 'image-single-select'
  | 'body-slider'
  | 'number-input'
  | 'info'
  | 'intro-hero'
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
  ctaText?: string;
}

export const quizSteps: QuizStepData[] = [
  // TELA 0 — INTRODUÇÃO
  {
    id: 0,
    type: 'intro-hero',
    sub: 'O protocolo que já mudou o corpo de mais de 7.000 pessoas vai te ensinar como diminuir seu peso, recuperar sua autoestima, disposição e perder gordura rápido. Mesmo que você já tenha tentado de tudo.',
    ctaText: 'Preencha o teste gratuito para receber seu protocolo'
  },
  // TELA 1 — PESO ATUAL
  {
    id: 1,
    type: 'number-input',
    question: 'Qual é o seu peso atual?',
    sub: 'Usamos isso para personalizar seu resultado esperado.'
  },
  // TELA 2 — PESO DESEJADO
  {
    id: 2,
    type: 'number-input',
    question: 'Qual peso você gostaria de alcançar?',
    sub: 'Seja realista, o protocolo é focado em te fazer perder entre 3 e 7kg em 10 dias.'
  },
  // TELA 3 — PROVA SOCIAL
  {
    id: 3,
    type: 'info',
    headline: '+7.274 pessoas já usaram esse método',
    sub: 'Nosso protocolo de desinflamação ajuda você a perder no mínimo 3kg em 10 dias — sem dietas malucas.',
    testimonial: {
      text: "O método foi muito eficaz pra mim, perdi 3kg nesses 10 dias. Nem todos os dias consegui bater a meta certinho, mas mesmo assim fui até o fim.",
      author: 'Samuel T.'
    },
    badges: ['7.274+ Alunos', 'Protocolo Testado']
  },
  // TELA 4 — TIPO FÍSICO ATUAL
  {
    id: 4,
    type: 'body-slider',
    question: 'Qual é o seu tipo físico atual?',
    sub: 'Deslize para encontrar o seu físico atual',
    options: [
      { id: 'magro', label: 'Magro', imageUrl: '/quiz/body/current_0.webp' },
      { id: 'regular', label: 'Regular', imageUrl: '/quiz/body/current_1.webp' },
      { id: 'sobrepeso', label: 'Sobrepeso', imageUrl: '/quiz/body/current_2.webp' },
      { id: 'obeso', label: 'Obeso', imageUrl: '/quiz/body/current_3.webp' }
    ]
  },
  // TELA 5 — TIPO FÍSICO IDEAL
  {
    id: 5,
    type: 'body-slider',
    question: 'Qual é o seu objetivo de shape?',
    sub: 'Onde você quer chegar em 10 dias?',
    options: [
      { id: 'magro', label: 'Modelo', imageUrl: '/quiz/body/goal_0.webp' },
      { id: 'definido', label: 'Definido', imageUrl: '/quiz/body/goal_1.webp' },
      { id: 'musculoso', label: 'Musculoso', imageUrl: '/quiz/body/goal_2.webp' },
      { id: 'atletico', label: 'Atlético', imageUrl: '/quiz/body/goal_3.webp' }
    ]
  },
  // TELA 6 — ÁREA PROBLEMÁTICA
  {
    id: 6,
    type: 'image-single-select',
    question: 'Qual área te incomoda mais?',
    options: [
      { id: 'barriga', label: 'Barriga', imageUrl: '/quiz/areas/barriga.png' },
      { id: 'rosto', label: 'Rosto/papada', imageUrl: '/quiz/areas/rosto.png' },
      { id: 'corpo', label: 'Corpo inteiro', imageUrl: '/quiz/areas/corpo.png' }
    ]
  },
  // TELA 7 — BARRIGA
  {
    id: 7,
    type: 'image-single-select',
    headline: 'Análise corporal',
    question: 'Que tipo de barriga você tem?',
    options: [
      { id: 'cerveja', label: 'Barriga de álcool (cerveja)', imageUrl: '/quiz/belly/cerveja.png' },
      { id: 'estresse', label: 'Barriga de estresse (dilatada)', imageUrl: '/quiz/belly/estresse.png' },
      { id: 'inchaco', label: 'Inchaço/retenção', imageUrl: '/quiz/belly/inchaco.png' },
      { id: 'alimentacao', label: 'Alimentação ruim', imageUrl: '/quiz/belly/alimentacao.png' },
      { id: 'normal', label: 'Normal (secar mais)', imageUrl: '/quiz/belly/normal.png' }
    ]
  },
  // TELA 8 — MOTIVAÇÃO
  {
    id: 8,
    type: 'multi-select',
    question: 'O que te motiva a perder peso agora?',
    options: [
      { id: 'aparencia', label: 'Melhorar minha aparência' },
      { id: 'energy', label: 'Ter mais energia' },
      { id: 'roupas', label: 'Caber nas roupas' },
      { id: 'evento', label: 'Evento chegando' },
      { id: 'saude', label: 'Saúde' },
      { id: 'outro', label: 'Outro' }
    ]
  },
  // TELA 9 — VALIDAÇÃO EDUCATIVA
  {
    id: 9,
    type: 'info',
    headline: 'A maioria das pessoas não consegue emagrecer porque está INFLAMADA.',
    sub: 'Aquele peso que não sai não é só gordura, é retenção de líquido, inchaço e glicogênio acumulado.\nO Protocolo de Desinflamação elimina esse "peso falso" primeiro. Resultado? Você vê o peso diminuir na balança em DIAS, não semanas.',
    chartImage: '/quiz/chart_metabolism.png'
  },
  // TELA 10 — TENTATIVAS ANTERIORES
  {
    id: 10,
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
  // TELA 11 — TEMPO DE LUTA
  {
    id: 11,
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
  // TELA 12 — VALIDAÇÃO
  {
    id: 12,
    type: 'info',
    headline: 'Você não falhou. Os métodos falharam com você.',
    sub: 'Dietas restritivas causam efeito sanfona. Cardio excessivo aumenta cortisol (que CAUSA inchaço). A maioria dos métodos ataca o sintoma, não a causa.\n\nO Protocolo de Desinflamação vai direto na raiz: elimina a inflamação que trava seu metabolismo.'
  },
  // TELA 13 — ALIMENTAÇÃO ATUAL
  {
    id: 13,
    type: 'single-select',
    question: 'Como é sua alimentação hoje?',
    options: [
      { id: 'de-tudo', label: 'Como de tudo, sem regra' },
      { id: 'tento-comer-bem', label: 'Tento comer bem, mas escorrego' },
      { id: 'dieta-sem-resultado', label: 'Sigo uma dieta, mas sem resultado' },
      { id: 'caos', label: 'Alimentação é um caos total' }
    ]
  },
  // TELA 14 — HÁBITOS PROBLEMÁTICOS
  {
    id: 14,
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
  // TELA 15 — OBJEÇÕES
  {
    id: 15,
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
  // TELA 16 — VALIDAÇÃO / QUEBRA DE OBJEÇÕES
  {
    id: 16,
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
      author: "Thiago"
    }
  },
  // TELA 17 — LOADING
  {
    id: 17,
    type: 'loading',
    headline: 'Analisando suas respostas...',
  },
  // TELA 18 — RESULTADO
  {
    id: 18,
    type: 'result',
    headline: 'Seu Diagnóstico Personalizado',
  }
];

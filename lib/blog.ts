export type BlogPost = {
  slug: string
  image: string
  category: string
  date: string
  title: string
  subtitle: string
  excerpt: string
  content: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'direito-trabalhista',
    image: '/images/blog-1.png',
    category: 'Direito Trabalhista',
    date: '12 Mar 2025',
    title: 'Direito Trabalhista: Conheça Seus Principais Direitos',
    subtitle:
      'Um guia prático sobre verbas rescisórias, horas extras e proteção contra demissões abusivas.',
    excerpt:
      'Entenda os principais direitos garantidos pela legislação trabalhista e como assegurar o que é devido a você.',
    content: [
      'O Direito Trabalhista é o ramo do Direito responsável por regular as relações entre empregados e empregadores, assegurando direitos e deveres que promovem condições de trabalho justas e equilibradas. Esses direitos estão previstos principalmente na Consolidação das Leis do Trabalho (CLT) e na Constituição Federal.',
      'Entre as garantias mais importantes do trabalhador estão o pagamento correto de horas extras, o descanso semanal remunerado, as férias acrescidas de um terço constitucional, o 13º salário e os depósitos regulares do Fundo de Garantia do Tempo de Serviço (FGTS). O descumprimento dessas obrigações pode gerar o direito à reparação por meio das medidas judiciais cabíveis.',
      'Nos casos de dispensa sem justa causa, o trabalhador possui direitos específicos, como aviso prévio, saque do FGTS, multa de 40% sobre o saldo do fundo e acesso ao seguro-desemprego, desde que preenchidos os requisitos legais. Já a dispensa por justa causa exige a comprovação de falta grave praticada pelo empregado, podendo ser questionada judicialmente quando aplicada de forma indevida.',
      'Além disso, situações como acúmulo de função, assédio moral, ausência de registro em carteira, verbas rescisórias incorretas e jornadas excessivas também podem gerar direitos ao trabalhador e demandar análise especializada.',
      'Por isso, diante de qualquer irregularidade na relação de trabalho, é recomendável reunir documentos relevantes, como contracheques, contrato de trabalho, comprovantes de pagamento e registros de jornada. A orientação jurídica adequada permite identificar eventuais violações de direitos e definir a estratégia mais eficiente para buscar a proteção dos seus interesses.',
    ],
  },
  {
    slug: 'inventario',
    image: '/images/blog-2.png',
    category: 'Direito de Família',
    date: '28 Fev 2025',
    title: 'Inventário: Entenda Como Funciona a Partilha de Bens',
    subtitle:
      'Entenda as diferenças entre inventário judicial e extrajudicial e como evitar conflitos entre herdeiros.',
    excerpt:
      'Saiba quando o inventário pode ser feito em cartório e quais documentos são necessários para agilizar o processo.',
    content: [
      'O inventário é o procedimento jurídico destinado a identificar e organizar os bens, direitos e eventuais dívidas deixados por uma pessoa falecida, possibilitando sua correta divisão entre os herdeiros. Trata-se de uma etapa obrigatória para a regularização do patrimônio e para a transferência legal dos bens.',
      'De modo geral, o inventário deve ser iniciado em até 60 dias após o falecimento. O descumprimento desse prazo pode gerar multas e encargos relacionados ao Imposto sobre Transmissão Causa Mortis e Doação (ITCMD), além de dificultar a administração dos bens deixados.',
      'Atualmente, existem duas modalidades de inventário: judicial e extrajudicial.',
      'O inventário extrajudicial é realizado diretamente em cartório e costuma ser mais rápido e menos burocrático. Para sua realização, é necessário que todos os herdeiros sejam maiores e capazes, estejam de pleno acordo quanto à partilha dos bens e que não existam impedimentos legais para o procedimento.',
      'Já o inventário judicial é obrigatório quando existem herdeiros menores de idade ou incapazes, quando há divergências entre os sucessores ou em outras situações previstas em lei. Nesses casos, o acompanhamento de um advogado é indispensável para assegurar a correta condução do processo e a proteção dos direitos de todos os envolvidos.',
      'Independentemente da modalidade escolhida, a organização prévia da documentação e a orientação jurídica especializada contribuem para um procedimento mais ágil, seguro e eficiente, reduzindo riscos de conflitos futuros e garantindo a regularização adequada do patrimônio.',
    ],
  },
  {
    slug: 'aposentadoria',
    image: '/images/blog-3.png',
    category: 'Direito Previdenciário',
    date: '15 Fev 2025',
    title: 'Aposentadoria: Entenda as Regras e Planeje Seu Futuro',
    subtitle:
      'Conheça as principais modalidades de aposentadoria e como planejar o melhor momento para se aposentar.',
    excerpt:
      'Entenda como as regras de transição podem impactar o valor do seu benefício e o tempo de contribuição exigido.',
    content: [
      'A aposentadoria é um dos principais benefícios garantidos pela Previdência Social e representa uma importante etapa da vida financeira do trabalhador. Com a Reforma da Previdência de 2019, diversas regras foram alteradas, impactando requisitos como idade mínima, tempo de contribuição e forma de cálculo dos benefícios.',
      'Atualmente, existem diferentes modalidades de aposentadoria, entre elas a aposentadoria por idade, a aposentadoria pelas regras de transição, a aposentadoria por incapacidade permanente e a aposentadoria especial para atividades exercidas em condições prejudiciais à saúde ou à integridade física. Cada modalidade possui requisitos específicos e exige uma análise cuidadosa para garantir a melhor escolha.',
      'As regras de transição foram criadas para proteger os segurados que já contribuíam para a Previdência antes da reforma. Essas regras combinam fatores como idade, tempo de contribuição e sistema de pontos, tornando essencial uma avaliação individualizada para identificar a alternativa mais vantajosa.',
      'Além disso, erros no Cadastro Nacional de Informações Sociais (CNIS), períodos sem registro adequado e contribuições não computadas corretamente podem impactar diretamente o valor do benefício. Por isso, a revisão do histórico previdenciário é uma etapa fundamental antes do pedido de aposentadoria.',
      'O planejamento previdenciário permite simular diferentes cenários, corrigir inconsistências e definir o momento mais adequado para requerer o benefício. Em muitos casos, uma estratégia bem elaborada pode representar um aumento significativo no valor da aposentadoria ao longo dos anos.',
      'Contar com orientação jurídica especializada proporciona mais segurança durante todo o processo, reduzindo riscos de indeferimento e garantindo que todos os direitos previdenciários sejam devidamente reconhecidos.',
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

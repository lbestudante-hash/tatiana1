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
    title: 'Direito Trabalhista: conheça seus direitos como empregado',
    subtitle:
      'Um guia prático sobre verbas rescisórias, horas extras e proteção contra demissões abusivas.',
    excerpt:
      'Entenda os principais direitos garantidos pela legislação trabalhista e como assegurar o que é devido a você.',
    content: [
      'O Direito Trabalhista regula as relações entre empregados e empregadores, garantindo um conjunto de direitos fundamentais previstos na Consolidação das Leis do Trabalho (CLT) e na Constituição Federal. Conhecer esses direitos é essencial para evitar prejuízos e tomar decisões seguras ao longo da vida profissional.',
      'Entre os direitos mais relevantes estão o pagamento de horas extras com adicional, o descanso semanal remunerado, as férias acrescidas de um terço, o 13º salário e o recolhimento regular do FGTS. Quando esses direitos não são respeitados, o trabalhador pode buscar reparação por meio de uma ação trabalhista.',
      'Em casos de demissão sem justa causa, o empregado tem direito ao aviso prévio, à multa de 40% sobre o FGTS e à liberação do saldo da conta vinculada, além do seguro-desemprego quando preenchidos os requisitos. Já a demissão por justa causa exige a comprovação de uma falta grave, sob pena de ser revertida judicialmente.',
      'Diante de qualquer irregularidade, o ideal é reunir documentos como contracheques, contrato de trabalho e registros de jornada, e buscar orientação jurídica especializada. Uma análise individualizada permite identificar verbas não pagas e definir a melhor estratégia para proteger seus interesses.',
    ],
  },
  {
    slug: 'inventario',
    image: '/images/blog-2.png',
    category: 'Direito de Família',
    date: '28 Fev 2025',
    title: 'Inventário: como organizar a partilha de bens com segurança',
    subtitle:
      'Entenda as diferenças entre inventário judicial e extrajudicial e como evitar conflitos entre herdeiros.',
    excerpt:
      'Saiba quando o inventário pode ser feito em cartório e quais documentos são necessários para agilizar o processo.',
    content: [
      'O inventário é o procedimento legal para apurar os bens, direitos e dívidas deixados por uma pessoa falecida e promover a sua partilha entre os herdeiros. Ele é obrigatório e deve ser iniciado, em regra, no prazo de 60 dias após o falecimento, evitando multas sobre o imposto de transmissão (ITCMD).',
      'Existem duas modalidades principais: o inventário judicial e o extrajudicial. O extrajudicial, feito diretamente em cartório, é mais rápido e econômico, mas exige que todos os herdeiros sejam maiores, capazes e estejam de acordo com a partilha, além da ausência de testamento na maioria dos casos.',
      'Quando há menores de idade, herdeiros incapazes, conflitos entre as partes ou testamento, o inventário precisa tramitar judicialmente. Nessa hipótese, o acompanhamento de um advogado é indispensável para garantir que os direitos de cada herdeiro sejam respeitados.',
      'Independentemente da modalidade, é fundamental reunir certidões, documentos dos bens e a documentação pessoal de todos os envolvidos. Um planejamento adequado e a orientação jurídica correta tornam o processo mais ágil e reduzem significativamente o risco de litígios futuros.',
    ],
  },
  {
    slug: 'aposentadoria',
    image: '/images/blog-3.png',
    category: 'Direito Previdenciário',
    date: '15 Fev 2025',
    title: 'Aposentadoria: planejamento e regras após a reforma',
    subtitle:
      'Conheça as principais modalidades de aposentadoria e como planejar o melhor momento para se aposentar.',
    excerpt:
      'Entenda como as regras de transição podem impactar o valor do seu benefício e o tempo de contribuição exigido.',
    content: [
      'A aposentadoria é um dos direitos previdenciários mais importantes e, após a Reforma da Previdência de 2019, passou por mudanças significativas nas regras de idade mínima, tempo de contribuição e cálculo do valor do benefício.',
      'Hoje, existem diferentes modalidades, como a aposentadoria por idade, por tempo de contribuição (via regras de transição), por incapacidade permanente e especial. Cada uma possui requisitos próprios, e a escolha equivocada pode resultar em um benefício menor do que o devido.',
      'As regras de transição foram criadas para quem já contribuía antes da reforma, combinando fatores como idade, tempo de contribuição e pontuação. Avaliar qual delas é mais vantajosa exige uma análise detalhada do histórico contributivo do segurado.',
      'Por isso, o planejamento previdenciário é fundamental: simular cenários, revisar contribuições e identificar o melhor momento para requerer o benefício pode representar uma diferença expressiva no valor recebido. O acompanhamento de um advogado especializado garante segurança em cada etapa.',
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

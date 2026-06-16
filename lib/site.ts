export const site = {
  name: 'Dra. Tatiana Andrade',
  shortName: 'Tatiana Andrade',
  email: 'tatianaandrade.adv@gmail.com',
  phoneDisplay: '(21) 98054-9402',
  phoneRaw: '5521980549402',
  whatsappMessage:
    'Olá, Dra. Tatiana! Gostaria de agendar uma consulta jurídica.',
}

export const whatsappLink = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

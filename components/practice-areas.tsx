'use client'

import { motion } from 'motion/react'
import {
  Scale,
  Briefcase,
  Building2,
  Receipt,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from './reveal'
import { whatsappLink } from '@/lib/site'

const areas = [
  {
    icon: Scale,
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, indenizações e proteção de direitos pessoais e patrimoniais.',
  },
  {
    icon: Briefcase,
    title: 'Direito Trabalhista',
    desc: 'Assessoria e defesa em relações de trabalho, com soluções para empregados e empregadores.',
  },
  {
    icon: Building2,
    title: 'Direito Empresarial',
    desc: 'Estruturação societária, contratos comerciais e consultoria estratégica para empresas.',
  },
  {
    icon: Receipt,
    title: 'Direito Tributário',
    desc: 'Planejamento tributário, defesa em execuções fiscais e recuperação de créditos.',
  },
  {
    icon: HeartHandshake,
    title: 'Direito de Família',
    desc: 'Divórcios, inventários, guarda e planejamento sucessório com sensibilidade e discrição.',
  },
]

export function PracticeAreas() {
  return (
    <section id="areas" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Áreas de Atuação
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Atuação especializada em diferentes ramos do Direito
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/15" />
              <span className="relative flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <area.icon className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl text-foreground">
                {area.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.desc}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Saiba Mais
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

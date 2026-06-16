'use client'

import { motion } from 'motion/react'
import { BadgeCheck, ScrollText, Mic2, BookOpen } from 'lucide-react'
import { Reveal } from './reveal'

const seals = [
  { icon: BadgeCheck, label: 'OAB', sub: 'Inscrição Ativa' },
  { icon: ScrollText, label: 'Certificações', sub: 'Qualificação Técnica' },
  { icon: Mic2, label: 'Congressos', sub: 'Participação Nacional' },
  { icon: BookOpen, label: 'Atualizações', sub: 'Formação Contínua' },
]

export function Authority() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Autoridade e Credibilidade
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl">
              Reconhecimento que reforça a confiança
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {seals.map((seal, i) => (
            <motion.div
              key={seal.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center rounded-2xl border border-primary/20 bg-card/40 p-8 text-center transition-colors duration-300 hover:border-primary/60"
            >
              <span className="flex size-16 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-br from-primary/20 to-transparent text-primary shadow-inner">
                <seal.icon className="size-8" strokeWidth={1.5} />
              </span>
              <p className="mt-5 font-serif text-xl text-foreground">
                {seal.label}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {seal.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

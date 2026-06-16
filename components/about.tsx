'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { GraduationCap, Award, Briefcase, Landmark } from 'lucide-react'
import { Reveal } from './reveal'

const credentials = [
  {
    icon: GraduationCap,
    title: 'Formação',
    text: 'Bacharel em Direito com pós-graduação em Direito Civil e Empresarial.',
  },
  {
    icon: Award,
    title: 'Especializações',
    text: 'Especialista em Direito Tributário, do Trabalho e de Família.',
  },
  {
    icon: Briefcase,
    title: 'Experiência',
    text: 'Mais de uma década assessorando pessoas e empresas de diversos setores.',
  },
  {
    icon: Landmark,
    title: 'Participações',
    text: 'Membro ativo de comissões e congressos jurídicos nacionais.',
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(58,80,107,0.18),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/20">
            <Image
              src="/images/tatiana-about.png"
              alt="Dra. Tatiana Andrade em seu escritório"
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-2 rounded-2xl px-7 py-5 lg:-right-8">
            <p className="font-serif text-4xl text-primary">+10</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              anos de atuação
            </p>
          </div>
        </motion.div>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Sobre a Dra. Tatiana Andrade
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Compromisso com a ética, a técnica e os resultados
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Com atuação pautada pela ética, excelência técnica e compromisso
              com resultados, a Dra. Tatiana Andrade oferece soluções jurídicas
              estratégicas para proteger direitos, patrimônio e interesses de
              seus clientes.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {credentials.map((item, i) => (
              <Reveal key={item.title} delay={0.12 + i * 0.08}>
                <div className="group flex gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors duration-300 hover:border-primary/50">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

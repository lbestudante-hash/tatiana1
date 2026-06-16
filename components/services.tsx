'use client'

import {
  Lightbulb,
  FileSignature,
  Gavel,
  Handshake,
  Building,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    icon: Lightbulb,
    title: 'Consultoria Jurídica',
    desc: 'Orientação técnica e personalizada para decisões seguras.',
  },
  {
    icon: FileSignature,
    title: 'Contratos Personalizados',
    desc: 'Elaboração e revisão de contratos sob medida.',
  },
  {
    icon: Gavel,
    title: 'Defesa Processual',
    desc: 'Atuação firme e estratégica em todas as instâncias.',
  },
  {
    icon: Handshake,
    title: 'Mediação Estratégica',
    desc: 'Resolução de conflitos com agilidade e discrição.',
  },
  {
    icon: Building,
    title: 'Assessoria Empresarial',
    desc: 'Suporte jurídico contínuo para o crescimento do negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Planejamento Preventivo',
    desc: 'Antecipação de riscos e proteção jurídica preventiva.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Serviços Especializados
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Soluções jurídicas completas e estratégicas
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-4 bg-card/80 p-8 transition-colors duration-300 hover:bg-card">
                <span className="flex size-12 items-center justify-center rounded-lg border border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

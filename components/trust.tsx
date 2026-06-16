'use client'

import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const items = [
  'Atendimento personalizado',
  'Transparência',
  'Ética profissional',
  'Segurança jurídica',
  'Estratégias sob medida',
  'Compromisso com resultados',
]

export function Trust() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="rounded-3xl border border-primary/20 bg-card/40 p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <span className="text-base text-foreground">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

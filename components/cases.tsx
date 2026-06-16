'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'

const cases = [
  {
    challenge: 'Autuação fiscal indevida de R$ 2,3 milhões contra empresa de médio porte.',
    strategy: 'Auditoria tributária completa e defesa administrativa fundamentada.',
    solution: 'Anulação integral do auto de infração na esfera administrativa.',
    result: 'Economia de R$ 2,3 milhões e regularização fiscal definitiva.',
  },
  {
    challenge: 'Disputa societária com risco de paralisação das atividades da empresa.',
    strategy: 'Mediação estratégica e reestruturação do contrato social.',
    solution: 'Acordo equilibrado entre os sócios sem litígio judicial.',
    result: 'Continuidade do negócio e proteção do patrimônio dos sócios.',
  },
  {
    challenge: 'Rescisão trabalhista com pedidos indenizatórios desproporcionais.',
    strategy: 'Produção robusta de provas e defesa técnica detalhada.',
    solution: 'Redução substancial dos valores pleiteados em juízo.',
    result: 'Decisão favorável e previsibilidade financeira ao cliente.',
  },
]

const steps = ['Desafio', 'Estratégia', 'Solução', 'Resultado'] as const

export function Cases() {
  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Cases de Sucesso
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Resultados que falam por si
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 lg:left-1/2" />

          <div className="flex flex-col gap-12">
            {cases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-12 lg:w-1/2 lg:pl-0 ${
                  i % 2 === 0
                    ? 'lg:self-start lg:pr-12 lg:text-right'
                    : 'lg:self-end lg:pl-12'
                }`}
              >
                <span
                  className={`absolute left-[9px] top-2 size-3.5 rounded-full border-2 border-primary bg-background lg:left-auto ${
                    i % 2 === 0 ? 'lg:-right-[7px]' : 'lg:-left-[7px]'
                  }`}
                />
                <div className="glass rounded-2xl p-7">
                  <span className="font-serif text-2xl text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <dl className="mt-4 space-y-3">
                    {steps.map((step, idx) => {
                      const value = [
                        item.challenge,
                        item.strategy,
                        item.solution,
                        item.result,
                      ][idx]
                      return (
                        <div key={step}>
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/90">
                            {step}
                          </dt>
                          <dd className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {value}
                          </dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

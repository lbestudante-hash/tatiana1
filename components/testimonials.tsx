'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Ricardo Mendes',
    role: 'Empresário',
    text: 'A Dra. Tatiana conduziu nossa demanda tributária com uma clareza e estratégia impecáveis. Sentimos segurança em cada etapa do processo.',
  },
  {
    name: 'Camila Figueiredo',
    role: 'Diretora de RH',
    text: 'Profissional extremamente preparada e ética. Resolveu uma questão trabalhista complexa com agilidade e total transparência.',
  },
  {
    name: 'Eduardo Santos',
    role: 'Cliente Particular',
    text: 'Atendimento personalizado do início ao fim. A Dra. Tatiana entende a importância de cada decisão e nos orientou com excelência.',
  },
  {
    name: 'Larissa Oliveira',
    role: 'Sócia-fundadora',
    text: 'Assessoria empresarial de altíssimo nível. Hoje temos previsibilidade jurídica e tranquilidade para focar no crescimento do negócio.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(58,80,107,0.2),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Depoimentos
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              A confiança de quem foi bem assessorado
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <Quote className="mx-auto mb-6 size-10 text-primary/40" />
          <div className="min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl px-8 py-10 text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="font-serif text-xl leading-relaxed text-balance text-foreground sm:text-2xl">
                  &ldquo;{current.text}&rdquo;
                </p>
                <footer className="mt-7">
                  <p className="font-semibold text-foreground">{current.name}</p>
                  <p className="text-sm text-primary">{current.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

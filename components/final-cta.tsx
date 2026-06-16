'use client'

import { motion } from 'motion/react'
import { Calendar, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,43,0.9),rgba(11,19,43,0.4),rgba(11,19,43,0.95))]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
        >
          Proteja seus direitos com quem entende a importância de cada decisão.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Receba orientação jurídica especializada e soluções estratégicas para
          seus desafios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03]"
          >
            <Calendar className="size-4" />
            Agendar Consulta
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

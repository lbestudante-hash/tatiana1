'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Calendar, MessageCircle, ChevronDown } from 'lucide-react'
import { GoldParticles } from './gold-particles'
import { whatsappLink } from '@/lib/site'



const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(58,80,107,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.12),transparent_50%)]" />
      </div>
      <GoldParticles />

      {/* 3D scale */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-70 lg:w-[55%] lg:opacity-100">
        <JusticeScale />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-20 lg:grid-cols-2 lg:px-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-primary"
          >
            Advocacia de Excelência
          </motion.div>

          <h1 className="font-serif text-4xl leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
              className="block"
            >
              Excelência Jurídica.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: easeOut }}
              className="block text-gradient-gold"
            >
              Estratégia Inteligente.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: easeOut }}
              className="block"
            >
              Resultados Concretos.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: easeOut }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Assessoria jurídica especializada para pessoas e empresas que buscam
            segurança, proteção e soluções eficazes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/40"
            >
              <Calendar className="size-4" />
              Agendar Consulta
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <MessageCircle className="size-4" />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: easeOut }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/20">
            <Image
              src="/images/tatiana-hero.png"
              alt="Dra. Tatiana Andrade, advogada"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.28em]">Explore</span>
          <ChevronDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}

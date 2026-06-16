'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const posts = [
  {
    image: '/images/blog-1.png',
    category: 'Direito Empresarial',
    date: '12 Mar 2025',
    title: 'A importância de contratos bem estruturados para empresas',
    excerpt:
      'Entenda como cláusulas bem redigidas previnem litígios e protegem o seu negócio a longo prazo.',
  },
  {
    image: '/images/blog-2.png',
    category: 'Direito Tributário',
    date: '28 Fev 2025',
    title: 'Planejamento tributário: como reduzir riscos legalmente',
    excerpt:
      'Estratégias preventivas que garantem economia e conformidade fiscal para pessoas e empresas.',
  },
  {
    image: '/images/blog-3.png',
    category: 'Direito de Família',
    date: '15 Fev 2025',
    title: 'Planejamento sucessório: proteja seu patrimônio e sua família',
    excerpt:
      'Organize a sucessão de bens com segurança jurídica, evitando conflitos futuros entre herdeiros.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.32em] text-primary">
                Blog Jurídico
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                Conhecimento que gera segurança
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 24rem, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {post.date}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Ler artigo
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

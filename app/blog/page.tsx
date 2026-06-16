import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog Jurídico | Dra. Tatiana Andrade',
  description:
    'Artigos e conteúdos jurídicos sobre direito trabalhista, inventário, aposentadoria e mais, com a Dra. Tatiana Andrade.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Voltar para a página inicial
        </Link>

        <div className="mt-10 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.32em] text-primary">
            Blog Jurídico
          </span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground lg:text-5xl">
            Conhecimento que gera segurança
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Conteúdos práticos para ajudar você a entender seus direitos e tomar
            decisões com mais segurança jurídica.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-colors duration-300 hover:border-primary/50"
            >
              <Link href={`/blog/${post.slug}`} className="block">
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
                  <h2 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Ler artigo
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

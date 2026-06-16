import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { posts, getPost } from '@/lib/blog'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return { title: 'Artigo não encontrado | Dra. Tatiana Andrade' }
  }

  return {
    title: `${post.title} | Dra. Tatiana Andrade`,
    description: post.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Voltar para o Blog
        </Link>

        <header className="mt-10">
          <span className="text-xs uppercase tracking-[0.16em] text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {post.subtitle}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {post.date}
          </p>
        </header>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-border/60 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="size-4" />
            Voltar para o Blog
          </Link>
        </div>
      </article>
    </main>
  )
}

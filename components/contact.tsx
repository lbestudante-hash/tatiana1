'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Send, Check, Loader2 } from 'lucide-react'
import { Reveal } from './reveal'
import { site, whatsappLink } from '@/lib/site'

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>

const fields = [
  { id: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome completo' },
  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
  { id: 'phone', label: 'Telefone', type: 'tel', placeholder: '(21) 99999-9999' },
  { id: 'subject', label: 'Assunto', type: 'text', placeholder: 'Assunto da consulta' },
] as const

export function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (name.length < 2) next.name = 'Informe seu nome.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = 'Informe um e-mail válido.'
    if (phone.replace(/\D/g, '').length < 10)
      next.phone = 'Informe um telefone válido.'
    if (message.length < 10)
      next.message = 'Descreva sua mensagem com mais detalhes.'
    return next
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') || '').trim(),
          email: String(data.get('email') || '').trim(),
          phone: String(data.get('phone') || '').trim(),
          subject: String(data.get('subject') || '').trim(),
          message: String(data.get('message') || '').trim(),
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(58,80,107,0.18),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Contato
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Vamos conversar sobre o seu caso
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Preencha o formulário ou utilize um de nossos canais de
              atendimento. A Dra. Tatiana Andrade retornará o seu contato com
              toda a atenção que o seu caso merece.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  E-mail
                </p>
                <p className="text-foreground">{site.email}</p>
              </div>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Telefone / WhatsApp
                </p>
                <p className="text-foreground">{site.phoneDisplay}</p>
              </div>
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.id}
                className={field.id === 'subject' ? 'sm:col-span-2' : ''}
              >
                <label
                  htmlFor={field.id}
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
                {errors[field.id as keyof Errors] && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors[field.id as keyof Errors]}
                  </p>
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Descreva brevemente o seu caso..."
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
          >
            {status === 'sending' && (
              <Loader2 className="size-4 animate-spin" />
            )}
            {status === 'sent' && <Check className="size-4" />}
            {(status === 'idle' || status === 'error') && (
              <Send className="size-4" />
            )}
            {status === 'sending'
              ? 'Enviando...'
              : status === 'sent'
                ? 'Mensagem enviada!'
                : status === 'error'
                  ? 'Tentar novamente'
                  : 'Enviar mensagem'}
          </button>
          {status === 'sent' && (
            <p className="mt-3 text-center text-sm text-primary">
              Obrigado pelo contato. Retornaremos em breve.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-center text-sm text-destructive">
              Não foi possível enviar a mensagem. Tente novamente ou use o
              WhatsApp.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

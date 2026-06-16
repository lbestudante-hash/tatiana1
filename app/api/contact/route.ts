import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/lib/site'

export const runtime = 'nodejs'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY não configurada')
    return NextResponse.json(
      { error: 'Serviço de e-mail não configurado.' },
      { status: 500 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const subject = String(body.subject ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (name.length < 2 || !isValidEmail(email) || message.length < 10) {
    return NextResponse.json(
      { error: 'Dados do formulário inválidos.' },
      { status: 400 },
    )
  }

  const toAddress = process.env.CONTACT_TO_EMAIL || site.email
  const fromAddress = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: `Site ${site.shortName} <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `Novo contato pelo site${subject ? `: ${subject}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2 style="margin-bottom: 16px;">Nova mensagem do formulário de contato</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${subject ? `<p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>` : ''}
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.log('[v0] Erro Resend:', error)
      return NextResponse.json(
        { error: 'Não foi possível enviar a mensagem.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log('[v0] Falha no envio:', err)
    return NextResponse.json(
      { error: 'Não foi possível enviar a mensagem.' },
      { status: 500 },
    )
  }
}

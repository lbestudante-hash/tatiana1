import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Tatiana Andrade | Advocacia de Excelência',
  description:
    'Assessoria jurídica especializada para pessoas e empresas que buscam segurança, proteção e soluções estratégicas. Dra. Tatiana Andrade — Excelência jurídica, estratégia inteligente, resultados concretos.',
  generator: 'v0.app',
  keywords: [
    'advogada',
    'advocacia',
    'direito civil',
    'direito trabalhista',
    'direito empresarial',
    'direito tributário',
    'direito de família',
    'Tatiana Andrade',
    'assessoria jurídica',
  ],
  openGraph: {
    title: 'Dra. Tatiana Andrade | Advocacia de Excelência',
    description:
      'Assessoria jurídica especializada para pessoas e empresas que buscam segurança, proteção e soluções estratégicas.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b132b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

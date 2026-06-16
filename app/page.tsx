import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { PracticeAreas } from '@/components/practice-areas'
import { Services } from '@/components/services'
import { Authority } from '@/components/authority'
import { Cases } from '@/components/cases'
import { Testimonials } from '@/components/testimonials'
import { Blog } from '@/components/blog'
import { Trust } from '@/components/trust'
import { FinalCta } from '@/components/final-cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Services />
      <Authority />
      <Cases />
      <Testimonials />
      <Blog />
      <Trust />
      <FinalCta />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

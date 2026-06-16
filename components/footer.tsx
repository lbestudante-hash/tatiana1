import { Scale, Mail, Phone } from 'lucide-react'
import { site, navLinks } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Scale className="size-6 text-primary" strokeWidth={1.5} />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-foreground">
                  Tatiana Andrade
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-primary">
                  Advocacia
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Excelência jurídica, estratégia inteligente e resultados concretos
              para proteger seus direitos e interesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Navegação
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            OAB | Advocacia e Consultoria Jurídica
          </p>
        </div>
      </div>
    </footer>
  )
}

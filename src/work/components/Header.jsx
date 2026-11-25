import { useEffect, useState } from 'react'
import { Instagram, Linkedin, Menu, X } from 'lucide-react'
import { CONTACT } from '../data/site.js'

var NAV_LINKS = [
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Campaigns',
    href: '#all-work',
  },
  {
    label: 'Press',
    href: '#press',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export function Header({ onOpenCampaigns: e }) {
  let [t, n] = useState(false),
    [r, i] = useState(false)
  useEffect(() => {
    let e = () => {
      n(window.scrollY > 40)
    }
    return (
      e(),
      window.addEventListener('scroll', e, {
        passive: true,
      }),
      () => window.removeEventListener('scroll', e)
    )
  }, [])
  let a = (t, n) => {
    ; (i(false), t === 'Campaigns' && e())
    let r = document.querySelector(n)
    r &&
      r.scrollIntoView({
        behavior: 'smooth',
      })
  }
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${t || r ? 'bg-black/95 backdrop-blur-md border-b border-white/12' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12 py-4 md:py-5">
        <a
          href="#top"
          className="font-serif-editorial text-2xl sm:text-[28px] leading-none tracking-tight text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors whitespace-nowrap shrink-0"
        >
          Debojit Saha
        </a>
        <div className="flex items-center gap-4 lg:gap-7 shrink-0">
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((e) => (
              <a
                key={e.label}
                href={e.href}
                onClick={(t) => {
                  ; (t.preventDefault(), a(e.label, e.href))
                }}
                className="relative font-sans-body text-xs font-bold uppercase tracking-[0.16em] text-white/90 hover:text-[#FF3388] active:text-[#B80058] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#E31E7B] hover:after:w-full after:transition-all after:duration-200"
              >
                {e.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4 lg:pl-5 lg:border-l lg:border-white/15 shrink-0">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @bcfw.aic"
              title="Follow on Instagram @bcfw.aic"
              className="flex h-10 w-10 items-center justify-center text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn AI Collective"
              title="Connect on LinkedIn"
              className="flex h-10 w-10 items-center justify-center text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.75} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => i((e) => !e)}
            aria-label={r ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={r}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
          >
            {r ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {r && (
        <div className="lg:hidden bg-black border-t border-white/12 px-5 py-6">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((e) => (
              <a
                key={e.label}
                href={e.href}
                onClick={(t) => {
                  ; (t.preventDefault(), a(e.label, e.href))
                }}
                className="font-sans-body text-sm font-bold uppercase tracking-[0.18em] text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors py-1"
              >
                {e.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

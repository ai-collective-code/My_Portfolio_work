import { Instagram, Linkedin, Mail } from 'lucide-react'
import { CONTACT } from '../data/site.js'

export function Contact() {
  return (
    <>
      <section id="contact" className="bg-black py-24 sm:py-32 md:py-40 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B] mb-6">
            {'[ 04 // CONTACT ]'}
          </p>
          <h2 className="leading-[0.95] max-w-5xl">
            <span className="block font-serif-editorial italic text-5xl sm:text-7xl md:text-8xl text-white mb-2">
              {"Let's make something"}
            </span>
            <span className="block font-display-wide font-black uppercase text-5xl sm:text-7xl md:text-9xl tracking-[-0.03em] text-[#E31E7B]">
              unreal.
            </span>
          </h2>
          <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href={CONTACT.mailto}
              className="inline-flex items-center gap-3.5 border border-white/25 bg-[#0B0B0B] px-6 sm:px-7 py-4 sm:py-5 font-sans-body text-base sm:text-xl font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
            >
              <Mail className="w-6 h-6 text-[#E31E7B]" strokeWidth={1.75} />
              <span>{CONTACT.email}</span>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 border border-white/25 bg-[#0B0B0B] px-6 sm:px-7 py-4 sm:py-5 font-sans-body text-base sm:text-xl font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.75} />
              <span>{CONTACT.linkedinLabel}</span>
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 border border-white/25 bg-[#0B0B0B] px-6 sm:px-7 py-4 sm:py-5 font-sans-body text-base sm:text-xl font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
            >
              <Instagram className="w-6 h-6" strokeWidth={1.75} />
              <span>{CONTACT.instagramLabel}</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black border-t border-white/15 px-5 sm:px-8 lg:px-12 py-8">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-sans-body text-xs sm:text-sm text-white/65">
            © 2026 Bharat Content Fireworks (BC[f]W). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-body text-xs sm:text-sm text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.75} />
              <span>{CONTACT.instagramLabel}</span>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-body text-xs sm:text-sm text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.75} />
              <span>{CONTACT.linkedinLabel}</span>
            </a>
            <a
              href={CONTACT.mailto}
              className="inline-flex items-center gap-2 font-sans-body text-xs sm:text-sm text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.75} />
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

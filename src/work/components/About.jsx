import { Instagram, Linkedin, Mail } from 'lucide-react'
import { CONTACT, PORTRAIT_URL } from '../data/site.js'

export function About() {
  return (
    <section id="about" className="bg-black py-20 sm:py-28 md:py-36 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 md:mb-20 border-b border-white/12 pb-8">
          <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B] mb-3">
            {'[ 03 // ABOUT ]'}
          </p>
          <h2 className="leading-[0.95]">
            <span className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-white mr-3">
              Storytelling meets
            </span>
            <span className="font-display-wide font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
              {'CREATIVE '}
              <span className="text-[#E31E7B]">TECH</span>
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-28 w-28 sm:h-36 sm:w-36 shrink-0 rounded-full p-[3px] border-2 border-[#E31E7B]">
                <img
                  src={PORTRAIT_URL}
                  alt="Debojit Saha"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif-editorial text-3xl text-white">Debojit Saha</p>
                <p className="mt-1 font-mono-label text-xs uppercase tracking-[0.12em] text-[#E31E7B]">
                  Founder, BC[f]W
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-[#0B0B0B] px-3.5 py-2 font-sans-body text-xs font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.75} />
                <span>{CONTACT.instagramLabel}</span>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-[#0B0B0B] px-3.5 py-2 font-sans-body text-xs font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.75} />
                <span>{CONTACT.linkedinLabel}</span>
              </a>
              <a
                href={CONTACT.mailto}
                className="inline-flex items-center gap-2 border border-white/20 bg-[#0B0B0B] px-3.5 py-2 font-sans-body text-xs font-medium text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.75} />
                <span>{CONTACT.email}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-[#E31E7B] font-semibold">
              FOUNDER. DEBOJIT
            </p>
            <p className="font-serif-editorial text-2xl sm:text-3xl md:text-[32px] leading-[1.3] text-white/95">
              A Calcutta Xaverian and IIMB alumnus, 20+ years in branded content marketing &amp; distribution. Former Creative &amp; Regional Programing Lead at Radio One, sphereheading national campaigns along with vernacular content marketing with deep cultural insights.
            </p>
            <p className="font-serif-editorial text-xl sm:text-2xl md:text-[26px] leading-[1.35] text-white/80">
              Founded ICE Media Lab, his first content shop that built award winning content for some of India&apos;s biggest brands.
            </p>
            <p className="font-serif-editorial text-xl sm:text-2xl md:text-[26px] leading-[1.35] text-white/80">
              Building BC[f]W, an intersection of his experience with latest technology acheiving content innovation at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

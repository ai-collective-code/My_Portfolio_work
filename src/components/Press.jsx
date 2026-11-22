import { ExternalLink } from 'lucide-react'
import { PRESS_ITEMS } from '../data/site.js'

export function Press() {
  return (
    <section
      id="press"
      className="bg-black py-20 sm:py-28 md:py-32 px-5 sm:px-8 lg:px-12 border-t border-white/12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 md:mb-16 border-b border-white/12 pb-8">
          <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B] mb-3">
            {'[ 05 // PRESS ]'}
          </p>
          <h2 className="leading-[0.95]">
            <span className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-white mr-3">
              In the
            </span>
            <span className="font-display-wide font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#E31E7B]">
              PRESS
            </span>
          </h2>
        </div>
        <div className="space-y-6">
          {PRESS_ITEMS.map((e) => (
            <a
              key={e.id}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0B0B0B] border border-white/15 hover:border-[#FF3388] active:border-[#B80058] transition-colors duration-300 p-7 sm:p-10 md:p-14 focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-4xl">
                  <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B]">
                    {e.publication}
                  </p>
                  <h3 className="mt-4 font-serif-editorial text-3xl sm:text-5xl md:text-[54px] leading-[1.06] text-white group-hover:text-white transition-colors">
                    {e.headline}
                  </h3>
                  <p className="mt-4 font-sans-body text-sm sm:text-base text-white/65">
                    {e.subtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 self-start lg:self-end border border-white/25 group-hover:border-[#FF3388] group-hover:bg-[#FF3388] group-active:border-[#B80058] group-active:bg-[#B80058] px-6 py-3.5 font-mono-label text-xs uppercase tracking-[0.14em] text-white transition-colors shrink-0">
                  <span>{e.ctaLabel}</span>
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

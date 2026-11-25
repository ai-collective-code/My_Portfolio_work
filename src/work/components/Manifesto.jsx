import { MarqueeRow } from './Marquee.jsx'
import { PORTRAIT_URL } from '../data/site.js'

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-black py-28 sm:py-36 md:py-44 px-5 sm:px-8 lg:px-12"
    >
      <MarqueeRow
        idSuffix="left"
        className="hidden sm:block absolute -left-24 md:-left-20 top-12 md:top-16 w-48 h-48 md:w-72 md:h-72 opacity-65"
      />
      <MarqueeRow
        idSuffix="right"
        reverse
        className="hidden sm:block absolute -right-24 md:-right-16 bottom-10 md:bottom-14 w-44 h-44 md:w-64 md:h-64 opacity-70"
      />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mx-auto leading-[0.95] tracking-tight">
          <span className="block font-serif-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl text-white/95 mb-3 md:mb-4">
            A branded content producer
          </span>
          <span className="block font-display-wide font-black uppercase text-3xl sm:text-6xl md:text-8xl tracking-[-0.03em] text-white leading-[1.02]">
            {"FOR INDIA'S BIGGEST"}
          </span>
          <span className="block font-display-wide font-black uppercase text-3xl sm:text-6xl md:text-8xl tracking-[-0.03em] text-[#E31E7B] mt-1 leading-[1.02]">
            BRANDS.
          </span>
        </h2>
        <div className="mt-12 md:mt-14 flex justify-center">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full p-[3px] border-2 border-[#E31E7B]">
            <img
              src={PORTRAIT_URL}
              alt="Debojit Saha portrait"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl font-sans-body text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
          Debojit Saha. Founder &amp; Creative Producer at Bharat Content Fireworks (BC[f]W). 20+ years of
          branded content marketing, vernacular cultural storytelling and creative innovation.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              let e = document.getElementById('about')
              e &&
                e.scrollIntoView({
                  behavior: 'smooth',
                })
            }}
            className="inline-block font-sans-body text-sm font-semibold tracking-wide text-white border-b-2 border-[#E31E7B] pb-1 hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
          >
            About me
          </button>
        </div>
      </div>
    </section>
  )
}

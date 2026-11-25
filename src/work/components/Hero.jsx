import { useEffect, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { YouTubePlayer } from './YouTubePlayer.jsx'
import { HERO_SLIDES } from '../data/works.js'

var SLIDE_MS = 6e3

export function Hero({ onOpenSlide: e }) {
  const slides = HERO_SLIDES.filter((s) => s.type === 'youtube' && s.youtubeId)
  let [t, n] = useState(0),
    [r, i] = useState(0)
  useEffect(() => {
    let e = window.setTimeout(() => {
      n((e) => (e + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearTimeout(e)
  }, [t, r, slides.length])
  let a = slides[t] || HERO_SLIDES[0],
    o = () => {
      ;(n((e) => (e - 1 + slides.length) % slides.length), i((e) => e + 1))
    },
    s = () => {
      ;(n((e) => (e + 1) % slides.length), i((e) => e + 1))
    },
    c = () => {
      let e = document.getElementById('manifesto')
      e &&
        e.scrollIntoView({
          behavior: 'smooth',
        })
    }
  return (
    <section
      id="top"
      aria-label="Featured showreel"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black"
    >
      <div key={a.id} className="absolute inset-0 z-10 animate-hero-fade-in">
        {a.youtubeId ? (
          <YouTubePlayer videoId={a.youtubeId} title={a.title} thumbnail={a.thumbnail || a.src} />
        ) : (
          <img
            src={a.src}
            alt={a.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover animate-ken-burns"
          />
        )}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/30 to-black/55"
      />
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-2.5 sm:mb-3 text-xs font-sans-body tracking-wide">
              <div className="flex items-center gap-2">
                <span className="text-white/55">Client</span>
                <span className="text-white font-medium">{a.client}</span>
              </div>
              {a.year && (
                <div className="flex items-center gap-2">
                  <span className="text-white/55">Year</span>
                  <span className="text-white font-medium tabular-nums">{a.year}</span>
                </div>
              )}
              {a.isNew && (
                <span className="bg-[#E31E7B] px-2.5 py-0.5 font-mono-label text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                  New
                </span>
              )}
            </div>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-7xl leading-[0.98] tracking-tight">
              <button
                type="button"
                onClick={() => e(a.lightboxId)}
                className="group inline-flex items-center gap-4 text-left text-[#FF3388] hover:text-white active:text-[#B80058] transition-colors focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
              >
                <span className="text-[#FF3388] group-hover:text-white transition-colors drop-shadow-[0_2px_12px_rgba(227,30,123,0.35)]">
                  {a.title}
                </span>
                <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-[#E31E7B] bg-[#E31E7B] text-white group-hover:border-[#FF3388] group-hover:bg-[#FF3388] group-active:border-[#B80058] group-active:bg-[#B80058] transition-colors shadow-[0_0_24px_rgba(227,30,123,0.55)]">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
              </button>
            </h1>
          </div>
          <button
            type="button"
            onClick={c}
            className="hidden md:flex flex-col items-center gap-1.5 text-white/75 hover:text-[#FF3388] active:text-[#B80058] transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
          >
            <span className="font-mono-label text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
            <button
              type="button"
              onClick={c}
              className="md:hidden inline-flex items-center gap-1.5 font-mono-label text-[11px] uppercase tracking-[0.18em] text-white/80 hover:text-[#FF3388] active:text-[#B80058]"
            >
              <span>Scroll</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={o}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono-label text-xs tracking-[0.14em] text-white/90 tabular-nums min-w-[48px] text-center">
                {t + 1}
                {' of '}
                {HERO_SLIDES.length}
              </span>
              <button
                type="button"
                onClick={s}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/15">
        <div key={`${t}-${r}`} className="h-full w-full bg-[#E31E7B] animate-hero-progress" />
      </div>
    </section>
  )
}

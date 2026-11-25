import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import { PRESS_ITEMS } from '../data/site.js'

export function Press() {
  const [activeIndex, setActiveIndex] = useState(null)

  const closeModal = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx - 1 + PRESS_ITEMS.length) % PRESS_ITEMS.length))
  }, [])
  const showNext = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx + 1) % PRESS_ITEMS.length))
  }, [])

  useEffect(() => {
    if (activeIndex === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
      else if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, closeModal, showPrev, showNext])

  const activeItem = activeIndex !== null ? PRESS_ITEMS[activeIndex] : null

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
          {PRESS_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group block w-full text-left bg-[#0B0B0B] border border-white/15 hover:border-[#FF3388] active:border-[#B80058] transition-colors duration-300 p-7 sm:p-10 md:p-14 focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-4xl">
                  <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B]">
                    {item.publication}
                  </p>
                  <h3 className="mt-4 font-serif-editorial text-3xl sm:text-5xl md:text-[54px] leading-[1.06] text-white group-hover:text-white transition-colors">
                    {item.headline}
                  </h3>
                  <p className="mt-4 font-sans-body text-sm sm:text-base text-white/65">
                    {item.subtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 self-start lg:self-end border border-white/25 group-hover:border-[#FF3388] group-hover:bg-[#FF3388] group-active:border-[#B80058] group-active:bg-[#B80058] px-6 py-3.5 font-mono-label text-xs uppercase tracking-[0.14em] text-white transition-colors shrink-0">
                  <span>{item.ctaLabel}</span>
                  <ExternalLink
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.headline}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={closeModal}
          >
            <div
              className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-b border-white/12 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B]">
                  {activeItem.publication}
                </span>
                <span className="text-white/25" aria-hidden="true">
                  /
                </span>
                <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-white/60 tabular-nums">
                  {`Article ${activeIndex + 1} of ${PRESS_ITEMS.length}`}
                </span>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close article popup"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white hover:border-[#FF3388] hover:bg-[#FF3388] active:border-[#B80058] active:bg-[#B80058] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto px-5 sm:px-10 py-10 sm:py-14 flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <article className="mx-auto w-full max-w-4xl bg-[#0B0B0B] border border-white/15 p-7 sm:p-12 md:p-14">
                <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B]">
                  {activeItem.publication}
                </p>
                <h3 className="mt-4 font-serif-editorial text-3xl sm:text-5xl md:text-[54px] leading-[1.06] text-white">
                  {activeItem.headline}
                </h3>
                <p className="mt-4 font-sans-body text-base sm:text-xl text-white/80 leading-relaxed">
                  {activeItem.subtitle}
                </p>

                {activeItem.summary && (
                  <div className="mt-8 border-t border-white/12 pt-8">
                    <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-white/50 mb-3">
                      Story Overview
                    </p>
                    <p className="font-sans-body text-sm sm:text-base text-white/85 leading-relaxed">
                      {activeItem.summary}
                    </p>
                  </div>
                )}

                {activeItem.takeaways && activeItem.takeaways.length > 0 && (
                  <div className="mt-8 border-t border-white/12 pt-8">
                    <p className="font-mono-label text-[11px] uppercase tracking-[0.16em] text-white/50 mb-4">
                      Key Takeaways
                    </p>
                    <ul className="space-y-3">
                      {activeItem.takeaways.map((point, pointIdx) => (
                        <li
                          key={pointIdx}
                          className="flex items-start gap-3 font-sans-body text-sm sm:text-base text-white/80 leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E31E7B]"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10 pt-6 border-t border-white/12 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-white/50">
                    Press Reader View
                  </span>
                  <a
                    href={activeItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#E31E7B] bg-[#E31E7B] px-5 py-3 font-mono-label text-xs uppercase tracking-[0.14em] text-white hover:bg-[#FF3388] hover:border-[#FF3388] active:bg-[#B80058] active:border-[#B80058] transition-colors"
                  >
                    <span>{`Visit ${activeItem.publication}`}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </div>

            <div
              className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-t border-white/12 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous article"
                className="inline-flex items-center gap-2 border border-white/20 bg-[#0B0B0B] px-5 py-3 font-mono-label text-xs uppercase tracking-[0.14em] text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="font-mono-label text-xs uppercase tracking-[0.14em] text-white/75 tabular-nums">
                {activeIndex + 1}
                {' of '}
                {PRESS_ITEMS.length}
              </span>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next article"
                className="inline-flex items-center gap-2 border border-white/20 bg-[#0B0B0B] px-5 py-3 font-mono-label text-xs uppercase tracking-[0.14em] text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}

import { useRef, useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { FEATURED_WORKS } from '../data/works.js'

export function FeaturedWork({ onSelectItem: e }) {
  let [t, n] = useState(null),
    r = useRef({}),
    i = (e) => {
      if ((n(e.id), e.type === 'video')) {
        let t = r.current[e.id]
        t && t.play().catch(() => {})
      }
    },
    a = (e) => {
      if ((n((t) => (t === e.id ? null : t)), e.type === 'video')) {
        let t = r.current[e.id]
        t && t.pause()
      }
    }
  return (
    <section
      id="work"
      className="bg-black py-20 sm:py-28 md:py-36 px-5 sm:px-8 lg:px-12 border-b border-white/12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/12 pb-8">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B] mb-3">
              {'[ 01 // FEATURED WORK ]'}
            </p>
            <h2 className="leading-[0.95]">
              <span className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-white mr-3">
                Featured
              </span>
              <span className="font-display-wide font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight text-white">
                <span className="text-[#E31E7B]">WORK</span>
              </span>
            </h2>
          </div>
          <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-white/55 tabular-nums">
            {FEATURED_WORKS.length}
            {' Selected Films'}
          </p>
        </div>
        <div className="space-y-16 md:space-y-24">
          {FEATURED_WORKS.map((n) => {
            let o = t === n.id
            return (
              <article key={n.id} className="group">
                <div
                  role="button"
                  tabIndex={0}
                  data-cursor="tile"
                  onMouseEnter={() => i(n)}
                  onMouseLeave={() => a(n)}
                  onFocus={() => i(n)}
                  onBlur={() => a(n)}
                  onClick={() => e(n)}
                  onKeyDown={(t) => {
                    ;(t.key === 'Enter' || t.key === ' ') && (t.preventDefault(), e(n))
                  }}
                  aria-label={`Open ${n.title} in lightbox`}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0B0B] border border-white/12 focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
                >
                  {n.type === 'youtube' && n.youtubeId ? (
                    <>
                      <img
                        src={n.thumbnail}
                        alt={n.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          let t = `https://img.youtube.com/vi/${n.youtubeId}/hqdefault.jpg`
                          e.currentTarget.src !== t && (e.currentTarget.src = t)
                        }}
                        onLoad={(e) => {
                          if (e.currentTarget.naturalWidth <= 120 && n.youtubeId) {
                            let t = `https://img.youtube.com/vi/${n.youtubeId}/hqdefault.jpg`
                            e.currentTarget.src !== t && (e.currentTarget.src = t)
                          }
                        }}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      {o && (
                        <iframe
                          src={`https://www.youtube.com/embed/${n.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${n.youtubeId}&controls=0&modestbranding=1&playsinline=1&iv_load_policy=3&rel=0&disablekb=1&fs=0`}
                          title={`${n.title} preview`}
                          allow="autoplay; encrypted-media; picture-in-picture"
                          referrerPolicy="strict-origin-when-cross-origin"
                          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-[1.35] border-0"
                        />
                      )}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45"
                      />
                      <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 bg-black/75 border border-white/15 px-3 py-1.5">
                        <Play className="w-3 h-3 text-[#E31E7B] fill-[#E31E7B]" />
                        <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-white">
                          {o ? 'Playing Preview' : 'Hover Preview \xB7 Click for Sound'}
                        </span>
                      </div>
                    </>
                  ) : n.type === 'video' ? (
                    <>
                      <video
                        ref={(e) => {
                          r.current[n.id] = e
                        }}
                        src={n.media[0]}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onLoadedData={(e) => {
                          o || (e.currentTarget.currentTime = 0.25)
                        }}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 bg-black/75 border border-white/15 px-3 py-1.5">
                        <Play className="w-3 h-3 text-[#E31E7B] fill-[#E31E7B]" />
                        <span className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-white">
                          {o ? 'Playing Preview' : 'Hover Preview \xB7 AI Film'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <img
                      src={n.thumbnail}
                      alt={n.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.05]"
                    />
                  )}
                </div>
                <div className="mt-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-t border-white/10 pt-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-sans-body">
                      <div className="flex items-center gap-2">
                        <span className="text-white/45">Client</span>
                        <span className="text-white font-medium">{n.client}</span>
                      </div>
                      {n.isNew ? (
                        <span className="bg-[#E31E7B] px-2.5 py-0.5 font-mono-label text-[10px] font-medium uppercase tracking-[0.14em] text-white">
                          New
                        </span>
                      ) : (
                        n.year && (
                          <div className="flex items-center gap-2">
                            <span className="text-white/45">Year</span>
                            <span className="text-white font-medium tabular-nums">{n.year}</span>
                          </div>
                        )
                      )}
                    </div>
                    <h3 className="mt-2.5 font-serif-editorial text-3xl sm:text-5xl md:text-[54px] leading-[1.02] text-white group-hover:text-[#FF3388] transition-colors">
                      <button
                        type="button"
                        onClick={() => e(n)}
                        className="text-left focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
                      >
                        {n.title}
                      </button>
                    </h3>
                  </div>
                  {n.watchUrl && (
                    <a
                      href={n.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 self-start border border-[#E31E7B] px-4 py-2 font-mono-label text-xs uppercase tracking-[0.14em] text-[#E31E7B] hover:bg-[#FF3388] hover:border-[#FF3388] hover:text-white active:bg-[#B80058] active:border-[#B80058] transition-colors shrink-0"
                    >
                      <span>{n.watchLabel || 'Watch'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

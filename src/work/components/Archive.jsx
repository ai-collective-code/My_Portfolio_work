import { Play } from 'lucide-react'

var FILTERS = [
  {
    key: 'all',
    label: 'All',
  },
  {
    key: 'ai',
    label: 'AI',
  },
  {
    key: 'scripted',
    label: 'Scripted',
  },
  {
    key: 'activation',
    label: 'Activation',
  },
  {
    key: 'unscripted',
    label: 'Unscripted',
  },
  {
    key: 'corporate',
    label: 'Corporate',
  },
  {
    key: 'technology',
    label: 'Technology',
  },
]

export function Archive({ items: e, activeFilter: t, onChangeFilter: n, onSelectItem: r }) {
  let i = t === 'all' ? e : e.filter((e) => e.group === t)
  return (
    <section
      id="all-work"
      className="bg-black py-20 sm:py-28 md:py-32 px-5 sm:px-8 lg:px-12 border-b border-white/12"
    >
      <div id="campaigns" className="mx-auto max-w-[1440px]">
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/12 pb-8">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-[#E31E7B] mb-3">
              {'[ 02 // ARCHIVE ]'}
            </p>
            <h2 className="leading-[0.95]">
              <span className="font-display-wide font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
                ARCHIVE
              </span>
            </h2>
          </div>
          <div
            role="tablist"
            aria-label="Filter archive by category"
            className="flex flex-wrap items-center gap-2"
          >
            {FILTERS.map((e) => {
              let r = t === e.key
              return (
                <button
                  key={e.key}
                  type="button"
                  role="tab"
                  aria-selected={r}
                  onClick={() => n(e.key)}
                  className={`px-4 py-2 font-mono-label text-xs uppercase tracking-[0.12em] border transition-colors whitespace-nowrap shrink-0 ${r ? 'border-[#E31E7B] bg-[#E31E7B] text-white hover:bg-[#FF3388] hover:border-[#FF3388] active:bg-[#B80058] active:border-[#B80058]' : 'border-white/15 bg-[#0B0B0B] text-white/75 hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058]'}`}
                >
                  {e.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {i.map((e) => {
            let t = e.type === 'youtube' || e.type === 'video' || e.type === 'instagram'
            return (
              <article key={e.id} className="group bg-[#0B0B0B] border border-white/12">
                <button
                  type="button"
                  data-cursor="tile"
                  onClick={() => r(e)}
                  className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#E31E7B]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                    {e.thumbnail && (e.thumbnail.endsWith('.mp4') || e.thumbnail.includes('.mp4')) ? (
                      <video
                        src={e.thumbnail}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onLoadedData={(e) => {
                          e.currentTarget.currentTime = 0.25
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.play().catch(() => {})
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause()
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <img
                        src={e.thumbnail}
                        alt={e.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(t) => {
                          if (e.youtubeId) {
                            let n = `https://img.youtube.com/vi/${e.youtubeId}/hqdefault.jpg`
                            t.currentTarget.src !== n && (t.currentTarget.src = n)
                          }
                        }}
                        onLoad={(t) => {
                          if (e.youtubeId && t.currentTarget.naturalWidth <= 120) {
                            let n = `https://img.youtube.com/vi/${e.youtubeId}/hqdefault.jpg`
                            t.currentTarget.src !== n && (t.currentTarget.src = n)
                          }
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      />
                    )}
                    {t && (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center bg-black/80 border border-white/25 text-white group-hover:bg-[#FF3388] group-hover:border-[#FF3388] group-active:bg-[#B80058] group-active:border-[#B80058] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </span>
                    )}
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-center justify-between gap-3 text-[11px] font-mono-label uppercase tracking-[0.1em]">
                      <span className="text-[#E31E7B] truncate">{e.client}</span>
                      {e.isNew ? (
                        <span className="bg-[#E31E7B] px-2 py-0.5 text-[10px] font-medium text-white shrink-0">
                          New
                        </span>
                      ) : (
                        e.year && (
                          <span className="text-white/55 tabular-nums shrink-0">{e.year}</span>
                        )
                      )}
                    </div>
                    <h3 className="mt-2 font-sans-body text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-[#FF3388] transition-colors line-clamp-2">
                      {e.title}
                    </h3>
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

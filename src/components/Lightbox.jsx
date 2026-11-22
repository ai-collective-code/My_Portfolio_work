import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'

export function Lightbox({ item: e, onClose: t, onPrev: n, onNext: r }) {
  let [i, a] = useState(0)
  if (
    (useEffect(() => {
      a(0)
    }, [e?.id]),
    useEffect(() => {
      if (!e) return
      let i = (e) => {
          ;(e.key === 'Escape' && t(), e.key === 'ArrowLeft' && n(), e.key === 'ArrowRight' && r())
        },
        a = document.body.style.overflow
      return (
        (document.body.style.overflow = 'hidden'),
        window.addEventListener('keydown', i),
        () => {
          ;((document.body.style.overflow = a), window.removeEventListener('keydown', i))
        }
      )
    }, [e, t, n, r]),
    !e)
  )
    return null
  let o = e.instagramEmbeds,
    s = o && o.length > 0 ? o[i % o.length] : null,
    c = s?.embedUrl || e.instagramEmbedUrl,
    l = s?.watchUrl || e.watchUrl
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={e.title}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
      onClick={t}
    >
      <div
        className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-b border-white/12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-sans-body">
          <span className="text-[#E31E7B] font-mono-label uppercase tracking-[0.14em]">
            {e.client}
          </span>
          {e.isNew ? (
            <span className="bg-[#E31E7B] px-2.5 py-0.5 font-mono-label text-[10px] font-medium uppercase tracking-[0.14em] text-white">
              New
            </span>
          ) : (
            e.year && <span className="text-white/60 font-mono-label tabular-nums">{e.year}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={n}
            aria-label="Previous item"
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={r}
            aria-label="Next item"
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white hover:border-[#FF3388] hover:text-[#FF3388] active:border-[#B80058] active:text-[#B80058] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={t}
            aria-label="Close lightbox"
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white hover:border-[#FF3388] hover:bg-[#FF3388] active:border-[#B80058] active:bg-[#B80058] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto px-5 sm:px-10 py-6 sm:py-8 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-6xl">
          {e.type === 'youtube' && e.youtubeId && (
            <div className="w-full aspect-video bg-[#0B0B0B] border border-white/12">
              <iframe
                key={e.youtubeId}
                src={`https://www.youtube.com/embed/${e.youtubeId}?autoplay=1&rel=0`}
                title={e.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
          {e.type === 'instagram' && c && (
            <div className="w-full max-w-[540px] mx-auto">
              <div className="bg-[#0B0B0B] border border-white/12">
                <iframe
                  key={c}
                  src={c}
                  title={e.title}
                  className="w-full h-[60vh] min-h-[420px] max-h-[620px] border-0 bg-black"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              {o && o.length > 1 && (
                <div className="mt-3 flex items-center justify-between border border-white/12 bg-[#0B0B0B] px-3 py-2">
                  <button
                    type="button"
                    onClick={() => a((e) => (e - 1 + o.length) % o.length)}
                    aria-label="Previous Instagram post"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono-label text-xs uppercase tracking-[0.12em] text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev Spot</span>
                  </button>
                  <span className="font-mono-label text-xs tracking-[0.14em] text-white/75 tabular-nums">
                    {i + 1}
                    {' of '}
                    {o.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => a((e) => (e + 1) % o.length)}
                    aria-label="Next Instagram post"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono-label text-xs uppercase tracking-[0.12em] text-white hover:text-[#FF3388] active:text-[#B80058] transition-colors"
                  >
                    <span>Next Spot</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
          {e.type === 'video' && e.media[0] && (
            <div className="w-full bg-[#0B0B0B] border border-white/12">
              {e.media[0].includes('drive.google.com') ? (
                <iframe
                  key={e.media[0]}
                  src={e.media[0].replace(/\/view(\?.*)?$/, '/preview')}
                  title={e.title}
                  className="w-full aspect-video border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : e.media[0].endsWith('.mp4') ? (
                <video
                  key={e.media[0]}
                  src={e.media[0]}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full max-h-[68vh] object-contain mx-auto"
                />
              ) : (
                <div className="flex items-center justify-center p-8">
                  <img
                    src={e.thumbnail || e.media[0]}
                    alt={e.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[68vh] w-auto object-contain"
                  />
                </div>
              )}
            </div>
          )}
          {e.type === 'triptych' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#0B0B0B] p-2 border border-white/12">
              {e.media.map((t, n) => (
                <img
                  key={t}
                  src={t}
                  alt={`${e.title} frame ${n + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[62vh] object-cover"
                />
              ))}
            </div>
          )}
          {e.type === 'image' && e.media[0] && (
            <div className="w-full bg-[#0B0B0B] border border-white/12 flex justify-center">
              <img
                src={e.media[0]}
                alt={e.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>
          )}
          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-white">
                {e.title}
              </h3>
              {e.description && (
                <p className="mt-2 max-w-2xl font-sans-body text-sm sm:text-base text-white/75">
                  {e.description}
                </p>
              )}
              {e.awards && e.awards.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.awards.map((e) => (
                    <span
                      key={e}
                      className="px-3 py-1 border border-[#E31E7B] rounded-full text-[#E31E7B] font-mono-label text-[11px] uppercase tracking-[0.08em]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {l && (
              <a
                href={l}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E31E7B] bg-[#E31E7B] px-5 py-3 font-sans-body text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#FF3388] hover:border-[#FF3388] active:bg-[#B80058] active:border-[#B80058] transition-colors shrink-0"
              >
                <span>{e.watchLabel || 'Watch'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

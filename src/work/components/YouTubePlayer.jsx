import { useState } from 'react'

export function YouTubePlayer({ videoId, title, thumbnail }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const hqThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* Background Poster Image */}
      <img
        src={thumbnail || hqThumb}
        alt={title}
        referrerPolicy="no-referrer"
        onError={(e) => {
          if (e.currentTarget.src !== fallbackThumb) {
            e.currentTarget.src = fallbackThumb
          }
        }}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth <= 120 && e.currentTarget.src !== fallbackThumb) {
            e.currentTarget.src = fallbackThumb
          }
        }}
        className="h-full w-full object-cover animate-ken-burns"
      />

      {/* Autoplaying Seamless YouTube Background Player (16:9 Landscape Only, No Reels) */}
      <iframe
        key={videoId}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&enablejsapi=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setIsLoaded(true)}
        className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] scale-[1.35] border-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65"
      />
    </div>
  )
}

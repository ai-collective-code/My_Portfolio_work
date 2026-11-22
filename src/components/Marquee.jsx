import LOGOS from '../data/logos.json'

export function MarqueeRow({ className: e = '', reverse: t = false, idSuffix: n = '1' }) {
  let r = `sphere-clip-${n}`,
    i = `sphere-shade-${n}`,
    a = `sphere-rim-${n}`
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${e}`}>
      <svg
        viewBox="0 0 240 240"
        className={`w-full h-full ${t ? 'animate-sphere-reverse' : 'animate-sphere-slow'}`}
      >
        <defs>
          <clipPath id={r}>
            <circle cx="120" cy="120" r="108" />
          </clipPath>
          <radialGradient id={i} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="55%" stopColor="rgba(0,0,0,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.88)" />
          </radialGradient>
          <radialGradient id={a} cx="80%" cy="75%" r="55%">
            <stop offset="0%" stopColor="rgba(65,105,225,0.45)" />
            <stop offset="60%" stopColor="rgba(65,105,225,0)" />
          </radialGradient>
        </defs>
        <g clipPath={`url(#${r})`}>
          <rect x="0" y="0" width="240" height="240" fill="#000000" />
          {Array.from({
            length: 14,
          }).map((e, t) => {
            let n = t * 18 - 6,
              r = t === 5 || t === 9
            return (
              <rect
                key={t}
                x="-20"
                y={n}
                width="280"
                height={r ? '5' : '7'}
                fill={r ? '#E31E7B' : '#FFFFFF'}
                opacity={r ? 0.9 : 0.92}
                transform="rotate(-14 120 120)"
              />
            )
          })}
          <circle cx="120" cy="120" r="108" fill={`url(#${i})`} />
          <circle cx="120" cy="120" r="108" fill={`url(#${a})`} />
        </g>
        <circle
          cx="120"
          cy="120"
          r="108"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export function Marquee({ items: e = [], variant: t }) {
  if (t === 'clients') {
    let list = [...e, ...e]
    return (
      <div className="marquee-track relative w-full overflow-hidden border-y border-white/12 bg-black py-6 md:py-7 select-none">
        <div className="flex w-max animate-marquee-slow items-center whitespace-nowrap">
          {list.map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex items-center">
              <span className="font-serif-editorial text-2xl md:text-4xl tracking-tight text-white/90 px-5 md:px-8 hover:text-[#FF3388] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#E31E7B] text-lg md:text-xl select-none" aria-hidden="true">
                {'\xB7'}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  let n = [
      "AI FILMMAKER FOR INDIA'S BIGGEST BRANDS",
      '15+ YEARS',
      'CANNES LIONS WINNING WORK',
      "AI FILMMAKER FOR INDIA'S BIGGEST BRANDS",
      '15+ YEARS',
      'CANNES LIONS WINNING WORK',
    ],
    r = [...n, ...n]
  return (
    <div className="marquee-track relative w-full overflow-hidden border-y border-white/15 bg-[#0B0B0B] py-7 md:py-10">
      <div className="flex w-max animate-marquee-bold items-center whitespace-nowrap">
        {r.map((e, t) => (
          <div key={`${e}-${t}`} className="flex items-center">
            <span className="font-display-wide text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white px-5 md:px-8">
              {e}
            </span>
            <span
              className="font-display-wide text-2xl sm:text-3xl md:text-5xl font-black text-[#E31E7B] select-none"
              aria-hidden="true"
            >
              {'\xD7'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  let [e, t] = useState(false),
    [n, r] = useState({
      x: -100,
      y: -100,
    }),
    [i, a] = useState('default'),
    [o, s] = useState(false),
    c = useRef(false)
  return (
    useEffect(() => {
      let e = window.matchMedia('(pointer: fine)'),
        n = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (!e.matches || n.matches) return
      ;(t(true), document.documentElement.classList.add('has-custom-cursor'))
      let i = (e) => {
          ;(r({
            x: e.clientX,
            y: e.clientY,
          }),
            c.current || ((c.current = true), s(true)))
          let t = e.target
          t &&
            (t.closest('[data-cursor="tile"]')
              ? a('tile')
              : t.closest('a, button, [role="button"]')
                ? a('link')
                : a('default'))
        },
        o = () => {
          ;((c.current = false), s(false))
        },
        l = () => {
          ;((c.current = true), s(true))
        }
      return (
        window.addEventListener('mousemove', i, {
          passive: true,
        }),
        document.addEventListener('mouseleave', o),
        document.addEventListener('mouseenter', l),
        () => {
          ;(document.documentElement.classList.remove('has-custom-cursor'),
            window.removeEventListener('mousemove', i),
            document.removeEventListener('mouseleave', o),
            document.removeEventListener('mouseenter', l))
        }
      )
    }, []),
    !e || !o ? null : (
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full flex items-center justify-center transition-[width,height,margin,background-color,border-color] duration-200 ease-out will-change-transform border border-[#E31E7B] ${i === 'tile' ? 'w-20 h-20 -ml-10 -mt-10 bg-[#E31E7B]/90 text-white' : i === 'link' ? 'w-10 h-10 -ml-5 -mt-5 bg-[#E31E7B]/20' : 'w-4 h-4 -ml-2 -mt-2 bg-[#E31E7B]'}`}
        style={{
          transform: `translate3d(${n.x}px, ${n.y}px, 0)`,
          backgroundColor:
            i === 'tile'
              ? 'rgba(227, 30, 123, 0.92)'
              : i === 'link'
                ? 'rgba(227, 30, 123, 0.2)'
                : '#E31E7B',
          borderColor: '#E31E7B',
        }}
      >
        {i === 'tile' && (
          <span className="font-mono-label text-[10px] tracking-[0.18em] uppercase text-white font-bold select-none">
            VIEW
          </span>
        )}
      </div>
    )
  )
}

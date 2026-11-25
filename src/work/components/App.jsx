import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { FeaturedWork } from './FeaturedWork.jsx'
import { Archive } from './Archive.jsx'
import { About } from './About.jsx'
import { Press } from './Press.jsx'
import { Contact } from './Contact.jsx'
import { Lightbox } from './Lightbox.jsx'
import { Manifesto } from './Manifesto.jsx'
import { Marquee } from './Marquee.jsx'
import { CustomCursor } from './CustomCursor.jsx'
import { CLIENTS } from '../data/site.js'
import { ARCHIVE_WORKS, ALL_WORKS } from '../data/works.js'

export function App() {
  let [e, t] = useState(null),
    [n, r] = useState('all'),
    [i, a] = useState({})
  useEffect(() => {
    let e = false,
      t = ARCHIVE_WORKS.filter((e) => e.group === 'production' && e.youtubeId)
    return (
      (async () => {
        let n = await Promise.allSettled(
          t.map(async (e) => {
            let t = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${e.youtubeId}`)}&format=json`,
              n = await fetch(t)
            if (!n.ok) return null
            let r = await n.json()
            return r.title && typeof r.title == 'string'
              ? {
                  id: e.id,
                  title: r.title,
                }
              : null
          }),
        )
        if (e) return
        let r = {}
        for (let e of n) e.status === 'fulfilled' && e.value && (r[e.value.id] = e.value.title)
        Object.keys(r).length > 0 && a(r)
      })().catch(() => {}),
      () => {
        e = true
      }
    )
  }, [])
  let o = useMemo(
      () =>
        ARCHIVE_WORKS.map((e) =>
          i[e.id]
            ? {
                ...e,
                title: i[e.id],
              }
            : e,
        ),
      [i],
    ),
    s = useMemo(
      () =>
        ALL_WORKS.map((e) =>
          i[e.id]
            ? {
                ...e,
                title: i[e.id],
              }
            : e,
        ),
      [i],
    ),
    c = useMemo(() => (e ? s.findIndex((t) => t.id === e) : -1), [e, s]),
    l = c >= 0 ? s[c] : null,
    u = (e) => {
      if (c < 0) return
      let n = s.length,
        r = (c + e + n) % n
      t(s[r].id)
    }
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header onOpenCampaigns={() => r('all')} />
      <main>
        <Hero onOpenSlide={(e) => t(e)} />
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Manifesto />
        </motion.div>
        <Marquee variant="clients" items={CLIENTS} />
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.04,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <FeaturedWork onSelectItem={(e) => t(e.id)} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.04,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Archive items={o} activeFilter={n} onChangeFilter={r} onSelectItem={(e) => t(e.id)} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Press />
        </motion.div>
        <Marquee variant="statement" />
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Contact />
        </motion.div>
      </main>
      <Lightbox item={l} onClose={() => t(null)} onPrev={() => u(-1)} onNext={() => u(1)} />
    </div>
  )
}

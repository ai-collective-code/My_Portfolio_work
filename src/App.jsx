import { useEffect, useRef, useState } from 'react'
import { chapters, press } from './data.js'
import bcfwLogo from './assets/bcfw-logo.png'

function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.12 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [copiedNav, setCopiedNav] = useState(false)
  const email = 'debojit.aic@gmail.com'

  const copyEmail = e => {
    e?.preventDefault()
    navigator.clipboard?.writeText(email)
    setCopiedNav(true)
    setTimeout(() => setCopiedNav(false), 2400)
  }

  const links = [
    ['top', 'Home'],
    ['about', 'About'],
    ...chapters.map(c => [c.id, c.title]),
    ['press', 'Press'],
    ['contact', 'Contact'],
  ]
  return (
    <header className="nav modern-nav">
      <a href="#top" className="logo modern-logo" aria-label="Bharat Content Fireworks">
        <img src={bcfwLogo} alt="Bharat Content Fireworks" className="brand-logo-img" />
      </a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <div className="nav-socials">
          <button
            type="button"
            className="nav-social-btn"
            onClick={copyEmail}
            title={copiedNav ? '✓ Copied debojit.aic@gmail.com!' : 'Copy Gmail: debojit.aic@gmail.com'}
            aria-label="Copy Gmail debojit.aic@gmail.com"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {copiedNav && <span className="nav-copied-tooltip">Copied!</span>}
          </button>
          <a
            href="https://www.instagram.com/bcfw.aic?cnvx=MWFtbXBkZnJjZG1vaA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @bcfw.aic"
            title="Follow on Instagram @bcfw.aic"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/ai-collective-private-limited/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn AI Collective Private Limited"
            title="Connect on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero modern-hero-portfolio">
      <div className="hero-ambient-glow" />
      <div className="hero-ambient-glow-secondary" />

      <div className="hero-portfolio-container">
        <div className="hero-tag-wrap">
          <span className="hero-portfolio-badge">BHARAT CONTENT FIREWORKS</span>
          <span className="hero-portfolio-dot">•</span>
          <span className="hero-portfolio-tagline">CURATED ARCHIVE 2026</span>
        </div>

        <h1 className="hero-portfolio-headline">
          My Portfolio work
        </h1>

        <p className="hero-portfolio-sub">
          A signature showcase of award-winning branded films, cultural storytelling, regional vernacular campaigns, and new-age creative production.
        </p>

        <div className="hero-action-row">
          <a href="#about" className="hero-primary-btn">
            <span>Explore Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
          <a href="#contact" className="hero-secondary-btn">
            <span>Start A Conversation</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to explore">
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}

function Founder() {
  const [ref, shown] = useReveal()
  return (
    <section id="about" className={`founder-section reveal ${shown ? 'in' : ''}`} ref={ref}>
      <div className="founder-container">
        <div className="section-header-compact">
          <span className="section-category-tag">01 // LEADERSHIP &amp; VISION</span>
          <div className="section-header-line" />
        </div>

        <div className="founder-grid">
          <div className="founder-col-left">
            <div className="founder-avatar-card">
              <div className="founder-avatar-inner">
                <span className="founder-avatar-initial">D</span>
                <span className="founder-avatar-ring" />
              </div>
              <div className="founder-card-meta">
                <h3 className="founder-name">Debojit Saha</h3>
                <span className="founder-role">Founder &amp; Creative Producer</span>
                <div className="founder-chips">
                  <span className="founder-chip">Calcutta Xaverian</span>
                  <span className="founder-chip">IIMB Alumnus</span>
                  <span className="founder-chip">20+ Yrs Craft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="founder-col-right">
            <span className="founder-eyebrow">THE ARCHITECT OF BHARAT CONTENT</span>
            <h2 className="founder-headline">
              Bridging cultural nuance with new-age technology at national scale.
            </h2>
            <div className="founder-bio">
              <p>
                A Calcutta Xaverian and IIMB alumnus with over 20 years in branded content marketing and distribution. Formerly Creative &amp; Regional Programming Lead at Radio One, leading award-winning national campaigns anchored in deep vernacular and regional cultural insights.
              </p>
              <p>
                Founded ICE Media Lab, creating landmark campaigns for India's foremost enterprise brands. Now architecting <strong>BC[f]W (Bharat Content Fireworks)</strong> at the frontier where creative intuition converges with modern generative tech to produce content innovation at scale.
              </p>
            </div>
            <div className="founder-stats">
              <div className="founder-stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="founder-stat-sep" />
              <div className="founder-stat-item">
                <span className="stat-number">40+</span>
                <span className="stat-label">Tier-1 Brands</span>
              </div>
              <div className="founder-stat-sep" />
              <div className="founder-stat-item">
                <span className="stat-number">100M+</span>
                <span className="stat-label">Campaign Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function toEmbed(url) {
  if (!url) return null
  const d = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/)
  if (d) return `https://drive.google.com/file/d/${d[1]}/preview`
  const ig = url.match(/instagram\.com\/(reels?|p)\/([\w-]+)/)
  if (ig) return `https://www.instagram.com/${ig[1] === 'p' ? 'p' : 'reel'}/${ig[2]}/embed`
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0&playsinline=1&enablejsapi=1` : url
}

const ytId = url => (url && url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/) || [])[1]
const thumbOf = (url, q = 'hqdefault') => (ytId(url) ? `https://i.ytimg.com/vi/${ytId(url)}/${q}.jpg` : null)

function Lightbox({ items, index, accent, chapterTitle, onClose, onIndex }) {
  const item = items[index]
  const isInstagram = Boolean(item?.url?.includes('instagram.com'))
  const isReel = isInstagram || Boolean(item?.url?.includes('/shorts/')) || /reel/i.test(item?.title || '')
  const embed = toEmbed(item?.url)
  const prev = () => onIndex((index - 1 + items.length) % items.length)
  const next = () => onIndex((index + 1) % items.length)

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showStrip, setShowStrip] = useState(false)

  const lbRef = useRef(null)
  const touch = useRef(null)
  const stripRef = useRef(null)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (lbRef.current?.requestFullscreen) {
        lbRef.current.requestFullscreen().catch(() => {})
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {})
      }
    }
  }

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  useEffect(() => {
    const h = e => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      else if (e.key === 't' || e.key === 'T') setShowStrip(s => !s)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [index, items.length])

  useEffect(() => {
    if (stripRef.current && showStrip) {
      const activeThumb = stripRef.current.children[index]
      if (activeThumb?.scrollIntoView) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [index, showStrip])

  const onTouchStart = e => { touch.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touch.current === null) return
    const dx = e.changedTouches[0].clientX - touch.current
    if (dx > 50) prev()
    else if (dx < -50) next()
    touch.current = null
  }

  return (
    <div
      ref={lbRef}
      className={`lightbox modern-lightbox ${isFullscreen ? 'is-fullscreen' : ''} ${isReel ? 'reel-mode' : 'landscape-mode'}`}
      style={{ '--chapter-accent': accent || '#FDB913' }}
      onClick={e => {
        if (e.target.classList.contains('lightbox') || e.target.classList.contains('lb-stage') || e.target.classList.contains('lb-viewport')) onClose()
      }}
    >
      <div className="lb-ambient" />

      {/* Slim Top Bar */}
      <header className="lb-topbar">
        <div className="lb-meta-info">
          {chapterTitle && <span className="lb-chapter-badge">{chapterTitle}</span>}
          {isReel && <span className="lb-format-badge">INSTAGRAM REEL</span>}
          <span className="lb-counter">Film <b>{index + 1}</b> of <b>{items.length}</b></span>
        </div>

        <div className="lb-topbar-actions">
          <button
            className="lb-action-pill"
            onClick={() => setShowStrip(s => !s)}
            title={showStrip ? 'Hide thumbnail gallery (T)' : 'Show thumbnail gallery (T)'}
            aria-label="Toggle thumbnails"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="14" x2="22" y2="14" />
              <line x1="8" y1="14" x2="8" y2="19" />
              <line x1="16" y1="14" x2="16" y2="19" />
            </svg>
            <span>{showStrip ? 'Hide Grid' : 'Grid'}</span>
          </button>

          <button
            className="lb-action-pill"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit browser fullscreen (F)' : 'Expand to browser fullscreen (F)'}
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="10" y1="14" x2="3" y2="21" />
                </svg>
                <span>Exit Fullscreen</span>
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                <span>Fullscreen</span>
              </>
            )}
          </button>

          <button className="lb-close-pill" onClick={onClose} title="Close video (ESC)" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>CLOSE</span>
          </button>
        </div>
      </header>

      {/* Main Full-Screen Cinema Stage */}
      <div className="lb-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {/* Sleek Circular Arrow: PREVIOUS */}
        <button
          className="lb-arrow-nav lb-arrow-prev"
          onClick={e => { e.stopPropagation(); prev() }}
          aria-label="Previous video"
          title="Previous video (Left arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport: Supports 16:9 Landscape Video & Ultra-Modern Smartphone Reel Showcase */}
        <div className="lb-viewport" onClick={e => e.stopPropagation()}>
          {isReel ? (
            /* Luxury Smartphone Mockup for Reels */
            <div className="lb-phone-mockup">
              <div className="phone-chassis">
                <div className="phone-notch">
                  <div className="dynamic-island" />
                </div>
                <div className="phone-screen">
                  {embed ? (
                    <iframe
                      key={embed}
                      src={embed}
                      title={item.title}
                      scrolling="no"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <div className="lb-placeholder">
                      <span className="lb-placeholder-icon">🎬</span>
                      <h3>{item.title}</h3>
                    </div>
                  )}

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="phone-ig-link"
                    onClick={e => e.stopPropagation()}
                    title="Open original Reel on Instagram"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Watch on Instagram ↗</span>
                  </a>
                </div>
                <div className="phone-home-indicator" />
              </div>
            </div>
          ) : (
            /* 16:9 Landscape YouTube Video */
            <div className="lb-video-frame is-landscape">
              {embed ? (
                <iframe
                  key={embed}
                  src={embed}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="lb-placeholder">
                  <span className="lb-placeholder-icon">🎬</span>
                  <h3>{item.title}</h3>
                  <p>Private showcase / Preview link unavailable</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sleek Circular Arrow: NEXT */}
        <button
          className="lb-arrow-nav lb-arrow-next"
          onClick={e => { e.stopPropagation(); next() }}
          aria-label="Next video"
          title="Next video (Right arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Slim Bottom Bar */}
      <footer className="lb-footer">
        <div className="lb-footer-info-row">
          <div className="lb-title-wrap">
            <span className="lb-title-badge">NOW PLAYING</span>
            <h3 className="lb-title">{item.title}</h3>
          </div>
        </div>

        {showStrip && (
          <div className="lb-strip-container">
            <div className="lb-strip" ref={stripRef}>
              {items.map((it, i) => {
                const isActive = i === index
                const yId = ytId(it.url)
                const isIg = it.url?.includes('instagram')
                const isDrv = it.url?.includes('drive.google')
                const thumb = yId ? `https://i.ytimg.com/vi/${yId}/mqdefault.jpg` : null

                return (
                  <button
                    key={it.title + i}
                    className={`lb-strip-thumb ${isActive ? 'active' : ''}`}
                    onClick={() => onIndex(i)}
                    title={it.title}
                    style={thumb ? { backgroundImage: `url(${thumb})` } : undefined}
                  >
                    {!thumb && (
                      <span className="lb-thumb-tag">
                        {isIg ? 'IG' : isDrv ? 'DRIVE' : (i + 1)}
                      </span>
                    )}
                    <span className="lb-thumb-overlay" />
                    <span className="lb-thumb-idx">{i + 1}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}
function Chapter({ c, onOpenVideo }) {
  const [ref, shown] = useReveal()
  const [expanded, setExpanded] = useState(false)
  const items = c.works.map(w => (typeof w === 'string' ? { title: w } : w))

  const handleOpen = idx => {
    onOpenVideo(items, idx, c.bg, c.title)
  }

  // Keep 6 works by default; show all when expanded
  const visibleItems = expanded ? items : items.slice(0, 6)
  const hasMore = items.length > 6

  return (
    <section id={c.id} className={`modern-chapter-block reveal ${shown ? 'in' : ''}`} ref={ref} style={{ '--ch-accent': c.bg }}>
      <div className="chapter-ambient-glow" />

      {/* Modern Cinematic Chapter Header */}
      <div className="chapter-header-modern">
        <div className="chapter-header-top">
          <span className="chapter-idx-badge">// CHAPTER</span>
          <span className="chapter-vernacular-badge">{c.script}</span>
        </div>

        <div className="chapter-title-row">
          <h2 className="chapter-title-modern">{c.title}</h2>
          <span className="chapter-works-count">{items.length} Works</span>
        </div>

        <p className="chapter-blurb-modern">{c.blurb}</p>
      </div>

      {/* Featured Campaign Banner (if present) */}
      {c.featured && (
        <article className="featured-modern-card">
          <div
            className="featured-player-box"
            role="button"
            tabIndex={0}
            onClick={() => handleOpen(Math.max(0, items.findIndex(x => /The _? ?Wall/i.test(x.title))))}
            onKeyDown={e => e.key === 'Enter' && handleOpen(Math.max(0, items.findIndex(x => /The _? ?Wall/i.test(x.title))))}
          >
            <div className="featured-play-ring">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <span className="featured-play-label">WATCH FILM</span>
          </div>
          <div className="featured-content">
            <span className="featured-badge">FEATURED INNOVATION</span>
            <h3 className="featured-title">{c.featured.name}</h3>
            <p className="featured-desc">{c.featured.text}</p>
          </div>
        </article>
      )}

      {/* Works Grid (Initial 6 Works, Expandable) */}
      <div className="modern-works-grid">
        {visibleItems.map((w, i) => {
          const yId = ytId(w.url)
          const thumb = yId ? `https://i.ytimg.com/vi/${yId}/hqdefault.jpg` : null
          const isIg = w.url?.includes('instagram')
          const isDrv = w.url?.includes('drive.google')

          return (
            <article
              key={w.title + i}
              className="modern-tile"
              tabIndex={0}
              role="button"
              onClick={() => handleOpen(i)}
              onKeyDown={e => e.key === 'Enter' && handleOpen(i)}
            >
              <div
                className="modern-thumb"
                style={thumb ? { backgroundImage: `url(${thumb})` } : undefined}
              >
                {!thumb && (
                  <span className="tile-platform-badge">
                    {isIg ? 'INSTAGRAM REEL' : isDrv ? 'DRIVE PREVIEW' : 'DIRECT PREVIEW'}
                  </span>
                )}
                <div className="thumb-gradient-scrim" />
                <div className="thumb-play-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span className="thumb-idx-badge">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="tile-info">
                <h4 className="tile-title">{w.title}</h4>
                <span className="tile-hover-arrow">Watch ↗</span>
              </div>
            </article>
          )
        })}
      </div>

      {/* "See More" Button */}
      {hasMore && (
        <div className="chapter-see-more-row">
          <button
            type="button"
            className="chapter-see-more-btn"
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Show Less' : `See More (${items.length - 6} More)`}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
function Press({ onOpenArticle }) {
  const [ref, shown] = useReveal()
  return (
    <section id="press" className={`press-modern-section reveal ${shown ? 'in' : ''}`} ref={ref}>
      <div className="press-container">
        <div className="section-header-compact">
          <span className="section-category-tag">02 // MEDIA &amp; RECOGNITION</span>
          <div className="section-header-line" />
        </div>

        <div className="press-header-row">
          <div>
            <span className="press-eyebrow">NATIONAL COVERAGE</span>
            <h2 className="press-title">In The News</h2>
          </div>
          <p className="press-subtitle">
            Insights, brand impact analysis, and creative commentary published across leading national media.
          </p>
        </div>

        <div className="press-modern-list">
          {press.map((p, i) => (
            <article
              key={p.text + i}
              className="press-modern-item press-clickable-item"
              onClick={() => onOpenArticle && onOpenArticle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onOpenArticle && onOpenArticle(i)
                }
              }}
              title="Click to read full article in pop-up"
            >
              <span className="press-item-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="press-item-content">
                <div className="press-item-meta-tag">
                  <span className="press-meta-source">{p.source}</span>
                  <span className="press-meta-dot">•</span>
                  <span className="press-meta-cat">{p.category}</span>
                </div>
                <span className="press-item-text">{p.headline || p.text}</span>
              </div>
              <div className="press-read-action">
                <span className="press-read-label">Read Story</span>
                <span className="press-item-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticleModal({ articles, index, onClose, onIndex }) {
  const article = articles[index]
  const prev = () => onIndex((index - 1 + articles.length) % articles.length)
  const next = () => onIndex((index + 1) % articles.length)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }, [index])

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, articles.length])

  return (
    <div
      className="article-modal modern-lightbox"
      onClick={e => {
        if (
          e.target.classList.contains('article-modal') ||
          e.target.classList.contains('article-modal-stage') ||
          e.target.classList.contains('article-reader-viewport')
        ) {
          onClose()
        }
      }}
    >
      <div className="lb-ambient" />

      {/* Slim Top Bar */}
      <header className="lb-topbar">
        <div className="lb-meta-info">
          <span className="lb-chapter-badge">{article.source}</span>
          <span className="lb-format-badge">{article.category}</span>
          <span className="lb-counter">
            Article <b>{index + 1}</b> of <b>{articles.length}</b>
          </span>
        </div>

        <div className="lb-topbar-actions">
          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="lb-action-pill"
              title="Open original publication source in new tab"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Original Source</span>
            </a>
          )}
          <button className="lb-close-pill" onClick={onClose} title="Close article (ESC)" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>CLOSE</span>
          </button>
        </div>
      </header>

      {/* Main Full-Screen Stage with Same Back & Forth Arrow Buttons */}
      <div className="article-modal-stage">
        {/* Sleek Circular Arrow: PREVIOUS */}
        <button
          className="lb-arrow-nav lb-arrow-prev"
          onClick={e => {
            e.stopPropagation()
            prev()
          }}
          aria-label="Previous article"
          title="Previous article (Left arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport: Luxury White & Pinkish Reader Card */}
        <div className="article-reader-viewport">
          <article className="article-reader-card" ref={contentRef} onClick={e => e.stopPropagation()}>
            <div className="article-card-header">
              <div className="article-meta-row">
                <span className="article-source-tag">{article.source}</span>
                <span className="article-date-tag">{article.date}</span>
                <span className="article-time-tag">{article.readTime}</span>
              </div>
              <h1 className="article-card-title">{article.headline}</h1>
              <div className="article-curation-row">
                <span className="article-curation-text">Press Archive // Curated for Bharat Content Fireworks</span>
                <div className="article-header-accent-line" />
              </div>
            </div>

            {article.lead && (
              <p className="article-lead-text">{article.lead}</p>
            )}

            {article.quote && (
              <blockquote className="article-pull-quote">
                <p>"{article.quote}"</p>
              </blockquote>
            )}

            <div className="article-body-content">
              {article.sections &&
                article.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="article-section-block">
                    <h3 className="article-section-heading">{sec.title}</h3>
                    <p className="article-section-p">{sec.content}</p>
                  </div>
                ))}
            </div>

            {article.keyTakeaways && (
              <div className="article-takeaways-box">
                <h4 className="takeaways-title">Key Narrative Takeaways</h4>
                <ul className="takeaways-list">
                  {article.keyTakeaways.map((point, pIdx) => (
                    <li key={pIdx}>
                      <span className="takeaway-bullet">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Card Footer with Next / Prev Article Bar */}
            <div className="article-card-footer">
              <div className="article-nav-preview">
                <button className="article-nav-prev-btn" onClick={prev}>
                  <span className="nav-dir-label">← PREVIOUS ARTICLE</span>
                  <span className="nav-title-preview">
                    {articles[(index - 1 + articles.length) % articles.length].source}: {articles[(index - 1 + articles.length) % articles.length].headline.slice(0, 36)}...
                  </span>
                </button>
                <button className="article-nav-next-btn" onClick={next}>
                  <span className="nav-dir-label">NEXT ARTICLE →</span>
                  <span className="nav-title-preview">
                    {articles[(index + 1) % articles.length].source}: {articles[(index + 1) % articles.length].headline.slice(0, 36)}...
                  </span>
                </button>
              </div>

              {article.url && (
                <div className="article-external-link-row">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="article-external-btn"
                  >
                    <span>Read Original Source</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Sleek Circular Arrow: NEXT */}
        <button
          className="lb-arrow-nav lb-arrow-next"
          onClick={e => {
            e.stopPropagation()
            next()
          }}
          aria-label="Next article"
          title="Next article (Right arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: 'none' }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'debojit.aic@gmail.com'

  const copyEmail = () => {
    navigator.clipboard?.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <footer id="contact" className="contact-modern-footer">
      <div className="footer-ambient-glow" />
      <div className="footer-container">
        <div className="footer-cta-block">
          <span className="footer-tagline">// LET'S COLLABORATE</span>
          <h2 className="footer-headline">Ready to create something iconic?</h2>
          <p className="footer-desc">
            Whether it's a high-impact regional brand campaign, cultural storytelling, or cutting-edge AI creative production — let's build work that leaves a mark.
          </p>
          <div className="footer-action-row">
            <a
              href={`mailto:${email}`}
              className="footer-primary-btn"
              onClick={copyEmail}
              title="Click to start conversation (also copies debojit.aic@gmail.com)"
            >
              <span>Start A Conversation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <button
              className="footer-secondary-btn"
              onClick={copyEmail}
              type="button"
              title="Click to copy debojit.aic@gmail.com"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px' }}>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{copied ? '✓ debojit.aic@gmail.com Copied!' : 'Copy debojit.aic@gmail.com'}</span>
            </button>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <div className="footer-brand-meta">
            <div className="footer-brand-title">
              <img src={bcfwLogo} alt="Bharat Content Fireworks" className="footer-logo-img" />
              <div>
                <b>Bharat Content</b> <span>FIREWORKS</span>
              </div>
            </div>
            <p className="footer-legal">
              Bharat Content Fireworks is a unit of AI Collective Private Limited.
            </p>
            <p className="footer-gst">GSTIN: 09ABFCA2564E1ZS</p>
          </div>

          <div className="footer-links-meta">
            <div className="footer-social-row">
              <a
                href="https://www.instagram.com/bcfw.aic?cnvx=MWFtbXBkZnJjZG1vaA=="
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                title="Follow on Instagram @bcfw.aic"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/ai-collective-private-limited/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                title="Connect on LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            <a href="#top" className="footer-back-top">
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </a>
            <span className="footer-copy">© {new Date().getFullYear()} BC[f]W. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [modal, setModal] = useState(null)
  // modal = { items, index, accent, chapterTitle } | null
  const [articleModal, setArticleModal] = useState(null)
  // articleModal = number (index of article) | null

  useEffect(() => {
    if (modal || articleModal !== null) {
      document.body.classList.add('lightbox-open')
    } else {
      document.body.classList.remove('lightbox-open')
    }
    return () => document.body.classList.remove('lightbox-open')
  }, [modal, articleModal])

  const openVideo = (items, index, accent, chapterTitle) => {
    setModal({ items, index, accent, chapterTitle })
  }

  const openArticle = index => {
    setArticleModal(index)
  }

  return (
    <>
      {/* Navigation bar is completely hidden when ANY video modal or article pop-up is open */}
      {!modal && articleModal === null && <Nav />}
      <main>
        <Hero />
        <Founder />
        {chapters.map(c => (
          <Chapter
            key={c.id}
            c={c}
            onOpenVideo={(items, idx, accent, title) => openVideo(items, idx, accent, title)}
          />
        ))}
        <Press onOpenArticle={openArticle} />
        <Contact />
      </main>

      {modal && (
        <Lightbox
          items={modal.items}
          index={modal.index}
          accent={modal.accent}
          chapterTitle={modal.chapterTitle}
          onClose={() => setModal(null)}
          onIndex={newIdx => setModal(m => (m ? { ...m, index: newIdx } : null))}
        />
      )}

      {articleModal !== null && (
        <ArticleModal
          articles={press}
          index={articleModal}
          onClose={() => setArticleModal(null)}
          onIndex={newIdx => setArticleModal(newIdx)}
        />
      )}
    </>
  )
}

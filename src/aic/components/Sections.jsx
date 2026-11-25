import { useState } from 'react'
import { Reveal } from './Reveal.jsx'
// "My Work" opens the portfolio site at /Debojit_work (override with VITE_MY_WORK_URL)
const MY_WORK_URL = import.meta.env.VITE_MY_WORK_URL || '/Debojit_work/'

import { BENEFITS, BEATS, BRANDS, PROBLEMS, STAGES } from '../data.js'

export function Nav() {
  return (
    <nav>
      <img src="/logo.jpg" className="nav-logo" alt="AiC logo" width="36" height="36" />
      <div className="nav-links">
        <a href="#why" className="nav-link">Why AiC</a>
        <a href="#how" className="nav-link">How It Works</a>
        <a href={MY_WORK_URL} target="_blank" rel="noopener noreferrer" className="nav-link">My Work</a>
        <a href="#" className="nav-link">For Brands</a>
        <a href="#register" className="nav-cta">Apply</a>
      </div>
    </nav>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">Entry by referral only</div>
      <h1>
        Your AI work deserves
        <br />
        <em>paid briefs,</em>
        <br />
        not likes.
      </h1>
      <p className="hero-sub">
        AiC is India's invitation only AI creator collective. We turn your <strong>"post and pray"</strong> into{' '}
        <strong>"brief and bank transfer."</strong> No spec ads. No exposure deals. No payment chasing. You create. We
        handle everything else.
      </p>
      <p className="hero-note">Someone already in the collective has to vouch for you.</p>
      <div className="hero-stats">
        {[
          ['50+', "Brands in founding team's portfolio"],
          ['10+', 'Indian languages'],
          ['₹0', 'Payment chasing required'],
        ].map(([num, label]) => (
          <div className="hero-stat" key={label}>
            <div className="hero-stat-num">{num}</div>
            <div className="hero-stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="divider" id="why">
      <div className="inner">
        <Reveal className="s-label">This is your life right now</Reveal>
        <Reveal as="h2" className="s-title">The AI creator's dilemma, today.</Reveal>
        <Reveal as="p" className="s-desc">If any of this stings, AiC was built for you.</Reveal>
        <Reveal className="problem-grid">
          {PROBLEMS.map(p => (
            <div className="p-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="p-tag">{p.tag}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function PayBanner() {
  return (
    <section>
      <Reveal className="pay-banner">
        <div className="pay-icon" aria-hidden="true">₹</div>
        <div>
          <h2>We pay you as you progress. At every stage. No follow ups.</h2>
          <p>
            Every AiC project pays you progressively as you deliver. Not 45 days after completion, not after three
            reminder emails. Money moves as your work moves. That's our commitment.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export function Benefits() {
  return (
    <section className="divider">
      <div className="inner">
        <Reveal className="s-label">What You Get</Reveal>
        <Reveal as="h2" className="s-title">Real briefs. Real brands. Real money.</Reveal>
        <Reveal as="p" className="s-desc">
          AiC is not a gig board. It's a managed creative collective built by people who've spent 15 years on the other
          side of the brief.
        </Reveal>
        <div className="ben-grid">
          {BENEFITS.map(b => (
            <Reveal className={`ben-item${b.full ? ' full-width' : ''}`} key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="callout">
          <h3>Your work speaks. Your identity stays with us.</h3>
          <p>
            At AiC, the client sees the output, not the creator. You can work across multiple projects without
            conflicts, maintain full creative freedom, and focus purely on the craft. We handle client relationships,
            contracts, and payments. You handle the art.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const [open, setOpen] = useState(false)
  return (
    <section className="divider" id="how">
      <div className="inner">
        <Reveal className="s-label">How A Project Works</Reveal>
        <Reveal as="h2" className="s-title">Get matched. Create. Get paid at every stage.</Reveal>
        <Reveal as="p" className="s-desc">Once you're in the collective, here's the flow from brief to bank transfer.</Reveal>

        <Reveal className="wf-summary">
          {BEATS.map(b => (
            <div className="wf-beat" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </Reveal>

        <button className="wf-expand-btn" aria-expanded={open} onClick={() => setOpen(o => !o)}>
          See full 7 stage breakdown <span aria-hidden="true">{open ? '↑' : '↓'}</span>
        </button>

        <div className={`wf-detail${open ? ' open' : ''}`}>
          {STAGES.map((s, i) => (
            <div className="wf-stage" key={s.title}>
              <div className="wf-num" aria-hidden="true">{i + 1}</div>
              <div className="wf-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {s.pay && <div className="wf-pay">{s.pay}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhoRunsThis() {
  return (
    <section className="divider">
      <div className="inner">
        <Reveal className="s-label">Who Runs This</Reveal>
        <Reveal as="h2" className="s-title">Built by people who've spent 15 years on the other side of the brief.</Reveal>
        <Reveal className="cred-grid">
          {[
            ['15+', 'Years in branded content'],
            ['100+', 'Campaigns shipped'],
            ['50+', 'Brands served'],
          ].map(([n, l]) => (
            <div className="cred-item" key={l}>
              <div className="cred-num">{n}</div>
              <div className="cred-label">{l}</div>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="s-desc" style={{ marginTop: 28 }}>
          AiC is led by <strong>Debojit Saha</strong>, an award winning branded content professional. From regional
          clients to India's top FMCG, BFSI brands, and global companies. Co founder of ICE Media Lab (100+ campaigns,
          50+ brands, 20+ member team). Among the first in India to deliver 100% Gen AI commercial productions.
          Recognized at Abbys, Brand Equity, DMA Asia, Shark Awards, and more.
        </Reveal>
        <Reveal as="p" className="s-desc" style={{ marginTop: -20, fontWeight: 600, color: 'var(--pink)' }}>
          This is not a tech experiment. This is an advertising professional building the future of production in India.
        </Reveal>
      </div>
    </section>
  )
}

export function Collective() {
  return (
    <section className="divider" id="work">
      <div className="inner">
        <Reveal className="s-label">From the Collective</Reveal>
        <Reveal className="collective-placeholder">
          <p>Creator stories coming soon. Our first batch is currently in production.</p>
        </Reveal>
      </div>
    </section>
  )
}

export function BrandCarousel() {
  return (
    <div className="carousel-section">
      <p className="carousel-label">Brands our founding team has worked with</p>
      <div style={{ overflow: 'hidden' }}>
        <div className="carousel-track" aria-hidden="true">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <p>© 2026 AI Collective (AiC). All rights reserved.</p>
      <p>
        Questions? <a href="mailto:hello@aicollective.in" rel="noopener">hello@aicollective.in</a>
      </p>
      <p>Built for creators, by advertising professionals.</p>
    </footer>
  )
}

import { useState } from 'react'
import { Reveal } from './Reveal.jsx'
import { EXPERIENCE, FORMATS, GENRES, LANGUAGES, SKILLS, SOURCES, TOOLS, WEB3FORMS_KEY } from '../data.js'

const EMPTY1 = { name: '', referral: '', whatsapp: '', city: '', skill: '', portfolio: '' }
const EMPTY2 = { email: '', experience: '', source: '', notes: '', honesty: false }
const EMPTY_PICKS = { genres: [], tools: [], languages: [], formats: [] }

function ChipGroup({ label, required, options, values, onToggle, prefix, error, ariaLabel }) {
  return (
    <div className="f-group">
      <label>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      <div className="chip-group" role="group" aria-label={ariaLabel}>
        {options.map(([value, text], i) => (
          <span key={value} style={{ display: 'contents' }}>
            <input
              type="checkbox"
              id={`${prefix}${i + 1}`}
              value={value}
              checked={values.includes(value)}
              onChange={() => onToggle(value)}
            />
            <label htmlFor={`${prefix}${i + 1}`}>{text}</label>
          </span>
        ))}
      </div>
      {error && <span className="f-error">{error}</span>}
    </div>
  )
}

export function ApplicationForm({ onSubmitted }) {
  const [step, setStep] = useState(1)
  const [s1, setS1] = useState(EMPTY1)
  const [s2, setS2] = useState(EMPTY2)
  const [picks, setPicks] = useState(EMPTY_PICKS)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)
  const [formError, setFormError] = useState('')

  const scrollToForm = () => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  const set1 = k => e => setS1(s => ({ ...s, [k]: e.target.value }))
  const set2 = k => e => setS2(s => ({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const toggle = key => value =>
    setPicks(p => ({ ...p, [key]: p[key].includes(value) ? p[key].filter(v => v !== value) : [...p[key], value] }))

  const goStep2 = e => {
    e.preventDefault()
    setStep(2)
    scrollToForm()
  }

  const goStep1 = () => {
    setStep(1)
    scrollToForm()
  }

  const submit = async e => {
    e.preventDefault()
    const next = {}
    if (!picks.genres.length) next.genres = 'Please select at least one genre.'
    if (!picks.tools.length) next.tools = 'Please select at least one tool.'
    if (!picks.languages.length) next.languages = 'Please select at least one language.'
    setErrors(next)
    setFormError('')
    if (Object.keys(next).length) return

    setBusy(true)
    const payload = {
      access_key: WEB3FORMS_KEY,
      from_name: s1.name,
      subject: 'New AiC Application: ' + s1.name,
      botcheck: false,
      name: s1.name,
      referral_code: s1.referral,
      whatsapp: s1.whatsapp,
      city: s1.city,
      primary_skill: s1.skill,
      portfolio_link: s1.portfolio,
      email: s2.email || 'Not provided',
      genres: picks.genres.join(', '),
      tools: picks.tools.join(', '),
      languages: picks.languages.join(', '),
      formats: picks.formats.length ? picks.formats.join(', ') : 'None',
      experience: s2.experience || 'Not provided',
      source: s2.source || 'Not provided',
      notes: s2.notes || 'None',
    }
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await response.json()
      if (response.ok) {
        onSubmitted()
        setS1(EMPTY1)
        setS2(EMPTY2)
        setPicks(EMPTY_PICKS)
        setStep(1)
        scrollToForm()
      } else {
        setFormError('Submission failed: ' + (json.message || 'Unknown error'))
      }
    } catch {
      setFormError('Network error. Please check your connection and try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="form-section divider" id="register">
      <div className="inner">
        <div className="form-container">
          <div className="step-indicator">
            <div className={`step-dot ${step === 1 ? 'active' : 'done'}`}>
              <span className="dot">1</span> Qualify
            </div>
            <div className="step-line" />
            <div className={`step-dot${step === 2 ? ' active' : ''}`}>
              <span className="dot">2</span> Full Profile
            </div>
          </div>

          {step === 1 && (
            <div>
              <Reveal className="s-label">Join the Collective</Reveal>
              <Reveal as="h2" className="s-title">You need a referral to get in.</Reveal>
              <Reveal as="p" className="form-intro">
                Entry is by referral only. Someone already in the collective has to vouch for you. We review every
                application manually. If your work qualifies, expect to hear within 7 working days.
                <br />
                <br />
                Don't have a referral code?{' '}
                <a href="mailto:hello@aicollective.in" rel="noopener">Write to us</a> to request one.
              </Reveal>

              <form onSubmit={goStep2}>
                <div className="f-row">
                  <Reveal className="f-group">
                    <label htmlFor="name">Full Name <span className="req" aria-hidden="true">*</span></label>
                    <input type="text" id="name" placeholder="Your full name" autoComplete="name" required value={s1.name} onChange={set1('name')} />
                  </Reveal>
                  <Reveal className="f-group">
                    <label htmlFor="referral">Referral Code <span className="req" aria-hidden="true">*</span></label>
                    <input type="text" id="referral" placeholder="e.g. AIC-DEBO-001" autoComplete="off" required value={s1.referral} onChange={set1('referral')} />
                  </Reveal>
                </div>
                <div className="f-row">
                  <Reveal className="f-group">
                    <label htmlFor="whatsapp">WhatsApp <span className="req" aria-hidden="true">*</span></label>
                    <input type="tel" id="whatsapp" placeholder="+91 XXXXX XXXXX" autoComplete="tel" required value={s1.whatsapp} onChange={set1('whatsapp')} />
                  </Reveal>
                  <Reveal className="f-group">
                    <label htmlFor="city">City / State <span className="req" aria-hidden="true">*</span></label>
                    <input type="text" id="city" placeholder="e.g. Patna, Bihar" autoComplete="address-level2" required value={s1.city} onChange={set1('city')} />
                  </Reveal>
                </div>
                <Reveal className="f-group">
                  <label htmlFor="skill">Primary Skill <span className="req" aria-hidden="true">*</span></label>
                  <select id="skill" required value={s1.skill} onChange={set1('skill')}>
                    <option value="" disabled>What do you create?</option>
                    {SKILLS.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
                  </select>
                </Reveal>
                <Reveal className="f-group">
                  <label htmlFor="portfolio">Your Best Portfolio Link <span className="req" aria-hidden="true">*</span></label>
                  <input type="url" id="portfolio" placeholder="One link. Instagram, Behance, YouTube, or Drive." autoComplete="url" required value={s1.portfolio} onChange={set1('portfolio')} />
                </Reveal>
                <Reveal as="button" type="submit" className="submit-btn">Continue to Full Profile →</Reveal>
                <Reveal as="p" className="f-note">We verify every referral code and portfolio. Incomplete applications will not proceed.</Reveal>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <button type="button" className="back-btn" onClick={goStep1}>← Back to Step 1</button>
              <div className="s-label">Almost There</div>
              <h2 className="s-title">Tell us how you create.</h2>
              <p className="form-intro">This helps us match you to the right briefs. The more accurate, the better your project matches.</p>

              <form onSubmit={submit}>
                <div className="f-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" autoComplete="email" value={s2.email} onChange={set2('email')} />
                </div>

                <ChipGroup label="Genres" required ariaLabel="Select genres" prefix="g" options={GENRES} values={picks.genres} onToggle={toggle('genres')} error={errors.genres} />
                <ChipGroup label="Tools" required ariaLabel="Select tools" prefix="t" options={TOOLS} values={picks.tools} onToggle={toggle('tools')} error={errors.tools} />
                <ChipGroup label="Languages" required ariaLabel="Select languages" prefix="l" options={LANGUAGES} values={picks.languages} onToggle={toggle('languages')} error={errors.languages} />
                <ChipGroup label="Formats" ariaLabel="Select formats" prefix="f" options={FORMATS} values={picks.formats} onToggle={toggle('formats')} />

                <div className="f-row">
                  <div className="f-group">
                    <label htmlFor="experience">Experience</label>
                    <select id="experience" value={s2.experience} onChange={set2('experience')}>
                      <option value="" disabled>Select</option>
                      {EXPERIENCE.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
                    </select>
                  </div>
                  <div className="f-group">
                    <label htmlFor="source">How'd You Hear About Us?</label>
                    <select id="source" value={s2.source} onChange={set2('source')}>
                      <option value="" disabled>Select</option>
                      {SOURCES.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="f-group">
                  <label htmlFor="notes">Anything Else?</label>
                  <textarea id="notes" rows="2" placeholder="Rate expectations, availability, special skills…" value={s2.notes} onChange={set2('notes')} />
                </div>

                <div className="honesty-group">
                  <input type="checkbox" id="honesty" required checked={s2.honesty} onChange={set2('honesty')} />
                  <label htmlFor="honesty">
                    I confirm that the portfolio work I've submitted is my own original creation and I agree to AiC's
                    community guidelines. I understand that misrepresentation may result in removal from the collective.
                  </label>
                </div>

                {formError && <p className="f-error f-error-global" style={{ marginBottom: 12 }}>{formError}</p>}
                <button type="submit" className="submit-btn" disabled={busy}>{busy ? 'Submitting…' : 'Submit Application'}</button>
                <p className="f-note">We review every application manually. Expect a response within 7 working days. No spam. No data sharing.</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

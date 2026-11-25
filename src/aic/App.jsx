import { useEffect, useRef, useState } from 'react'
import { Benefits, BrandCarousel, Collective, Footer, Hero, HowItWorks, Nav, PayBanner, Problem, WhoRunsThis } from './components/Sections.jsx'
import { ApplicationForm } from './components/ApplicationForm.jsx'

export default function App() {
  const [ctaVisible, setCtaVisible] = useState(false)
  const [toast, setToast] = useState(false)
  const timer = useRef(null)

  // Floating CTA shows after the hero and hides when the form is near
  useEffect(() => {
    const onScroll = () => {
      const reg = document.getElementById('register')
      if (!reg) return
      const y = window.scrollY
      setCtaVisible(y > 350 && y < reg.offsetTop - 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showToast = () => {
    setToast(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(false), 5000)
  }

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <PayBanner />
      <Benefits />
      <HowItWorks />
      <WhoRunsThis />
      <Collective />
      <ApplicationForm onSubmitted={showToast} />
      <BrandCarousel />
      <Footer />
      <a href="#register" className={`float-cta${ctaVisible ? ' visible' : ''}`}>Apply ↓</a>
      <div className={`toast${toast ? ' show' : ''}`} role="status" aria-live="polite">
        Application submitted. We'll review and reach out within 7 days.
      </div>
    </>
  )
}

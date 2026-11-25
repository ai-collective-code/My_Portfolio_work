export const PROBLEMS = [
  { title: 'The Social Media Trap', tag: 'Views ≠ Invoices', text: 'You post stunning AI work on Instagram and LinkedIn. Likes, shares, engagement. But zero paid briefs. Your reel has more views than most TVCs, and you made ₹0 from it.' },
  { title: 'Vague Briefs, No Guidelines', tag: 'Brief Chaos', text: 'When a brand does reach out, the brief is "make something cool." No brand guidelines, no strategy, no clarity. You deliver. Feedback never comes.' },
  { title: 'Payment Roulette', tag: 'Unpaid Work Is Not Work', text: 'You chase invoices for weeks. Rates get negotiated down after delivery. No contracts. No leverage. No protection.' },
  { title: 'The Spec Ad Loop', tag: 'Break The Cycle', text: "You keep making spec ads hoping brands notice. But spec ads don't build your career or your bank balance. Paid brand work does." },
]

export const BENEFITS = [
  { title: 'Paid Brand Briefs Only', text: "Every brief is a confirmed, budgeted project from real brands. Our founding team's portfolio spans 50+ brands across FMCG, D2C, auto, pharma, and more." },
  { title: 'We Bring the Taste. You Bring the Talent.', text: "We hand you a clear playbook for every brand: what works, what doesn't, what gets the brand manager fired. Brand archetypes, tonality, cultural sensitivity. All handled before the brief reaches you." },
  { title: 'Clear, Decoded Briefs', text: 'No more guessing what the brand wants. You receive structured guidelines, visual references, tone direction, and exact deliverables. We decode so you can create.' },
  { title: 'Your Identity, Protected', text: 'Clients see AiC\'s output, not your name. This means no direct client poaching, freedom to work across multiple projects simultaneously, and a diverse creative portfolio without restrictions.' },
  { title: 'Credit When You Want It', text: 'Get credited on case studies and award entries, with client permission AND your consent. Share your AiC project work on your own social channels. Your portfolio, your call.' },
  { title: 'A Community, Not a Marketplace', text: 'Quarterly meetups, tool workshops, first access to new AI tools and beta programs. Top performers advance to higher tiers with premium project access and rates.' },
  { title: 'Your current role uses a fraction of what you can do.', text: 'AiC gives you a space to stretch your full creative range, build a diverse portfolio across genres and formats, and earn from skills your day job never taps. Realistic, cartoon, product viz, cinematic. Explore it all.', full: true },
]

export const BEATS = [
  { title: '1. Get Matched', text: 'We match your skills, region, and availability to a paid brief. You accept or pass.' },
  { title: '2. Create', text: 'Stills → character lock → storyboard → video. Clear stages, clear revisions, clear guardrails.' },
  { title: '3. Get Paid', text: 'Money at every milestone. Not at the end. Not after 45 days. As you progress.' },
]

export const STAGES = [
  { title: 'Greenlight', text: 'AiC notifies you, shares brief + timeline + budget. NDA signed at this stage. You can accept or decline with no penalty.' },
  { title: 'Stills', text: 'You submit 4 to 5 stills based on the brief direction. Visual tone, character design, and colour palette established.', pay: '₹ Token Advance' },
  { title: 'Character Lock', text: 'Client approves characters and visual direction. Once locked, direction does not change. This protects your work from scope creep.', pay: '₹ Milestone' },
  { title: 'Storyboard', text: 'Full storyboard with 3 to 4 revision rounds. Narrative, pacing, and transitions finalized.', pay: '₹ Milestone' },
  { title: 'Video Draft', text: 'Full video rendition with AiC watermark. Watermark protects your work until payment clears. 2 to 3 feedback rounds included.', pay: '₹ Milestone' },
  { title: 'Final Lock', text: 'Video locked. Watermark removed. All remaining money transferred. AiC receives final unwatermarked output only after full clearance.', pay: '₹ Final Payment' },
  { title: 'Delivery', text: 'Final files delivered in all required formats. Project closed. High performers are prioritized for future premium briefs and rate upgrades.' },
]

export const SKILLS = [
  ['ai_video', 'AI Video (Runway, Kling, Sora, Veo, Hailuo)'],
  ['ai_image', 'AI Image & Design (Midjourney, Flux, Firefly)'],
  ['ai_audio', 'AI Audio & Voice (ElevenLabs, Murf, PlayHT)'],
  ['ai_animation', 'AI Animation & Motion Graphics'],
  ['ai_music', 'AI Music & SFX (Udio, Suno)'],
  ['post_production', 'Post Production & VFX with AI'],
  ['scriptwriting', 'AI Assisted Scriptwriting & Ideation'],
  ['ai_pipeline', 'AI Workflow & Pipeline Building (ComfyUI, automation)'],
  ['multiple', 'Multiple Skills'],
]

// [value, label]
export const GENRES = [
  ['Realistic', 'Realistic'], ['Cartoon / Illustration', 'Cartoon'], ['Anime', 'Anime'], ['3D / CGI', '3D / CGI'],
  ['Motion Graphics', 'Motion Graphics'], ['Product Viz', 'Product Viz'], ['Character Animation', 'Character Anim'],
  ['Abstract', 'Abstract'], ['Documentary', 'Documentary'], ['Cinematic', 'Cinematic'], ['Product Demo / Unboxing', 'Product Demo'],
]
export const TOOLS = [
  ['Runway', 'Runway'], ['Kling', 'Kling'], ['Midjourney', 'Midjourney'], ['Flux', 'Flux'], ['Sora', 'Sora'], ['Veo', 'Veo'],
  ['ElevenLabs', 'ElevenLabs'], ['Hailuo', 'Hailuo'], ['Udio', 'Udio'], ['Suno', 'Suno'], ['Firefly', 'Firefly'],
  ['After Effects', 'AE'], ['DaVinci', 'DaVinci'], ['ComfyUI', 'ComfyUI'], ['Pika', 'Pika'], ['Wan', 'Wan'], ['Luma', 'Luma'],
  ['SD/SDXL', 'SD/SDXL'], ['Other', 'Other'],
]
export const LANGUAGES = ['Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Kannada', 'Malayalam', 'Gujarati', 'Odia', 'Assamese', 'Punjabi', 'Urdu', 'Bhojpuri'].map(l => [l, l])
export const FORMATS = ['Short (under 30s)', 'Mid (30s to 2min)', 'Long (2min+)', 'Static / Design', 'Audio / Voice'].map(l => [l, l])

export const EXPERIENCE = [['lt6', 'Less than 6 months'], ['6to12', '6 to 12 months'], ['1to2', '1 to 2 years'], ['2plus', '2+ years']]
export const SOURCES = [['referral', 'Referral'], ['instagram', 'Instagram'], ['linkedin', 'LinkedIn'], ['twitter', 'X'], ['brand', 'A brand told me'], ['other', 'Other']]

export const BRANDS = ['DABUR', 'ITC', 'LENSKART', 'NYKAA', 'RSPL', 'NIKE', 'MARUTI', 'SBI', 'UNICEF', 'RAY BAN', 'GANT', 'SWIGGY', 'CEAT', 'MENTOS', 'GSK', 'ICICI LOMBARD', 'LIC', 'MYK LATICRETE', 'SPRINGFIT', 'CREMICA']

export const WEB3FORMS_KEY = 'e659fc8b-062d-4ab9-8fcf-bb1f8c82ba65'

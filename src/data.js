import linked from './linked.json'

export const clients = [
  'P.C. Chandra','DTC','Lenskart','Nykaa','Fem','Cremica','Dabur','Swiggy','Dabur Red','Honitus','ENO','Yippee!',
  'Chyawanprash','Lal Tail','Vansaar','MYK Laticrete','Odomos','India Gate','Mom\'s Magic','Aashirvaad','ITC',
  'Aditya Birla','Kurl-on','SBI General','CEAT','Nuvoco','Sunfeast','Mrs. Bector\'s','Sunrise','Gaana','Zetwerk',
  'Srijan','Real','SpringFit','Bounce','Pudin Hara','Hajmola','Berger','Baidyanath','Ola','Dozee',
]

export const chapters = [
  {
    id: 'ai', title: 'AI', script: 'a-insaan', bg: '#F96A14', fg: '#FDB913', scriptColor: '#FFF3DC',
    blurb: 'Films and campaigns made with generative tools and a human point of view.',
    works: linked.chapters.ai,
  },
  {
    id: 'scripted', title: 'SCRIPTED', script: 'kahani', bg: '#98D3C7', fg: '#DFDC4A', scriptColor: '#FFFFFF',
    blurb: 'Stories with a beginning, a middle and a brand that belongs in both.',
    works: linked.chapters.scripted,
  },
  {
    id: 'activation', title: 'ACTIVATION', script: 'tamasha', bg: '#FDB913', fg: '#E31E7B', scriptColor: '#FFFFFF',
    blurb: 'Ideas that leave the screen and land on the street.',
    featured: {
      name: 'The Wall That Spits Back',
      text: 'What if the wall spits on you, every time you spit on them? Introducing THE WALL THAT SPITS BACK on this No-Tobacco Day — to stop people spitting on walls after chewing tobacco. A PSC with a technology innovation by Dabur Red Paste.',
    },
    works: linked.chapters.activation,
  },
  {
    id: 'unscripted', title: 'UNSCRIPTED', script: 'haqeqaat', bg: '#0E6B35', fg: '#E0DEC4', scriptColor: '#FDB913',
    blurb: 'Real people, real places, real stories — shot as they happen.',
    works: linked.chapters.unscripted,
  },
  {
    id: 'corporate', title: 'CORPORATE', script: 'majdoor', bg: '#C968E5', fg: '#E0DEC4', scriptColor: '#8A2F7C',
    blurb: 'Corporate films with craft — culture, CSR and capability.',
    works: linked.chapters.corporate,
  },
  {
    id: 'technology', title: 'TECHNOLOGY', script: 'takniki', bg: '#E31E7B', fg: '#FDB913', scriptColor: '#FFFFFF',
    blurb: 'Where new tech meets cultural insight — at scale.',
    works: linked.chapters.technology,
  },
]

export const press = [
  {
    text: 'Economic Times: Beware! Misleading ad-game tricking Indians rather than offering umeedo wali dhoop',
    url: 'https://economictimes.indiatimes.com/industry/services/advertising/beware-misleading-ad-game-tricking-indians-rather-than-offering-umeedo-wali-dhoop/articleshow/110534209.cms',
    source: 'The Economic Times',
    category: 'BRAND EQUITY & REGULATION',
    date: 'May 2024',
    readTime: '4 min read',
    headline: "Beware! Misleading ad-game tricking Indians rather than offering 'Umeedo Wali Dhoop'",
    lead: "As regulatory watchdogs tighten oversight on deceptive product narratives and unverified wellness claims, Indian advertising faces a defining moment: moving past manipulative hype to embrace genuine cultural resonance.",
    quote: "Advertising that promises sunshine cannot deliver smoke. Modern Indian consumers see through manufactured hype faster than ever; lasting brand equity belongs strictly to those who build on cultural truth.",
    sections: [
      {
        title: 'The Crisis of Hyperbolic Claims',
        content: 'Across FMCG, fintech, and lifestyle sectors, recent campaigns have walked a perilous line between optimistic storytelling and outright consumer deception. From miraculous hair-regrowth serums to guaranteed financial returns, exaggerated marketing has eroded consumer trust in legacy advertising mediums.'
      },
      {
        title: 'Regulatory Tightening by ASCI and CCPA',
        content: 'The Central Consumer Protection Authority (CCPA) and the Advertising Standards Council of India (ASCI) have issued strict compliance mandates. Brands are now legally accountable for scientific substantiation, clear disclaimers, and authentic influencer disclosure, ending the era of unregulated marketing hyperbole.'
      },
      {
        title: 'Why Cultural Empathy Is the Real Growth Driver',
        content: 'Agencies like Bharat Content Fireworks demonstrate that sustainable brand power does not require trickery. By rooting brand films in deep vernacular truth, human vulnerability, and regional nuance, brands cultivate loyalty that outlasts short-lived clickbait campaigns.'
      }
    ],
    keyTakeaways: [
      'ASCI and CCPA regulations are forcing brands to substantiate all performance claims.',
      'Manipulative advertisements produce diminishing returns as consumer skepticism peaks.',
      'Authentic regional storytelling and emotional transparency generate sustainable brand equity.'
    ]
  },
  {
    text: 'Economic Times: MS Dhoni, a Baahubali brand whose valuation score keeps running to new dawns',
    url: 'https://economictimes.indiatimes.com/industry/services/advertising/ms-dhoni-a-baahubali-brand-whose-valuation-score-keeps-running-to-new-dawns/articleshow/100614122.cms',
    source: 'The Economic Times',
    category: 'BRAND VALUATION & SPORTS',
    date: 'June 2023',
    readTime: '4 min read',
    headline: 'MS Dhoni: A Baahubali brand whose valuation score keeps running to new dawns',
    lead: 'Years after stepping away from international cricket, Mahendra Singh Dhoni remains an unprecedented commercial juggernaut, defying the traditional post-retirement valuation drop and commanding top-tier brand premiums.',
    quote: 'Dhoni does not sell products through aggressive showmanship. He validates brands through stoic authenticity—a rare commercial superpower that compounds in value year after year.',
    sections: [
      {
        title: 'Defying the Retirement Curve',
        content: "Conventional sports marketing dictates that an athlete's commercial value peaks on the field and declines rapidly after hanging up the boots. Dhoni has shattered this playbook, maintaining over 30 active endorsements spanning tech, agriculture, real estate, and consumer goods."
      },
      {
        title: 'The Persona of Unshakable Reliability',
        content: "Brands gravitate toward Dhoni because he personifies grounded resilience, strategic calm, and trust under pressure. In an era saturated with flashy digital influencers, Dhoni's rare public appearances make every campaign appearance feel significant and sincere."
      },
      {
        title: 'Narrative Craft Around National Icons',
        content: "Commercial collaborations—including high-profile storytelling crafted by Bharat Content Fireworks—treat Dhoni not as a billboard, but as an authentic cultural anchor who elevates brand messaging into memorable cinematic milestones."
      }
    ],
    keyTakeaways: [
      'MS Dhoni’s post-retirement endorsement portfolio has expanded across over 30 commercial categories.',
      'His brand equity rests on trust, composure, and authentic small-town-to-global-icon inspiration.',
      'Cinematic narratives that leverage his understated demeanor achieve significantly higher retention.'
    ]
  },
  {
    text: 'Adgully: Nykaa TV presents Rakshak',
    url: 'https://archive.adgully.com/nykaa-tv-presents-rakshak-95316.html',
    source: 'Adgully',
    category: 'BRANDED CINEMA & SHORT FILM',
    date: 'May 2020',
    readTime: '3 min read',
    headline: "Nykaa TV presents 'Rakshak' — A tribute to unseen frontline solidarity",
    lead: "Building on the acclaim of its Mother's Day film 'Khoj', Nykaa TV introduced 'Rakshak', a poignant narrative highlighting everyday solidarity, unexpected kindness, and community bonds forged during the pandemic lockdown.",
    quote: "True protection in tough times is not found in armor, but in empathy. 'Rakshak' proved that branded cinema reaches its highest form when it reflects collective human resilience.",
    sections: [
      {
        title: 'Stories of Quiet Courage',
        content: "During the height of nationwide quarantine, 'Rakshak' examined the shared vulnerabilities connecting apartment residents with frontline workers, domestic aides, and security teams who kept cities functioning against immense odds."
      },
      {
        title: 'Production Ingenuity Under Lockdown',
        content: 'Conceived and executed under strict remote protocols, the film turned production constraints into creative strength. Subdued palettes, natural sound design, and expressive close-ups delivered an emotionally charged experience without unnecessary spectacle.'
      },
      {
        title: 'Redefining Lifestyle Platform Storytelling',
        content: 'Nykaa TV shifted the conversation from beauty consumption to cultural celebration. The film reinforced that modern digital brands must speak to the soul of their audience during challenging times rather than pushing commercial transactions.'
      }
    ],
    keyTakeaways: [
      'Explored human inclusivity and silent sacrifice during nationwide lockdowns.',
      'Pioneered high-impact remote cinematic production within stringent safety guidelines.',
      'Positioned Nykaa TV as an empathetic cultural platform beyond conventional e-commerce.'
    ]
  },
  {
    text: 'Social Samosa: Campaign Face-off, SpringFit vs Duroflex',
    url: 'https://www.socialsamosa.com/2020/03/campaign-face-off-springfit-abtosoja-v-s-duroflex-yawnoffsleepon/',
    source: 'Social Samosa',
    category: 'CAMPAIGN STRATEGY & FACE-OFF',
    date: 'March 2020',
    readTime: '4 min read',
    headline: "Campaign Face-Off: Springfit's #AbToSoJa vs Duroflex's #YawnOffSleepOn",
    lead: "An exhaustive comparative breakdown of India's competitive mattress landscape, dissecting how two leading players deployed humor, medical ergonomics, and lifestyle psychology to capture urban attention.",
    quote: 'When selling sleep to an overtired nation, spring counts take a backseat to emotional relief. The winning campaign is always the one that makes consumers feel genuinely understood.',
    sections: [
      {
        title: 'The Battle for Bedtime Mindshare',
        content: 'Urban sleep deprivation, prolonged screen time, and rising back-pain complaints transformed mattresses from dormant commodity purchases into vital wellness investments. Both brands launched aggressive creative pushes to dominate consumer search intent.'
      },
      {
        title: 'Comparing the Creative Playbooks',
        content: "Springfit chose high-energy, relatable domestic scenarios in #AbToSoJa, humorously highlighting the nightly struggle between binge-watching and restorative sleep. In contrast, Duroflex's #YawnOffSleepOn emphasized lab-tested orthopedic support and 5-zone body alignment."
      },
      {
        title: 'Engagement and Brand Recall Verdict',
        content: 'While Duroflex captured clinical credibility, Springfit gained immense traction through witty vernacular banter and relatable social memes, proving that emotional relatability frequently trumps technical spec sheets in lifestyle FMCG.'
      }
    ],
    keyTakeaways: [
      'Mattress marketing evolved from commodity sales to holistic sleep health conversations.',
      "Springfit's domestic humor drove organic sharing and high video completion rates.",
      'Duroflex established authority in orthopedic support, setting up a clash of narrative strategies.'
    ]
  },
  {
    text: "exchange4media: Nykaa TV presents Khoj, a Mother's Day film",
    url: 'https://www.exchange4media.com/advertising-news/nykaa-tv-presents-khoj-a-mothers-day-film-created-using-vertical-smartphone-interface-104625.html',
    source: 'exchange4media',
    category: 'MOBILE-FIRST CINEMATOGRAPHY',
    date: 'May 2020',
    readTime: '4 min read',
    headline: "Nykaa TV presents 'Khoj' — A Mother's Day film told entirely through smartphone screens",
    lead: "Setting a new creative benchmark for mobile-native narrative, Nykaa TV released 'Khoj', an emotional short film constructed entirely from vertical screen recordings, chat notifications, and digital photo archives.",
    quote: "By confining the camera to the exact screen where modern families actually live their lives, 'Khoj' turned ordinary notification pings into tear-inducing cinematic storytelling.",
    sections: [
      {
        title: 'The Smartphone Screen as Canvas',
        content: 'Rather than treating vertical video as an afterthought, the creative team built the entire narrative around the smartphone user interface. WhatsApp threads, missed FaceTime calls, search history queries, and gallery scrolling became the cinematic language.'
      },
      {
        title: 'The Mother-Daughter Search',
        content: "The narrative follows an ambitious young professional living away from home who gradually uncovers the quiet sacrifices and unexpressed affection of her mother through digital breadcrumbs left across years of text messages."
      },
      {
        title: 'A Format Breakthrough in Indian Advertising',
        content: 'The film garnered widespread industry acclaim for proving that emotional depth does not require sprawling sets. Authenticity, meticulous screen design, and honest voice acting delivered millions of views and viral organic shares.'
      }
    ],
    keyTakeaways: [
      'Pioneered 9:16 vertical smartphone screen storytelling in mainstream Indian digital ads.',
      'Integrated genuine app UI mechanics into emotional family narrative pacing.',
      'Achieved viral reach and industry accolades for format innovation and emotional resonance.'
    ]
  },
  {
    text: "Adgully: ITC's Aashirvaad Mishti Doi brought the age-old Doi-walas to life",
    url: 'https://archive.adgully.com/itc--s-aashirvaad-mishti-doi-brought-the-age-old--doi-walas--to-life-138441.html',
    source: 'Adgully',
    category: 'CULTURAL HERITAGE & EXPERIENTIAL',
    date: 'October 2023',
    readTime: '4 min read',
    headline: "ITC's Aashirvaad Mishti Doi brought the age-old 'Doi-walas' to life this festive season",
    lead: "During Durga Puja, ITC Aashirvaad rekindled timeless memories by reviving the legendary street doiwalas of classic Bengali literature, fusing nostalgic street theatre with authentic culinary heritage.",
    quote: 'You cannot fake cultural belonging. By respecting Bengal’s literary and culinary roots, the Doiwalas campaign transformed an everyday dairy dessert into an emotional celebration of collective identity.',
    sections: [
      {
        title: "Rediscovering Kolkata's Heritage Sounds",
        content: "For decades, traditional doiwalas carrying clay handis in handwoven bamboo balances were an iconic symbol of Bengal's neighborhood life. With rapid modern supermarket growth, their melodic street calls had faded into nostalgia."
      },
      {
        title: 'Experiential Street Theatre in Kolkata Paras',
        content: 'ITC revived these iconic figures across historic North Kolkata lanes, Bagbazar ghats, and prominent Durga Puja pandals. Performers in period attire engaged families with poetic folk verse and sampled fresh, authentic mishti doi.'
      },
      {
        title: 'Viral Cultural Connection',
        content: 'Generations gathered to share stories with grandchildren, sparking an outpouring of spontaneous social posts. The campaign proved that heritage food brands build deepest trust when they actively preserve local cultural memories.'
      }
    ],
    keyTakeaways: [
      'Revived traditional Bengali doiwalas through interactive on-ground street theatre.',
      'Activated during Durga Puja across historic neighborhood paras and prominent pandals.',
      'Established authentic regional credibility that drove major retail mishti doi sales.'
    ]
  },
  {
    text: 'exchange4media: Dabur Red Paste revolutionises oral care at Kumbh 2025',
    url: 'https://www.exchange4media.com/marketing-initiative-news/dabur-red-paste-revolutionises-oral-ccare-at-kumbh-2025-with-dant-snan-initiative-141249.html',
    source: 'exchange4media',
    category: 'MASS CULTURAL INNOVATION',
    date: 'January 2025',
    readTime: '4 min read',
    headline: "Dabur Red Paste revolutionises oral care at Kumbh 2025 with 'Dant Snan' initiative",
    lead: "Integrating public health into sacred river rituals, Dabur Red Paste engaged tens of millions of pilgrims at Mahakumbh 2025 through its monumental 'Dant Snan' experience on the ghats of Prayagraj.",
    quote: "At Kumbh Mela, scale alone is not enough—reverence is everything. The 'Dant Snan' initiative didn't interrupt the pilgrim's sacred journey; it elevated and became a harmonious part of it.",
    sections: [
      {
        title: 'Harmonizing Hygiene with Sacred Rituals',
        content: 'For millions of devotees, the morning holy dip in the Sangam is a spiritual rebirth. Dabur Red connected traditional Ayurvedic tooth cleansing directly with this ritual, setting up dedicated Dant Snan riverbank pavilions.'
      },
      {
        title: 'Monumental Grassroots Scale',
        content: 'With interactive oral care stations, distribution of eco-friendly kits, and mass live demonstrations, the campaign reached pilgrims from every corner of India, merging centuries-old Ayurvedic traditions with modern hygiene standards.'
      },
      {
        title: 'Cementing Market Leadership',
        content: "The initiative fortified Dabur Red Paste's position as India's premier Ayurvedic oral hygiene choice, proving that deep cultural integration delivers unmatched brand reverence and community trust."
      }
    ],
    keyTakeaways: [
      'Engaged millions of pilgrims at Mahakumbh 2025 with dedicated riverbank oral care stations.',
      'Seamlessly integrated Ayurvedic dental hygiene into sacred morning river rituals.',
      'Reinforced Dabur Red Paste’s undisputed position as India’s leading Ayurvedic brand.'
    ]
  }
]

export const awards = [
  'DIGIXX Award', 'Brand Disruption Award', 'DMA Asia ECHO Create Awards', 'Kaleido', 'EMA',
  'Maddies', 'Abbys', 'Drivers of Digital', 'Afaqs Marketing Excellence Award', 'ET Ascent Stars of Industry',
]

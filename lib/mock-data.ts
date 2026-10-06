import { ResearchProject, JobListing, UniversityProgram, JapaneseCourse, Testimonial } from '@/types';

// ==========================================
// 1. HIGHER STUDIES IN JAPAN DATA
// ==========================================

export const japanUniversities: UniversityProgram[] = [
  {
    id: 'univ-todai',
    university: 'The University of Tokyo (Todai)',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.S. Computer Science', 'M.Eng Information & Communication', 'Ph.D. AI & Robotics'],
    ranking: 'QS World #28 • #1 in Japan',
    scholarshipAvailable: true,
    intake: 'September (Autumn) & April (Spring)',
    tuitionRange: '¥535,800 / Year (~₹3.0 Lakhs) (National Standard)',
    popularFields: ['Artificial Intelligence', 'Quantum Computing', 'Robotics & Mechatronics', 'Bioengineering'],
    description: 'Japan’s premier imperial research university offering English-taught graduate programs (PEAK / Graduate School of Information Science and Technology) with full MEXT and Todai Fellowship support.'
  },
  {
    id: 'univ-kyoto',
    university: 'Kyoto University (Kyodai)',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.S. Informatics', 'M.Eng Advanced Energy', 'Ph.D. Intelligence Science'],
    ranking: 'QS World #46 • #2 in Japan (11 Nobel Laureates)',
    scholarshipAvailable: true,
    intake: 'October & April',
    tuitionRange: '¥535,800 / Year (~₹3.0 Lakhs) (National Standard)',
    popularFields: ['Informatics', 'Data Science', 'Civil & Environmental Engineering', 'Biotechnology'],
    description: 'World-renowned for academic freedom and groundbreaking scientific research. Offers the International Graduate Program in Informatics with cutting-edge supercomputing laboratory access.'
  },
  {
    id: 'univ-tokyotech',
    university: 'Institute of Science Tokyo (formerly Tokyo Tech)',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.Eng Computer Science', 'M.Eng Mechanical Engineering', 'Ph.D. Cybernetics'],
    ranking: 'QS World #84 • Top Tech University in Japan',
    scholarshipAvailable: true,
    intake: 'September & April',
    tuitionRange: '¥635,400 / Year (~₹3.5 Lakhs)',
    popularFields: ['Autonomous Robotics', 'Semiconductors', 'Edge Computing', 'Materials Science'],
    description: 'Japan’s highest-ranked dedicated institute for science and engineering. Hosts the International Graduate Program (IGP) with seamless industry pipelines to Tokyo tech giants.'
  },
  {
    id: 'univ-osaka',
    university: 'Osaka University (Handai)',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.S. Information Science & Technology', 'M.Eng Applied Physics', 'Ph.D. Robotics'],
    ranking: 'QS World #80 • Top 3 National in Japan',
    scholarshipAvailable: true,
    intake: 'October & April',
    tuitionRange: '¥535,800 / Year (~₹3.0 Lakhs)',
    popularFields: ['Humanoid Robotics', 'Computer Vision', 'Nanotechnology', 'Biomedical Engineering'],
    description: 'Home to world-pioneering robotics laboratories (Prof. Hiroshi Ishiguro lab). Strong collaborative ties with Kansai industrial hubs in Osaka and Kobe.'
  },
  {
    id: 'univ-tohoku',
    university: 'Tohoku University',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.S. AI & Data Science', 'M.Eng Aerospace Engineering', 'Ph.D. Materials Science'],
    ranking: 'QS World #107 • #1 in Times Higher Education Japan',
    scholarshipAvailable: true,
    intake: 'October & April',
    tuitionRange: '¥535,800 / Year (~₹3.0 Lakhs)',
    popularFields: ['Aerospace Systems', 'Next-Gen Materials', 'Disaster Mitigation AI', 'Micro-Electronics'],
    description: 'Ranked #1 in Japan for university innovation and research impact. Offers the Future Global Leadership (FGL) program taught entirely in English.'
  },
  {
    id: 'univ-waseda',
    university: 'Waseda University',
    country: 'Japan',
    flag: '🇯🇵',
    degrees: ['M.S. Computer Science & Communications', 'MBA Global Business', 'Ph.D. Informatics'],
    ranking: 'Top Private University in Tokyo',
    scholarshipAvailable: true,
    intake: 'September & April',
    tuitionRange: '¥1,100,000 - ¥1,450,000 / Year (~₹6.2 - 8.2 Lakhs)',
    popularFields: ['Software Engineering', 'Global Management', 'International Economics', 'Smart Cities'],
    description: 'Located in central Shinjuku, Tokyo. Renowned for international student body, global business connections, and high-impact corporate recruitment fairs.'
  }
];

// Backwards compatibility list
export const mockUniversities: UniversityProgram[] = japanUniversities;

// Approximate Expenses Breakdown for Studying in Japan
export const studyInJapanExpenses = {
  currencyNotes: 'Amounts shown in Japanese Yen (¥) with estimated INR (₹) equivalent calculated at ~1 JPY ≈ ₹0.56. Exact costs vary by city, university type, and lifestyle.',
  monthlyLivingCostRange: {
    jpy: '¥80,000 - ¥130,000 / Month',
    inr: '₹45,000 - ₹73,000 / Month'
  },
  firstYearEstimatedBudget: {
    nationalUniv: {
      title: 'National Universities (e.g., Todai, Kyoto, Tokyo Tech)',
      tuitionJPY: '¥535,800 / Year',
      tuitionINR: '≈ ₹3.0 Lakhs / Year',
      admissionFeeJPY: '¥282,000 (One-time)',
      admissionFeeINR: '≈ ₹1.58 Lakhs',
      livingExpensesJPY: '¥1,000,000 - ¥1,400,000 / Year',
      livingExpensesINR: '≈ ₹5.6 - ₹7.8 Lakhs / Year',
      totalFirstYearJPY: '¥1,817,800 - ¥2,217,800',
      totalFirstYearINR: '≈ ₹10.2 - ₹12.5 Lakhs (Before scholarships/waivers)'
    },
    privateUniv: {
      title: 'Private Universities (e.g., Waseda, Keio, Ritsumeikan)',
      tuitionJPY: '¥900,000 - ¥1,450,000 / Year',
      tuitionINR: '≈ ₹5.0 - ₹8.2 Lakhs / Year',
      admissionFeeJPY: '¥200,000 - ¥300,000 (One-time)',
      admissionFeeINR: '≈ ₹1.1 - ₹1.7 Lakhs',
      livingExpensesJPY: '¥1,100,000 - ¥1,500,000 / Year',
      livingExpensesINR: '≈ ₹6.2 - ₹8.4 Lakhs / Year',
      totalFirstYearJPY: '¥2,200,000 - ¥3,250,000',
      totalFirstYearINR: '≈ ₹12.3 - ₹18.2 Lakhs (Before scholarships/waivers)'
    }
  },
  breakdownItems: [
    {
      category: 'Tuition Fees',
      rangeJPY: '¥535,800 - ¥1,400,000 / Year',
      rangeINR: '₹3.0 - ₹7.8 Lakhs / Year',
      period: 'Annual',
      notes: 'National universities have fixed government rates (¥535,800/yr). High likelihood of 30-100% tuition waivers for merit candidates.'
    },
    {
      category: 'Accommodation (University Dormitory)',
      rangeJPY: '¥25,000 - ¥45,000 / Month',
      rangeINR: '₹14,000 - ₹25,000 / Month',
      period: 'Monthly',
      notes: 'Subsidized on-campus or partner student dorms with utilities often included or low-cost.'
    },
    {
      category: 'Accommodation (Private Apartment)',
      rangeJPY: '¥50,000 - ¥85,000 / Month',
      rangeINR: '₹28,000 - ₹48,000 / Month',
      period: 'Monthly',
      notes: 'Higher in central Tokyo (¥65k-85k); more affordable in Kyoto, Sendai, or Fukuoka (¥40k-55k).'
    },
    {
      category: 'Food & Groceries',
      rangeJPY: '¥30,000 - ¥45,000 / Month',
      rangeINR: '₹17,000 - ₹25,000 / Month',
      period: 'Monthly',
      notes: 'University cafeterias offer subsidized nutritious meals (¥350-¥550 per meal). Cooking at home saves significant costs.'
    },
    {
      category: 'Local Transportation',
      rangeJPY: '¥5,000 - ¥12,000 / Month',
      rangeINR: '₹2,800 - ₹6,800 / Month',
      period: 'Monthly',
      notes: 'Students receive 30-50% discount on train/subway commuter passes (Tsūkin-teiki).'
    },
    {
      category: 'National Health Insurance (NHI) & Utilities',
      rangeJPY: '¥12,000 - ¥18,000 / Month',
      rangeINR: '₹6,700 - ₹10,000 / Month',
      period: 'Monthly',
      notes: 'National Health Insurance (NHI) costs ~¥1,500-¥2,500/mo for students and covers 70% of all medical expenses. Utilities cover electricity, gas, mobile, and Wi-Fi.'
    },
    {
      category: 'Initial Setup & Travel',
      rangeJPY: '¥150,000 - ¥250,000',
      rangeINR: '₹84,000 - ₹1.4 Lakhs',
      period: 'One-time',
      notes: 'Includes one-way flight to Japan, student visa processing, apartment furnishings, and initial resident registration.'
    }
  ]
};

// ==========================================
// 2. JAPANESE LANGUAGE TRACKS & DATA
// ==========================================

export const mockJapaneseCourses: JapaneseCourse[] = [
  {
    level: 'JLPT N5',
    kanjiCount: '100+ Kanji',
    vocabularyCount: '800+ Words',
    grammarPoints: '80+ Basic Patterns',
    estimatedHours: '100 - 120 Hours',
    description: 'The essential foundation of Japanese. Master Hiragana, Katakana, basic everyday Kanji, and foundational sentence patterns for daily introductions, shopping, and campus life.',
    suitableFor: 'Complete beginners starting from zero, engineering students planning for higher studies in Japan, and anime/culture enthusiasts.',
    keyTopics: ['Hiragana & Katakana mastery with stroke orders', 'Daily greetings, self-introduction (Jikoshoukai), and numbers', 'Basic particles (は, が, を, に, で, へ)', 'Present, past, and polite verb conjugations (Desu/Masu form)', 'Listening practice with native audio cues']
  },
  {
    level: 'JLPT N4',
    kanjiCount: '300+ Kanji',
    vocabularyCount: '1,500+ Words',
    grammarPoints: '140+ Elementary Patterns',
    estimatedHours: '150 - 180 Hours',
    description: 'Elementary conversational Japanese. Comprehend daily conversations spoken slowly, follow short instructions, and express compound reasons, desires, and experiences.',
    suitableFor: 'Students who completed N5, candidates applying for Japanese language schools in Japan, and aspiring tech interns.',
    keyTopics: ['Te-form connections, potential form, and conditional expressions (Tara, Ba, Nara)', 'Giving and receiving verbs (Ageru, Kureru, Morau)', 'Basic workplace communication and asking for directions', 'Reading simple short essays and comprehension dialogues']
  },
  {
    level: 'JLPT N3',
    kanjiCount: '650+ Kanji',
    vocabularyCount: '3,750+ Words',
    grammarPoints: '220+ Intermediate Patterns',
    estimatedHours: '250 - 300 Hours',
    description: 'The crucial bridge to professional Japanese. Understand articles on everyday topics, newspaper headlines, and hold conversations on workplace themes. Meets the baseline hiring requirement for many international tech firms in Tokyo.',
    suitableFor: 'Engineering students and graduates aiming for Japanese IT jobs, bilingual tech roles, and postgraduate university admissions.',
    keyTopics: ['Honorific & Humble speech (Keigo - Sonkeigo/Kenjougo)', 'Expressing nuanced opinions, passive and causative-passive forms', 'Reading tech briefs, product specs, and newspaper summaries', 'Japanese job interview etiquette and workplace email conventions']
  },
  {
    level: 'JLPT N2',
    kanjiCount: '1,000+ Kanji',
    vocabularyCount: '6,000+ Words',
    grammarPoints: '350+ Advanced Patterns',
    estimatedHours: '400 - 500 Hours',
    description: 'Business-level fluency. Read articles with complex logic, understand natural-speed business discussions, and work seamlessly in bilingual Japanese tech firms and client-facing engineering teams.',
    suitableFor: 'Students seeking high-salary career placements in Tokyo/Osaka and applicants for prestigious Japanese Government (MEXT) research grants.',
    keyTopics: ['Advanced business emails & Rirekisho drafting', 'Technical presentations & sprint syncs in Japanese', 'Complex editorial comprehension and business logic', 'Nuanced colloquial idioms and formal corporate discourse']
  },
  {
    level: 'JLPT N1',
    kanjiCount: '2,000+ Kanji',
    vocabularyCount: '10,000+ Words',
    grammarPoints: 'Full Advanced Matrix',
    estimatedHours: '700+ Hours',
    description: 'Native-level mastery. Comprehend nuanced, complex lectures, literary texts, legal documentation, and lead executive discussions in Japan.',
    suitableFor: 'Bilingual project managers, researchers, senior corporate leads, technical translators, and university faculty.',
    keyTopics: ['Classical grammar nuances & 4-character idioms (Yojijukugo)', 'Academic thesis formulation and defense in Japanese', 'Executive negotiations & high-level corporate diplomacy', 'Domain-specific legal and software engineering terminology']
  }
];

export const languageSchoolsInJapan = [
  {
    name: 'Tokyo Shinjuku Japanese Language Institute (SNG)',
    location: 'Shinjuku, Tokyo 🇯🇵',
    duration: '1 to 2 Years Intensive',
    intakes: 'April, July, October, January',
    tuition: '¥780,000 / Year (~₹4.4 Lakhs)',
    livingCost: '¥90,000 - ¥120,000 / Month',
    highlight: 'Direct IT Job Hunting & Rirekisho Preparation Support',
    description: 'Uses the visual Ezoe teaching method. Extensive career support for engineering graduates aiming for Tokyo tech companies.'
  },
  {
    name: 'Kyoto International Academy of Japanese',
    location: 'Kyoto Cultural District 🇯🇵',
    duration: '6 Months to 2 Years',
    intakes: 'April & October',
    tuition: '¥720,000 / Year (~₹4.0 Lakhs)',
    livingCost: '¥75,000 - ¥95,000 / Month',
    highlight: 'Traditional cultural immersion and university entrance track',
    description: 'Focused on academic advancement to national universities (Kyodai, Osaka) and cultural immersion in historical Kyoto.'
  },
  {
    name: 'Osaka YMCA Japanese Language College',
    location: 'Osaka Downtown (Tennoji) 🇯🇵',
    duration: '1 to 1.5 Years',
    intakes: 'April & October',
    tuition: '¥750,000 / Year (~₹4.2 Lakhs)',
    livingCost: '¥80,000 - ¥100,000 / Month',
    highlight: 'High part-time job placement rate and business Japanese courses',
    description: 'Renowned for practical conversational drills, business communication, and dedicated student counseling.'
  }
];

// Official Japanese Learning Resources
export const officialLanguageResources = [
  {
    title: 'Marugoto: Japanese Language and Culture',
    url: 'https://marugoto.jpf.go.jp/en/',
    source: 'The Japan Foundation',
    badge: 'Official / Free',
    description: 'Coursebook and interactive online learning portal based on the JF Standard for Japanese-Language Education. Focuses on practical communicative activities.'
  },
  {
    title: 'IRODORI: Japanese for Life in Japan',
    url: 'https://www.irodori-online.jpf.go.jp/',
    source: 'The Japan Foundation',
    badge: 'Official / Free',
    description: 'Complete course designed to acquire basic Japanese communication skills needed for living and working in Japan, with downloadable audio and text materials.'
  },
  {
    title: 'Japan Foundation Learning Resources Portal',
    url: 'https://www.jpf.go.jp/e/project/japanese/education/resource/',
    source: 'The Japan Foundation',
    badge: 'Official Resource Center',
    description: 'Comprehensive directory of online teaching aids, e-learning apps (Minato), and JLPT test preparation frameworks published by Japan’s cultural agency.'
  }
];

// ==========================================
// 3. EMPLOYMENT IN JAPAN DATA
// ==========================================

export const employmentSectors = [
  {
    id: 'software-it',
    title: 'Software Development & Cloud IT',
    iconName: 'Code2',
    description: 'High demand for full-stack developers, mobile engineers, and DevOps architects to modernize Japanese enterprise digital infrastructure.',
    sampleRoles: ['Full-Stack Web Engineer (React / Go / Node)', 'Cloud Infrastructure & DevOps Engineer (AWS/GCP)', 'Mobile Application Developer (iOS/Android/Flutter)', 'Backend Microservices Developer'],
    relevantSkills: ['TypeScript', 'React / Next.js', 'Go / Java / Python', 'Docker & Kubernetes', 'AWS / Azure', 'REST & gRPC'],
    typicalQualifications: 'Bachelor’s degree in CSE, IT, ECE, or related engineering discipline with demonstrable project portfolio or Git repositories.',
    japaneseExpectation: 'JLPT N4 - N3 for bilingual tech teams; some multinational startups accept fluent English with willingness to learn Japanese.',
    hiringDemand: 'Extremely High'
  },
  {
    id: 'ai-datascience',
    title: 'Artificial Intelligence & Data Science',
    iconName: 'Cpu',
    description: 'Japanese research institutes and tech innovators are actively recruiting AI researchers and ML engineers to address labor shortages and automate services.',
    sampleRoles: ['Machine Learning Engineer', 'Computer Vision & Robotics AI Specialist', 'NLP & LLM Research Engineer', 'Big Data & Analytics Specialist'],
    relevantSkills: ['PyTorch / TensorFlow', 'Python', 'OpenCV / CUDA', 'SQL & Spark', 'Time-Series Modeling', 'MLOps (MLflow, Kubeflow)'],
    typicalQualifications: 'Bachelor’s or Master’s in Computer Science, AI, Data Science, Mathematics, or Electronics with research publications or Kaggle track record.',
    japaneseExpectation: 'JLPT N4 - N3 (Research teams often conduct day-to-day code reviews in English with Japanese documentation).',
    hiringDemand: 'High'
  },
  {
    id: 'engineering-mfg',
    title: 'Engineering & Advanced Manufacturing',
    iconName: 'Wrench',
    description: 'Japan’s world-leading automotive, robotics, and precision electronics industry seeks talent for Electric Vehicles (EV), battery tech, and factory automation.',
    sampleRoles: ['Embedded Systems & Firmware Engineer', 'Automotive Software Engineer (AUTOSAR)', 'Robotics & Control Systems Engineer', 'Mechanical Design & CAD Specialist'],
    relevantSkills: ['Embedded C / C++', 'RTOS / FreeRTOS', 'MATLAB & Simulink', 'ROS2', 'SolidWorks / CATIA', 'Microcontroller Debugging'],
    typicalQualifications: 'Degree in Mechatronics, Mechanical, Electrical, Electronics, or Instrumentation Engineering.',
    japaneseExpectation: 'JLPT N3 - N2 (Required for collaborating on Japanese factory floor blueprints and technical specs).',
    hiringDemand: 'Very High'
  },
  {
    id: 'research-tech',
    title: 'Research & Deep Technology',
    iconName: 'FlaskConical',
    description: 'Corporate R&D centers (NTT, Sony, Hitachi, Panasonic, Fujitsu) hiring for next-generation telecommunications, quantum computing, and materials science.',
    sampleRoles: ['R&D Research Scientist', 'Quantum Information Specialist', 'Semiconductor Process Engineer', 'Telecommunications (6G / OpenRAN) Engineer'],
    relevantSkills: ['C++ / Python', 'Physical Simulation', 'RF Engineering', 'Quantum Algorithms', 'Algorithm Optimization'],
    typicalQualifications: 'Master’s or Ph.D. in Physics, Electronics, Materials, or Computer Science with peer-reviewed IEEE/ACM publications.',
    japaneseExpectation: 'JLPT N4 - N3 (Global R&D labs operate in English; conversational Japanese helps integration).',
    hiringDemand: 'Steady & High Value'
  },
  {
    id: 'business-intl',
    title: 'Business & International Tech Services',
    iconName: 'Briefcase',
    description: 'Bridging Indian software vendors with Japanese enterprise clients through bilingual project management and technical sales support.',
    sampleRoles: ['Bilingual Bridge Software Engineer (BrSE)', 'Technical Project Coordinator', 'Global IT Sales Specialist', 'Customer Success Engineer'],
    relevantSkills: ['Project Management (Agile/Scrum)', 'Systems Architecture', 'Bilingual Documentation', 'Client Relations', 'Jira / Confluence'],
    typicalQualifications: 'Engineering or Business degree with strong cross-cultural communication aptitude.',
    japaneseExpectation: 'JLPT N2 - N1 (Fluency in business Japanese and Keigo is essential).',
    hiringDemand: 'High Demand'
  }
];

// Verified Job Search Portals for Employment in Japan
export const verifiedJobPortals = [
  {
    id: 'fast-offer',
    name: 'FAST OFFER International',
    url: 'https://fastoffer.co.jp/intl/',
    officialDomain: 'fastoffer.co.jp',
    category: 'International Student Placement',
    badge: 'Direct Student Hiring & Sponsoring',
    description: 'Renowned recruitment program that connects Indian and international university engineering graduates directly to Japanese enterprises. Offers Japanese mock interview coaching, visa support, and sponsored flight tickets for final interviews in Tokyo.'
  },
  {
    id: 'linkedin-japan',
    name: 'LinkedIn Jobs — Japan',
    url: 'https://www.linkedin.com/jobs/jobs-in-japan/',
    officialDomain: 'linkedin.com',
    category: 'Global Tech & Enterprise',
    badge: 'Verified Global Portal',
    description: 'Extensive listing of tech, data science, and consulting positions across Tokyo, Osaka, and Yokohama with filters for English-speaking, hybrid, and bilingual roles.'
  },
  {
    id: 'daijob',
    name: 'Daijob.com',
    url: 'https://www.daijob.com/en/',
    officialDomain: 'daijob.com',
    category: 'Bilingual Job Board',
    badge: 'Japan’s Pioneer Bilingual Board',
    description: 'Japan’s leading job search engine for bilingual professionals with over 10,000 active postings across IT, engineering, finance, and global business consulting.'
  },
  {
    id: 'careercross',
    name: 'CareerCross',
    url: 'https://www.careercross.com/en/',
    officialDomain: 'careercross.com',
    category: 'Mid & Graduate Hiring',
    badge: 'Tokyo Tech & Enterprise',
    description: 'Specialized recruitment portal for mid-career and entry-level professionals seeking positions at multinational corporations and Japanese joint ventures in Japan.'
  },
  {
    id: 'tokyodev',
    name: 'TokyoDev',
    url: 'https://www.tokyodev.com/',
    officialDomain: 'tokyodev.com',
    category: 'Software Engineering',
    badge: 'English-Friendly Developer Jobs',
    description: 'Curated developer job board specifically for software engineers from abroad looking to work in Tokyo, featuring transparent salary bands and visa sponsorship flags.'
  },
  {
    id: 'japan-dev',
    name: 'Japan Dev',
    url: 'https://japan-dev.com/',
    officialDomain: 'japan-dev.com',
    category: 'Tech & Startup Ecosystem',
    badge: 'Vetted Modern Tech Jobs',
    description: 'Hand-vetted tech job openings at top international companies, modern Japanese startups, and tech unicorns in Japan with good work-life balance.'
  }
];

// ==========================================
// 4. STUDENT VOICE TESTIMONIALS BY PAGE
// ==========================================

export const higherStudiesTestimonials: Testimonial[] = [
  {
    id: 'hs-1',
    name: 'Ananya Raghavan',
    role: 'Master of Science in Information Science',
    currentOrganization: 'The University of Tokyo (Todai)',
    destination: 'Tokyo, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    quote: 'The SOP review and professor-matching guidance helped me contact my prospective laboratory sensei at Todai. Securing the MEXT Embassy Recommendation with full tuition waiver and monthly stipend transformed my academic career.',
    service: 'Higher Studies in Japan',
    year: 'Batch of 2024',
    isVerified: true,
    tag: 'MEXT Scholarship',
    badgeText: 'Verified Student Voice',
    programOrLevel: 'Master’s Degree (English Track)'
  },
  {
    id: 'hs-2',
    name: 'Rohan Deshmukh',
    role: 'Graduate Research Student (Robotics)',
    currentOrganization: 'Tokyo Institute of Technology (Tokyo Tech)',
    destination: 'Tokyo, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
    quote: 'Navigating COE visa processing, laboratory entrance exams, and JASSO scholarship paperwork was daunting, but structured milestone tracking made the entire admission timeline smooth and predictable.',
    service: 'Higher Studies in Japan',
    year: 'Batch of 2023',
    isVerified: true,
    tag: 'JASSO Grantee',
    badgeText: 'Verified Student Voice',
    programOrLevel: 'M.Eng Mechanical & Robotics'
  },
  {
    id: 'hs-3',
    name: 'Priyanka Sen',
    role: 'Ph.D. Candidate in Biotechnology',
    currentOrganization: 'Kyoto University (Kyodai)',
    destination: 'Kyoto, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    quote: 'Adapting to Kyoto’s academic research culture and finding affordable international student housing was supported step-by-step. The university tuition reduction system made studying abroad completely feasible.',
    service: 'Higher Studies in Japan',
    year: 'Batch of 2025',
    isVerified: false,
    tag: 'Tuition Waiver Track',
    badgeText: 'Illustrative Student Profile',
    programOrLevel: 'Doctoral Research Fellow'
  }
];

export const japaneseLanguageTestimonials: Testimonial[] = [
  {
    id: 'jl-1',
    name: 'Karthik Subramanian',
    role: 'Cleared JLPT N3 in 10 Months',
    currentOrganization: 'B.Tech Final Year (Anna University)',
    destination: 'Chennai, India 🇮🇳',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    quote: 'Starting from zero Hiragana, the structured Kanji mnemonics and weekly 1-on-1 speaking sessions with a native Japanese teacher gave me the confidence to pass JLPT N3 on my first attempt.',
    service: 'Japanese Language',
    year: 'Batch of 2024',
    isVerified: true,
    tag: 'JLPT N3 Certified',
    badgeText: 'Verified Student Voice',
    programOrLevel: 'India Online & Hybrid'
  },
  {
    id: 'jl-2',
    name: 'Meera Nambiar',
    role: 'Language School Immersion Student',
    currentOrganization: 'Shinjuku Japanese Language Institute',
    destination: 'Tokyo, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    quote: 'The monthly cultural guest lectures while studying in India prepared me for the real Tokyo lifestyle. Transitioning to a Tokyo language school for my N2 preparation felt natural and exciting.',
    service: 'Japanese Language',
    year: 'Batch of 2024',
    isVerified: true,
    tag: 'Tokyo Immersion',
    badgeText: 'Verified Student Voice',
    programOrLevel: '1-Year Japan Intensive'
  },
  {
    id: 'jl-3',
    name: 'Aditya Varma',
    role: 'JLPT N4 Aspirant & Developer',
    currentOrganization: 'Computer Science Undergraduate',
    destination: 'Bengaluru, India 🇮🇳',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    quote: 'The conversational roleplays covering technical interviews and workplace Keigo made grammar rules stick much better than rote textbook memorization alone.',
    service: 'Japanese Language',
    year: 'Batch of 2025',
    isVerified: false,
    tag: 'Conversational Fluency',
    badgeText: 'Illustrative Student Profile',
    programOrLevel: 'Beginner to Intermediate N4'
  }
];

export const employmentTestimonials: Testimonial[] = [
  {
    id: 'emp-1',
    name: 'Harish Sundaram',
    role: 'Cloud Solutions Engineer',
    currentOrganization: 'NTT Data Global Solutions',
    destination: 'Tokyo, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    quote: 'Drafting my Japanese Rirekisho and practicing 3 rounds of technical and cultural mock interviews was the differentiator. I secured my software engineering offer with a Tokyo tech enterprise before graduation!',
    service: 'Employment in Japan',
    year: 'Batch of 2024',
    isVerified: true,
    tag: 'Bilingual Tech Offer',
    badgeText: 'Verified Student Voice',
    programOrLevel: 'Engineer Visa Holder'
  },
  {
    id: 'emp-2',
    name: 'Divya Krishnan',
    role: 'Full Stack Software Developer',
    currentOrganization: 'Rakuten Symphony Headquarters',
    destination: 'Setagaya, Tokyo 🇯🇵',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80',
    quote: 'Even though my role is predominantly English-technical, learning conversational Japanese (JLPT N3) helped me bond with senior engineering leads and understand Japanese workplace communication (Horenso).',
    service: 'Employment in Japan',
    year: 'Batch of 2023',
    isVerified: true,
    tag: 'Tokyo Tech Corp',
    badgeText: 'Verified Student Voice',
    programOrLevel: 'Full Stack & DevOps'
  },
  {
    id: 'emp-3',
    name: 'Sanjay Nair',
    role: 'Embedded Systems & AI Engineer',
    currentOrganization: 'Automotive Tech Lab (Aichi Region)',
    destination: 'Nagoya, Japan 🇯🇵',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    quote: 'The guidance on matching mechanical and electronics coursework with Japanese EV manufacturing demands gave me clear direction for my portfolio projects and campus recruitment drives.',
    service: 'Employment in Japan',
    year: 'Batch of 2025',
    isVerified: false,
    tag: 'Automotive & Embedded',
    badgeText: 'Illustrative Student Profile',
    programOrLevel: 'R&D Mobility Track'
  }
];

export const mockTestimonials: Testimonial[] = [
  ...higherStudiesTestimonials,
  ...japaneseLanguageTestimonials,
  ...employmentTestimonials
];

// ==========================================
// 5. RESEARCH PROJECTS & MOCK JOBS
// ==========================================

export const mockProjects: ResearchProject[] = [
  {
    id: 'proj-1',
    title: 'AI-Powered Early Disaster Warning System',
    domain: 'AI / Machine Learning',
    shortDescription: 'Deep learning multimodal sensor network predicting flood and landslide risks using satellite and IoT telemetry in real-time.',
    fullDescription: 'This research project combines satellite synthetic aperture radar (SAR) data with terrestrial IoT flood gauges. Using recurrent neural networks and spatial graph convolutional networks, it provides a 6-hour advance warning window for urban and river basin flash floods.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'IoT Sensors', 'FastAPI', 'Mapbox GL'],
    status: 'Recruiting',
    teamSize: 4,
    openPositions: 2,
    mentor: 'Dr. K. Ramanathan (NexArc Senior Advisor)',
    leadStudent: 'Aditya S. (Final Year CSE)',
    requirements: ['PyTorch or TensorFlow basics', 'Time-series data handling', 'Git workflow'],
    duration: '6 Months'
  },
  {
    id: 'proj-2',
    title: 'Autonomous Vision-Guided Agricultural Drone',
    domain: 'Computer Vision & Robotics',
    shortDescription: 'Edge-computing computer vision on lightweight drones for crop disease detection and precision pesticide micro-spraying.',
    fullDescription: 'Developing an edge-deployable YOLOv9 model optimized via TensorRT on NVIDIA Jetson Orin Nano. The system detects fungal crop lesions in paddy and tea plantations with 94.8% mAP in varied sunlight conditions.',
    technologies: ['YOLOv9', 'OpenCV', 'NVIDIA Jetson', 'ROS2', 'Embedded C++'],
    status: 'In Progress',
    teamSize: 5,
    openPositions: 1,
    mentor: 'Prof. A. Sridhar',
    leadStudent: 'Pooja V. (3rd Year ECE)',
    requirements: ['Computer Vision (OpenCV)', 'Python/C++', 'ROS basics (optional)'],
    duration: '8 Months'
  },
  {
    id: 'proj-3',
    title: 'Predictive Industrial Motor Fault Diagnosis with TinyML',
    domain: 'Predictive Maintenance',
    shortDescription: 'Ultra-low-power microcontrollers running vibration anomaly detection models to prevent catastrophic CNC machine failures.',
    fullDescription: 'Deploying quantized autoencoders on ARM Cortex-M4 microcontrollers. The model continuously analyzes tri-axial MEMS accelerometer data to detect bearing race deterioration and rotor unbalance 3 weeks before breakdown.',
    technologies: ['TinyML', 'Edge Impulse', 'STM32', 'FreeRTOS', 'Signal Processing'],
    status: 'Under Review',
    teamSize: 3,
    openPositions: 0,
    mentor: 'Dr. M. Narayanan',
    leadStudent: 'Karthik R. (Final Year Mech/Mechatronics)',
    requirements: ['Vibration analysis basics', 'Embedded C', 'Microcontroller debugging'],
    duration: '5 Months'
  },
  {
    id: 'proj-4',
    title: 'Zero-Trust Secure Healthcare IoT Gateway',
    domain: 'Cyber Security & IoT',
    shortDescription: 'Post-quantum cryptographic key exchange protocol and anomaly detection for hospital telemetry devices.',
    fullDescription: 'Designing a lightweight hardware security module (HSM) middleware that ensures HIPAA-compliant end-to-end encryption between bedside vital monitors and cloud EHR systems using Kyber lattice-based encryption.',
    technologies: ['Rust', 'Post-Quantum Crypto', 'ESP32-S3', 'MQTT-TLS', 'Wireshark'],
    status: 'Recruiting',
    teamSize: 3,
    openPositions: 2,
    mentor: 'Dr. Shinya Takahashi (Visiting Academic)',
    leadStudent: 'Rohit K. (3rd Year IT)',
    requirements: ['Network protocol fundamentals', 'Rust or C basics', 'Cryptography interest'],
    duration: '6 Months'
  },
  {
    id: 'proj-5',
    title: 'Multilingual Voice Assistant for Japanese Elderly Care',
    domain: 'AI / Natural Language Processing',
    shortDescription: 'Low-latency conversational agent with dialect adaptation for elderly assistance and medication monitoring in Tokyo care homes.',
    fullDescription: 'Fine-tuning compact Whisper and LLaMA models for Kansai and Kanto conversational nuances. Integrates emotion detection to alert nursing staff of cognitive distress or physical discomfort.',
    technologies: ['Whisper AI', 'Transformers', 'Next.js', 'WebRTC', 'FastAPI'],
    status: 'In Progress',
    teamSize: 4,
    openPositions: 1,
    mentor: 'Kenji Sato (Industry Mentor, Tokyo)',
    leadStudent: 'Sneha M. (Master’s AI & JLPT N2)',
    requirements: ['Python NLP', 'Basic Japanese familiarity is a plus', 'Audio processing'],
    duration: '9 Months'
  },
  {
    id: 'proj-6',
    title: 'Energy-Harvesting Smart Traffic Density Optimizer',
    domain: 'IoT & Smart Cities',
    shortDescription: 'Solar and piezoelectric-powered roadside mesh sensors dynamically adjusting green-signal timings using Reinforcement Learning.',
    fullDescription: 'A multi-agent reinforcement learning (MARL) framework running across interconnected intersections to minimize commute idle times and carbon emissions during peak traffic hours in Chennai metro zones.',
    technologies: ['Reinforcement Learning', 'SUMO Simulator', 'ESP-NOW Mesh', 'Python'],
    status: 'Recruiting',
    teamSize: 3,
    openPositions: 2,
    mentor: 'Dr. V. Chandran',
    leadStudent: 'Ganesh P. (3rd Year Civil/CSE)',
    requirements: ['RL algorithms (Q-learning, PPO)', 'Simulation tools', 'C++ or Python'],
    duration: '6 Months'
  }
];

export const mockJobs: JobListing[] = [
  {
    id: 'job-1',
    title: 'Full Stack Engineer (Next.js & Go)',
    company: 'Rakuten Symphony / Tech Demo Labs',
    location: 'Tokyo, Japan (Hybrid)',
    salary: '¥5,500,000 - ¥7,500,000 / Year',
    category: 'Software Development',
    skills: ['Next.js', 'TypeScript', 'Go', 'Docker', 'AWS'],
    japaneseLevel: 'JLPT N3 or Business English + Willingness to learn',
    experience: 'Fresh Graduates to 2 Years',
    type: 'Full-time',
    description: 'Work with multinational engineers in Shinagawa, Tokyo building next-generation cloud telecom SaaS platforms.',
    responsibilities: [
      'Build responsive frontend components in React / Next.js',
      'Design RESTful and gRPC microservices in Golang',
      'Participate in sprint planning and Japanese-English team syncs',
      'Optimize database queries and cloud container deployments'
    ],
    qualifications: [
      'B.Tech / B.E in CSE, IT, ECE or related field',
      'Strong grasp of JavaScript / TypeScript and Backend APIs',
      'Basic conversational Japanese (N4/N3 preferred; visa sponsored)'
    ],
    isDemo: true
  },
  {
    id: 'job-2',
    title: 'Computer Vision & AI Research Engineer',
    company: 'Kyoto Robotics Dynamics (Demo)',
    location: 'Kyoto / Osaka, Japan',
    salary: '¥6,000,000 - ¥8,200,000 / Year',
    category: 'AI / Machine Learning',
    skills: ['PyTorch', 'C++', 'OpenCV', 'CUDA', 'Point Cloud'],
    japaneseLevel: 'JLPT N3 Preferred (English environment available)',
    experience: '0 - 3 Years (Masters / High-performing Bachelors)',
    type: 'Full-time',
    description: 'Join an innovative robotics R&D facility developing 3D vision guidance systems for automated warehouse robots.',
    responsibilities: [
      'Develop real-time object detection and 6D pose estimation models',
      'Optimize algorithms for industrial edge GPUs and embedded devices',
      'Collaborate with mechanical and firmware engineering teams',
      'Draft technical whitepapers and patent applications'
    ],
    qualifications: [
      'Degree in Computer Science, Data Science, Robotics or AI',
      'Demonstrated portfolio or research publications in CV/ML',
      'Proficiency in C++ and Python'
    ],
    isDemo: true
  },
  {
    id: 'job-3',
    title: 'Cloud DevOps & Infrastructure Engineer',
    company: 'Line Yahoo Tech Japan (Demo Listing)',
    location: 'Tokyo, Japan',
    salary: '¥5,800,000 - ¥7,800,000 / Year',
    category: 'Cloud & DevOps',
    skills: ['Kubernetes', 'Terraform', 'AWS/GCP', 'Linux', 'Python'],
    japaneseLevel: 'JLPT N4 / Basic Conversational',
    experience: '1 - 3 Years',
    type: 'Full-time',
    description: 'Maintain and scale high-concurrency microservices clusters supporting over 90 million monthly active users in Japan.',
    responsibilities: [
      'Automate CI/CD pipelines with GitHub Actions and ArgoCD',
      'Manage multi-region Kubernetes clusters on AWS/GCP',
      'Implement Prometheus & Grafana telemetry monitors',
      'Ensure zero-downtime infrastructure provisioning'
    ],
    qualifications: [
      'Degree in Computer Science, Information Technology, or relevant background',
      'Hands-on experience with containerization and cloud orchestration',
      'Eagerness to work in a multicultural engineering environment'
    ],
    isDemo: true
  },
  {
    id: 'job-4',
    title: 'Embedded AUTOSAR Software Engineer',
    company: 'Denso Mobility Innovation (Demo)',
    location: 'Nagoya / Aichi, Japan',
    salary: '¥5,200,000 - ¥7,000,000 / Year',
    category: 'Embedded Systems',
    skills: ['Embedded C', 'AUTOSAR', 'CAN/LIN', 'Simulink', 'Microcontrollers'],
    japaneseLevel: 'JLPT N3 - N2 Required for technical specifications',
    experience: 'Fresh Graduates to 3 Years',
    type: 'Full-time',
    description: 'Develop electronic control unit (ECU) firmware for next-generation electric and autonomous vehicles in Japan’s automotive heartland.',
    responsibilities: [
      'Write MISRA-C compliant firmware modules for powertrain ECUs',
      'Perform hardware-in-the-loop (HIL) testing and CAN bus validation',
      'Participate in safety compliance reviews (ISO 26262)',
      'Collaborate with Japanese tier-1 automotive suppliers'
    ],
    qualifications: [
      'B.E / B.Tech in Electronics (ECE), Electrical (EEE), or Mechatronics',
      'Proficiency in C/C++ and microcontroller debugging',
      'Solid commitment to mastering Japanese language (N3+)'
    ],
    isDemo: true
  },
  {
    id: 'job-5',
    title: 'Data Scientist & Predictive Analytics Lead',
    company: 'Mercari Japan (Demo Listing)',
    location: 'Roppongi, Tokyo 🇯🇵',
    salary: '¥6,500,000 - ¥9,000,000 / Year',
    category: 'Data Science',
    skills: ['Python', 'SQL', 'BigQuery', 'Scikit-Learn', 'A/B Testing'],
    japaneseLevel: 'English-Friendly (Japanese N4 is a plus)',
    experience: '1 - 4 Years',
    type: 'Full-time',
    description: 'Build predictive buyer/seller recommendation algorithms and dynamic pricing models for Japan’s largest C2C marketplace app.',
    responsibilities: [
      'Design and deploy production recommendation engines',
      'Conduct statistical A/B testing and cohort retention analysis',
      'Collaborate with multinational product managers in Roppongi Hills',
      'Present analytical insights to leadership teams'
    ],
    qualifications: [
      'Bachelor’s/Master’s in Data Science, Statistics, CSE, or Economics',
      'Strong proficiency in Python, SQL, and causal inference',
      'Excellent analytical communication skills in English'
    ],
    isDemo: true
  },
  {
    id: 'job-6',
    title: 'Frontend React / UI/UX Engineer',
    company: 'SmartNews Tokyo (Demo Listing)',
    location: 'Shibuya, Tokyo (Hybrid)',
    salary: '¥5,400,000 - ¥7,200,000 / Year',
    category: 'Software Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Jest'],
    japaneseLevel: 'JLPT N3 Conversational Preferred',
    experience: '0 - 2 Years',
    type: 'Full-time',
    description: 'Craft responsive, high-performance news reading interfaces and web applications enjoyed by millions daily in Japan and the US.',
    responsibilities: [
      'Develop pixel-perfect web interfaces in React and TypeScript',
      'Optimize Web Vitals metrics and mobile performance',
      'Collaborate with UI designers in Tokyo and Silicon Valley',
      'Write end-to-end component tests in Jest / Playwright'
    ],
    qualifications: [
      'Degree in Computer Science or demonstrable frontend portfolio',
      'Strong knowledge of modern JavaScript/TypeScript and CSS systems',
      'Passionate about international product design'
    ],
    isDemo: true
  }
];

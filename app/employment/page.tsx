'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StudentVoiceSection from '@/components/cards/StudentVoiceSection';
import {
  employmentSectors,
  employmentTestimonials
} from '@/lib/mock-data';
import {
  Briefcase,
  Building2,
  MapPin,
  FileText,
  Languages,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Search,
  Users2,
  Award,
  Sparkles,
  Code2,
  Cpu,
  Wrench,
  FlaskConical,
  Globe2,
  Info,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function EmploymentPage() {
  const [selectedSector, setSelectedSector] = useState<string>(employmentSectors[0].id);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const currentSector = employmentSectors.find(s => s.id === selectedSector) || employmentSectors[0];

  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  const faqs = [
    {
      q: 'Can Indian fresh graduates get hired directly in Japan?',
      a: 'Yes. Major Japanese tech enterprises, automotive manufacturers, and IT consulting companies recruit directly from Indian engineering colleges through direct campus recruitment drives, bilingual hiring events, and online employer applications. Employers sponsor the "Engineer / Specialist in Humanities / International Services" work visa.'
    },
    {
      q: 'What is the standard work visa for engineering graduates in Japan?',
      a: 'The standard visa is the "Engineer / Specialist in Humanities / International Services" (技術・人文知識・国際業務) visa. Requirements include an employment contract with a Japan-registered company and a relevant university degree (Bachelor’s in Engineering, Science, or related field) or equivalent verifiable experience.'
    },
    {
      q: 'Do all tech jobs in Japan require Japanese fluency?',
      a: 'No, but learning Japanese significantly expands your opportunities. Multinational tech firms (such as Rakuten, Mercari, Line Yahoo, and fast-growing AI startups) often operate in English and hire talented developers based on their technical portfolio, with Japanese N4/N3 as a welcome plus. Traditional automotive, manufacturing, and client-facing IT firms generally require JLPT N3 to N2.'
    },
    {
      q: 'What are Rirekisho (履歴書) and Shokumu Keirekisho (職務経歴書)?',
      a: 'In Japan, job applications typically require two documents: 1) 履歴書 (Rirekisho) – a standardized biographical profile detailing chronological education, certifications (JLPT/TOEIC), and personal motivation (Jikopr); and 2) 職務経歴書 (Shokumu Keirekisho) – a detailed technical project breakdown explaining your software architectures, algorithms used, and specific contributions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================================================= */}
      {/* 4.A HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0B132B] via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-amber-300" />
                <span>JAPAN CAREER & PLACEMENT TRACK</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Explore Career Opportunities <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  In Tokyo & Across Japan
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with Japanese technology enterprises, AI research hubs, and precision engineering innovators. Build your technical career in Tokyo, Yokohama, Nagoya, and Osaka with structured Japanese resume guidance and visa readiness.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#employment-sectors"
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <span>Explore Career Tracks</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <Link
                  href="/contact?type=employment&subject=Employment+in+Japan"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition flex items-center gap-2"
                >
                  <span>Contact Career Advisory Desk</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* Trust Features */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Engineer Visa Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Rirekisho Drafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mock Technical Drills</span>
                </div>
              </div>
            </div>

            {/* Right Card / Workplace Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/80 shadow-2xl p-2 group">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80"
                    alt="Tokyo Modern Corporate Office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-[10px] font-extrabold rounded-md uppercase tracking-wider">
                      Tokyo & Osaka Tech Hubs
                    </span>
                    <h3 className="text-base font-bold mt-1.5">
                      High Demand for Software, AI & Embedded Talent
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Competitive salaries, full health coverage, and global engineering teams.
                    </p>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-amber-400 text-sm">¥5M - ¥9M</span>
                    <span className="text-[10px] text-slate-400">Average Tech Bands</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-blue-400 text-sm">Full Time</span>
                    <span className="text-[10px] text-slate-400">Engineer Visa</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-emerald-400 text-sm">Bilingual</span>
                    <span className="text-[10px] text-slate-400">English + N3/N2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.B POTENTIAL EMPLOYMENT SECTORS IN JAPAN */}
      {/* ========================================================================= */}
      <section id="employment-sectors" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              INDUSTRY DOMAINS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Key Employment Sectors in Japan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore potential career tracks across Japan’s leading technology sectors, along with typical role expectations, technical skills, and language requirements.
            </p>
          </div>

          {/* Sector Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {employmentSectors.map(sec => (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition border flex items-center gap-2 ${
                  selectedSector === sec.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                }`}
              >
                {getSectorIcon(sec.iconName)}
                <span>{sec.title.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Sector Deep-Dive Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
              <div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 font-bold text-xs rounded-full border border-amber-200">
                  Sector Overview
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {currentSector.title}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Hiring Demand</span>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {currentSector.hiringDemand}
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {currentSector.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Sample Roles */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
                  Representative Job Roles
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentSector.sampleRoles.map((role, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Language */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                    Relevant Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSector.relevantSkills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-white text-slate-700 border border-slate-200 text-[11px] font-medium rounded-lg"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Japanese Proficiency Expectation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentSector.japaneseExpectation}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-blue-900">
              <strong>Typical Academic Qualification:</strong> {currentSector.typicalQualifications}
            </div>
          </div>

          {/* Sector Disclaimer Notice */}
          <div className="max-w-4xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Important Disclaimer:</strong> The sector profiles and roles above are provided for educational guidance and career planning. Specific job vacancies, hiring criteria, language expectations, and salary bands depend on each individual employer and market conditions. Possessing a qualification does not guarantee employment.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.C JAPANESE LANGUAGE REQUIREMENTS & WORKPLACE CULTURE */}
      {/* ========================================================================= */}
      <section id="language-requirements" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
              COMMUNICATION & WORKPLACE CULTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Japanese Language Requirements & Workplace Dynamics
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Understand how language proficiency intersects with technical capability, interview etiquette, and day-to-day collaboration in Japanese enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {/* N3 Role Relevance */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-base mb-4">
                  N3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  JLPT N3 — Conversational / Tech Entry
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Understanding daily conversations, tech task tickets, and team standup summaries.
                </p>

                <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs space-y-1 text-slate-700 mb-4">
                  <div>• Software & Cloud developers in bilingual tech teams</div>
                  <div>• AI / Machine Learning research engineers</div>
                  <div>• Startups with English-first engineering hubs</div>
                </div>
              </div>

              <p className="text-[11px] text-blue-700 font-medium">
                ✨ Widely accepted when accompanied by strong coding skills and portfolio.
              </p>
            </div>

            {/* N2 Role Relevance */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-base mb-4">
                  N2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  JLPT N2 — Business Working Level
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Comfortably participating in technical sprint planning, client specifications, and cross-functional syncs.
                </p>

                <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs space-y-1 text-slate-700 mb-4">
                  <div>• Automotive & Embedded firmware engineers</div>
                  <div>• Manufacturing & robotics systems specialists</div>
                  <div>• Traditional Japanese corporate enterprises</div>
                </div>
              </div>

              <p className="text-[11px] text-amber-800 font-medium">
                🎯 The gold standard for unrestricted career mobility across all Japanese sectors.
              </p>
            </div>

            {/* N1 Role Relevance */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-base mb-4">
                  N1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  JLPT N1 — Advanced / Leadership
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  High-level executive negotiations, bilingual project bridge engineering (BrSE), and enterprise consulting.
                </p>

                <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs space-y-1 text-slate-700 mb-4">
                  <div>• Bilingual IT Project Managers (BrSE)</div>
                  <div>• Global sales and enterprise solutions architect</div>
                  <div>• Senior technical leadership & client consulting</div>
                </div>
              </div>

              <p className="text-[11px] text-emerald-800 font-medium">
                🏆 Qualifies for maximum points under Japan’s Highly Skilled Professional (HSP) Visa.
              </p>
            </div>
          </div>

          {/* Workplace Culture & Horenso Guide */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800">
            <div className="max-w-3xl mb-8">
              <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold rounded-full uppercase tracking-wider">
                CULTURAL READINESS
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-2">
                Essential Japanese Workplace Etiquette & "Hō-Ren-Sō"
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Technical competency gets you the interview; demonstrating communication harmony (Wa) and collaborative predictability gets you the job offer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                <strong className="text-amber-300 text-sm block mb-1">報 — Hōkoku (Report)</strong>
                <p className="text-blue-100 leading-relaxed">
                  Proactively report project progress, milestones, and completed sprint tasks to your team lead before being asked.
                </p>
              </div>

              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                <strong className="text-amber-300 text-sm block mb-1">連 — Renraku (Communicate)</strong>
                <p className="text-blue-100 leading-relaxed">
                  Maintain continuous factual updates with colleagues regarding schedule shifts, dependencies, or blockers.
                </p>
              </div>

              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                <strong className="text-amber-300 text-sm block mb-1">相 — Sōdan (Consult)</strong>
                <p className="text-blue-100 leading-relaxed">
                  Consult seniors early when facing architectural dilemmas or unexpected bugs rather than guessing in isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.D EMPLOYMENT PREPARATION ROADMAP (8-Step Plan) */}
      {/* ========================================================================= */}
      <section id="roadmap" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              CAREER PREPARATION ROADMAP
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              8 Steps to Securing Employment in Japan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              A structured step-by-step pathway from college skill development to landing your Tokyo engineering offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Identify Target Job Roles',
                desc: 'Assess your engineering strengths (Full-Stack, AI, Embedded, Cloud) and shortlist target industries in Tokyo or Osaka.'
              },
              {
                step: '02',
                title: 'Develop Technical Portfolio',
                desc: 'Build deployed web apps, embedded hardware prototypes, or machine learning repos on GitHub with clear documentation.'
              },
              {
                step: '03',
                title: 'Improve Japanese Communication',
                desc: 'Progress from JLPT N5 toward N3/N2. Practice technical self-introductions (Jikoshoukai) and engineering terminology.'
              },
              {
                step: '04',
                title: 'Draft Japanese Rirekisho',
                desc: 'Prepare standard Japanese-style 履歴書 (Rirekisho) and 職務経歴書 (Shokumu Keirekisho) highlighting academic milestones and projects.'
              },
              {
                step: '05',
                title: 'Practise Technical & HR Interviews',
                desc: 'Engage in mock interview simulations covering coding assessments, behavioral etiquette, and motivation for working in Japan.'
              },
              {
                step: '06',
                title: 'Apply to Japanese Enterprises',
                desc: 'Participate in campus placement drives, submit bilingual Rirekisho portfolios, and interview directly with Japanese tech companies.'
              },
              {
                step: '07',
                title: 'Complete Employer Selection',
                desc: 'Participate in company presentation sessions, technical coding rounds, and final executive interviews (Naitei offer stage).'
              },
              {
                step: '08',
                title: 'Work Visa & Relocation',
                desc: 'Obtain Certificate of Eligibility (COE) sponsored by employer, stamp Engineer Visa, and complete pre-relocation orientation.'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-4">
                    {st.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.F STUDENT VOICE — EMPLOYMENT */}
      {/* ========================================================================= */}
      <StudentVoiceSection
        badge="STUDENT EXPERIENCES — CAREERS IN JAPAN"
        title="Student Voice: Career Transitions to Japan"
        subtitle="Read real stories from engineering graduates who prepared for technical interviews, mastered conversational Japanese, and relocated to Tokyo and Osaka."
        testimonials={employmentTestimonials}
      />

      {/* ========================================================================= */}
      {/* FAQS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">Career & Placement FAQs</h2>
            <p className="text-xs text-slate-500 mt-1">
              Common questions about working in Japan, work visas, and hiring practices.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-blue-700 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* 4.G CONTACT NAVIGATION BUTTON */}
          {/* ========================================================================= */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white text-center border border-blue-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Launch Your Career in Japan?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Get personalized Japanese resume (Rirekisho) reviews, technical mock interview coaching, and connect with active Tokyo career tracks.
            </p>
            <Link
              href="/contact?type=employment&subject=Employment+in+Japan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition transform hover:scale-105"
            >
              <span>Get Career Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

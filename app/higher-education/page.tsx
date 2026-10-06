'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import UniversityCard from '@/components/cards/UniversityCard';
import StudentVoiceSection from '@/components/cards/StudentVoiceSection';
import {
  japanUniversities,
  studyInJapanExpenses,
  higherStudiesTestimonials
} from '@/lib/mock-data';
import {
  GraduationCap,
  Globe2,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  School,
  FileText,
  DollarSign,
  Compass,
  Building,
  Languages,
  Calendar,
  Layers,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function HigherEducationPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const studyPathways = [
    {
      title: 'Undergraduate Degrees (Bachelor’s)',
      duration: '4 Years (B.Eng / B.Sc / B.A.)',
      badge: 'Bachelor Track',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      description:
        'Comprehensive 4-year programs offering foundational and advanced engineering, informatics, and liberal arts education. Available via both English-medium global degree programs and Japanese-taught streams.',
      eligibility: 'Completion of 12 years of formal school education (10+2 / CBSE / ISC / State Board) with strong mathematics and science fundamentals.',
      languageReq: 'English Tracks: TOEFL iBT (80+) or IELTS (6.5+). Japanese Tracks: EJU (Examination for Japanese University Admission) and JLPT N2/N1.',
      keyFeatures: [
        'World-class laboratory exposure from 3rd year',
        'Direct pathway to integrated Master’s degrees',
        'Student visa allows 28 hours/week part-time work'
      ]
    },
    {
      title: 'Master’s Degrees (M.S. / M.Eng)',
      duration: '2 Years (Thesis & Lab Research)',
      badge: 'Most Popular for Indian Graduates',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-300 font-bold',
      description:
        'Research-driven postgraduate degree programs centered on university laboratories. Students collaborate directly with leading Japanese faculty on real-world industrial and fundamental research.',
      eligibility: '16 years of education (4-year B.Tech / B.E. or B.Sc + M.Sc) with minimum 65-70% / 7.0+ CGPA and a well-defined research interest statement.',
      languageReq: 'English-taught tracks (IGP, PEAK, Global 30): No Japanese proficiency required at admission. Japanese tracks: JLPT N2 or N1.',
      keyFeatures: [
        'Over 80% national university students receive tuition waivers or stipends',
        'Direct campus recruitment by Tokyo technology enterprises',
        'Co-authorship opportunities in IEEE / ACM journals'
      ]
    },
    {
      title: 'Doctoral Programs & Research Fellowships (Ph.D.)',
      duration: '3 Years (Advanced Scientific Research)',
      badge: 'Fully Funded Opportunities',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description:
        'Specialized 3-year doctoral research programs offering supercomputing access, international conference travel grants, and joint industry-sponsored laboratory chairs.',
      eligibility: 'Recognized Master’s degree in engineering, science, or technology with a formal research proposal approved by a prospective laboratory professor.',
      languageReq: 'Proficiency in English academic writing (TOEFL / IELTS). Conversational Japanese encouraged for daily campus life.',
      keyFeatures: [
        'Eligible for prestigious MEXT, JSPS, and university doctoral fellowships',
        'Monthly living stipends ranging from ¥145,000 to ¥200,000/month',
        'High placement in corporate R&D centers and academia'
      ]
    }
  ];

  const popularFields = [
    {
      name: 'Computer Science & AI',
      desc: 'Machine learning, deep neural architectures, natural language processing, and high-performance computing.',
      icon: '💻'
    },
    {
      name: 'Robotics & Mechatronics',
      desc: 'Autonomous systems, humanoid robotics, surgical robots, and industrial motion control (world capital of robotics).',
      icon: '🤖'
    },
    {
      name: 'Data Science & Big Data',
      desc: 'Statistical learning, cloud telemetry analytics, distributed database architecture, and IoT analytics.',
      icon: '📊'
    },
    {
      name: 'Automotive & EV Engineering',
      desc: 'Next-gen battery technology, powertrain optimization, connected vehicles, and autonomous driving algorithms.',
      icon: '🚗'
    },
    {
      name: 'Materials Science & Nano-Tech',
      desc: 'Advanced semiconductor materials, carbon nanomaterials, quantum dots, and green energy conversion devices.',
      icon: '🔬'
    },
    {
      name: 'Global Business & Management',
      desc: 'Bilingual MBA tracks, supply chain resilience, innovation management, and Japan-Asia trade strategy.',
      icon: '📈'
    }
  ];

  const faqs = [
    {
      q: 'What is the MEXT Japanese Government Scholarship, and who is eligible?',
      a: 'The MEXT (Ministry of Education, Culture, Sports, Science and Technology) Scholarship is Japan’s most prestigious fully funded government grant. It provides a 100% tuition waiver, round-trip international airfare, and a monthly living allowance of ¥143,000 to ¥145,000 (~₹80,000 - ₹82,000/month). Indian students can apply through the Embassy of Japan in New Delhi (Embassy Recommendation) or directly through a host Japanese university (University Recommendation).'
    },
    {
      q: 'Do I need to know Japanese before applying for an English-taught Master’s in Japan?',
      a: 'No, Japanese language proficiency is not required for English-taught graduate programs (such as PEAK at Todai, IGP at Tokyo Tech, or English degree tracks at Kyoto and Osaka universities). Lectures, laboratory discussions, and your master’s thesis are conducted in English. However, learning basic conversational Japanese (JLPT N5/N4) is highly recommended for daily living and part-time work.'
    },
    {
      q: 'What is the difference between National and Private universities in Japan?',
      a: 'National universities (such as Tokyo, Kyoto, Osaka, and Tokyo Tech) are funded by the Japanese government, offering uniform, highly subsidized annual tuition (~¥535,800/year, approx ₹3.0 Lakhs) and abundant research grants. Private universities (such as Waseda and Keio) offer modern urban campuses, vibrant international student communities, and specialized global business programs with tuition typically ranging from ¥900,000 to ¥1,450,000/year.'
    },
    {
      q: 'Can international students work part-time while studying in Japan?',
      a: 'Yes. Upon receiving a "Permission to Engage in Activity Other Than That Permitted" (Shikakugai Katsudō) stamp on your Residence Card at Japanese immigration, international students on a College Student Visa are legally permitted to work up to 28 hours per week during academic semesters, and up to 40 hours per week during official university vacation periods.'
    },
    {
      q: 'What is a "Certificate of Eligibility" (COE)?',
      a: 'A Certificate of Eligibility (COE) is an official document issued by the Immigration Services Agency of Japan confirming that you meet the requirements for a Student Visa. Once your Japanese university issues admission, they submit your application for the COE on your behalf. After receiving the COE, you take it to the Japanese Embassy/Consulate in India to receive your student visa stamp.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================================================= */}
      {/* 2.A HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0B132B] via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>STUDY IN JAPAN — GLOBAL ACADEMIC PATHWAY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Build Your Future Through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Higher Education in Japan
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Discover world-ranked imperial universities, fully English-taught Master’s and Ph.D. degree tracks, prestigious government scholarships (MEXT / JASSO), and cutting-edge research laboratories in robotics, AI, and advanced engineering in Japan.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#study-opportunities"
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <span>Explore Study Opportunities</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <Link
                  href="/contact?type=higher-education&subject=Higher+Studies+in+Japan"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition flex items-center gap-2"
                >
                  <span>Contact Us About Higher Studies</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>English-Taught Tracks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>MEXT & JASSO Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Subsidized Tuition Rates</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/80 shadow-2xl p-2 group">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=900&auto=format&fit=crop&q=80"
                    alt="University Campus in Japan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-1 bg-amber-400 text-slate-950 text-[10px] font-extrabold rounded-md uppercase tracking-wider">
                      World Top 50 Research Hubs
                    </span>
                    <h3 className="text-base font-bold mt-1.5">
                      Tokyo, Kyoto, Osaka & Sendai Imperial Labs
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Over 300,000 international scholars pursuing research in Japan.
                    </p>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-amber-400 text-sm">¥535k</span>
                    <span className="text-[10px] text-slate-400">National Tuition/Yr</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-blue-400 text-sm">85%+</span>
                    <span className="text-[10px] text-slate-400">Tuition Waiver Rate</span>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                    <span className="block font-extrabold text-emerald-400 text-sm">28 Hrs</span>
                    <span className="text-[10px] text-slate-400">Legal Work/Week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.B STUDY OPPORTUNITIES & PATHWAYS */}
      {/* ========================================================================= */}
      <section id="study-opportunities" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              ACADEMIC DEGREE PATHWAYS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Study Pathways in Japan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Japan offers structured higher education routes for international students, with programs conducted in English and Japanese. Academic entry requirements vary by university and specific department.
            </p>
          </div>

          {/* Pathways 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {studyPathways.map((pathway, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] border ${pathway.badgeColor}`}>
                      {pathway.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{pathway.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pathway.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pathway.description}
                  </p>

                  <div className="space-y-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs mb-6">
                    <div>
                      <strong className="block text-slate-900 mb-0.5">Basic Academic Eligibility:</strong>
                      <p className="text-slate-600">{pathway.eligibility}</p>
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-0.5">Language Test Requirements:</strong>
                      <p className="text-slate-600">{pathway.languageReq}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {pathway.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Fields of Study */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                  DISCIPLINE SPECIALIZATIONS
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Popular Fields of Study in Japan
                </h3>
              </div>
              <p className="text-xs text-slate-500 sm:max-w-xs">
                Japan is a global leader in high-tech engineering, artificial intelligence, robotics, and international management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFields.map((field, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition group"
                >
                  <div className="text-2xl mb-2">{field.icon}</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {field.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {field.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Important Note:</strong> Exact course offerings, laboratory intake quotas, and application deadlines vary across universities (April Spring vs September/October Autumn intakes). Consult university admission guidelines for specific faculty requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.C SCHOLARSHIPS IN JAPAN (Japan Only - Visually Highlighted) */}
      {/* ========================================================================= */}
      <section id="scholarships" className="py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-[#0B132B] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <DollarSign className="w-4 h-4 text-amber-300" />
              <span>FINANCIAL SUPPORT FOR STUDYING IN JAPAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scholarship Opportunities in Japan
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore government, institutional, and university-funded scholarships specifically for international students pursuing higher education in Japan.
            </p>
          </div>

          {/* 3 Main Scholarship Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* 1. MEXT Scholarship */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 sm:p-8 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold rounded-full uppercase tracking-wider mb-4">
                  Premier Japanese Government Grant
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  MEXT (Monbukagakusho) Scholarship
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  Funded directly by Japan’s Ministry of Education, Culture, Sports, Science and Technology. Awarded to top academic performers and research aspirants.
                </p>

                <div className="space-y-3 text-xs bg-slate-900/60 p-4 rounded-2xl border border-white/10 mb-6">
                  <div>
                    <span className="text-slate-400 block">Tuition Coverage:</span>
                    <strong className="text-amber-300">100% Full Tuition Waiver + Exam Fees</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Monthly Living Allowance:</span>
                    <strong className="text-white">¥143,000 – ¥145,000 / Month (~₹80k-82k/mo)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Travel Support:</span>
                    <strong className="text-white">Round-Trip International Airfare Included</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Application Routes:</span>
                    <span className="text-slate-300">1) Embassy of Japan in India (Embassy Recommendation), or 2) University Recommendation via host professor.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 italic border-t border-white/10 pt-3">
                * Highly competitive; selection based on academic track record and research proposal viability.
              </div>
            </div>

            {/* 2. JASSO Scholarship */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 sm:p-8 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-400 text-slate-950 text-xs font-extrabold rounded-full uppercase tracking-wider mb-4">
                  Japan Student Services Organization
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  JASSO Honors Scholarship
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  The Monbukagakusho Honors Scholarship for Privately-Financed International Students provides monthly living stipends for deserving self-funded students.
                </p>

                <div className="space-y-3 text-xs bg-slate-900/60 p-4 rounded-2xl border border-white/10 mb-6">
                  <div>
                    <span className="text-slate-400 block">Monthly Stipend:</span>
                    <strong className="text-amber-300">¥48,000 / Month (~₹27,000 / Month)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Duration:</span>
                    <strong className="text-white">6 Months to 1 Year (Renewable)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Eligibility:</span>
                    <span className="text-slate-300">Enrolled international students with high GPA (typically 2.3+ on a 3.0 scale) receiving limited monthly financial remittances from home.</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Application Route:</span>
                    <span className="text-slate-300">Nominated through your admitted Japanese university international student affairs office.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 italic border-t border-white/10 pt-3">
                * Widely distributed across national, public, and designated private Japanese universities.
              </div>
            </div>

            {/* 3. University-Specific Waivers */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 sm:p-8 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-emerald-400 text-slate-950 text-xs font-extrabold rounded-full uppercase tracking-wider mb-4">
                  Institutional Merit Waivers
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  University Tuition Reductions & Endowments
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  Most national and leading private universities maintain institutional funds offering substantial tuition exemptions and merit research assistantships (RA/TA).
                </p>

                <div className="space-y-3 text-xs bg-slate-900/60 p-4 rounded-2xl border border-white/10 mb-6">
                  <div>
                    <span className="text-slate-400 block">Tuition Exemption Rates:</span>
                    <strong className="text-amber-300">30%, 50%, or 100% Tuition Fee Exemption</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Examples:</span>
                    <span className="text-slate-300">Todai Fellowship, Tokyo Tech IGP Tuition Exemption, Kyoto University International Student Grant.</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Research Assistantships (RA):</span>
                    <strong className="text-white">¥30,000 – ¥80,000/mo for lab research work</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Application Method:</span>
                    <span className="text-slate-300">Applied concurrently during university admission or at the start of each semester.</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-300 italic border-t border-white/10 pt-3">
                * Scholarship awards depend on eligibility, academic merits, and department quota. Scholarships cannot be guaranteed to every applicant.
              </div>
            </div>
          </div>

          {/* CTA Button linking to official JASSO Study in Japan scholarship portal */}
          <div className="text-center pt-4">
            <a
              href="https://www.studyinjapan.go.jp/en/planning/scholarship/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-xl transition transform hover:scale-105"
            >
              <span>Explore Official Study in Japan Scholarships</span>
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>
            <p className="text-[11px] text-slate-400 mt-2">
              Opens the official JASSO & MEXT Study in Japan scholarship directory (External Official Portal).
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.D APPROXIMATE EXPENSES BREAKDOWN */}
      {/* ========================================================================= */}
      <section id="expenses" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
              BUDGET TRANSPARENCY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Approximate Expenses for Studying in Japan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Plan your finances with an itemized breakdown of tuition and living costs in Japanese Yen (¥) and Indian Rupees (₹).
            </p>
            <p className="text-xs text-slate-500 mt-2 italic">
              {studyInJapanExpenses.currencyNotes}
            </p>
          </div>

          {/* First-Year Estimated Budget Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* National Universities */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
                  National Universities
                </span>
                <span className="text-xs font-semibold text-slate-500">Subsidized Standard</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fixed government fee structure with strong tuition-waiver availability.
              </p>

              <div className="space-y-3 text-xs divide-y divide-slate-100">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Annual Tuition Fee:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.tuitionJPY}</strong>
                    <span className="text-blue-700 font-semibold">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.tuitionINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">One-Time Admission Fee:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.admissionFeeJPY}</strong>
                    <span className="text-slate-500">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.admissionFeeINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Annual Estimated Living Expenses:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.livingExpensesJPY}</strong>
                    <span className="text-slate-500">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.livingExpensesINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 bg-blue-50/50 p-3 rounded-xl">
                  <span className="font-bold text-slate-900">Estimated Total 1st Year:</span>
                  <div className="text-right">
                    <strong className="text-blue-800 text-sm block">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.totalFirstYearJPY}</strong>
                    <span className="text-xs font-bold text-blue-700">{studyInJapanExpenses.firstYearEstimatedBudget.nationalUniv.totalFirstYearINR}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Universities */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                  Private Universities
                </span>
                <span className="text-xs font-semibold text-slate-500">Comprehensive Facilities</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Vary by faculty (Engineering & Science tracks generally higher than Humanities).
              </p>

              <div className="space-y-3 text-xs divide-y divide-slate-100">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Annual Tuition Fee:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.tuitionJPY}</strong>
                    <span className="text-amber-800 font-semibold">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.tuitionINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">One-Time Admission Fee:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.admissionFeeJPY}</strong>
                    <span className="text-slate-500">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.admissionFeeINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Annual Estimated Living Expenses:</span>
                  <div className="text-right">
                    <strong className="text-slate-900 block">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.livingExpensesJPY}</strong>
                    <span className="text-slate-500">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.livingExpensesINR}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 bg-amber-50/50 p-3 rounded-xl">
                  <span className="font-bold text-slate-900">Estimated Total 1st Year:</span>
                  <div className="text-right">
                    <strong className="text-amber-900 text-sm block">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.totalFirstYearJPY}</strong>
                    <span className="text-xs font-bold text-amber-800">{studyInJapanExpenses.firstYearEstimatedBudget.privateUniv.totalFirstYearINR}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Expenses Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm overflow-hidden">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Itemized Cost of Living Breakdown
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Average monthly living costs for international students range between <strong>¥80,000 – ¥130,000 / month (≈ ₹45,000 – ₹73,000 / month)</strong>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <th className="py-3.5 px-4 font-bold">Expense Category</th>
                    <th className="py-3.5 px-4 font-bold">Estimated Cost (JPY)</th>
                    <th className="py-3.5 px-4 font-bold">Estimated Cost (INR)</th>
                    <th className="py-3.5 px-4 font-bold">Frequency</th>
                    <th className="py-3.5 px-4 font-bold">Cost Drivers & Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {studyInJapanExpenses.breakdownItems.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{item.category}</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">{item.rangeJPY}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">{item.rangeINR}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium">
                          {item.period}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 leading-relaxed max-w-xs">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              💡 <strong>Part-Time Earning Potential:</strong> International students working 28 hours per week in Tokyo (average hourly wage ¥1,150 – ¥1,400/hr) can earn approximately ¥120,000 – ¥150,000 per month, which substantially covers monthly rent, food, and daily living expenses.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.E APPLICATION ROADMAP (Step-by-Step Timeline) */}
      {/* ========================================================================= */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              STEP-BY-STEP ADMISSION PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Application Roadmap to Japan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Follow our structured 7-step roadmap from initial course shortlisting to landing in Tokyo or Kyoto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Choose Course & University',
                desc: 'Research university faculties, English-track offerings (PEAK, IGP, FGL), and identify specific laboratory professors aligning with your engineering domain.'
              },
              {
                step: '02',
                title: 'Check Eligibility & Requirements',
                desc: 'Verify required minimum CGPA, course prerequisites, and standardized language requirements (TOEFL/IELTS for English tracks or JLPT for Japanese tracks).'
              },
              {
                step: '03',
                title: 'Prepare Academic Documents',
                desc: 'Draft a compelling Statement of Purpose (SOP), Research Proposal, obtain Letters of Recommendation (LORs), and arrange official transcripts.'
              },
              {
                step: '04',
                title: 'Search Scholarships & Deadlines',
                desc: 'Identify scholarship opportunities (MEXT Embassy/University recommendation, JASSO, or university tuition fee reductions) and observe strict application windows.'
              },
              {
                step: '05',
                title: 'Submit Application Dossier',
                desc: 'Submit your formal application to the university admission portal and complete laboratory interview screenings with prospective sensei.'
              },
              {
                step: '06',
                title: 'Admission & Visa Procedures',
                desc: 'Receive Letter of Acceptance, obtain the Certificate of Eligibility (COE) from Japanese Immigration, and stamp your Student Visa.'
              },
              {
                step: '07',
                title: 'Travel & Campus Onboarding',
                desc: 'Book international flight tickets, confirm university dormitory or private housing, and participate in pre-departure academic orientation.'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition flex flex-col justify-between"
              >
                <div>
                  <span className="w-9 h-9 rounded-xl bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-4 shadow-sm">
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

            {/* Final Help Card */}
            <div className="bg-gradient-to-tr from-blue-900 to-indigo-950 text-white rounded-2xl p-6 border border-blue-800 flex flex-col justify-between">
              <div>
                <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center mb-4">
                  ★
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  1-on-1 Advisory Support
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  NexArc academic advisors guide you through professor matching, research proposal reviews, and visa documentation.
                </p>
              </div>

              <Link
                href="/contact?type=higher-education&subject=Higher+Studies+in+Japan"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200"
              >
                <span>Request Mentorship</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED JAPANESE UNIVERSITIES GRID */}
      {/* ========================================================================= */}
      <section id="universities" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
                TOP RANKED INSTITUTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Featured Partner Universities in Japan
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Explore leading national imperial and private institutions offering English and Japanese degree tracks.
              </p>
            </div>

            <Link
              href="/contact?type=higher-education&subject=Higher+Studies+in+Japan"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition self-start sm:self-auto"
            >
              <span>University Selection Counseling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {japanUniversities.map(u => (
              <UniversityCard key={u.id} university={u} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.F STUDENT VOICE — HIGHER STUDIES (Separate Testimonial Section) */}
      {/* ========================================================================= */}
      <StudentVoiceSection
        badge="STUDENT EXPERIENCES — HIGHER STUDIES IN JAPAN"
        title="Student Voice: Journeys to Japanese Universities"
        subtitle="Read firsthand experiences of Indian engineering students who navigated MEXT scholarships, laboratory professor matching, and university adaptation in Tokyo and Kyoto."
        testimonials={higherStudiesTestimonials}
      />

      {/* ========================================================================= */}
      {/* FAQS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">
              Common questions about studying in Japan, English degree tracks, and MEXT grants.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition"
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
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* 2.G CONTACT NAVIGATION BUTTON */}
          {/* ========================================================================= */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white text-center border border-blue-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Plan Your Higher Studies in Japan?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Connect with our dedicated academic counselors for 1-on-1 profile evaluation, laboratory matching in Tokyo/Kyoto, and MEXT scholarship roadmap planning.
            </p>
            <Link
              href="/contact?type=higher-education&subject=Higher+Studies+in+Japan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition transform hover:scale-105"
            >
              <span>Talk to Us About Higher Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

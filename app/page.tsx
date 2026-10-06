'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Languages,
  FlaskConical,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe2,
  TrendingUp,
  ChevronRight,
  BookOpen,
  Building2,
  Compass,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import ServiceCard from '@/components/cards/ServiceCard';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectDetailModal from '@/components/modals/ProjectDetailModal';
import { mockProjects, mockTestimonials } from '@/lib/mock-data';
import { ResearchProject } from '@/types';

export default function LandingPage() {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  const services = [
    {
      title: 'Higher Education',
      subtitle: 'Global Academic Pathways',
      description: 'Comprehensive counseling for prestigious MS, M.Tech, and Ph.D. admissions across Japan (Todai, Kyoto, Tokyo Tech), Germany (TUM), Singapore (NUS), and premier Indian institutes with full scholarship assistance.',
      icon: GraduationCap,
      href: '/higher-education',
      tag: 'Admissions & Scholarships',
      features: [
        'MEXT & DAAD Scholarship Guidance',
        'SOP, LOR & Professor Matching',
        'English-taught Degree Programs'
      ],
      stats: '100% Scholarship Guidance'
    },
    {
      title: 'Japanese Language',
      subtitle: 'Linguistic Fluency & JLPT',
      description: 'Structured JLPT training from N5 beginner to N1 mastery. Learn online or offline in India with native Sensei, or enroll directly in partner language immersion academies in Tokyo and Osaka.',
      icon: Languages,
      href: '/japanese-language',
      tag: 'JLPT N5 to N1',
      features: [
        'India Classroom & Online Batches',
        'Study in Japan Immersion Programs',
        'Business Keigo & Interview Practice'
      ],
      stats: 'Native Japanese Faculty'
    },
    {
      title: 'Research & Innovation',
      subtitle: 'Student R&D Incubator',
      description: 'Hands-on participation in live research projects across AI, Machine Learning, Computer Vision, IoT, and Predictive Maintenance. Publish in IEEE/Springer and propose your own novel ideas.',
      icon: FlaskConical,
      href: '/research',
      tag: 'Live Projects & Grants',
      features: [
        'Faculty & Industry Mentorship',
        'IEEE & Scopus Publication Tracks',
        'Propose & Incubate Your Own Ideas'
      ],
      stats: '18+ Published Papers'
    },
    {
      title: 'Employment in Japan',
      subtitle: 'Direct Tokyo Tech Careers',
      description: 'Direct placement pathways for software engineers, AI researchers, and embedded developers into leading Japanese tech giants and high-growth Tokyo startups with visa sponsorship.',
      icon: Briefcase,
      href: '/employment',
      tag: 'Tokyo Tech Placements',
      features: [
        'Japanese Rirekisho Resume Prep',
        'Cultural & Technical Interview Prep',
        'Direct Work Visa Sponsorship'
      ],
      stats: '¥5M - ¥8.5M Salary Avg'
    }
  ];

  const domains = [
    { name: 'Artificial Intelligence', desc: 'LLMs, Transformers & Deep Learning', icon: '🧠' },
    { name: 'Machine Learning', desc: 'Predictive modeling & Data analytics', icon: '📊' },
    { name: 'Cloud Computing', desc: 'Microservices & Distributed Systems', icon: '☁️' },
    { name: 'Cyber Security', desc: 'Zero-Trust & Quantum Encryption', icon: '🛡️' },
    { name: 'IoT & Embedded', desc: 'TinyML, Sensor networks & Edge compute', icon: '📡' },
    { name: 'Computer Vision', desc: 'Autonomous Robotics & Object detection', icon: '👁️' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image with Dark Vignette Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0F172A]/85 to-[#0B132B]/75" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>RESEARCH HUB & GLOBAL PATHWAYS</span>
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Empowering Student <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
            Transforming ambitious engineering students through global higher education, Japanese linguistic fluency, cutting-edge research publications, and direct tech careers in Japan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/research"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm rounded-xl border border-slate-600/80 backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:border-amber-400/60"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Trust Banner Highlights */}
          <div className="mt-14 pt-8 border-t border-slate-700/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">MEXT Scholarships</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">JLPT N5 to N1 Certified</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">IEEE Research Mentorship</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Direct Japan Visas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM INTRODUCTION & MISSION / VISION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              ABOUT NEXARCRISE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Empowering <span className="text-blue-700">Innovation</span> Through Research
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              NexArc RISE serves as a student-centric incubator connecting young technical minds with world-class faculty mentors, international university laboratories, and Japanese tech conglomerates.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 border border-blue-100">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To build high-caliber multidisciplinary research capabilities, enable students to crack real-world engineering bottlenecks, and bridge the linguistic and cultural divide for global careers in Japan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-100">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become a globally recognized research and education nexus, enabling institutional mobility, breakthrough publications, and impactful technological implementations for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
              STUDENT PATHWAYS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of <span className="text-blue-700">NexArc RISE</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Explore our four specialized pillars designed to fast-track your academic, linguistic, and professional trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <ServiceCard key={idx} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESEARCH DOMAINS GRID */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
              RESEARCH DOMAINS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Advanced Research Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((dom, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition text-center group"
              >
                <div className="text-3xl mb-2.5 group-hover:scale-110 transition-transform">
                  {dom.icon}
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                  {dom.name}
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">{dom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED RESEARCH PROJECTS SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
                ONGOING R&D
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Pioneering Ideas <span className="text-blue-700">Shaping Tomorrow</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-xl">
                Explore our active open-source and sponsored research projects. Students can join existing teams or submit their own proposals.
              </p>
            </div>

            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs rounded-xl transition self-start md:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 3).map(p => (
              <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS / MILESTONE BANNER (High Impact Royal Blue) */}
      <section className="py-16 gradient-blue-stats text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-white/15 text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2 backdrop-blur-xs">
              MEASURABLE IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Research Driving <span className="text-amber-300">Innovation</span>
            </h2>
            <p className="mt-2 text-blue-100 text-xs sm:text-sm">
              Our track record of student empowerment, academic scholarship grants, and international tech hiring.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">25+</h3>
              <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">
                Research Projects
              </p>
              <p className="text-[11px] text-blue-200 mt-1">Funded & Student Incubated</p>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">18+</h3>
              <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">
                IEEE Publications
              </p>
              <p className="text-[11px] text-blue-200 mt-1">Scopus & International Journals</p>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">500+</h3>
              <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">
                Students Impacted
              </p>
              <p className="text-[11px] text-blue-200 mt-1">Across Tamil Nadu & India</p>
            </div>

            <div className="p-6 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-3 font-bold shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">10+</h3>
              <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">
                Industry Partners
              </p>
              <p className="text-[11px] text-blue-200 mt-1">Tokyo Labs & Indian Tech Hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDENT SUCCESS STORIES & TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              STUDENT ALUMNI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Voices of <span className="text-blue-700">Success</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Hear from students who transformed their careers through NexArc RISE pathways in Tokyo, Kyoto, and Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map(t => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                      <p className="text-xs text-blue-700 font-semibold">{t.role}</p>
                      <p className="text-[11px] text-slate-400">{t.currentOrganization}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed italic mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-800 font-semibold rounded">
                    {t.service}
                  </span>
                  <span className="text-slate-400 font-medium">{t.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RESEARCH MOMENTS PHOTO HIGHLIGHTS */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Our Research Moments</h3>
            <p className="text-xs text-slate-500 mt-1">
              Glimpses of our academic evaluations, Japanese workshops, mentor interactions, and project demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-video sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80"
                alt="Student Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">Research Symposium</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-video sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80"
                alt="Japanese Language Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">Japanese Language Immersion</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-video sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80"
                alt="Robotics & IoT Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">IoT & Edge AI Prototyping</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-video sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80"
                alt="Global Placement Drive"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-bold">Tokyo Career Mock Interviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM HIGH-IMPACT CALL TO ACTION BANNER */}
      <section className="py-16 gradient-cta-banner text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                START YOUR JOURNEY
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Shape the Future Through Research & Global Careers
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xl">
                Collaborate with researchers on impactful work, master Japanese, and seize Tokyo engineering career opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition text-center"
              >
                Get Started →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition text-center"
              >
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

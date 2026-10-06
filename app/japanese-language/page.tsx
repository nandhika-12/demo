'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StudentVoiceSection from '@/components/cards/StudentVoiceSection';
import {
  mockJapaneseCourses,
  languageSchoolsInJapan,
  officialLanguageResources,
  japaneseLanguageTestimonials
} from '@/lib/mock-data';
import {
  Languages,
  BookOpen,
  Plane,
  Sparkles,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  ShieldAlert,
  Building,
  Calendar,
  Users,
  Mic,
  Video,
  ExternalLink,
  Info,
  HelpCircle,
  Lightbulb,
  FileText
} from 'lucide-react';

export default function JapaneseLanguagePage() {
  const [selectedIndiaLevel, setSelectedIndiaLevel] = useState<string>('JLPT N5');
  const [selectedJapanLevel, setSelectedJapanLevel] = useState<string>('JLPT N3');

  const indiaCourses = mockJapaneseCourses.filter(c => ['JLPT N5', 'JLPT N4', 'JLPT N3'].includes(c.level));
  const currentIndiaCourse = indiaCourses.find(c => c.level === selectedIndiaLevel) || indiaCourses[0];

  const currentJapanCourse = mockJapaneseCourses.find(c => c.level === selectedJapanLevel) || mockJapaneseCourses[2];

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================================================= */}
      {/* 3.A HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0B132B] via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Languages className="w-4 h-4 text-amber-300" />
                <span>NEXARC JAPANESE LANGUAGE ACADEMY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Learn Japanese. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Connect with Japan.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Japanese language proficiency unlocks world-class higher education opportunities, opens high-paying engineering careers in Tokyo and Osaka, and enables seamless daily communication and cultural connection in Japan.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#learn-in-india"
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <span>Explore Japanese Courses</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>

                <Link
                  href="/contact?type=japanese-language&subject=Japanese+Language+Courses"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition flex items-center gap-2"
                >
                  <span>Contact Japanese Academy Desk</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>

              {/* Core Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>JLPT N5 to N1 Syllabus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Weekly Native Sensei Drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Monthly Tokyo Guest Lectures</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-base">
                      日
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Japanese Fluency Matrix</h4>
                      <p className="text-[11px] text-slate-400">From Zero to Business Fluency</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    Active Batches
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <strong className="text-white block">Option A: Learn in India</strong>
                      <span className="text-slate-400">JLPT N5, N4, N3 (Live Online / Chennai)</span>
                    </div>
                    <span className="text-amber-400 font-bold">Foundation</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <strong className="text-white block">Option B: Study in Japan</strong>
                      <span className="text-slate-400">N5 through N1 (Language School Immersion)</span>
                    </div>
                    <span className="text-blue-400 font-bold">Full Immersion</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <strong className="text-white block">Native Conversation Sessions</strong>
                      <span className="text-slate-400">1 session/week + 1 guest lecture/month</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Speaking Focus</span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-blue-950/60 border border-blue-800/50 text-[11px] text-blue-200">
                  🇯🇵 <strong>Why Japanese?</strong> Japan faces an acute engineering talent gap. Japanese proficiency directly increases Tokyo starting salaries by 25–40%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.B LEARNING JAPANESE IN INDIA (JLPT N5, N4, N3) */}
      {/* ========================================================================= */}
      <section id="learn-in-india" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              INDIA TRAINING TRACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learning Japanese in India (JLPT N5, N4 & N3)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Build solid linguistic fundamentals in India through structured courses designed around the Japanese-Language Proficiency Test (JLPT).
            </p>
          </div>

          {/* Level Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {indiaCourses.map(course => (
              <button
                key={course.level}
                onClick={() => setSelectedIndiaLevel(course.level)}
                className={`px-6 py-3 rounded-2xl font-bold text-xs transition border ${
                  selectedIndiaLevel === course.level
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                {course.level} Track
              </button>
            ))}
          </div>

          {/* Detailed Course Display Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
              <div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 font-bold text-xs rounded-full border border-amber-200">
                  Target Curriculum: {currentIndiaCourse.level}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {currentIndiaCourse.level} Syllabus & Skill Progression
                </h3>
              </div>
              <Link
                href={`/contact?type=japanese-language&subject=Enrollment+in+${encodeURIComponent(currentIndiaCourse.level)}`}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Enroll in {currentIndiaCourse.level}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {currentIndiaCourse.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Kanji Target</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">{currentIndiaCourse.kanjiCount}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Vocabulary</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">{currentIndiaCourse.vocabularyCount}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Grammar Points</p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">{currentIndiaCourse.grammarPoints}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Estimated Study Time</p>
                <p className="text-base font-extrabold text-blue-700 mt-0.5">{currentIndiaCourse.estimatedHours}</p>
              </div>
            </div>

            {/* What Students Learn & Suitable For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Who This Level is Suitable For</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentIndiaCourse.suitableFor}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Academic & Career Support</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentIndiaCourse.level === 'JLPT N5' && 'Establishes proof of genuine interest for Japanese student visa applications and baseline university admissions.'}
                  {currentIndiaCourse.level === 'JLPT N4' && 'Qualifies students for Japanese language school admissions in Tokyo and entry-level internship communication.'}
                  {currentIndiaCourse.level === 'JLPT N3' && 'The industry benchmark for Indian engineering graduates seeking IT and software developer jobs in Tokyo.'}
                </p>
              </div>
            </div>

            {/* Key Topics */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Grammar & Comprehension Topics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentIndiaCourse.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important JLPT Examination Clarification Callout */}
          <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-sm font-bold text-amber-950 mb-1">
                Important Clarity Regarding JLPT Certification & Speaking Proficiency
              </strong>
              <p className="leading-relaxed text-amber-800">
                The official JLPT (Japanese-Language Proficiency Test) evaluates <strong>Language Knowledge (Vocabulary & Grammar), Reading Comprehension, and Listening Ability</strong> through multiple-choice questions. <em>Passing a JLPT level does not automatically establish active verbal speaking fluency.</em> To bridge this critical gap, NexArc pairs every JLPT course with mandatory weekly conversation drills and interview speaking practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.C LEARNING JAPANESE IN JAPAN (JLPT N5 to N1 Full Immersion) */}
      {/* ========================================================================= */}
      <section id="learn-in-japan" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
              JAPAN IMMERSION TRACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learning Japanese in Japan (JLPT N5 to N1)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Study at accredited Japanese language schools (Nihongo Gakkō) in Tokyo, Osaka, and Kyoto with full cultural immersion and legal part-time work authorization.
            </p>
          </div>

          {/* Immersion Level Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {mockJapaneseCourses.map(course => (
              <button
                key={course.level}
                onClick={() => setSelectedJapanLevel(course.level)}
                className={`px-4 py-2 rounded-xl font-bold text-xs transition border ${
                  selectedJapanLevel === course.level
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
                }`}
              >
                {course.level} in Japan
              </button>
            ))}
          </div>

          {/* Immersion Scope Overview Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 max-w-4xl mx-auto mb-14">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase">Immersion Syllabus</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{currentJapanCourse.level} Japan Immersion Track</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">{currentJapanCourse.estimatedHours}</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {currentJapanCourse.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="block text-slate-900 mb-1">Language Schools</strong>
                <p className="text-slate-600">1 to 2-year intensive daily courses (20 hours/week classroom instruction).</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="block text-slate-900 mb-1">Daily Immersion</strong>
                <p className="text-slate-600">Immediate real-life practice shopping, riding transit, and communicating in neighborhoods.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200">
                <strong className="block text-slate-900 mb-1">Career & University Prep</strong>
                <p className="text-slate-600">Prepares students for university entrance (EJU), vocational schools (Senmon Gakkō), or corporate job hunting (Shūkatsu).</p>
              </div>
            </div>
          </div>

          {/* Sample Language Schools in Japan */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Representative Japanese Language Schools
            </h3>
            <p className="text-xs text-slate-500 text-center max-w-lg mx-auto mb-8">
              Explore accredited institutions offering College Student Visa sponsorship across Tokyo, Kyoto, and Osaka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languageSchoolsInJapan.map((school, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-500">{school.location}</span>
                      <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 text-[10px] font-bold rounded-full border border-amber-200">
                        Visa Sponsored Track
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">{school.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{school.description}</p>

                    <div className="space-y-2 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Duration:</span>
                        <span className="font-semibold text-slate-900">{school.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Intakes:</span>
                        <span className="font-semibold text-slate-900">{school.intakes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Approx Tuition:</span>
                        <span className="font-bold text-emerald-700">{school.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Living Estimate:</span>
                        <span className="font-medium text-slate-700">{school.livingCost}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-blue-700 font-semibold mb-4">
                      ⭐ {school.highlight}
                    </p>
                  </div>

                  <Link
                    href={`/contact?type=japanese-language&subject=Inquiry+for+${encodeURIComponent(school.name)}`}
                    className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire for Admission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Visa & Requirements Notice */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-4xl mx-auto flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p>
              <strong>Important Institutional Disclaimer:</strong> Course curriculum, tuition fee structures, minimum entry JLPT prerequisites, and visa sponsorship quotas vary by language academy. Please confirm specific enrollment requirements directly with our counseling desk before finalizing travel and financial deposits.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.D NATIVE JAPANESE TEACHER SESSIONS */}
      {/* ========================================================================= */}
      <section id="native-sessions" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              INTERACTIVE CONVERSATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Native Japanese Teacher Sessions & Cultural Lectures
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Accelerate your speaking fluency and cultural intelligence with direct exposure to native Japanese speakers and professionals living in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Feature 1: Weekly Conversation Practice */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  <Mic className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full border border-blue-100">
                  EVERY WEEK
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  Weekly Conversation Practice
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  One dedicated conversation session every week conducted by a native Japanese-speaking teacher (Sensei).
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Practical Situations:</strong> Self-introductions (Jikoshoukai), shopping, asking directions, university campus life, job interviews, and workplace etiquette.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Live Corrections:</strong> Direct pronunciation feedback, natural phrasing tips, and encouragement to speak without hesitation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Confidence Building:</strong> Overcome speaking anxiety through small peer groups (max 8-10 students).</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?type=japanese-language&subject=Weekly+Conversation+Practice+Inquiry"
                className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl text-center transition"
              >
                Join Conversation Sessions
              </Link>
            </div>

            {/* Feature 2: Monthly Guest Lecture */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                  <Video className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                  EVERY MONTH
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  Monthly Japan Guest Lecture
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  One guest lecture every month hosted by an Indian engineer, researcher, or professional currently living and working in Japan.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Culture & Daily Life:</strong> Japanese work etiquette, rent/living expenses in Tokyo, and navigating train systems.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Career Insights:</strong> Real hiring stories, technical interview expectations, and workplace communication (Hōkoku-Renraku-Sōdan).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Live Q&A:</strong> Students ask direct questions regarding dorm life, food options, and campus adaptation.</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact?type=japanese-language&subject=Monthly+Guest+Lecture+Registration"
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl text-center transition"
              >
                Register for Upcoming Guest Lecture
              </Link>
            </div>
          </div>

          {/* Upcoming Schedule Card Example */}
          <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[10px] font-bold">Upcoming Monthly Lecture</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                  Life as an Indian Software Engineer in Tokyo: Housing, Work Culture & JLPT
                </h4>
                <p className="text-xs text-slate-500">
                  Speaker: Indian Engineering Alumni residing in Tokyo (Interactive Webinar via Zoom)
                </p>
              </div>
            </div>

            <Link
              href="/contact?type=japanese-language&subject=Registration+for+Next+Tokyo+Guest+Lecture"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shrink-0"
            >
              Reserve Seat (Free)
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.E HOW TO LEARN JAPANESE (Beginner-Friendly Roadmap) */}
      {/* ========================================================================= */}
      <section id="roadmap" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-amber-200">
              LEARNING METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How to Learn Japanese: Beginner Roadmap
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Starting from complete zero? Follow this step-by-step learning progression to master Japanese methodically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Master Hiragana & Katakana',
                desc: 'Learn the two phonetic scripts (46 characters each) using stroke order drills and audio mnemonics. Avoid relying on Romaji (English alphabet) after week 2.'
              },
              {
                step: '02',
                title: 'Build Core Vocabulary & Grammar',
                desc: 'Acquire high-frequency nouns, basic particles (は, が, を, に), and polite verb forms (です / ます) using structured textbook chapters.'
              },
              {
                step: '03',
                title: 'Daily Listening & Shadowing',
                desc: 'Listen to native Japanese audio dialogues every day. Practice "shadowing" (repeating immediately after audio) to develop natural rhythm and intonation.'
              },
              {
                step: '04',
                title: 'Progressive Kanji Study',
                desc: 'Learn Kanji with radicals and visual stories rather than blind memorization. Aim for 5-10 new Kanji per day with common compound words (Jukugo).'
              },
              {
                step: '05',
                title: 'Comprehension & Reading Practice',
                desc: 'Read simple graded readers, dialogues, and manga. Answer reading comprehension questions to build speed and contextual deduction.'
              },
              {
                step: '06',
                title: 'Take JLPT Mock Tests',
                desc: 'Simulate full timed JLPT exam papers. Identify weak areas across vocabulary, grammar patterns, reading passages, and audio sections.'
              },
              {
                step: '07',
                title: 'Weekly Live Conversation Drills',
                desc: 'Actively speak with native teachers in simulated real-life scenarios: ordering food, introducing technical projects, and mock job interviews.'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center mb-4">
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

            {/* Zero-Level Advice Card */}
            <div className="bg-gradient-to-tr from-blue-900 to-slate-900 text-white rounded-2xl p-6 border border-blue-800 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-xl bg-blue-500 text-white font-bold text-xs flex items-center justify-center mb-4">
                  💡
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  Advice for Zero-Level Starters
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Consistency beats marathon cramming. Dedicate 45 minutes daily to spaced-repetition flashcards and 2 hours weekly to interactive speaking.
                </p>
              </div>

              <Link
                href="/contact?type=japanese-language&subject=Beginner+Japanese+Orientation"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200"
              >
                <span>Get Free Starter Study Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.F OFFICIAL LEARNING RESOURCES (Marugoto, Irodori, Japan Foundation) */}
      {/* ========================================================================= */}
      <section id="resources" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
              OFFICIAL EXTERNAL REFERENCES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recommended Japanese Learning Resources
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Enhance your self-study with authoritative, free educational materials published by The Japan Foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officialLanguageResources.map((res, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                      {res.badge}
                    </span>
                    <span className="text-[11px] text-slate-500">{res.source}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{res.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{res.description}</p>
                </div>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <span>Visit {res.title.split(':')[0]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            * Note: These links connect to third-party official resources provided by The Japan Foundation for self-study and supplementary listening practice.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3.G STUDENT VOICE — JAPANESE LANGUAGE */}
      {/* ========================================================================= */}
      <StudentVoiceSection
        badge="STUDENT EXPERIENCES — JAPANESE LANGUAGE ACADEMY"
        title="Student Voice: Language Learners & Certification Milestones"
        subtitle="Discover how university engineering students started from zero Hiragana, cleared JLPT N5 to N3, and built confidence through weekly native conversation drills."
        testimonials={japaneseLanguageTestimonials}
      />

      {/* ========================================================================= */}
      {/* 3.H CONTACT NAVIGATION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-center border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Start Learning Japanese?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Find the right course track tailored to your current level—whether starting from zero in India or enrolling in an intensive language school in Tokyo.
            </p>
            <Link
              href="/contact?type=japanese-language&subject=Japanese+Language+Courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition transform hover:scale-105"
            >
              <span>Find the Right Japanese Course</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

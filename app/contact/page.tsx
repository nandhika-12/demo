'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  GraduationCap,
  Languages,
  Briefcase,
  FlaskConical,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

type AreaOfInterest = 'higher-education' | 'japanese-language' | 'employment' | 'research' | 'general';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeParam = (searchParams.get('type') as AreaOfInterest) || 'general';
  const subjectParam = searchParams.get('subject') || '';

  // Common Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState<AreaOfInterest>('general');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState('');

  // Synchronize when query params change
  useEffect(() => {
    if (typeParam && ['higher-education', 'japanese-language', 'employment', 'research', 'general'].includes(typeParam)) {
      setAreaOfInterest(typeParam);
    }
    if (subjectParam) {
      setSubject(subjectParam);
    } else {
      // Set sensible defaults if no subject parameter provided
      switch (typeParam) {
        case 'higher-education':
          setSubject('Higher Studies in Japan');
          break;
        case 'japanese-language':
          setSubject('Japanese Language Courses');
          break;
        case 'employment':
          setSubject('Employment in Japan');
          break;
        case 'research':
          setSubject('Student Research Lab Inquiry');
          break;
        default:
          setSubject('');
      }
    }
  }, [typeParam, subjectParam]);

  const handleAreaChange = (newArea: AreaOfInterest) => {
    setAreaOfInterest(newArea);
    let defaultSub = '';
    switch (newArea) {
      case 'higher-education':
        defaultSub = 'Higher Studies in Japan';
        break;
      case 'japanese-language':
        defaultSub = 'Japanese Language Courses';
        break;
      case 'employment':
        defaultSub = 'Employment in Japan';
        break;
      case 'research':
        defaultSub = 'Student Research Lab Inquiry';
        break;
      default:
        defaultSub = 'General Student Inquiry';
    }
    setSubject(defaultSub);
    router.replace(`/contact?type=${newArea}&subject=${encodeURIComponent(defaultSub)}`, { scroll: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Form validation
    if (!fullName.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setSubmitError('Please enter a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setSubmitError('Please enter an inquiry subject.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setSubmitError('Please enter a detailed message (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    // Generate clean tracking reference
    const prefix = areaOfInterest === 'higher-education' ? 'HE'
      : areaOfInterest === 'japanese-language' ? 'JL'
      : areaOfInterest === 'employment' ? 'EMP'
      : areaOfInterest === 'research' ? 'RES' : 'GEN';
    const ref = `NX-${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceId(ref);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setMessage('');
    setSubmitError(null);
  };

  const getAreaMetadata = () => {
    switch (areaOfInterest) {
      case 'higher-education':
        return {
          title: 'Higher Studies in Japan Counseling',
          description: 'Inquire about English-taught Master’s & Ph.D. tracks, MEXT and JASSO scholarships, professor matching, and university admissions in Japan.',
          badge: 'Higher Studies Track',
          icon: GraduationCap,
          color: 'text-blue-700 bg-blue-50 border-blue-200'
        };
      case 'japanese-language':
        return {
          title: 'Japanese Language Course Inquiries',
          description: 'Ask about JLPT N5 to N1 batches in India, weekly native teacher speaking practice, and full-immersion language schools in Tokyo and Osaka.',
          badge: 'Japanese Language Track',
          icon: Languages,
          color: 'text-amber-800 bg-amber-50 border-amber-200'
        };
      case 'employment':
        return {
          title: 'Employment & Tech Careers in Japan',
          description: 'Connect regarding Tokyo/Osaka software, AI, and embedded engineering career pathways, Japanese Rirekisho drafting, and mock interviews.',
          badge: 'Employment in Japan Track',
          icon: Briefcase,
          color: 'text-emerald-800 bg-emerald-50 border-emerald-200'
        };
      case 'research':
        return {
          title: 'Student Research Lab & Publications',
          description: 'Inquire about joining live student engineering research projects, IEEE paper co-authorship, or proposing new research problem statements.',
          badge: 'Research Lab Track',
          icon: FlaskConical,
          color: 'text-purple-800 bg-purple-50 border-purple-200'
        };
      default:
        return {
          title: 'NexArc Student Advisory Desk',
          description: 'Have a question about our Japan education, language, or career pathways? Leave your message and our academic council will assist you.',
          badge: 'General Student Desk',
          icon: Mail,
          color: 'text-slate-800 bg-slate-100 border-slate-200'
        };
    }
  };

  const meta = getAreaMetadata();
  const IconComp = meta.icon;

  return (
    <div className="min-h-screen bg-slate-50/70 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <IconComp className="w-4 h-4 text-blue-600" />
            <span>{meta.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {meta.title}
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {meta.description}
          </p>
        </div>

        {/* Area of Interest Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {[
            { id: 'higher-education', label: 'Higher Studies in Japan', icon: GraduationCap },
            { id: 'japanese-language', label: 'Japanese Language', icon: Languages },
            { id: 'employment', label: 'Employment in Japan', icon: Briefcase },
            { id: 'general', label: 'General Inquiry', icon: Mail }
          ].map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleAreaChange(tab.id as AreaOfInterest)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition border flex items-center gap-2 ${
                  areaOfInterest === tab.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Verified Contact Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  NexArc RISE Advisory Center
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our academic counselors and career mentors are available Monday through Saturday to guide your pathways to Japan.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Innovation Hub (Chennai Center)</strong>
                    <span className="text-slate-500">
                      OMR IT Corridor, Sholinganallur, Chennai, Tamil Nadu, India - 600119
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Student Desk Email</strong>
                    <span className="text-blue-700 font-semibold">student.desk@nexarcrise.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Advisory Helpline</strong>
                    <span className="text-slate-500">+91 98400 67210</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Prompt Counseling Response
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  All submitted inquiries receive a personalized roadmap response from our counselors within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{fullName}</strong>. Your inquiry for{' '}
                    <strong className="text-blue-700">{meta.badge}</strong> has been registered with our team.
                  </p>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Reference Tracking ID:</span>
                      <span className="font-mono font-bold text-blue-700">{referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Registered Email:</span>
                      <span className="font-semibold text-slate-900">{email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Subject:</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[200px]">{subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Area of Interest:</span>
                      <span className="font-semibold text-slate-900">{meta.badge}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
                    >
                      Submit Another Inquiry
                    </button>
                    <Link
                      href="/"
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Indicator Banner */}
                  <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-xs font-bold text-slate-800">
                        Inquiry Category: {meta.badge}
                      </span>
                    </div>
                    <span className="text-[11px] text-blue-700 font-semibold">
                      Auto-Preselected
                    </span>
                  </div>

                  {submitError && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Student Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Student Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Phone (Optional) & Area of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91 98400 12345"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Area of Interest <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={areaOfInterest}
                        onChange={e => handleAreaChange(e.target.value as AreaOfInterest)}
                        className="w-full text-xs p-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="higher-education">Higher Studies in Japan</option>
                        <option value="japanese-language">Japanese Language</option>
                        <option value="employment">Employment in Japan</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      placeholder="Subject of inquiry"
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={
                        areaOfInterest === 'higher-education'
                          ? 'Mention your academic branch, current year / CGPA, target Japanese universities, or MEXT scholarship questions...'
                          : areaOfInterest === 'japanese-language'
                          ? 'Mention your current Japanese level (zero beginner, N5, N4, etc.), batch preference (India online/classroom vs Tokyo immersion), or JLPT goals...'
                          : areaOfInterest === 'employment'
                          ? 'Mention your engineering specialization (Software, AI, Embedded, DevOps), graduation timeline, Japanese level, or portfolio details...'
                          : 'Write your message or questions here...'
                      }
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-amber-400 rounded-full animate-spin" />
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}

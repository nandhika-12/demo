'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Languages,
  Briefcase,
  BookOpen,
  Award,
  Clock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">

          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/nexarc-logo.png"
                  alt="NexArc RISE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-xl tracking-tight text-white">NexArc</span>
                  <span className="font-extrabold text-xl tracking-tight text-blue-400">RISE</span>
                </div>
                <span className="text-[9px] tracking-widest font-bold uppercase text-amber-400 -mt-0.5">
                  Research · Innovation · Skills · Excellence
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              NexArc RISE is a premier education and career consultancy bridging Indian talent with Japan's world-class universities, language institutes, and technology companies.
            </p>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Accredited Education Partner
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                JASSO & MEXT Certified Advisor
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-amber-400 inline-block" />
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Higher Studies in Japan', href: '/higher-education', icon: GraduationCap },
                { label: 'MEXT & JASSO Scholarships', href: '/higher-education#scholarships', icon: Award },
                { label: 'JLPT Language Training (N5–N1)', href: '/japanese-language', icon: Languages },
                { label: 'Japanese Language Schools', href: '/japanese-language#japan-immersion', icon: BookOpen },
                { label: 'Employment in Tokyo & Osaka', href: '/employment', icon: Briefcase },
                { label: 'Career Preparation Roadmap', href: '/employment#roadmap', icon: ArrowRight },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 text-slate-400 hover:text-white hover:translate-x-0.5 transition-all duration-150 group"
                  >
                    <item.icon className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 flex-shrink-0 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-blue-500 inline-block" />
              Official Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'MEXT / JASSO Study in Japan', href: 'https://www.studyinjapan.go.jp/en/planning/scholarship/', color: 'group-hover:text-blue-400' },
                { label: 'Marugoto Japanese Plus', href: 'https://marugoto.jpf.go.jp/en/', color: 'group-hover:text-amber-400' },
                { label: 'IRODORI Japanese for Life', href: 'https://www.irodori-online.jpf.go.jp/', color: 'group-hover:text-amber-400' },
                { label: 'JLPT Official Website', href: 'https://www.jlpt.jp/e/', color: 'group-hover:text-blue-400' },
                { label: 'The Japan Foundation', href: 'https://www.jpf.go.jp/e/', color: 'group-hover:text-amber-400' },
                { label: 'Japan Immigration Services', href: 'https://www.isa.go.jp/en/', color: 'group-hover:text-blue-400' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between text-slate-400 hover:text-white transition-all duration-150 group`}
                  >
                    <span>{item.label}</span>
                    <ExternalLink className={`w-3.5 h-3.5 text-slate-600 flex-shrink-0 transition-colors ${item.color}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-amber-400 inline-block" />
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">
                  NexArc Innovation Hub, OMR IT Expressway,<br />
                  Chennai, Tamil Nadu – 600 119, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919840067210" className="text-slate-400 hover:text-white transition-colors">
                  +91 98400 67210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:student.desk@nexarcrise.org" className="text-slate-400 hover:text-white transition-colors break-all">
                  student.desk@nexarcrise.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-400">Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Free Counselling
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} NexArc RISE. All rights reserved. Empowering India–Japan Futures.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Enquiry Desk
            </Link>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Academic Integrity</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  Languages,
  Briefcase,
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Higher Studies', href: '/higher-education', icon: GraduationCap },
    { name: 'Japanese Language', href: '/japanese-language', icon: Languages },
    { name: 'Employment', href: '/employment', icon: Briefcase },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-md border-b border-slate-200 py-2'
          : 'bg-white border-b border-slate-100 py-0'
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-[#0B1F3A] text-white text-xs py-1.5 px-4 text-center hidden md:block">
        <span className="text-slate-300">Empowering Indian students to build global careers in Japan</span>
        <span className="mx-3 text-slate-500">|</span>
        <a href="tel:+919840067210" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
          +91 98400 67210
        </a>
        <span className="mx-3 text-slate-500">|</span>
        <a href="mailto:student.desk@nexarcrise.org" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
          student.desk@nexarcrise.org
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/nexarc-logo.png"
                alt="NexArc RISE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-xl tracking-tight text-[#0B1F3A]">NexArc</span>
                <span className="font-extrabold text-xl tracking-tight text-[#2563EB]">RISE</span>
              </div>
              <span className="text-[9px] tracking-widest font-bold uppercase text-[#F59E0B] -mt-0.5">
                Research · Innovation · Skills · Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map(link => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-[#2563EB] bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-[#2563EB] hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#2563EB]' : 'text-slate-400'}`} />}
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2563EB] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919840067210"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#2563EB] border border-slate-200 hover:border-blue-200 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1d4ed8] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#2563EB] rounded-lg"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#2563EB] hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-lg">
          <div className="space-y-1 mb-4">
            {navLinks.map(link => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'text-[#2563EB] bg-blue-50 font-semibold border-l-4 border-[#2563EB]'
                      : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${active ? 'text-[#2563EB]' : 'text-slate-400'}`} />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-2">
            <a
              href="tel:+919840067210"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition"
            >
              <Phone className="w-4 h-4" />
              +91 98400 67210
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1d4ed8] rounded-xl transition"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

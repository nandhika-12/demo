'use client';

import React from 'react';
import { Testimonial } from '@/types';
import { Quote, CheckCircle2, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';

interface StudentVoiceSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  testimonials: Testimonial[];
}

export default function StudentVoiceSection({
  title = 'Student Voice & Experiences',
  subtitle = 'Real insights, application journeys, and milestones from students pursuing global academic and professional pathways.',
  badge = 'STUDENT EXPERIENCES',
  testimonials
}: StudentVoiceSectionProps) {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-3 border border-blue-100">
            <UserCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Verified Student Journey
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Sample / Illustrative Profile
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(item => {
            const isVerified = item.isVerified !== false;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between relative group"
              >
                {/* Top Badge: Verified vs Illustrative */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      isVerified
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {isVerified ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.badgeText || 'Verified Student Voice'}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>{item.badgeText || 'Illustrative Experience'}</span>
                      </>
                    )}
                  </span>

                  {item.tag && (
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Quote Body */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-slate-200 absolute -top-3 -left-2 -z-0 opacity-70" />
                  <p className="relative z-10 text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Student Profile Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/20 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 truncate flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className="text-xs font-normal text-slate-500">{item.year}</span>
                    </h4>
                    <p className="text-xs font-medium text-blue-700 truncate">{item.role}</p>
                    <p className="text-[11px] text-slate-500 truncate">{item.currentOrganization}</p>
                    {item.destination && (
                      <p className="text-[10px] font-semibold text-slate-400 mt-0.5">{item.destination}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

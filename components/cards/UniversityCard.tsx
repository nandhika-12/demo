'use client';

import React from 'react';
import { UniversityProgram } from '@/types';
import { Award, Calendar, Banknote, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface UniversityCardProps {
  university: UniversityProgram;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{university.flag}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {university.country}
            </span>
          </div>
          <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 text-[11px] font-bold rounded-full border border-amber-200">
            {university.ranking}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
          {university.university}
        </h3>

        <p className="text-slate-600 text-xs leading-relaxed mb-4">{university.description}</p>

        {/* Degrees & Fields */}
        <div className="space-y-2 mb-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
          <div className="text-xs">
            <span className="text-slate-500 font-medium">Flagship Tracks: </span>
            <span className="font-semibold text-slate-800">{university.degrees.join(', ')}</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
            <span className="text-slate-500">Upcoming Intake:</span>
            <span className="font-bold text-slate-900">{university.intake}</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Tuition Structure:</span>
            <span className="font-bold text-emerald-700">{university.tuitionRange}</span>
          </div>
        </div>

        {university.scholarshipAvailable && (
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-3">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Eligible for MEXT / Full Institutional Grants</span>
          </div>
        )}
      </div>

      {/* Footer Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">English-taught Options</span>
        <Link
          href={`/contact?type=higher-education&univ=${encodeURIComponent(university.university)}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-blue-800 group-hover:translate-x-0.5 transition-all"
        >
          <span>Enquire for Admission</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

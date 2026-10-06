'use client';

import React from 'react';
import { JobListing } from '@/types';
import { MapPin, Building2, ChevronRight, Sparkles } from 'lucide-react';

interface JobCardProps {
  job: JobListing;
  onSelect: (job: JobListing) => void;
}

export default function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Meta */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 font-bold text-xs rounded-full border border-blue-100">
            {job.category}
          </span>
          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-full">
            {job.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5 line-clamp-1">
          {job.title}
        </h3>

        {/* Company & Location */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span className="font-semibold text-slate-700 truncate max-w-[150px]">{job.company}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-500 truncate">
            <MapPin className="w-3 h-3 text-slate-400" />
            {job.location}
          </span>
        </div>

        {/* Salary & Japanese Badge */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Compensation:</span>
            <span className="font-bold text-slate-900">{job.salary}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Japanese:</span>
            <span className="font-semibold text-amber-700">{job.japaneseLevel}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 3).map(skill => (
            <span
              key={skill}
              className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[11px] font-medium rounded">
              +{job.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400">Visa Support Available</span>
        <button
          onClick={() => onSelect(job)}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition"
        >
          <span>View Job</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

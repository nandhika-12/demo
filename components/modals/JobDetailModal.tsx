'use client';

import React, { useState } from 'react';
import { JobListing } from '@/types';
import { X, MapPin, Building2, CheckCircle2, Send, ShieldAlert } from 'lucide-react';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
}

export default function JobDetailModal({ job, onClose }: JobDetailModalProps) {
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [japaneseLevel, setJapaneseLevel] = useState('JLPT N5');

  if (!job) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplied(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                {job.category}
              </span>
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                {job.type}
              </span>
              {job.isDemo && (
                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold rounded">
                  Demo Listing
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{job.company}</span>
              <span>•</span>
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{job.location}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Compensation & Japanese Level */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl">
              <p className="text-[11px] text-blue-800 font-semibold mb-0.5">Annual Compensation</p>
              <p className="text-xs font-bold text-blue-950">{job.salary}</p>
            </div>

            <div className="p-3.5 bg-amber-50/60 border border-amber-100 rounded-xl">
              <p className="text-[11px] text-amber-800 font-semibold mb-0.5">Japanese Requirement</p>
              <p className="text-xs font-bold text-amber-950">{job.japaneseLevel}</p>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <p className="text-[11px] text-slate-600 font-semibold mb-0.5">Experience / Target</p>
              <p className="text-xs font-bold text-slate-900">{job.experience}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Role Overview</h4>
            <p className="text-slate-700 text-sm leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Candidate Requirements
            </h4>
            <ul className="space-y-2">
              {job.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(s => (
                <span
                  key={s}
                  className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Notice Disclaimer */}
          <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> This listing is an illustrative demo representation of technical positions offered by Japanese hiring partners in Tokyo & Osaka. Inquiries submitted connect to the NEXARC Japan Career Preparation Track.
            </p>
          </div>

          {/* Action / Apply Form */}
          <div className="border-t border-slate-100 pt-4">
            {applied ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-emerald-900 text-sm">Application Profile Submitted!</h5>
                <p className="text-xs text-emerald-700 mt-1">
                  Our Japan Career Counselor will review your academic background, JLPT level, and invite you for a mock technical interview.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={candidateName}
                      onChange={e => setCandidateName(e.target.value)}
                      placeholder="e.g. Senthil Kumar"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={candidateEmail}
                      onChange={e => setCandidateEmail(e.target.value)}
                      placeholder="e.g. student@college.edu"
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Japanese Proficiency Level</label>
                  <select
                    value={japaneseLevel}
                    onChange={e => setJapaneseLevel(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="JLPT N5">JLPT N5 (Basic)</option>
                    <option value="JLPT N4">JLPT N4 (Elementary)</option>
                    <option value="JLPT N3">JLPT N3 (Conversational)</option>
                    <option value="JLPT N2">JLPT N2 (Business Fluent)</option>
                    <option value="JLPT N1">JLPT N1 (Native Mastery)</option>
                    <option value="Beginner">Beginner / Planning to Learn</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Apply for this Role via NexArc Japan Desk'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

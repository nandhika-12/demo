'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Lightbulb, Send } from 'lucide-react';

export interface ProposedProjectData {
  title: string;
  domain: string;
  problemStatement: string;
  proposedSolution: string;
  requiredSkills: string;
  hardwareNeeds: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
}

interface ProposeProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: (projectData: ProposedProjectData) => void;
}

export default function ProposeProjectModal({ isOpen, onClose, onSubmitted }: ProposeProjectModalProps) {
  const [formData, setFormData] = useState<ProposedProjectData>({
    title: '',
    domain: 'AI / Machine Learning',
    problemStatement: '',
    proposedSolution: '',
    requiredSkills: '',
    hardwareNeeds: '',
    fullName: '',
    email: '',
    phone: '',
    college: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  if (!isOpen) return null;

  const domains = [
    'AI / Machine Learning',
    'Computer Vision & Robotics',
    'Predictive Maintenance',
    'IoT & Embedded Systems',
    'Cyber Security',
    'Cloud Computing & Distributed Systems',
    'NLP & LLM Applications',
    'Renewable Tech / Smart Cities'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTrackingId(`NX-PROP-${Math.floor(1000 + Math.random() * 9000)}`);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitted) {
        onSubmitted(formData);
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Propose Your Research Idea</h3>
              <p className="text-xs text-slate-500">
                Receive faculty mentorship, lab compute resources, and IEEE publication support.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Research Proposal Submitted!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for submitting <strong>&quot;{formData.title}&quot;</strong>. The NexArc RISE Research Review Committee will evaluate your proposal within 3-5 business days and schedule an incubation review.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 max-w-md mx-auto text-left space-y-1">
              <p><strong>Tracking Reference:</strong> <span className="font-mono text-blue-700">{trackingId || 'NX-PROP-8492'}</span></p>
              <p><strong>Contact Email:</strong> {formData.email}</p>
              <p><strong>Status:</strong> Under Academic Review</p>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-700/20"
              >
                Done / Back to Projects
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Project Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Ultra-low Power Edge Vision for Aquatic Wildlife Tracking"
                className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Research Domain <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.domain}
                  onChange={e => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  {domains.map(d => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Institution / College <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={e => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g., CIT Chennai"
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Problem Statement <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.problemStatement}
                onChange={e => setFormData({ ...formData, problemStatement: e.target.value })}
                placeholder="What critical technical or societal bottleneck does this research aim to resolve?"
                className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Proposed Solution & Methodology <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.proposedSolution}
                onChange={e => setFormData({ ...formData, proposedSolution: e.target.value })}
                placeholder="Describe your algorithmic approach, hardware architecture, or experimental setup..."
                className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Required Student Skills <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.requiredSkills}
                  onChange={e => setFormData({ ...formData, requiredSkills: e.target.value })}
                  placeholder="e.g., Python, OpenCV, Embedded C, ROS"
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Hardware / Compute Needs
                </label>
                <input
                  type="text"
                  value={formData.hardwareNeeds}
                  onChange={e => setFormData({ ...formData, hardwareNeeds: e.target.value })}
                  placeholder="e.g., Jetson Nano, GPU Cloud, Sensor Kits"
                  className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Student Contact Info */}
            <div className="pt-2 border-t border-slate-100">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Lead Student Contact Info
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Proposal...' : 'Submit Research Proposal'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

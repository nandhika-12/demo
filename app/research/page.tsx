'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectDetailModal from '@/components/modals/ProjectDetailModal';
import ProposeProjectModal, { ProposedProjectData } from '@/components/modals/ProposeProjectModal';
import { mockProjects } from '@/lib/mock-data';
import { ResearchProject } from '@/types';
import {
  FlaskConical,
  Sparkles,
  Lightbulb,
  Search,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  PlusCircle,
  HelpCircle,
  Layers,
  FileCode2
} from 'lucide-react';

export default function ResearchPage() {
  const [projectsList, setProjectsList] = useState<ResearchProject[]>(mockProjects);
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [isProposeOpen, setIsProposeOpen] = useState(false);

  const domains = [
    'All',
    'AI / Machine Learning',
    'Computer Vision & Robotics',
    'Predictive Maintenance',
    'Cyber Security & IoT',
    'AI / Natural Language Processing',
    'IoT & Smart Cities'
  ];

  const filteredProjects = projectsList.filter(p => {
    const matchesDomain = selectedDomain === 'All' || p.domain === selectedDomain;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  const handleProposalSubmitted = (data: ProposedProjectData) => {
    // Add custom proposal as an active project card in the demo state
    const newDemoProject: ResearchProject = {
      id: 'prop-' + Date.now(),
      title: data.title,
      domain: data.domain,
      shortDescription: data.problemStatement.slice(0, 120) + '...',
      fullDescription: `${data.problemStatement} \n\nProposed Solution: ${data.proposedSolution}`,
      technologies: data.requiredSkills.split(',').map((s: string) => s.trim()),
      status: 'Recruiting',
      teamSize: 1,
      openPositions: 3,
      mentor: 'Assigned to NexArc Review Committee',
      leadStudent: `${data.fullName} (${data.college})`,
      requirements: ['Enthusiastic student collaborators', 'Domain curiosity'],
      duration: '6 Months'
    };
    setProjectsList([newDemoProject, ...projectsList]);
  };

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-blue-950 via-slate-950 to-[#0B132B] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <FlaskConical className="w-4 h-4 text-amber-300" />
                <span>STUDENT RESEARCH & INNOVATION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Pioneering Student <br />
                <span className="text-amber-400">Research & IEEE Publications</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Join live student-led engineering research labs across AI, Edge Vision, TinyML, and Cyber-Physical Systems. Receive faculty guidance, access compute hardware, and publish at international conferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsProposeOpen(true)}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>Propose Your Research Idea</span>
                </button>
                <Link
                  href="/contact?type=research"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition flex items-center gap-2"
                >
                  <span>Join a Research Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Domain Filter Bar */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full lg:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects by keyword or tech stack..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
                />
              </div>

              {/* Domain pills */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                {domains.map(dom => (
                  <button
                    key={dom}
                    onClick={() => setSelectedDomain(dom)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                      selectedDomain === dom
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {dom}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* "Our Research Projects" Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Our Research Projects
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Showing {filteredProjects.length} active research initiatives open for student contribution.
                </p>
              </div>

              <button
                onClick={() => setIsProposeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Submit Idea</span>
              </button>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 p-8">
                <FlaskConical className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 text-sm">No Matching Research Projects</h4>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Try adjusting your search criteria or submit your own research proposal.
                </p>
                <button
                  onClick={() => setIsProposeOpen(true)}
                  className="px-5 py-2 bg-blue-700 text-white font-bold text-xs rounded-xl"
                >
                  Propose This Idea Now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={p => setSelectedProject(p)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* How to Join an Existing Project */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full uppercase tracking-wider mb-2 border border-blue-100">
                PARTICIPATION GUIDE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How Students Can Join a Research Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center mb-4">
                  01
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Browse & Review Open Slots
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore active projects in AI, TinyML, IoT, or Vision that match your technical curiosity and available semester hours.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center mb-4">
                  02
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Register Interest & Statement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Click 'View Details' on any project card and submit a brief 2-sentence note highlighting your programming skills or coursework.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center mb-4">
                  03
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Mentor Sync & Lab Onboarding
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The faculty advisor and student lead connect with you via email, grant Git repository access, and assign your research module.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Propose Your Own Research Idea Section */}
        <section id="propose" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STUDENT INCUBATOR</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Have Your Own Research Idea?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Don't let your innovative ideas stay as rough notes. Submit your problem statement and architecture to get senior faculty mentorship, lab compute access, and co-authorship on IEEE papers.
                </p>
              </div>

              <button
                onClick={() => setIsProposeOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-xl transition flex items-center gap-2 shrink-0 transform hover:scale-105"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Propose Your Research Idea Now</span>
              </button>
            </div>
          </div>
        </section>

        {/* Modals */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ProposeProjectModal
          isOpen={isProposeOpen}
          onClose={() => setIsProposeOpen(false)}
          onSubmitted={handleProposalSubmitted}
        />
      </div>
  );
}

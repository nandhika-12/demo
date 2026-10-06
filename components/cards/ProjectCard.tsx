'use client';

import React from 'react';
import { ResearchProject } from '@/types';
import { Users, Clock, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: ResearchProject;
  onSelect: (project: ResearchProject) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full border border-blue-100">
            {project.domain}
          </span>
          <span
            className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${
              project.status === 'Recruiting'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[11px] font-medium rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{project.teamSize} team</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{project.duration}</span>
          </div>
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition"
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  href: string;
  tag: string;
  tagColor?: string;
  features: string[];
  stats?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  icon: Icon,
  href,
  tag,
  features,
  stats
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
            <Icon className="w-7 h-7" />
          </div>
          <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200/80 tracking-wide uppercase">
            {tag}
          </span>
        </div>

        {/* Subtitle & Title */}
        <p className="text-xs font-bold tracking-wider text-amber-700 uppercase mb-1">{subtitle}</p>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>

        {/* Bullet Highlights */}
        <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center text-xs text-slate-700 font-medium gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Link Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        {stats ? (
          <span className="text-xs font-semibold text-slate-500">{stats}</span>
        ) : (
          <span className="text-xs font-semibold text-blue-700">Explore Pathway</span>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-blue-800 group-hover:translate-x-1 transition-all"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import {
  CpuIcon,
  BotIcon,
  WrenchIcon,
  NetworkIcon,
  DevicesIcon,
  LightbulbIcon,
} from "./Icons";

export default function Research() {
  const areas = [
    {
      title: "Artificial Intelligence",
      description:
        "Theoretical fundamentals, machine cognition, probabilistic reasoning, and knowledge graph representations.",
      icon: CpuIcon,
      badgeColor:
        "bg-cyan-50 dark:bg-cyan-950/80 border-cyan-200/60 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300",
    },
    {
      title: "Generative AI & Autonomous Agents",
      description:
        "Multi-agent orchestrations, chain-of-thought prompting, function calling routines, and iterative planning heuristics.",
      icon: BotIcon,
      badgeColor:
        "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300",
    },
    {
      title: "AI Automation",
      description:
        "Streamlining manual data operations, continuous automated workflows, and self-correcting computational scripts.",
      icon: WrenchIcon,
      badgeColor:
        "bg-cyan-50 dark:bg-cyan-950/80 border-cyan-200/60 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300",
    },
    {
      title: "Machine Learning Systems",
      description:
        "Dataset preprocessing pipelines, feature engineering, loss optimization, and evaluation metrics across edge hardware.",
      icon: NetworkIcon,
      badgeColor:
        "bg-lime-50 dark:bg-lime-950/80 border-lime-200/60 dark:border-lime-800/60 text-lime-800 dark:text-lime-300",
    },
    {
      title: "Modern Web and App Development",
      description:
        "Ultra-fast browser experiences, real-time client state management, and modern component systems for clean utility.",
      icon: DevicesIcon,
      badgeColor:
        "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200",
    },
    {
      title: "Technology and Innovation",
      description:
        "Translating emergent computational research into functional open-source tools with tangible human utility.",
      icon: LightbulbIcon,
      badgeColor:
        "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200/60 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300",
    },
  ];

  return (
    <section
      className="w-full py-20 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80"
      id="research"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              04 // Scientific Horizons
            </span>
          </div>
          <h2 className="heading-tight text-3xl font-bold text-[#111827] dark:text-white">
            Areas of Interest &amp; Research Focus
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 max-w-2xl">
            The specialized computational subfields and technological paradigms
            where I dedicate my ongoing study.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${area.badgeColor}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-[#111827] dark:text-white">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


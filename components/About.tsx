import React from "react";
import {
  VerifiedIcon,
  BankIcon,
  BrainIcon,
  CodeIcon,
  BotIcon,
  LayersIcon,
  RocketIcon,
} from "./Icons";

export default function About() {
  return (
    <section
      className="w-full py-20 bg-[#F8FAFC] dark:bg-[#0E131F] border-b border-slate-200/80 dark:border-slate-800/80"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              01 // Identity &amp; Trajectory
            </span>
          </div>
          <h2 className="heading-tight text-3xl font-bold text-[#111827] dark:text-white">
            Academic Builder Foundation
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 max-w-2xl">
            A transparent snapshot of who I am, where I am headed, and what fuels
            my curiosity in technology.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Tile 1: Profile Overview (7 Cols) */}
          <div className="md:col-span-7 bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-200/60 dark:border-cyan-800/60">
                  Profile Overview
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Status: Active Builder
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-white tracking-tight">
                Driven by Applied Intelligence &amp; Practical Problem Solving
              </h3>
              <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                I am an undergraduate student specialized in Artificial
                Intelligence at my core. Passionate about machine learning
                pipelines, autonomous systems, modern web software, and systemic
                automation. Rather than waiting for hypotheticals, I ground my
                understanding through continuous implementation, building
                prototypes that explore the frontier of AI capabilities.
              </p>

              {/* Academic Trust Banner */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800 flex items-start gap-3 mt-1">
                <VerifiedIcon size={20} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#111827] dark:text-white">
                    Authentic Academic Trajectory
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    Proudly crafting real projects and research foundations as
                    an active undergraduate student with zero artificial role
                    titles or fabricated employment history.
                  </span>
                </div>
              </div>
            </div>

            {/* Traits Pills */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mr-1">
                Personal Qualities:
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/70 dark:border-slate-700">
                Curious Learner
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/70 dark:border-slate-700">
                Problem Solver
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/70 dark:border-slate-700">
                Creative Thinker
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/70 dark:border-slate-700">
                Adaptable
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium border border-emerald-200/70 dark:border-emerald-800/60">
                Continuous Improvement
              </span>
            </div>
          </div>

          {/* Bento Tile 2: Academic Profile Detail (5 Cols) */}
          <div className="md:col-span-5 bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-200/60 dark:border-indigo-800/60">
                  Institution Matrix
                </span>
                <BankIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>

              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  Academic Degree
                </span>
                <h4 className="text-lg font-bold text-[#111827] dark:text-white mt-0.5">
                  B.Tech in Computer Science &amp; Engineering
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Specialization in Artificial Intelligence
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-[#111827] dark:text-white">
                    2023 – 2027
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                    Standing
                  </span>
                  <span className="text-sm font-bold text-cyan-700 dark:text-cyan-400">
                    Undergraduate
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                  Computational Lab Focus
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    PyTorch Labs
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    Data Structures
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    NLP Models
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>Batch Progression: On-track and advancing</span>
            </div>
          </div>

          {/* Bento Tile 3: Career Goals & Aspirations (Full Width Bento / 12 Cols) */}
          <div className="md:col-span-12 bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                  Long-Term Trajectory
                </span>
                <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                  Career Goals &amp; Engineering Aspirations
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">
                Target Domains
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-colors flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-100/70 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 flex items-center justify-center">
                  <BrainIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  AI/ML Engineering
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  Architecting scalable neural networks, fine-tuning foundation
                  weights, and production inferencing.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center">
                  <CodeIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  Software Development
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  Engineering reliable systems, optimized algorithm runtimes,
                  and clean modular codebases.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                  <BotIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  Generative AI &amp; Agents
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  Building autonomous task planners, multi-agent frameworks, and
                  retrieval-augmented pipelines.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-colors flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-100/70 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 flex items-center justify-center">
                  <LayersIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  Full-Stack Development
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  Bridging intelligent backend endpoints with intuitive,
                  hyper-responsive user web apps.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 hover:border-lime-400 dark:hover:border-lime-500/50 transition-colors flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-lime-100 dark:bg-lime-950/80 text-lime-800 dark:text-lime-300 flex items-center justify-center">
                  <RocketIcon size={20} />
                </div>
                <span className="text-sm font-semibold text-[#111827] dark:text-white">
                  Freelance &amp; Internships
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  Applying skills to real business problems, high-velocity teams,
                  and research consortiums.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


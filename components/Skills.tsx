import React from "react";
import { CodeIcon, BrainIcon, GlobeIcon, WrenchIcon } from "./Icons";

export default function Skills() {
  return (
    <section
      className="w-full py-20 bg-[#F8FAFC] dark:bg-[#0E131F] border-b border-slate-200/80 dark:border-slate-800/80"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              03 // Technical Arsenal
            </span>
          </div>
          <h2 className="heading-tight text-3xl font-bold text-[#111827] dark:text-white">
            Tools, Frameworks &amp; Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 max-w-2xl">
            Structured inventory of languages, modeling ecosystems, web
            technologies, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Programming Languages */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60 flex items-center justify-center">
                <CodeIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111827] dark:text-white">
                  Programming
                </h3>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  Core Foundation
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Python
                </span>
                <span className="text-[10px] text-cyan-700 dark:text-cyan-300 bg-cyan-100/60 dark:bg-cyan-950 px-1.5 py-0.5 rounded font-semibold">
                  Primary
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Java
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  OOP / Systems
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  C
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Memory / Low-level
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  SQL
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Relational
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 2: AI & Machine Learning */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center">
                <BrainIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111827] dark:text-white">
                  AI &amp; ML
                </h3>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  Intelligent Systems
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Machine Learning
                </span>
                <span className="text-[10px] text-indigo-700 dark:text-indigo-300 bg-indigo-100/60 dark:bg-indigo-950 px-1.5 py-0.5 rounded font-semibold">
                  Supervised
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  NLP
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Transformers
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Deep Learning
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Neural Nets
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Scikit-learn
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Pipelines
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Web Engineering */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60 flex items-center justify-center">
                <GlobeIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111827] dark:text-white">
                  Web Engineering
                </h3>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  Interactive Client
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  React
                </span>
                <span className="text-[10px] text-cyan-700 dark:text-cyan-300 bg-cyan-100/60 dark:bg-cyan-950 px-1.5 py-0.5 rounded font-semibold">
                  Components
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  JavaScript
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  ES6+ Async
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  HTML5
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Semantic
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  CSS3
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Tailwind/Flex
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 4: Developer Ecosystem */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <WrenchIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#111827] dark:text-white">
                  Dev Ecosystem
                </h3>
                <span className="font-mono text-[10px] text-slate-400 uppercase">
                  Workflows
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Git
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.5 rounded font-semibold">
                  VCS
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  GitHub
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Collaboration
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  VS Code
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Editor
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                <span className="font-medium text-[#111827] dark:text-white">
                  Google Colab
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  GPU Compute
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import {
  SparklesIcon,
  ShieldAlertIcon,
  TrophyIcon,
  ScienceIcon,
  CodeIcon,
  BookOpenIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  VerifiedIcon,
  ActivityIcon,
  FileTextIcon,
  SyncIcon,
} from "./Icons";

export default function Projects() {
  return (
    <section
      className="w-full py-20 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
              02 // Selected Projects
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="heading-tight text-3xl font-bold text-[#111827] dark:text-white">
                Computational Lab &amp; Engineering Work
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 max-w-2xl">
                Real implementations spanning multimodal transformer deep
                learning, safety analytics NLP, and productivity web systems.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 shrink-0 group"
              href="https://github.com/harsh0150"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Explore all repositories on GitHub</span>
              <ArrowRightIcon
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* PROJECT 1: Multimodal Hateful Meme Detection */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-200/60 dark:border-cyan-800/60">
                    Research Project
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                    AI / Computer Vision &amp; NLP
                  </span>
                </div>
                <SparklesIcon
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Multimodal Hateful Meme Detection
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mt-2 leading-relaxed">
                  Image and text-based AI classification featuring sarcasm-aware
                  multimodal learning for nuanced hateful meme detection across
                  combined visual and textual contexts. Solves context divergence
                  where individual modalities appear benign.
                </p>
              </div>

              {/* Pipeline Visual Architecture Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2.5">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200/60 dark:border-slate-800">
                  <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>{" "}
                    Architecture Pipeline
                  </span>
                  <span className="font-mono text-[10px] text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    Cross-Attention Head
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left pt-1">
                  <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                    <span className="font-mono text-[10px] text-cyan-700 dark:text-cyan-300 font-semibold uppercase block">
                      Vision Stream
                    </span>
                    <span className="font-mono text-xs text-[#111827] dark:text-white font-semibold">
                      CLIP-ViT-B/32
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                      768-dim Visual Tensor
                    </span>
                  </div>

                  <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                    <span className="font-mono text-[10px] text-indigo-700 dark:text-indigo-300 font-semibold uppercase block">
                      Text Stream
                    </span>
                    <span className="font-mono text-xs text-[#111827] dark:text-white font-semibold">
                      RoBERTa-Large
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                      1024-dim Context
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center py-0.5">
                  <ArrowDownIcon size={16} className="text-slate-400" />
                </div>

                <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#111827] dark:text-white font-medium">
                    Cross-Attention Fusion Layer
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Sarcasm Discriminator
                  </span>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  CLIP
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  RoBERTa
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Cross-Attention
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  PyTorch / Python
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeIcon size={15} />
                <span>Code / GitHub</span>
              </a>
              <a
                className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <BookOpenIcon size={15} />
                <span>Documentation &amp; Paper Reference</span>
              </a>
            </div>
          </div>

          {/* PROJECT 2: SIF Risk Detection System */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-200/60 dark:border-indigo-800/60">
                    Industrial Safety AI
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                    NLP &amp; Risk Analytics
                  </span>
                </div>
                <ShieldAlertIcon
                  size={20}
                  className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  SIF Risk Detection System
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mt-2 leading-relaxed">
                  AI/NLP-based industrial safety solution that detects Serious
                  Injury and Fatality (SIF) precursors by analyzing unsafe acts,
                  unsafe conditions, and near-miss event logs to avert
                  catastrophic workplace accidents.
                </p>
              </div>

              {/* Feature Breakdown Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2.5">
                <div className="flex items-start gap-2">
                  <VerifiedIcon
                    size={18}
                    className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-semibold text-[#111827] dark:text-white block">
                      Multi-category risk tagging
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Granular classification of physical hazards, procedural
                      bypasses, and environmental factors.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                  <ActivityIcon
                    size={18}
                    className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-semibold text-[#111827] dark:text-white block">
                      Incident severity scoring
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Dynamic probabilistic severity estimation derived from
                      narrative lexical weights.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                  <FileTextIcon
                    size={18}
                    className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-semibold text-[#111827] dark:text-white block">
                      Automated near-miss text extraction
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Transforms unstructured textual shift logs into standardized
                      analytical telemetry.
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Python
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  NLP
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Machine Learning
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Scikit-learn
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeIcon size={15} />
                <span>Source Repository</span>
              </a>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Safety ML Model Pipeline
              </span>
            </div>
          </div>

          {/* PROJECT 3: Personal Productivity Application */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                    Web Application
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                    Gamified System
                  </span>
                </div>
                <TrophyIcon
                  size={20}
                  className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  Personal Productivity Application
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mt-2 leading-relaxed">
                  Productivity-focused application featuring daily routines and
                  goal tracking, real-time progress monitoring, milestone
                  streaks, and gamification to elevate personal habit formation.
                </p>
              </div>

              {/* Habit Progress Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
                    Habit Streak Velocity
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    21 Days Consistent
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-cyan-500 to-[#6366F1] h-1.5 rounded-full w-[82%]"></div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-xs">
                  <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px]">
                      Daily Tasks
                    </span>
                    <span className="text-[#111827] dark:text-white font-bold">
                      12/14
                    </span>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px]">
                      XP Earned
                    </span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-bold">
                      1,840
                    </span>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700">
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px]">
                      Level
                    </span>
                    <span className="text-indigo-700 dark:text-indigo-300 font-bold">
                      Rank 04
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  React
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  JavaScript
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  HTML/CSS
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Local Persistence
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeIcon size={15} />
                <span>GitHub Repository</span>
              </a>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Web Client / State Engine
              </span>
            </div>
          </div>

          {/* PROJECT 4: Cross-Lingual Natural Language Processing */}
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-7 lg:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-200/60 dark:border-cyan-800/60">
                    Ongoing Research
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                    Computational Linguistics
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-lime-50 dark:bg-lime-950/60 text-lime-800 dark:text-lime-300 font-mono text-[10px] font-semibold border border-lime-200 dark:border-lime-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]"></span>
                  Active Research
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Cross-Lingual Natural Language Processing
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mt-2 leading-relaxed">
                  Cross-Lingual Semantic Understanding of Tamil and English
                  Newspaper Articles Using NLP. Highlighting cross-lingual
                  semantic alignment, bilingual embeddings, and multi-domain
                  evaluation across Tamil &amp; English news corpora to capture
                  contextual nuance.
                </p>
              </div>

              {/* Alignment Diagram Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-600 dark:text-slate-300">
                    Lexical Vector Alignment
                  </span>
                  <span className="text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-[11px]">
                    Cosine Distance = 0.941
                  </span>
                </div>

                <div className="p-2.5 rounded bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between font-mono text-xs">
                  <span className="text-cyan-700 dark:text-cyan-300 font-medium">
                    Tamil Articles [L1]
                  </span>
                  <SyncIcon size={15} className="text-slate-400" />
                  <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                    English Articles [L2]
                  </span>
                </div>

                <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  &ldquo;Bilingual semantic embedding spaces preserving regional
                  journalistic nuances across corpora.&rdquo;
                </span>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  NLP
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Cross-Lingual Semantics
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Tamil &amp; English
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] border border-slate-200/70 dark:border-slate-700">
                  Python / Transformers
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <a
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ScienceIcon size={15} />
                <span>Research Lab Notes</span>
              </a>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                In Peer Prep
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


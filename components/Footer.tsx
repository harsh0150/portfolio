import React from "react";
import { CodeIcon, LinkedinIcon, MailIcon, CpuIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#0B0F19] border-t border-slate-200/80 dark:border-slate-800/80 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#111827] dark:text-white">
            Harsh Anand
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            v2.5
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            &copy; 2025 Harsh Anand. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
          <a
            className="flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            href="https://github.com/harsh0150"
            rel="noopener noreferrer"
            target="_blank"
          >
            <CodeIcon size={15} />
            <span>GitHub</span>
          </a>
          <a
            className="flex items-center gap-1 hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors"
            href="https://www.linkedin.com/in/harsh-anand-7a343228a"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            href="mailto:emailtoharsh01@gmail.com"
          >
            <MailIcon size={15} />
            <span>Email</span>
          </a>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800">
          <CpuIcon size={14} className="text-cyan-600 dark:text-cyan-400" />
          <span>Designed with AI &amp; Code</span>
        </div>
      </div>
    </footer>
  );
}

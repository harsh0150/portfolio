import React from "react";
import Image from "next/image";
import {
  SchoolIcon,
  TerminalIcon,
  ChatIcon,
  FileTextIcon,
  ArrowUpRightIcon,
  CodeIcon,
  LinkedinIcon,
  MailIcon,
  VerifiedIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#0B0F19] border-b border-slate-100 dark:border-slate-800/80">
      {/* Subtle Linear ambient glow grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_75%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-transparent dark:from-cyan-400/15 dark:via-indigo-500/15 blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Info */}
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            {/* Academic Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium">
                Undergraduate Student{" "}
                <span className="text-slate-300 dark:text-slate-700">·</span> Batch
                2023–2027{" "}
                <span className="text-slate-300 dark:text-slate-700">·</span>{" "}
                Aspiring AI Engineer &amp; Software Developer
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="heading-tight text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#111827] dark:text-white leading-[1.08] tracking-tight">
              Building Intelligent Solutions with{" "}
              <span className="bg-gradient-to-r from-[#06B6D4] via-[#4338CA] dark:via-[#818CF8] to-[#6366F1] bg-clip-text text-transparent">
                AI &amp; Code.
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-400 leading-relaxed max-w-3xl font-normal">
              A technology enthusiast passionate about Artificial Intelligence,
              Machine Learning, software development, and automation. Turning
              ideas into practical solutions through continuous learning,
              experimentation, and building real-world projects.
            </p>

            {/* Degree Pill */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
              <SchoolIcon size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="font-medium">
                B.Tech in Computer Science &amp; Engineering (Artificial Intelligence)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] text-xs font-semibold shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                href="#projects"
              >
                <TerminalIcon size={16} />
                <span>Explore Projects</span>
              </a>

              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#111827] dark:text-slate-100 text-xs font-semibold hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all shadow-sm"
                href="#contact"
              >
                <ChatIcon size={16} className="text-[#6366F1] dark:text-indigo-400" />
                <span>Connect with Me</span>
              </a>

              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                href="https://drive.google.com/file/d/12z5LHYyLxTw0xUkOme_HmHmCLnKeAMg4/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FileTextIcon size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span className="font-mono text-[11px]">View Resume</span>
                <ArrowUpRightIcon size={13} />
              </a>
            </div>

            {/* Social Matrix */}
            <div className="flex flex-wrap items-center gap-5 pt-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 w-full">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                href="https://github.com/harsh0150"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodeIcon size={16} />
                <span>github.com/harsh0150</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <a
                className="flex items-center gap-1.5 hover:text-[#6366F1] dark:hover:text-indigo-400 transition-colors"
                href="https://www.linkedin.com/in/harsh-anand-7a343228a"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinIcon size={16} />
                <span>in/harsh-anand-7a343228a</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <a
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                href="mailto:emailtoharsh01@gmail.com"
              >
                <MailIcon size={16} />
                <span>emailtoharsh01@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Portrait Card (Photo Integration) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] rounded-2xl p-2.5 bg-gradient-to-b from-slate-200/90 to-slate-100/60 dark:from-slate-800 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xl group">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
                <Image
                  alt="Harsh Anand — AI & Software Engineering Undergrad"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                  src="/harsh-anand.png"
                  width={600}
                  height={800}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#A3E635]"></span>
                    <span className="font-medium text-slate-100 text-xs">
                      Harsh Anand
                    </span>
                  </div>
                  <span className="text-[10px] text-cyan-300 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    B.Tech AI &apos;27
                  </span>
                </div>
              </div>
              <div className="pt-2 px-1 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>AI &amp; Software Undergrad</span>
                <span className="text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <VerifiedIcon size={13} /> Active Builder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


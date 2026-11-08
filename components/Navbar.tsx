"use client";

import React, { useSyncExternalStore, useState, useEffect } from "react";
import { SunIcon, MoonIcon, SendIcon } from "./Icons";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

function getServerSnapshot(): "light" | "dark" {
  return "dark";
}

export default function Navbar() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const activeTheme = localStorage.getItem("theme") || "dark";
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand & Status */}
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0B0F19] to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white flex items-center justify-center font-mono font-semibold text-xs border border-slate-700/60 dark:border-slate-700/80 shadow-sm group-hover:scale-[1.03] transition-transform">
              HA
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm tracking-tight text-[#111827] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Harsh Anand
              </span>
              <span className="text-[11px] font-mono text-[#64748B] dark:text-slate-400 hidden sm:block tracking-tight">
                AI Engineer &amp; Developer
              </span>
            </div>
          </a>

          {/* Live Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3E635] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84cc16]"></span>
            </span>
            <span className="font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300">
              Available for Internships &amp; Collabs
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/70 dark:bg-slate-900/90 p-1 border border-slate-200/60 dark:border-slate-800">
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            href="#skills"
          >
            Technical Stack
          </a>
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            href="#about"
          >
            Identity
          </a>
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            href="#research"
          >
            Research
          </a>
          <a
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Right CTAs & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle Dark Mode"
            className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-[#111827] dark:hover:text-white transition-all focus:outline-none cursor-pointer"
            id="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? (
              <SunIcon size={16} className="text-amber-400" />
            ) : (
              <MoonIcon size={16} className="text-slate-700" />
            )}
          </button>

          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#6366F1] text-white text-xs font-semibold shadow-sm hover:opacity-95 transition-opacity"
            href="mailto:emailtoharsh01@gmail.com"
          >
            <SendIcon size={13} />
            <span>Get in Touch</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-lg flex flex-col gap-2">
          <a
            className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technical Stack
          </a>
          <a
            className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            Identity
          </a>
          <a
            className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
          >
            Research
          </a>
          <a
            className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import {
  MailIcon,
  LinkedinIcon,
  CodeIcon,
  FileTextIcon,
  ArrowUpRightIcon,
  CopyIcon,
  CheckIcon,
  SendIcon,
} from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "internship",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emailtoharsh01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "internship",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      className="w-full py-20 bg-[#F8FAFC] dark:bg-[#0E131F]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info Panel */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                    05 // Get in Touch
                  </span>
                </div>
                <h2 className="heading-tight text-3xl font-bold text-[#111827] dark:text-white">
                  Let&apos;s Build Something Remarkable.
                </h2>
                <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed pt-1">
                  Currently looking for internships, collaborative research
                  projects, freelance opportunities, and chances to apply AI and
                  software engineering skills to impactful problems.
                </p>
              </div>

              {/* Connection Direct Links */}
              <div className="flex flex-col gap-3 pt-2">
                {/* Email with Instant Copy feedback */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <MailIcon
                      size={20}
                      className="text-cyan-600 dark:text-cyan-400"
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Primary Email
                      </span>
                      <span className="font-mono text-xs text-[#111827] dark:text-white font-medium">
                        emailtoharsh01@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-mono transition-all flex items-center gap-1 shadow-sm cursor-pointer"
                    onClick={handleCopyEmail}
                    type="button"
                  >
                    {copied ? (
                      <>
                        <CheckIcon size={14} className="text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-all group"
                  href="https://www.linkedin.com/in/harsh-anand-7a343228a"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon
                      size={20}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Professional Network
                      </span>
                      <span className="font-mono text-xs text-[#111827] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        linkedin.com/in/harsh-anand-7a343228a
                      </span>
                    </div>
                  </div>
                  <ArrowUpRightIcon
                    size={16}
                    className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                  />
                </a>

                {/* GitHub */}
                <a
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-all group"
                  href="https://github.com/harsh0150"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <CodeIcon
                      size={20}
                      className="text-slate-700 dark:text-slate-300"
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Source Code
                      </span>
                      <span className="font-mono text-xs text-[#111827] dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        github.com/harsh0150
                      </span>
                    </div>
                  </div>
                  <ArrowUpRightIcon
                    size={16}
                    className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                  />
                </a>

                {/* Resume */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <FileTextIcon
                      size={20}
                      className="text-cyan-600 dark:text-cyan-400"
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Curriculum Vitae
                      </span>
                      <span className="font-mono text-xs text-[#111827] dark:text-white font-medium">
                        Harsh Anand Resume
                      </span>
                    </div>
                  </div>
                  <a
                    className="px-3.5 py-1.5 rounded-lg bg-[#0B0F19] dark:bg-white text-white dark:text-[#0B0F19] text-xs font-mono font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-1"
                    href="https://drive.google.com/file/d/12z5LHYyLxTw0xUkOme_HmHmCLnKeAMg4/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Open</span>
                    <ArrowUpRightIcon size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-6 bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-7">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckIcon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] dark:text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out! Your message has been safely
                    received. I will respond to your email as soon as possible.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-[#111827] dark:text-white">
                      Direct Inquiry Terminal
                    </span>
                    <span className="font-mono text-[10px] uppercase text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800">
                      Encrypted transmission
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400"
                      htmlFor="contact-name"
                    >
                      Your Name
                    </label>
                    <input
                      className="w-full text-xs font-sans rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-[#111827] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 bg-white dark:bg-slate-800 transition-all"
                      id="contact-name"
                      placeholder="Alex Mercer"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400"
                      htmlFor="contact-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full text-xs font-sans rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-[#111827] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 bg-white dark:bg-slate-800 transition-all"
                      id="contact-email"
                      placeholder="alex@domain.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400"
                      htmlFor="contact-project"
                    >
                      Opportunity / Project Type
                    </label>
                    <select
                      className="w-full text-xs font-sans rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-[#111827] dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 bg-white dark:bg-slate-800 transition-all"
                      id="contact-project"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                    >
                      <option value="internship">AI / Software Internship</option>
                      <option value="research">Collaborative Research Project</option>
                      <option value="freelance">Freelance Development Opportunity</option>
                      <option value="general">
                        Technical Discussion / General Inquiry
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400"
                      htmlFor="contact-message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="w-full text-xs font-sans rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-[#111827] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 bg-white dark:bg-slate-800 resize-none transition-all"
                      id="contact-message"
                      placeholder="Tell me about the problem, vision, or timeline..."
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <button
                    className="mt-1 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#06B6D4] to-[#6366F1] text-white text-xs font-semibold hover:opacity-95 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    type="submit"
                  >
                    <SendIcon size={16} />
                    <span>Dispatch Transmission</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


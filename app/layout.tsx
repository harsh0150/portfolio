import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Anand — AI Engineer & Developer",
  description:
    "Portfolio of Harsh Anand — Undergraduate Computer Science & Engineering (Artificial Intelligence) student, aspiring AI Engineer & Software Developer building intelligent solutions with AI & Code.",
  keywords: [
    "Harsh Anand",
    "AI Engineer",
    "Machine Learning",
    "Software Developer",
    "Multimodal AI",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Harsh Anand" }],
  openGraph: {
    title: "Harsh Anand — AI Engineer & Developer",
    description:
      "Building Intelligent Solutions with AI & Code. Undergraduate in CSE (Artificial Intelligence).",
    url: "https://github.com/harsh0150",
    siteName: "Harsh Anand Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0B0F19] text-[#111827] dark:text-slate-100 selection:bg-cyan-500/15 selection:text-cyan-950 dark:selection:text-cyan-200 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F19] text-[#111827] dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      <main className="w-full flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

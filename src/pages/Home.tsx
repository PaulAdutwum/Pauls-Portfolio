import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

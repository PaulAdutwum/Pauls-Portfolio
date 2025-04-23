import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Awards from "@/components/sections/Awards";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Awards />
      <Blog />
      <Contact />
    </div>
  );
}

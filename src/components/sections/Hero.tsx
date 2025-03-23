import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FileDown,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import confetti from "canvas-confetti";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const [nameTyped, setNameTyped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 1000);
  }, []);

  const particlesInit = async (engine: any) => {
    console.log("Initializing tsParticles...");
    await loadFull(engine);
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center text-center md:text-left relative overflow-hidden"
    >
      {/* Particle Effect Background */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "#000" },
          particles: {
            number: { value: 100 },
            color: { value: "#3b82f6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="absolute top-3 left-3 md:top-8 md:left-8 text-xl md:text-2xl italic text-muted-foreground mb-4 flex items-center gap-2 z-50"
      >
        Hello, welcome to my Portfolio!
        <motion.span
          className="text-4xl"
          role="img"
          aria-label="wave"
          animate={{ rotate: [0, 20, 0, -20, 0], x: [-5, 5, -5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          👋
        </motion.span>
      </motion.h2>

      {/*  Social Links */}
      <div className="absolute top-12 right-10 flex mt-6 gap-4 z-10">
        <motion.a
          href="https://www.linkedin.com/in/paul-adutwum-aaaabb27b/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Linkedin className="h-7 w-7 hover:text-primary transition-all" />
        </motion.a>

        <motion.a
          href="https://github.com/PaulAdutwum?tab=overview&from=2025-01-01&to=2025-01-06"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Github className="h-7 w-7 hover:text-primary transition-all" />
        </motion.a>
      </div>

      {/* Headshot Image */}
      <motion.div className="relative flex justify-center items-center p-2 bg-black rounded-full border-2 border-blue-500 shadow-lg overflow-hidden">
        <motion.img
          src="/headshot.png"
          alt="Paul Adutwum"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full object-top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
        />
      </motion.div>

      <div className="md:ml-10 mt-6 md:mt-0 relative z-10">

        {/*  Typing Animation for Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2 flex items-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'I am <span style="color: #3b82f6; font-weight: bold;">Paul Adutwum</span>'
                )
                .callFunction(() => setNameTyped(true))
                .start();
            }}
            options={{ autoStart: true, loop: false, delay: 100, cursor: "|" }}
          />
        </h1>

        {/* Fullstack Developer Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 flex items-center gap-2"
        >
          Aspiring Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 items-center"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              <Briefcase className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              {" "}
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>
      </div>

      {/*  Scroll Down Indicator icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="absolute bottom-6 right-6 animate-bounce z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}

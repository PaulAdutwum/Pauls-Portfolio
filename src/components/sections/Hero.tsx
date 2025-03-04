import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);
  const [nameTyped, setNameTyped] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center relative"
    >
      {/* Social Icons Positioned at the Top Right */}
      <div className="absolute top-6 right-6 flex gap-4">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all"
        >
          <Linkedin className="h-7 w-7" />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all"
        >
          <Github className="h-7 w-7" />
        </a>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Modern Styled Welcome Text */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl italic text-muted-foreground mb-4"
          >
            Welcome to my Porfolio!
          </motion.h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-2 flex items-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'My name is <span style="color: #3b82f6; font-weight: bold;">Paul Adutwum</span>'
                  )
                  .callFunction(() => setNameTyped(true)) // This replaces onComplete
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 100,
                cursor: "|",
              }}
            />
          </h1>

          {/* Fullstack Developer Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 flex items-center gap-2"
          >
            <span className="text-primary text-3xl">&lt;/&gt;</span> Fullstack
            Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 items-center"
          >
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Paul_Adutwum_Resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="absolute bottom-6 right-6 animate-bounce"
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

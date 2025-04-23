import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import confetti from "canvas-confetti";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [nameHovered, setNameHovered] = useState(false);

  // Professional titles with consistent color scheme
  const titles = ["Artist", "Designer", "Mathematician", "Leader", "Developer"];

  useEffect(() => {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 1000);
  }, []);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Video Background with enhanced fade-in */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-blue-900/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/mainbackgound.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Bottom Left Decorative Element */}
        <motion.div
          className="absolute left-6 bottom-16 md:left-12 md:bottom-24 w-32 h-32 md:w-48 md:h-48 opacity-20"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full border-2 border-white/60"></div>
          <div className="absolute inset-4 rounded-full border-2 border-white/40"></div>
          <div className="absolute inset-8 rounded-full border-2 border-white/20"></div>
        </motion.div>

        {/* Bottom Right Decorative Element */}
        <motion.div
          className="absolute right-6 bottom-24 md:right-16 md:bottom-32 w-40 h-40 md:w-56 md:h-56 opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/5 to-white/30 blur-md"></div>
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-white/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </motion.div>

        {/* Top Right Decorative Element */}
        <motion.div
          className="absolute right-16 top-24 md:right-24 md:top-16 w-28 h-28 md:w-40 md:h-40 opacity-15"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full border border-white/40"></div>
          <div className="absolute inset-3 rounded-full border border-white/30"></div>
          <motion.div
            className="absolute inset-6 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
        </motion.div>
      </div>

      {/* Main Content - Staggered Animation */}
      <motion.div
        className="relative z-20 container mx-auto px-4 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Titles with fluid animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-4 text-white mb-10"
          variants={itemVariants}
        >
          {titles.map((title, index) => (
            <motion.span
              key={title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="text-lg md:text-xl font-light tracking-wide text-white/80"
            >
              {index > 0 && <span className="text-white/30 mr-4">•</span>}
              {title}
            </motion.span>
          ))}
        </motion.div>

        {/* Name with slide-in animation and hover effect */}
        <motion.div
          className="overflow-hidden mb-8 relative"
          variants={itemVariants}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.span
              className="block italic font-bold text-white"
              animate={
                nameHovered
                  ? {
                      textShadow: [
                        "0px 0px 8px rgba(255,255,255,0.3)",
                        "0px 0px 16px rgba(255,255,255,0.6)",
                        "0px 0px 8px rgba(255,255,255,0.3)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: nameHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              PAUL ADUTWUM
            </motion.span>

            {/* Animated underline on hover */}
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-300/80 via-white/80 to-blue-300/80 mt-2 mx-auto"
              initial={{ width: "0%" }}
              animate={{ width: nameHovered ? "100%" : "60%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.h1>
        </motion.div>

        {/* Education */}
        <motion.div className="text-center mb-24" variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-light text-white/90 tracking-wider mb-1">
            Engineering and Mathematics student
          </h2>
          <p className="text-lg text-white/80 font-light">Bates College</p>
        </motion.div>

        {/* Scroll Indicator with enhanced styling - positioned lower */}
        <motion.div
          className="absolute bottom-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-white hover:text-white transition-all duration-300 group"
            whileHover={{ y: -5 }}
            whileTap={{ y: 2 }}
          >
            <span className="text-sm font-light mb-2 opacity-80 group-hover:opacity-100">
              Scroll Down
            </span>
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-5 h-5 mb-1" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <ArrowDown className="w-5 h-5 opacity-70" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Social Links with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute top-8 right-8 z-30 flex gap-4"
      >
        <motion.a
          href="https://www.linkedin.com/in/paul-adutwum-aaaabb27b/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/10 backdrop-blur-md rounded-full transition-all duration-300"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-5 h-5 text-white" />
        </motion.a>
        <motion.a
          href="https://github.com/PaulAdutwum?tab=overview&from=2025-01-01&to=2025-01-06"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/10 backdrop-blur-md rounded-full transition-all duration-300"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5 text-white" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

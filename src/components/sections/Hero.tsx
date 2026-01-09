import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

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

// Typing animation component
const TypingText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50 + delay); // Typing speed + initial delay

      return () => clearTimeout(timeout);
    } else {
      // Blink cursor after typing is complete
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [currentIndex, text, delay]);

  return (
    <div className={`${className} font-sans tracking-wide`}>
      <span>{displayText}</span>
      {showCursor && (
        <span className="animate-blink border-r-4 border-blue-500 dark:border-blue-400 ml-1">
          &nbsp;
        </span>
      )}
    </div>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [nameHovered, setNameHovered] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    // Set animation as complete after a delay
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000); // Longer animation time

    const showNameTimer = setTimeout(() => {
      setShowTyping(false);
    }, 3500); // Keep typing animation visible longer

    return () => {
      clearTimeout(timer);
      clearTimeout(showNameTimer);
    };
  }, []);

  return (
    <motion.section
      id="hero"
      className={`pt-28 md:pt-16 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-950 to-gray-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      } px-4 sm:px-6 md:px-10 lg:px-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Content - Staggered Animation */}
      <motion.div
        className="relative z-20 container mx-auto px-4 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Professional Image */}
        <motion.div
          className="mb-6 md:mb-12 mt-4"
          variants={itemVariants}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 overflow-hidden rounded-full mx-auto shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="absolute inset-0 rounded-full border-[5px] border-blue-500/50 dark:border-blue-400/50 z-10"></div>
            <div className="absolute inset-0 rounded-full z-5 animate-pulse">
              <div className="absolute inset-0 rounded-full border-[3px] border-blue-400/30 dark:border-blue-500/30 blur-[1px]"></div>
            </div>
            <img
              src="/profile.jpg"
              alt="Paul Adutwum"
              className="w-full h-full object-cover object-top rounded-full"
              style={{ objectPosition: "center 30%" }}
            />
          </motion.div>
        </motion.div>

        {/* Name with typing animation */}
        <motion.div
          className="overflow-hidden mb-4 md:mb-10 relative"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="py-2 md:py-4 px-3 md:px-6 inline-block">
            {showTyping ? (
              <div className="h-[60px] sm:h-[70px] md:h-[100px] flex items-center justify-center">
                <TypingText
                  text="PAUL ADUTWUM"
                  className={`text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold ${
                    isDark ? "text-white" : "text-blue-700"
                  }`}
                  delay={400}
                />
              </div>
            ) : (
              <motion.h1
                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-wide font-sans"
                onMouseEnter={() => setNameHovered(true)}
                onMouseLeave={() => setNameHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.span
                  className={`relative block ${
                    isDark
                      ? "bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-white"
                      : "bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-blue-800 to-blue-600"
                  }`}
                  animate={
                    nameHovered
                      ? {
                          textShadow: [
                            "0px 0px 8px rgba(255,255,255,0.6)",
                            "0px 0px 16px rgba(78,169,255,0.8)",
                            "0px 0px 8px rgba(255,255,255,0.6)",
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
                  className={`h-1.5 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-300/80 via-white/80 to-blue-300/80"
                      : "bg-gradient-to-r from-blue-600/80 via-blue-400/80 to-blue-600/80"
                  } mt-2 mx-auto`}
                  initial={{ width: "0%" }}
                  animate={{ width: nameHovered ? "100%" : "60%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.h1>
            )}
          </div>
        </motion.div>

        {/* Education with typewriter effect */}
        <motion.div
          className="text-center mb-6 md:mb-12 h-14 md:h-22"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {animationComplete ? (
            <div
              className={`text-sm xs:text-base sm:text-xl md:text-2xl font-light tracking-wider font-sans ${
                isDark
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300"
                  : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600"
              }`}
            >
              <span>
                 Student at Bates College
              </span>
            </div>
          ) : (
            <TypingText
              text="Computer Science and Physics student at Bates College"
              className={`text-sm xs:text-base sm:text-xl md:text-2xl font-light tracking-wider ${
                isDark
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300"
                  : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600"
              }`}
              delay={1800}
            />
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 mb-8 md:mb-16"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.a
            href="https://github.com/PaulAdutwum"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/paul-adutwum-aaaabb27b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator with enhanced styling - positioned at extreme bottom right */}
        <motion.div
          className="absolute bottom-0 right-2 sm:right-4 md:right-6 lg:right-8 mb-2 sm:mb-2 md:mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.8,
          }}
        >
          <motion.a
            href="#about"
            className={`flex flex-col items-center ${
              isDark ? "text-white" : "text-gray-800"
            } transition-all duration-300 group font-sans text-xs sm:text-sm md:text-base`}
            whileHover={{ y: -5 }}
            whileTap={{ y: 2 }}
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 ${
                  isDark ? "border-white/50" : "border-gray-800/50"
                } flex items-center justify-center bg-gradient-to-b ${
                  isDark
                    ? "from-blue-600/20 to-blue-900/10"
                    : "from-blue-400/20 to-blue-600/10"
                } backdrop-blur-sm`}
                animate={{
                  y: [0, 10, 0],
                  boxShadow: [
                    isDark
                      ? "0 0 0 rgba(59, 130, 246, 0)"
                      : "0 0 0 rgba(96, 165, 250, 0)",
                    isDark
                      ? "0 0 10px rgba(59, 130, 246, 0.4)"
                      : "0 0 10px rgba(96, 165, 250, 0.3)",
                    isDark
                      ? "0 0 0 rgba(59, 130, 246, 0)"
                      : "0 0 0 rgba(96, 165, 250, 0)",
                  ],
                }}
                transition={{
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </motion.div>
              </motion.div>
              <motion.div
                className={`absolute top-full w-[1px] sm:w-[2px] h-8 sm:h-10 md:h-14 ${
                  isDark ? "bg-white/20" : "bg-gray-800/20"
                }`}
                animate={{
                  height: [5, 10, 5],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

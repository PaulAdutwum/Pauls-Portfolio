import { motion, useMotionValue } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Awards data
const AWARDS = [
  {
    id: "award-1",
    title: "Dana Scholar Award",
    institution: "Bates College",
    year: "2027",
    description:
      "One of just 20 students in the Class of 2027 selected for this prestigious award, honoring exceptional academic achievement, proven leadership potential, and dedicated service to the Bates community.",
    imageUrl: "/danaaward.png",
  },
  {
    id: "award-2",
    title: "Dean's List",
    institution: "Bates College",
    year: "All Semesters",
    description:
      "Recognition for maintaining a GPA above 3.9 consistently throughout academic career.",
    imageUrl: "/deanslsit.png",
  },
  {
    id: "award-3",
    title: "Most Outstanding Community Engagement by a First Year Student",
    institution: "Bates College",
    year: "2024",
    description:
      "Awarded for spearheading student-led community service in Lewiston’s urban neighborhoods and for building volunteer programs that connect Bates students with local initiatives.",
    imageUrl: "/howard.png",
  },
  {
    id: "award-4",
    title: "Stem Scholar",
    institution: "Bates College",
    year: "2024-2025",
    description:
      "Merit-based scholarship awarded for outstanding academic achievement and potential for continued success.",
    imageUrl: "/placeholder-award.png",
  },
];

// Variants for animations
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const awardsContainerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const totalAwards = AWARDS.length;

  const showNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAwards);
  };

  const showPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalAwards) % totalAwards);
  };

  // Auto-play effect
  useEffect(() => {
    // Start the auto-play timer
    const startAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }

      autoPlayRef.current = setInterval(() => {
        if (!isPaused) {
          showNext();
        }
      }, 3000); // Change slide every 3 seconds
    };

    startAutoPlay();

    // Clean up on unmount
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Update position when currentIndex changes
  useEffect(() => {
    if (!awardsContainerRef.current) return;

    const container = awardsContainerRef.current;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const maxItems = Math.floor(containerWidth / (scrollWidth / AWARDS.length));
    const itemWidth = scrollWidth / AWARDS.length;

    // Ensure we don't scroll beyond the end
    const adjustedIndex = Math.min(currentIndex, AWARDS.length - maxItems);
    x.set(-adjustedIndex * itemWidth);
  }, [currentIndex, x]);

  const renderCurrentAward = () => {
    const award = AWARDS[currentIndex];
    return (
      <motion.div
        key={award.id}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", stiffness: 300, damping: 30 },
        }}
        variants={variants}
        className="flex flex-col items-center space-y-4 w-full max-w-lg mx-auto"
      >
        <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${award.imageUrl})` }}
          />
        </div>
        <div className="text-center space-y-2 w-full">
          <h3 className="text-xl md:text-2xl font-bold">{award.title}</h3>
          <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
            <span>{award.institution}</span>
            <span>•</span>
            <span>{award.year}</span>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            {award.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-blue-700/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/3 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-400/10 to-indigo-600/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Honors & Awards
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition for academic excellence and leadership.
          </p>
        </div>

        {/* Awards Carousel */}
        <div
          className="w-full overflow-hidden relative max-w-4xl mx-auto"
          ref={awardsContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {renderCurrentAward()}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={showPrevious}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {AWARDS.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to award ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={showNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

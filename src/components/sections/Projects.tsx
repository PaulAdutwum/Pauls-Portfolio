import React, { useState, useRef, cloneElement, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Clock,
  Code,
  Database,
  Server,
  Cpu,
  Layers,
  ArrowRight,
  Monitor,
  PanelsTopLeft,
  Calendar,
  BarChart2,
  X as XIcon,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Lumeo AI Movie Discovery",
    description:
      "Built an AI powered companion with memory augmentation and sentiment analysis to deliver anonymous, real-time emotional support. Integrated YouTube API with vector search and Redis caching, cutting latency 60% and delivering 8K+ personalized media suggestions monthly.",
    image: "/LUMEO.mp4",
    type: "video",
    stack: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Socket.io"],
      backend: [
        "Pinecone",
        "PostgreSQL",
        "Firebase",
        "OpenAI GPT-4",
        "DALL·E 3",
      ],
      tools: ["Docker", "AWS", "Git", "Redis"],
    },
    github: "https://github.com/PaulAdutwum/Lumeo_Mental_Health",
    demo: "https://lumeo-08ac7545d700.herokuapp.com/",
    date: "February 2025",
    color: "from-blue-600 to-blue-700",
    icon: <Monitor className="w-10 h-10 text-white" />,
    featured: true,
  },
  {
    title: "Global Tariff War Dashboard",
    description:
      "Built a Next.js/FastAPI dashboard to track WTO/USTR tariff trends, sector impacts, and news across 50+ countries at 99% uptime. Integrated a Random Forest forecasting model (scikit-learn) and TensorFlow NLP summarizer to generate 1K+ daily tariff trend analyses and sector impact predictions.",
    image: "/tarrif.mp4",
    type: "video",
    stack: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Chart.js"],
      backend: ["FastAPI", "Scikit-learn", "PostgreSQL", "TensorFlow"],
      tools: ["Docker", "Prometheus", "Github Actions", "AWS"],
    },
    github: "https://github.com/PaulAdutwum/Chrome-Extension",
    demo: "https://github.com/PaulAdutwum/Chrome-Extension",
    date: "March 2025",
    color: "from-blue-600 to-blue-700",
    icon: <BarChart2 className="w-10 h-10 text-white" />,
  },
  {
    title: "Bobcat Express Shuttle Dashboard",
    description:
      "Designed a campus shuttle dashboard using Next.js, HTML, and Firebase to streamline ride requests and track locations—reducing student wait times by 30% and boosting campus safety. Implemented Next.js lazy loading and Zustand for state management, trimming bundle size by 35% and halving page load times to enable instant, real-time shuttle booking and map interactions.",
    image: "/bobcatshuttle2.mp4",
    type: "video",
    stack: {
      frontend: [
        "Next.js 14",
        "Tailwind CSS",
        "React Query",
        "Google Maps API",
        "Chart.js",
        "Zustand",
        "TypeScript",
      ],
      backend: [
        "Prisma",
        "PostgreSQL",
        "Firebase Auth",
        "AWS Fargate",
        "Socket.io",
      ],
      tools: ["Vercel", "GitHub Actions", "Docker"],
    },
    github: "https://github.com/PaulAdutwum/tarriff_warfront",
    demo: "https://github.com/PaulAdutwum/tarriff_warfront",
    date: "February 2025",
    color: "from-blue-600 to-blue-700",
    icon: <PanelsTopLeft className="w-10 h-10 text-white" />,
    featured: true,
  },
];

export default function Projects() {
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const toggleProjectExpansion = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
      pauseVideo(projectId);
    } else {
      if (expandedProject) {
        pauseVideo(expandedProject);
      }
      setExpandedProject(projectId);
      playVideo(projectId);
    }
  };

  const playVideo = (projectId: string) => {
    const video = videoRefs.current[projectId];
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        });
    }
  };

  const pauseVideo = (projectId: string) => {
    const video = videoRefs.current[projectId];
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Get featured projects
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const nonFeaturedProjects = PROJECTS.filter((p) => !p.featured);

  useEffect(() => {
    // Add event listener for escape key to close modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideoModal();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const openVideoModal = (videoSrc: string) => {
    // Pause any playing videos
    if (expandedProject) {
      pauseVideo(expandedProject);
    }
    setModalVideo(videoSrc);
  };

  const closeVideoModal = () => {
    setModalVideo(null);
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Background decorative elements with fluid animations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute -left-16 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500 to-blue-700 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute left-1/3 top-2/3 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-center relative">
              <span className="text-blue-600 dark:text-blue-400">Personal</span>{" "}
              Projects
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              My personal projects span{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                Fullstack Development
              </span>
              ,{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                AI Systems
              </span>
              , and{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                IoT Design
              </span>
            </p>
          </div>

          {/* LinkedIn-style Project Timeline */}
          <div className="relative">
            {/* Experience Cards */}
            <div className="space-y-32 md:space-y-40">
              {/* Timeline line - different styles for mobile and desktop */}
              <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-full z-0 opacity-70"></div>

              {/* Mobile vertical connector - thinner and more subtle */}
              <div className="absolute md:hidden left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2 z-0"></div>

              {/* Map all projects in the order defined in the PROJECTS array */}
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pt-8"
                >
                  {/* Timeline Node for desktop - positioned within the timeline connector */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-0 z-10">
                    <motion.div
                      className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-4 ring-white dark:ring-gray-900 shadow-lg flex items-center justify-center"
                      whileInView={{
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 10px rgba(59, 130, 246, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </motion.div>
                  </div>

                  {/* Timeline Node for mobile */}
                  <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 top-0 z-10">
                    <motion.div
                      className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-3 ring-white dark:ring-gray-900 shadow-md flex items-center justify-center"
                      whileInView={{
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.7)",
                          "0 0 0 8px rgba(59, 130, 246, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    </motion.div>
                  </div>

                  {/* Bottom connector dot for mobile - only if not the last item */}
                  {index < PROJECTS.length - 1 && (
                    <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 bottom-[-4rem] z-10">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-blue-400/60 dark:bg-blue-500/60"
                        whileInView={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    </div>
                  )}

                  {/* Project Card */}
                  <div className="mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20">
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-blue-100/30 dark:border-blue-800/30 relative"
                    >
                      {/* Mobile card indicator - small accent at top of card */}
                      <div className="absolute md:hidden top-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 rounded-b-full z-10"></div>

                      {/* Mobile layout (stack) for small screens, grid for larger */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6">
                        {/* Image/video for small screens only - top position */}
                        <div className="relative h-56 lg:hidden">
                          {project.type === "video" ? (
                            <>
                              <video
                                ref={(el) =>
                                  (videoRefs.current[project.title] = el)
                                }
                                src={project.image}
                                className="absolute inset-0 w-full h-full object-contain bg-black"
                                muted
                                loop
                                playsInline
                                autoPlay
                                poster={
                                  project.title.includes("Bobcat")
                                    ? "/bobcatshuttle-poster.jpg"
                                    : ""
                                }
                                onError={(e) =>
                                  console.error("Video error:", e)
                                }
                                onLoadedData={() =>
                                  console.log(
                                    `Video loaded successfully: ${project.image}`
                                  )
                                }
                              />
                              <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
                                onClick={() => openVideoModal(project.image)}
                              >
                                <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1"></div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-contain bg-black"
                            />
                          )}
                        </div>

                        {/* Project details column */}
                        <div className="p-5 lg:p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2 md:p-2.5 rounded-lg shadow-sm">
                                {cloneElement(project.icon, {
                                  className: "w-4 h-4 md:w-5 md:h-5 text-white",
                                })}
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold">
                                {project.title}
                              </h3>
                            </div>

                            {/* Description - converted to bullet points */}
                            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
                              {project.description
                                .split(". ")
                                .filter(
                                  (sentence) => sentence.trim().length > 0
                                )
                                .map((sentence, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 mb-2.5"
                                  >
                                    <div className="mt-1 flex-shrink-0">
                                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                                    </div>
                                    <p className="leading-relaxed">
                                      {sentence.trim()}
                                      {sentence.trim().endsWith(".") ? "" : "."}
                                    </p>
                                  </div>
                                ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs md:text-sm font-semibold mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {[
                                ...project.stack.frontend.slice(0, 4),
                                ...project.stack.backend.slice(0, 4),
                                ...project.stack.tools.slice(0, 4),
                              ].map((tech) => (
                                <motion.div
                                  key={tech}
                                  whileHover={{ y: -2, scale: 1.05 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                  }}
                                >
                                  <Badge className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-xs whitespace-nowrap px-2 py-0.5">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>

                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-xs md:text-sm px-2 md:px-3"
                                asChild
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5"
                                >
                                  <Github className="w-3.5 h-3.5" />
                                  View Code
                                </a>
                              </Button>
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-xs md:text-sm px-2 md:px-3"
                                asChild
                              >
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  Live Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Image/video for large screens only - side position */}
                        <div className="relative h-64 lg:h-auto hidden lg:block">
                          {project.type === "video" ? (
                            <>
                              <video
                                ref={(el) =>
                                  (videoRefs.current[project.title + "-lg"] =
                                    el)
                                }
                                src={project.image}
                                className="absolute inset-0 w-full h-full object-contain bg-black"
                                muted
                                loop
                                playsInline
                                autoPlay
                                poster={
                                  project.title.includes("Bobcat")
                                    ? "/bobcatshuttle-poster.jpg"
                                    : ""
                                }
                                onError={(e) =>
                                  console.error("Video error:", e)
                                }
                                onLoadedData={() =>
                                  console.log(
                                    `Desktop video loaded successfully: ${project.image}`
                                  )
                                }
                              />
                              <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
                                onClick={() => openVideoModal(project.image)}
                              >
                                <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1"></div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1.5 rounded text-sm text-white backdrop-blur-sm">
                                  Click to view demo
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="relative h-full">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain bg-black"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full relative">
                <video
                  src={modalVideo}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                />
                <button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom style for glassmorphism */}
      <style>
        {`
        .glass-card {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        `}
      </style>
    </section>
  );
}

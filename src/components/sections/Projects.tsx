import React from "react";
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
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "Bobcat Express Shuttle Dashboard",
    description:
      "I developed a comprehensive campus shuttle tracking system that provides real-time location updates, passenger counts, and route optimization. By analyzing historical transit data, I created predictive algorithms that anticipate peak usage times and adjust scheduling accordingly.",
    impact:
      "Reduced average student wait times by 40% and increased shuttle utilization by 35%, serving 2,500+ daily users across campus.",
    image: "/bobcatshuttle2.mp4",
    type: "video",
    stack: {
      frontend: ["React", "TypeScript", "TailwindCSS", "Recharts"],
      backend: ["NestJS", "PostgreSQL", "RESTful APIs"],
      tools: ["Real-time Tracking", "Data Analytics", "Authentication"],
    },
    github: "https://github.com/PaulAdutwum/Bobcat-Express-Shuttle",
    demo: "https://bobcatexpress.vercel.app/dashboard/",
    date: "February 2025",
    color: "from-blue-600 to-blue-700",
    icon: <PanelsTopLeft className="w-10 h-10 text-white" />,
    featured: true,
  },
  {
    title: "Lumeo AI Movie Discovery",
    description:
      "I created a personalized movie recommendation engine that analyzes viewing history, user feedback, and emotional context to suggest films based on current mood and preferences. By incorporating sentiment analysis and mental wellbeing factors, I developed an algorithm that goes beyond traditional recommendation systems.",
    impact:
      "Achieved 85% user satisfaction rate with personalized recommendations, analyzing over 10,000 films for emotional context categorization.",
    image: "/lumeo.png",
    type: "image",
    stack: {
      frontend: ["React", "Next.js", "Framer Motion"],
      backend: ["Firebase", "Cloud Functions"],
      tools: ["Sentiment Analysis", "Recommendation Algorithms"],
    },
    github: "https://github.com/PaulAdutwum/Lumeo",
    demo: "https://lumeo-f950c.web.app/",
    date: "March 2025",
    color: "from-blue-600 to-blue-700",
    icon: <Monitor className="w-10 h-10 text-white" />,
    featured: true,
  },
  {
    title: "AI-Powered Accessibility Extension",
    description:
      "I designed and built a Chrome extension that leverages AI to translate web content into accessible formats for visually and physically impaired users. By implementing voice recognition, screen reading, and custom navigation shortcuts, I created an intuitive tool that makes the web truly inclusive.",
    impact:
      "Boosted web navigation efficiency by 75% for users with disabilities, increasing content comprehension by 60% across 500+ testers.",
    image: "/chrome.png",
    type: "image",
    stack: {
      frontend: ["React", "TypeScript", "TailwindCSS"],
      backend: ["Firebase", "Node.js"],
      tools: ["Chrome Extension API", "AI Speech Recognition"],
    },
    github: "https://github.com/PaulAdutwum/Chrome-Extension",
    demo: "https://github.com/PaulAdutwum/Chrome-Extension",
    date: "April 2025",
    color: "from-blue-600 to-blue-700",
    icon: <Code className="w-10 h-10 text-white" />,
  },
  {
    title: "WattsWise Energy Analytics",
    description:
      "I built an AI-powered energy monitoring platform that collects data from smart meters across campus buildings to identify consumption patterns and inefficiencies. Through machine learning algorithms, I implemented predictive modeling that forecasts energy usage and recommends specific conservation measures.",
    impact:
      "Identified energy savings of 22% across 15 campus buildings, predicting consumption patterns with 91% accuracy using machine learning.",
    image: "/wattwise.png",
    type: "image",
    stack: {
      frontend: ["Streamlit", "Plotly", "HTML/CSS"],
      backend: ["Python", "Flask", "SQLite"],
      tools: ["Scikit-learn", "Pandas", "PyTorch", "Matplotlib"],
    },
    github: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
    demo: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
    date: "January 2025",
    color: "from-blue-600 to-blue-700",
    icon: <BarChart2 className="w-10 h-10 text-white" />,
  },
  {
    title: "Automated Financial Assistant",
    description:
      "I developed a personal finance tool that automatically categorizes transactions, identifies spending patterns, and provides actionable insights for budget optimization. Using natural language processing, the system interprets transaction descriptions to create intuitive spending categories.",
    impact:
      "Users reported average monthly savings of $320 through identified budget optimizations, with 92% transaction classification accuracy.",
    image: "/finance.png",
    type: "image",
    stack: {
      frontend: ["Vue.js", "Vuetify", "Chart.js"],
      backend: ["Django", "MongoDB", "Celery"],
      tools: ["NLP", "Automated Classification", "Reporting"],
    },
    github: "https://github.com/PaulAdutwum/FinanceAssistant",
    demo: "https://github.com/PaulAdutwum/FinanceAssistant",
    date: "December 2024",
    color: "from-blue-600 to-blue-700",
    icon: <Database className="w-10 h-10 text-white" />,
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
      className="py-20 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300"
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
              <span className="text-blue-600 dark:text-blue-400">Projects</span>{" "}
              Showcase
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              Featured work that demonstrates my technical expertise and
              problem-solving approach
            </p>
          </div>

          {/* LinkedIn-style Project Timeline */}
          <div className="relative">
            {/* All Projects in timeline format */}
            <div className="space-y-32 md:space-y-40">
              {/* Center timeline connector - visible only on desktop */}
              <div className="absolute left-16 lg:left-1/2 top-52 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-full z-0 hidden md:block"></div>

              {/* Mobile timeline connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-52 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/40 via-blue-500/40 to-blue-600/40 dark:from-blue-500/40 dark:via-blue-600/40 dark:to-blue-700/40 rounded-full z-0 md:hidden"></div>

              {/* First featured project gets special treatment */}
              {PROJECTS.filter((p) => p.title.includes("Bobcat")).map(
                (project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                  >
                    {/* Timeline Date Badge - Now positioned above the card with better vertical spacing */}
                    <div className="flex justify-center mb-14 relative z-20">
                      <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-xl border border-blue-100 dark:border-blue-800 flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 rounded-full">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {project.date}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node for desktop - positioned within the timeline connector */}
                    <div className="absolute left-16 lg:left-1/2 transform -translate-x-1/2 top-14 z-10 hidden md:block">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-4 ring-white dark:ring-gray-900 shadow-lg flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Timeline Node for mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-14 z-10 md:hidden">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-3 ring-white dark:ring-gray-900 shadow-md flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Vertical connector from node to card for mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[4.7rem] h-6 w-0.5 bg-blue-500/60 dark:bg-blue-400/60 md:hidden"></div>

                    {/* Desktop horizontal connector lines - from timeline to card */}
                    <div className="absolute left-[4.25rem] lg:left-1/2 top-14 h-0.5 w-24 bg-gradient-to-r from-blue-500 to-blue-500/20 dark:from-blue-400 dark:to-blue-400/20 hidden md:block"></div>

                    {/* Project Card */}
                    <div className="ml-0 md:ml-32 lg:ml-0 lg:mx-20">
                      <motion.div
                        whileHover={{
                          y: -5,
                          boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-blue-100/30 dark:border-blue-800/30"
                      >
                        {/* Mobile layout (stack) for small screens, grid for larger */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6">
                          {/* Image for small screens only - top position */}
                          <div className="relative h-56 lg:hidden">
                            <video
                              ref={(el) =>
                                (videoRefs.current[project.title] = el)
                              }
                              src={project.image}
                              className="absolute inset-0 w-full h-full object-cover"
                              muted
                              loop
                              playsInline
                              autoPlay
                              poster="/bobcatshuttle-poster.jpg"
                              onError={(e) => console.error("Video error:", e)}
                            />
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
                              onClick={() => openVideoModal(project.image)}
                            >
                              <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1"></div>
                              </div>
                            </div>
                          </div>

                          {/* Project details column */}
                          <div className="p-5 lg:p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2 md:p-2.5 rounded-lg">
                                  <PanelsTopLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold">
                                  {project.title}
                                </h3>
                              </div>

                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-none">
                                {project.description}
                              </p>

                              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg mb-4 border border-blue-100 dark:border-blue-800/40">
                                <h4 className="text-blue-700 dark:text-blue-300 font-medium text-sm md:text-base mb-1">
                                  Impact:
                                </h4>
                                <p className="text-blue-800 dark:text-blue-300 text-sm">
                                  {project.impact}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xs md:text-sm font-semibold mb-2">
                                Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {[
                                  ...project.stack.frontend,
                                  ...project.stack.backend,
                                ]
                                  .slice(0, 6)
                                  .map((tech) => (
                                    <Badge
                                      key={tech}
                                      className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs whitespace-nowrap"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                {[
                                  ...project.stack.frontend,
                                  ...project.stack.backend,
                                ].length > 6 && (
                                  <Badge className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs">
                                    +
                                    {[
                                      ...project.stack.frontend,
                                      ...project.stack.backend,
                                    ].length - 6}{" "}
                                    more
                                  </Badge>
                                )}
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

                          {/* Image for large screens only - side position */}
                          <div className="relative h-64 lg:h-auto hidden lg:block">
                            <video
                              ref={(el) =>
                                (videoRefs.current[project.title + "-lg"] = el)
                              }
                              src={project.image}
                              className="absolute inset-0 w-full h-full object-cover"
                              muted
                              loop
                              playsInline
                              autoPlay
                              poster="/bobcatshuttle-poster.jpg"
                              onError={(e) => console.error("Video error:", e)}
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
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              )}

              {/* Other projects in timeline format - similar mobile-friendly updates */}
              {PROJECTS.filter((p) => !p.title.includes("Bobcat")).map(
                (project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                  >
                    {/* Timeline Date Badge - Now positioned above the card with better vertical spacing */}
                    <div className="flex justify-center mb-14 relative z-20">
                      <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-xl border border-blue-100 dark:border-blue-800 flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 rounded-full">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {project.date}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node for desktop - positioned within the timeline connector */}
                    <div className="absolute left-16 lg:left-1/2 transform -translate-x-1/2 top-14 z-10 hidden md:block">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-4 ring-white dark:ring-gray-900 shadow-lg flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Timeline Node for mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-14 z-10 md:hidden">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 ring-3 ring-white dark:ring-gray-900 shadow-md flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Vertical connector from node to card for mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[4.7rem] h-6 w-0.5 bg-blue-500/60 dark:bg-blue-400/60 md:hidden"></div>

                    {/* Desktop horizontal connector lines - from timeline to card */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "left-[4.25rem]"
                          : "right-[4.25rem] lg:left-1/2"
                      } top-14 h-0.5 w-24 ${
                        index % 2 === 0
                          ? "bg-gradient-to-r from-blue-500 to-blue-500/20"
                          : "bg-gradient-to-l from-blue-500 to-blue-500/20"
                      } dark:from-blue-400 dark:to-blue-400/20 hidden md:block`}
                    ></div>

                    {/* Project Card */}
                    <div className="ml-0 md:ml-32 lg:ml-0 lg:mx-20">
                      <motion.div
                        whileHover={{
                          y: -5,
                          boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-xl overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-blue-100/30 dark:border-blue-800/30"
                      >
                        {/* Mobile layout (stack) for small screens, grid for larger */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6">
                          {/* Image for small screens only - top position */}
                          <div className="relative h-56 lg:hidden">
                            {project.type === "video" ? (
                              <>
                                <video
                                  ref={(el) =>
                                    (videoRefs.current[project.title] = el)
                                  }
                                  src={project.image}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  onError={(e) =>
                                    console.error("Video error:", e)
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
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                          </div>

                          {/* Project details column */}
                          <div className="p-5 lg:p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-2 md:p-2.5 rounded-lg">
                                  {React.cloneElement(project.icon, {
                                    className:
                                      "w-4 h-4 md:w-5 md:h-5 text-white",
                                  })}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold">
                                  {project.title}
                                </h3>
                              </div>

                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-none">
                                {project.description}
                              </p>

                              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-lg mb-4 border border-blue-100 dark:border-blue-800/40">
                                <h4 className="text-blue-700 dark:text-blue-300 font-medium text-sm md:text-base mb-1">
                                  Impact:
                                </h4>
                                <p className="text-blue-800 dark:text-blue-300 text-sm">
                                  {project.impact}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xs md:text-sm font-semibold mb-2">
                                Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {[
                                  ...project.stack.frontend,
                                  ...project.stack.backend,
                                ]
                                  .slice(0, 6)
                                  .map((tech) => (
                                    <Badge
                                      key={tech}
                                      className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs whitespace-nowrap"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                {[
                                  ...project.stack.frontend,
                                  ...project.stack.backend,
                                ].length > 6 && (
                                  <Badge className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs">
                                    +
                                    {[
                                      ...project.stack.frontend,
                                      ...project.stack.backend,
                                    ].length - 6}{" "}
                                    more
                                  </Badge>
                                )}
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
                                  className="absolute inset-0 w-full h-full object-cover"
                                  muted
                                  loop
                                  playsInline
                                  autoPlay
                                  onError={(e) =>
                                    console.error("Video error:", e)
                                  }
                                />
                                <div
                                  className="absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors"
                                  onClick={() => openVideoModal(project.image)}
                                >
                                  <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1"></div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="relative h-full">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              )}
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

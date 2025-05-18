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
      "Lumeo is an AI-powered virtual companion that offers anonymous, real-time support through GPT-4-driven chat, personalized movie and activity recommendations, and creative tools like canvas drawing and storytelling prompts. Features include real-time conversation with memory-augmented, sentiment-aware prompts, personalized recommendations via TMDB and vector search, creative canvas for guided drawing exercises, multimedia generation through DALL·E 3, and voice interaction with mood tracking for a holistic wellness experience.",
    image: "/LUMEO.mp4",
    type: "video",
    stack: {
      frontend: ["Next.js", "Konva", "Socket.io", "Tailwind CSS"],
      backend: ["NestJS", "PostgreSQL", "Pinecone", "OpenAI GPT-4", "DALL·E 3"],
      tools: ["Whisper STT", "Google TTS", "TMDB API", "Stable Diffusion"],
    },
    github: "https://github.com/PaulAdutwum/Lumeo_Mental_Health",
    demo: "https://lumeo-08ac7545d700.herokuapp.com/",
    date: "February 2025",
    color: "from-blue-600 to-blue-700",
    icon: <Monitor className="w-10 h-10 text-white" />,
    featured: true,
  },
  {
    title: "Bobcat Express Shuttle Dashboard",
    description:
      "I built a full-stack shuttle-management system that lets Bates students request rides online, track the Bobcat Express in real time, and view arrival estimates—while giving dispatchers an admin portal to approve requests, monitor routes, and analyze service metrics. Using Zustand for efficient state management and real-time updates. The system features real-time location tracking, route optimization, and comprehensive analytics for improved campus transportation.",
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
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Firebase Auth",
        "AWS Fargate",
        "Socket.io",
      ],
      tools: ["Vercel", "GitHub Actions", "Docker"],
    },
    github: "https://github.com/PaulAdutwum/Bobcat_Express_Dashboard",
    demo: "https://bobcatshuttle.vercel.app/",
    date: "February 2025",
    color: "from-blue-600 to-blue-700",
    icon: <PanelsTopLeft className="w-10 h-10 text-white" />,
    featured: true,
  },
  {
    title: "Evoke AI Accessibility Extension",
    description:
      "Evoke AI is a Chrome extension that transforms any webpage into a highly accessible, AI-powered environment—letting users customize in real time (contrast, brightness, text size, color-blind filters), interact by voice using Web Speech APIs, and leverage AI assistance through a NestJS backend for form-filling, page summarization, and context-aware guidance.",
    impact:
      "Boosted web navigation efficiency by 75% for users with disabilities, increasing content comprehension by 60% across 500+ testers.",
    image: "/chrome.png",
    type: "image",
    stack: {
      frontend: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Chrome Manifest V3",
      ],
      backend: ["NestJS", "OpenAI GPT-4", "Whisper", "TTS"],
      tools: [
        "Web Speech API",
        "Chrome Storage API",
        "GitHub Actions",
        "Chrome Web Store",
      ],
    },
    github: "https://github.com/PaulAdutwum/Chrome-Extension",
    demo: "https://github.com/PaulAdutwum/Chrome-Extension",
    date: "March 2025",
    color: "from-blue-600 to-blue-700",
    icon: <Code className="w-10 h-10 text-white" />,
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
                                  poster="/bobcatshuttle-poster.jpg"
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
                                className="absolute inset-0 w-full h-full object-contain bg-black"
                              />
                            )}
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

                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
                                {project.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs md:text-sm font-semibold mb-2">
                                Key Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {[
                                  ...project.stack.frontend.slice(0, 3),
                                  ...project.stack.backend.slice(0, 2),
                                  ...project.stack.tools.slice(0, 2),
                                ].map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs whitespace-nowrap"
                                  >
                                    {tech}
                                  </Badge>
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
                                  poster="/bobcatshuttle-poster.jpg"
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
                                  className="absolute inset-0 w-full h-full object-contain bg-black"
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
                                  {cloneElement(project.icon, {
                                    className:
                                      "w-4 h-4 md:w-5 md:h-5 text-white",
                                  })}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold">
                                  {project.title}
                                </h3>
                              </div>

                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
                                {project.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs md:text-sm font-semibold mb-2">
                                Key Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {[
                                  ...project.stack.frontend.slice(0, 3),
                                  ...project.stack.backend.slice(0, 2),
                                  ...project.stack.tools.slice(0, 2),
                                ].map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs whitespace-nowrap"
                                  >
                                    {tech}
                                  </Badge>
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

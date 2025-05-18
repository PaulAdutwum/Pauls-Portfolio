import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Code,
  Database,
  PencilRuler,
  BarChart,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Experience data
const experiences = [
  {
    id: "exp1",
    year: "2024",
    period: "May - Aug",
    company: "African Lanuages Lab",
    location: "Remote",
    title: "Software Engineering Intern - Database API Team",
    description:
      "Built a Flask REST service (SQLite to PostgreSQL) powering a React/Next.js dashboard, sustaining 1.2 M weekly calls at 150 ms P95 latency. Automated Python ETL (Pandas, SQLAlchemy) to ingest 1,500+ records/hour, eliminating manual uploads and saving 50 days of labor. Optimized Webpack + Babel bundle and added Jest cross‑browser tests with GitHub Actions CI, cutting payload 35% and enabling rapid releases.",
    skills: [
      "Flask",
      "PostgreSQL",
      "SQLite",
      "React",
      "Next.js",
      "Python",
      "Pandas",
      "SQLAlchemy",
      "Webpack",
      "Babel",
      "Jest",
      "GitHub Actions",
    ],
    logoPath: "/afric.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp2",
    year: "2024",
    period: "Sep - Dec",
    company: "ASA DataFest Hackathon",
    location: "Waterville, ME",
    title: "Data Analysis",
    description:
      "Predicted leasing trends with 89% accuracy by implementing ARIMA and Random Forest models on proprietary commercial real estate data. Accelerated insight discovery by 60% by cleaning and transforming large datasets using Pandas, NumPy, and Matplotlib.",
    skills: [
      "Python",
      "R",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "ARIMA",
      "Random Forest",
      "Jupyter Notebook",
    ],
    logoPath: "/ASA.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp3",
    year: "2024",
    period: "May - Aug",
    company: "Headstarter AI",
    location: "Boston",
    title: "Software Engineering Resident",
    description:
      "Designed and built AI-powered tools for technical education, mentoring junior developers and contributing to open-source projects that enhanced learning experiences. Leveraged machine learning technologies to create interactive learning modules for software development concepts.",
    skills: ["Machine Learning", "Python", "JavaScript"],
    logoPath: "/headstarter.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp4",
    year: "2025",
    period: "January - April",
    company: "Bates College",
    location: "Lewiston, ME",
    title: "Fullstack Developer",
    description:
      "Created Bobcat Shuttle, a campus shuttle tracking application that improved student transportation experience. Integrated real-time location data and user-friendly interface. Implemented features for route tracking, ETA calculations, and service alerts to enhance the campus transportation experience.",
    skills: [
      "Next.js",
      "Firebase",
      "Google Maps API",
      "Git",
      "PosgresSQL",
      "Zustand",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
    ],
    logoPath: "/bates.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp5",
    year: "2023",
    period: "Jan - May",
    company: "Bates College",
    location: "Lewiston, ME",
    title: "Research Assistant",
    description:
      "Designed and implemented a Java algorithm for Ulam sequences that combines dynamic programming with intelligent caching / memoization, slashing redundant calculations and streamlining large-term generation. Cut computation time by ~50%—reducing asymptotic complexity from O(N²) to O(N)—and successfully produced 2 million U 1,n terms, enabling deeper pattern analysis at scale.",
    skills: [
      "Java",
      "Data Visualization",
      "Matplotlib",
      "Pandas",
      "NumPy",
      "Git",
    ],
    logoPath: "/bates.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp6",
    year: "2023",
    period: "Jan - May",
    company: "Bates College",
    location: "Lewiston, ME",
    title: "Teaching Assistant",
    description:
      "Guided 30+ students in Python fundamentals, OOP, and algorithmic problem solving, supporting a 100% course pass rate. Led code reviews, debugging workshops, and peer programming sessions to improve confidence and code quality. Created supplemental learning materials and interactive coding exercises to reinforce course concepts.",
    skills: [
      "Python",
      "OOP",
      "Algorithms",
      "Teaching",
      "Mentoring",
      "Code Review",
    ],
    logoPath: "/bates.png",
    bgColor: "from-blue-600 to-blue-700",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full h-0.5 bg-blue-600 dark:bg-blue-400 top-1/2 transform -translate-y-1/2"></div>
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
              Experience
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              With hands-on experience in{" "}
              <span className="font-medium italic">full-stack development</span>
              , I have contributed to a variety of high-impact projects. I'm
              passionate about creating beautiful,{" "}
              <span className="font-medium italic">user-friendly</span>{" "}
              frontends paired with solid, scalable backends.
            </p>
          </div>

          {/* Resume button */}
          <div className="flex justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full py-2 px-6 shadow-lg"
                asChild
              >
                <a
                  href="/_Paul_Adutwum_Resume.py.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>View my Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Experience Cards Grid */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/40 transform -translate-x-1/2 z-0"></div>

            {/* Experience Cards */}
            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Date indicator - alternating sides */}
                  <div
                    className={`absolute ${
                      index % 2 === 0
                        ? "left-1/2 -translate-x-[120px]"
                        : "right-1/2 translate-x-[120px]"
                    } -top-6 z-20 hidden md:block`}
                  >
                    <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 rounded-full">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {exp.period}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {exp.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile date indicator */}
                  <div className="absolute left-0 -top-6 z-20 md:hidden">
                    <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 rounded-full">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {exp.period}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {exp.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <div className="h-4 w-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Card - alternating sides */}
                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-[calc(50%+80px)]"
                        : "md:pl-[calc(50%+80px)]"
                    }`}
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/80 rounded-xl">
                      {/* Header with gradient and logo */}
                      <div
                        className={`h-28 bg-gradient-to-r ${exp.bgColor} dark:opacity-90 flex items-center justify-center overflow-hidden p-6 relative`}
                      >
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

                        {/* Company logo */}
                        <div className="relative z-10 flex flex-col items-center">
                          {exp.logoPath ? (
                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white/50">
                              <img
                                src={exp.logoPath}
                                alt={exp.company}
                                className="w-10 h-10 object-contain p-1"
                              />
                            </div>
                          ) : (
                            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shadow-md border-2 border-white/30">
                              <Bot className="w-10 h-10 text-white" />
                            </div>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Company and location */}
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex items-start gap-2 mb-4">
                          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                            {exp.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-xs px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

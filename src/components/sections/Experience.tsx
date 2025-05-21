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
import { useTheme } from "@/hooks/use-theme";

// Experience data
const experiences = [
  {
    id: "exp1",
    year: "2024",
    period: "May 2024 - Aug 2024",
    company: "Npontu Technologies",
    location: "Remote",
    title: "Software Engineering Intern - Database API Team",
    description:
      "Developed a Python REST API (Flask) for CRUD operations on a SQLite database, boosting data ingestion efficiency by 80%. Automated data ingestion with Python scripts (Pandas, SQLAlchemy), processing 1,500+ records/hour and saving 50 days of manual work. Implemented data validation pipelines with Python, Pandas, and SQLAlchemy ORM, resolving 450+ inconsistencies to ensure 100% data integrity.",
    skills: [
      "Flask",
      "REST API",
      "SQLite",
      "Python",
      "Pandas",
      "SQLAlchemy",
      "Data Validation",
      "CRUD Operations",
      "Data Ingestion",
      "GitHub Actions",
    ],
    logoPath: "/npontu.png",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    id: "exp2",
    year: "2025",
    period: "Feb 2025 - Mar 2025",
    company: "American Statistical Association",
    location: "Waterville, ME",
    title: "Data Analyst",
    description:
      "Developed a Random Forest classifier using Python (scikit-learn) on a 100K+ record commercial leasing dataset, achieving 89% accuracy and cutting false positives through threshold optimization and cross-validation. Cleaned and normalized data with Pandas/NumPy, removing 12,000+ missing records to ensure accurate model predictions.",
    skills: [
      "Python",
      "scikit-learn",
      "Random Forest",
      "Pandas",
      "Numpy",
      "Data Cleaning",
      "Classification",
      "Cross-validation",
    ],
    logoPath: "/ASA.png",
    bgColor: "from-blue-600 to-blue-700",
  },

  {
    id: "exp4",
    year: "2023",
    period: "September 2023 - April 2024",
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
    id: "exp5",
    year: "2024/2025",
    period: "September 2024 - May 2025",
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`py-16 md:py-20 relative ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300 px-1 sm:px-4 md:px-10 lg:px-16 will-change-scroll`}
    >
      {/* Background decorative elements - moved down to avoid overlap with title */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pt-40">
        <div className="absolute w-full h-0.5 bg-blue-600 dark:bg-blue-400 top-1/2 transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-1 sm:px-2 md:px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center relative font-sans mt-4">
              Experience
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="mt-4 md:mt-8 text-gray-600 dark:text-gray-400 text-center max-w-2xl font-sans text-sm sm:text-lg md:text-xl">
              With hands-on experience in{" "}
              <span className="font-medium italic">full-stack development</span>
              , I have contributed to a variety of high-impact projects. I'm
              passionate about creating beautiful,{" "}
              <span className="font-medium italic">user-friendly</span>{" "}
              frontends paired with solid, scalable backends.
            </p>
          </div>

          {/* Resume button */}
          <div className="flex justify-center mb-8 md:mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full py-3 px-8 shadow-lg font-sans text-base md:text-lg"
                asChild
              >
                <a
                  href="/Paul_Adutwum_SWE_Resume_AI2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <span>View my Resume</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12 md:space-y-24">
            {/* Timeline line - different styles for mobile and desktop */}
            <div className="absolute hidden md:block left-1/2 top-60 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 transform -translate-x-1/2 z-0 rounded-full opacity-70"></div>

            {/* Mobile vertical connector - thinner and more subtle */}
            <div className="absolute md:hidden left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2 z-0"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Timeline dot with pulse effect - hidden on mobile, visible on tablet/desktop */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-14 z-10">
                  <motion.div
                    className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 ring-4 ring-white dark:ring-gray-900 flex items-center justify-center"
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

                {/* Mobile timeline connector dots - only visible on mobile */}
                {index !== 0 && (
                  <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 -top-8 z-10">
                    <motion.div
                      className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 opacity-70"
                      whileInView={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                  </div>
                )}

                {/* Bottom timeline dot for mobile - creates connection to next card */}
                {index !== experiences.length - 1 && (
                  <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 -bottom-8 z-10">
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

                {/* Card - centered on mobile, alternating sides on desktop */}
                <div
                  className={`mx-1 sm:mx-4 md:mx-8 ${
                    index % 2 === 0
                      ? "md:pr-[calc(50%+40px)] lg:pr-[calc(50%+60px)]"
                      : "md:pl-[calc(50%+40px)] lg:pl-[calc(50%+60px)]"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="md:mt-0"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/80 rounded-xl z-20 relative">
                      {/* Mobile card indicator - small accent at top of card */}
                      <div className="absolute md:hidden top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 rounded-b-full z-10"></div>

                      {/* Header with gradient and logo */}
                      <div
                        className={`h-24 sm:h-28 bg-gradient-to-r ${exp.bgColor} dark:opacity-90 flex items-center justify-center overflow-hidden p-4 sm:p-6 relative`}
                      >
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

                        {/* Company logo */}
                        <div className="relative z-10 flex flex-col items-center">
                          {exp.logoPath ? (
                            <div className="h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white/50">
                              <img
                                src={exp.logoPath}
                                alt={exp.company}
                                className={`w-10 sm:w-12 h-10 sm:h-12 object-contain p-1 ${
                                  exp.company === "Npontu Technologies"
                                    ? "scale-110"
                                    : ""
                                }`}
                              />
                            </div>
                          ) : (
                            <div className="h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shadow-md border-2 border-white/30">
                              <Bot className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                            </div>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-4 sm:p-6">
                        {/* Company, location and date */}
                        <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                              {exp.company}
                            </h3>
                            <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <div className="sm:text-right">
                            <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <div className="flex items-start gap-2 mb-3 sm:mb-4">
                          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <h4 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                            {exp.title}
                          </h4>
                        </div>

                        {/* Description - converted to bullet points format */}
                        <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
                          {exp.description
                            .split(". ")
                            .filter((sentence) => sentence.trim().length > 0)
                            .map((sentence, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 mb-2"
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

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {exp.skills.map((skill) => (
                            <motion.div
                              whileHover={{ y: -2, scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              key={skill}
                            >
                              <Badge className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Briefcase,
  Calendar,
  MapPin,
  Award,
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
    company: "Wex Inc ",
    location: "Portland, ME",
    title: "Software Engineering Intern",
    description:
      "Improved data processing speed by 35% by developing high-performance REST APIs using FastAPI and optimizing PostgreSQL queries via SQLAlchemy. Enhanced executive decision-making by building real-time KPI dashboards using Python (Streamlit & Plotly), streamlining reporting workflows.",
    skills: [
      "React",
      "FastAPI",
      "Streamlit",
      "TypeScript",
      "PosgresSQL",
      "Git",
    ],
    logoPath: "/wex.png",
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
    icon: <Bot className="w-10 h-10 text-white" />,
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
      "Java, Objected Oriented Programming",
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

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
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
              , I have contributed to a variety of high-impact projects across
              multiple industries. I'm passionate about creating beautiful,{" "}
              <span className="font-medium italic">user-friendly</span>{" "}
              frontends paired with solid, scalable backends. I am always eager
              to learn and try out new experiences!
            </p>
          </div>

          <div className="relative">
            {/* Resume button */}
            <div className="flex justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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

            {/* Timeline with grid layout */}
            <div className="relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800/40 transform -translate-x-1/2 z-0"></div>

              {/* Grid of experiences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 relative">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:col-start-2"
                    }`}
                  >
                    {/* Year indicator - positioned differently based on even/odd */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "right-2 md:-right-6"
                          : "left-2 md:-left-6"
                      } -top-8 z-20`}
                    >
                      <div className="bg-white dark:bg-gray-900 px-2.5 py-1.5 rounded-full shadow-md border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-1.5 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">
                            {exp.year}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline node */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "md:right-[-5.5px]"
                          : "md:left-[-5.5px]"
                      } top-12 z-10`}
                    >
                      <div className="h-3.5 w-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-2 ring-white dark:ring-gray-900"></div>
                    </div>

                    {/* Experience card - smaller version */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mt-4"
                    >
                      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800/80 rounded-lg h-full flex flex-col">
                        <div className="relative">
                          {/* Header area with gradient and logo */}
                          <div
                            className={`h-36 bg-gradient-to-r ${exp.bgColor} dark:opacity-90 flex items-center justify-center overflow-hidden p-6 relative`}
                          >
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

                            {/* Company logo */}
                            <div className="relative z-10 flex flex-col items-center">
                              {exp.logoPath ? (
                                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white/50">
                                  <img
                                    src={exp.logoPath}
                                    alt={exp.company}
                                    className="w-16 h-16 object-contain p-1"
                                  />
                                </div>
                              ) : (
                                <>
                                  <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden shadow-md border-2 border-white/30">
                                    {exp.icon}
                                  </div>
                                  <div className="mt-2 text-white text-xs opacity-70">
                                    Company Logo
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-3 right-3 w-10 h-10 rounded-full border-2 border-white/20"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full border-2 border-white/10"></div>
                          </div>

                          {/* Company and location overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                            <div className="flex items-center gap-1.5 text-xs mb-1">
                              <MapPin className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </div>
                            <h3 className="text-base font-bold">
                              {exp.company}
                            </h3>
                          </div>
                        </div>

                        <CardContent className="p-4 flex-grow flex flex-col">
                          {/* Title */}
                          <div className="flex items-start gap-1.5 mb-3">
                            <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-sm font-semibold">
                                {exp.title}
                              </h4>
                            </div>
                          </div>

                          {/* Description - full text without truncation */}
                          <p className="text-gray-700 dark:text-gray-300 text-xs mb-4 flex-grow">
                            {exp.description.split(". ").map((sentence, i) =>
                              sentence ? (
                                <span key={i} className="block mb-2">
                                  {sentence.trim() +
                                    (sentence.endsWith(".") ? "" : ".")}
                                </span>
                              ) : null
                            )}
                          </p>

                          {/* Skills - moved to bottom */}
                          <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                className="bg-blue-100/70 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-xs px-1.5 py-0.5 mb-1"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  Book,
  FileText,
  ExternalLink,
  BarChart2,
  Building2,
  Calendar,
} from "lucide-react";

// Awards data and related code has been moved to Awards.tsx

export default function Education() {
  // Removing all awards-related state and functions which are now in Awards.tsx

  return (
    <section
      id="education"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold text-center">Education</h2>
            <div className="mt-3 h-1 w-24 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Info - Enhanced Card */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl transform translate-y-4 scale-95" />
              <Card className="glass-card bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-xl rounded-2xl transition-all duration-300 h-full overflow-hidden relative z-10">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Bates College
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      BS in Physics with a concentration in Computer Science
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <motion.li
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      Expected Graduation: <strong>May 2027</strong>
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <strong>GPA:</strong> 3.95/4.0
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="h-2 w-2 mt-1.5 ml-2 rounded-full bg-blue-500"></span>
                      <div>
                        <strong>Coursework:</strong>
                        <ul className="mt-2 space-y-2 pl-1">
                          {[
                            "Data Structures & Algorithms",
                            "Software Development",
                            "Data Analysis",
                            "Databases and Design",
                            "Web Development",
                            "Computer Networking",
                            "Discrete Structures",
                            "Artificial Intelligence",
                          ].map((course, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2"
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                              {course}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.li>

                    {/* Research & Publications */}
                    <motion.li
                      className="flex items-start gap-2 pt-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="h-2 w-2 mt-1.5 rounded-full bg-blue-500"></span>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-blue-600 ml-1 dark:text-blue-400">
                            Research & Publications:
                          </strong>
                          <p className="mt-2 ml-1">
                            I participated in collaborative research
                            investigating the structure and growth of{" "}
                            <strong>Ulam numbers</strong> and{" "}
                            <strong>Ulam polynomials</strong>, with an emphasis
                            on their behavior at large indices. To push these
                            studies further, I engineered a high-performance,
                            Java-based algorithm capable of computing terms into
                            the billions for sequences of the form{" "}
                            <em>
                              U<sub>1,n</sub>
                            </em>
                          </p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            View our research paper:
                          </p>
                          <div className="space-y-2 pl-2 border-l-2 border-blue-200 dark:border-blue-800">
                            <motion.a
                              href="https://arxiv.org/abs/2404.00001"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              whileHover={{ x: 3 }}
                            >
                              <FileText className="h-4 w-4 flex-shrink-0" />
                              <span>
                                Distribution of Ulam Words Up to Length 30
                                (2024)
                              </span>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Clubs & Leadership - New Card */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl transform translate-y-4 scale-95" />
              <Card className="glass-card bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-0 shadow-xl rounded-2xl transition-all duration-300 h-full overflow-hidden relative z-10">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Involvement & Leadership
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Campus Activities & Positions
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        Clubs & Organizations
                      </h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Investment Organizer Club
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Bates Coding Club
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Physics and Astronomy Club
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Aspirations Club
                        </motion.li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        Leadership Positions
                      </h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Residential Assistant
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Bonner Racial Justice Fellow
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Campus Safety Advisory Council - Student Government
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Community Advisor
                        </motion.li>
                        <motion.li
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                          Student Project Coordinator at the Harward Center
                        </motion.li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

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

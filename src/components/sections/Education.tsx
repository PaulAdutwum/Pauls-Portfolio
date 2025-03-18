import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">Education</h2>

          {/* 📚 Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 🎓 Education Info */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                <div>
                  <CardTitle>Bates College</CardTitle>
                  <p className="text-muted-foreground">
                    BS in Computer Science & Mathematics
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Expected Graduation: <strong>May 2027</strong>
                  </li>
                  <li>
                    <strong>GPA:</strong> 3.97
                  </li>
                  <li>
                    <strong>Coursework:</strong> Data Structures & Algorithms,
                    Web Development, Machine Learning
                  </li>
                  <li>Member of Bates Coding Club & Investment Club</li>
                  <li>Community Advisor, Residential Life</li>
                  <li>Member of Bates College Student Government</li>
                </ul>
              </CardContent>
            </Card>

            {/*  Research & Publications */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Research & Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Conducted computational research on Ulam sequences, developing
                  optimized algorithms in Java to efficiently generate
                  large-scale Ulam numbers. Analyzed patterns in over 1 billion
                  terms, improving computational efficiency by 70%.
                  <br />
                  <a
                    href="https://arxiv.org/abs/2410.01217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline font-semibold"
                  >
                    View Research findings on arXiv
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 🏆 Honors & Awards - Full Width */}
          <div className="mt-8">
            <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                <div>
                  <CardTitle>Honors & Awards</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Recipient: Dana Scholar Award Class of 2027</li>
                  <li>Winner, Bates College Data Analytics Hackathon</li>
                  <li>Dean’s List (All Semesters)</li>
                  <li>Most Outstanding Community Engagement Award</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

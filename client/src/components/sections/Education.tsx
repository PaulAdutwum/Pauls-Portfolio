import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-30 mb-12">
      <div className="container mx-auto px-4 hover:shadow-lg transition-shadow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8 w-full h-full pb-20 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          {/* Bates College Info */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <CardTitle>Bates College</CardTitle>
                <p className="text-muted-foreground">
                  BS in Computer Science & Mathematics, Minor in Physics
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Expected Graduation: May 2027</li>
                <li>Member of Bates Coding Club</li>
                <li>Residential Assistant, Bates College</li>
                <li>Member of Bates College Student Government</li>
                <li>Member of Bates Investment Club</li>
                <li>Member of Bates Outing Club</li>
              </ul>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <CardHeader className="flex flex-row items-center gap-4 ">
              <div>
                <CardTitle>Relevant Coursework</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Data Structures & Algorithms</li>
                <li>
                  Introduction to Computer Science and Software Development
                </li>
                <li>Web Development (React, Node.js, Django)</li>
                <li>Data Analysis and Visualization in R</li>
                <li>Computational Physics & Numerical Methods</li>
                <li>Probability & Statistical Analysis</li>
                <li>Advanced Linear Algebra</li>
                <li>Multivariable Calculus</li>
                <li>Differential Equations</li>
                <li>Introduction to Abstraction</li>
              </ul>
            </CardContent>
          </Card>

          {/* Research & Publications */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div>
                <CardTitle>Research & Publications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Conducted a research study on Ulam Sequences & Number Theory,
                  developing and optimizing an algorithm using Java to
                  efficiently compute large-scale Ulam sequences. Through
                  advanced data structures and performance optimizations,
                  achieved a 70% improvement in computational efficiency.
                </li>
                <li>
                  Generated and analyzed over 1 billion terms of Ulam Sequences,
                  iteratively testing and validating results for accuracy.
                  Authored a preprint summarizing research findings, now
                  available on
                  <a
                    href="https://arxiv.org/abs/2410.01217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline font-semibold"
                  >
                    arXiv:2410.01217
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Honors & Awards */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow rounded-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div>
                <CardTitle>Honors & Awards</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Recipient: Dana Scholar Award Class of 2027</li>
                <li>Winner, Bates College Data Analytics Hackathon</li>
                <li>Recipient: Dean’s List (All Semesters)</li>
                <li>
                  Most Outstanding Community Engagement by a First-Year Student
                  (Rookie of the Year)
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

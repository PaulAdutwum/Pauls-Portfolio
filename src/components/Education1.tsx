import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Education & Experience
          </h2>

          {/* 🎓 Education */}
          <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <div>
                <CardTitle>Bates College</CardTitle>
                <p className="text-muted-foreground">
                  BS in Physics & Mathematics, Minor in Computational Studies
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>GPA:</strong> 3.95
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures &
                  DSA, Web Development, Machine Learning, Embedded Systems
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 💼 Experience */}
          <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <div>
                <CardTitle> Experience</CardTitle>
                <p className="text-muted-foreground">
                  Web Development | Full-Stack | Data Science
                </p>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

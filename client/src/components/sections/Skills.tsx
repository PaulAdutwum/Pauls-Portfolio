import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const SKILLS = [
  { name: "Python", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "Tailwind CSS & UI/UX Design", level: 85 },
  { name: "React & Next.js", level: 80 },
  { name: "Node.js & Express", level: 80 },
  { name: "NestJS", level: 75 },
  { name: "Data Science & Predictive Modeling", level: 70 },
  { name: "Machine Learning", level: 70 },
  { name: "Scikit-learn & TensorFlow", level: 70 },
  { name: "PostgreSQL & SQL", level: 70 },
  { name: "Firebase & Authentication", level: 70 },
  { name: "Google Maps API", level: 70 },
  { name: "RESTful APIs", level: 70 },
  { name: "Data Visualization (Matplotlib, Seaborn, Chart.js)", level: 70 }, // Used in WattsWise & Admin Dashboard

  { name: "Java", level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <Card>
            <CardContent className="p-6">
              <div className="grid gap-6">
                {SKILLS.map(({ name, level }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{name}</span>
                      <span className="text-muted-foreground">{level}%</span>
                    </div>
                    <Progress value={level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

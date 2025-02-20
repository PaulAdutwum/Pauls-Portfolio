import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <CardTitle>Bates College</CardTitle>
                <p className="text-muted-foreground">
                  BS in Computer Science, Mathematics, and Physics
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Graduated with honors</li>
                <li>Focus on computational methods and data analysis</li>
                <li>Research in machine learning applications</li>
                <li>Member of Computer Science Club</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

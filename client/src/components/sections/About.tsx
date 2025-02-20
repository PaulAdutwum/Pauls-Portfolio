import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Interests</h3>
                <p className="text-muted-foreground">
                  I'm passionate about building scalable applications and solving complex problems
                  through elegant solutions. My focus areas include full-stack development,
                  data science, and machine learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
                <p className="text-muted-foreground">
                  When I'm not coding, I enjoy exploring new technologies, contributing to
                  open-source projects, and staying up-to-date with the latest developments
                  in tech.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title:
      "Admin Dashboard App for the Bobcat Exppress Shuttle at Bates College",
    description:
      "A real-time shuttle tracking and analytics platform designed to optimize campus transportation through interactive dashboards, live vehicle tracking, and ride efficiency insights.",
    tags: [
      "React",
      "NestJS",
      "Firebase",
      "Google Maps API",
      "SQL",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    github: "https://github.com/PaulAdutwum/Bobcat-Express-Shuttle",
    demo: "https://bates-campus-safety-chi.vercel.app/dashboard/",
  },
  {
    title: "WattsWise – Smart Energy Analytics & Prediction",
    description:
      "A machine learning-powered energy analytics platform that predicts dorm energy consumption and provides actionable insights for optimizing energy efficiency.",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Flask",
    ],
    github: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
    demo: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
  },
  {
    title: "Lumeo – AI-Powered Movie Discovery App for Mental Well-Being",
    description:
      " Currently developing An AI-driven platform that personalizes movie recommendations based on user sentiment, enhancing entertainment and emotional well-being.",
    tags: [
      "React",
      "Next.js",
      "OpenAI API",
      "TMDB API",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
    ],
    github: "https://github.com/PaulAdutwum/Lumeo",
    demo: "https://lumeo-f950c.web.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

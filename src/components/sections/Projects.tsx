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
    title: "AI-Powered Accessibility Extension for Chrome",
    description:
      "A Chrome extension that enhances web accessibility for visually and physically impaired web users with AI-powered navigation and voice control features 👌.",
    image: "/chrome.png", // Update with actual image path
    tags: ["React", "Firebase", "REST APIs"],
    github: "https://github.com/PaulAdutwum/Chrome-Extension",
    demo: "https://github.com/PaulAdutwum/Chrome-Extension",
  },
  {
    title: "Admin Dashboard for Bobcat Express Shuttle",
    description:
      "A real-time shuttle tracking and analytics platform for campus transportation with live tracking and ride efficiency insights 🚀.",
    image: "/bobcatexpresdashboard.png",
    tags: ["React", "NestJS", "SQL", "RESTAPIs", "TailwindCSS", "Typescr"],
    github: "https://github.com/PaulAdutwum/Bobcat-Express-Shuttle",
    demo: "https://bobcatexpress.vercel.app/dashboard/",
  },
  {
    title: "WattsWise – Smart Energy Analytics",
    description:
      "An AI-powered energy analytics platform that predicts dorm energy consumption and provides efficiency insights 📈.",
    image: "/wattwise.png",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Pytorch"],
    github: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
    demo: "https://github.com/PaulAdutwum/Energy_Tracker_Project",
  },
  {
    title: "Lumeo – AI-Powered Movie Discovery",
    description:
      "An AI-driven platform that personalizes movie recommendations based on user sentiment and mental well-being 🎬.",
    image: "/lumeo.png",
    tags: ["React", "Next.js", "Firebase"],
    github: "https://github.com/PaulAdutwum/Lumeo",
    demo: "https://lumeo-f950c.web.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300 overflow-hidden">
                  {/* 📷 Project Image with Hover Effect */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>

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
                          Github
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

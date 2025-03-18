import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaPython,
  FaJava,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

const SKILL_CATEGORIES = [
  {
    title: "Technical Skills",
    skills: [
      "Web Development",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Development & Operations",
    ],
  },
  {
    title: "Web & Database",
    skills: [
      "HTML/CSS",
      "SQL & NoSQL",
      "Flask",
      "Node.js",
      "React",
      "REST API",
      "GraphQL",
      "Bootstrap",
      "Express.js",
      "Angular",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["C/C++/C#", "TypeScript", "Python", "Java", "JavaScript", "Swift"],
  },
  {
    title: "DevOps & System",
    skills: ["Docker", "RabbitMQ", "Linux", "Kubernetes", "VM", "AWS/Azure"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-white dark:bg-black text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
      <motion.h2
        className="text-center text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-colors duration-300"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center text-black-400 dark:text-white-100 mb-4">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-gray-400 dark:text-pink-400">✦</span>{" "}
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

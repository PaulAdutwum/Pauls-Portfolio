import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Skills organized in tree structure
const skillsTree = {
  "Full-Stack Development": {
    color: "from-blue-400 to-indigo-600",
    description: "",
    children: {
      Frontend: {
        color: "from-cyan-400 to-blue-600",
        description: "",
        skills: [
          { name: "React", level: 5 },
          { name: "TypeScript", level: 5 },
          { name: "Next.js", level: 4 },
          { name: "Framer Motion", level: 4 },
          { name: "Redux", level: 4 },
          { name: "Tailwind CSS", level: 5 },
          { name: "React Query", level: 4 },
          { name: "Zustand", level: 3 },
          { name: "Responsive Design", level: 5 },
        ],
      },
      Backend: {
        color: "from-emerald-400 to-green-600",
        description: "",
        skills: [
          { name: "Node.js", level: 5 },
          { name: "Express", level: 5 },
          { name: "Python", level: 5 },
          { name: "Django/Flask", level: 4 },
          { name: "RESTful APIs", level: 5 },
          { name: "GraphQL", level: 4 },
          { name: "Authentication", level: 4 },
          { name: "Serverless", level: 3 },
          { name: "API Design", level: 4 },
        ],
      },
      "Learning Now": {
        color: "from-purple-400 to-pink-600",
        description: "Technologies I'm currently learning and exploring",
        skills: [
          { name: "Go Lang", level: 2 },
          { name: "Rust", level: 2 },
          { name: "Swift", level: 2 },
          { name: "Advanced ML", level: 3 },
        ],
      },
      Database: {
        color: "from-amber-400 to-orange-600",
        description: "",
        skills: [
          { name: "PostgreSQL", level: 5 },
          { name: "MongoDB", level: 4 },
          { name: "SQL", level: 5 },
          { name: "Redis", level: 3 },
          { name: "Prisma", level: 4 },
          { name: "Database Design", level: 4 },
          { name: "Query Optimization", level: 4 },
          { name: "ORMs", level: 4 },
          { name: "Database Migrations", level: 4 },
        ],
      },
      Cloud: {
        color: "from-sky-400 to-blue-700",
        description: "",
        skills: [
          { name: "AWS", level: 4 },
          { name: "Docker", level: 4 },
          { name: "CI/CD", level: 4 },
          { name: "Vercel/Netlify", level: 5 },
          { name: "Serverless", level: 3 },
          { name: "GitHub Actions", level: 4 },
          { name: "Cloudflare", level: 3 },
          { name: "Infrastructure as Code", level: 3 },
          { name: "DevOps", level: 3 },
        ],
      },
    },
  },
  "Data Science": {
    color: "from-purple-400 to-indigo-600",
    description: "",
    children: {
      Analysis: {
        color: "from-pink-400 to-rose-600",
        description: "",
        skills: [
          { name: "Pandas", level: 5 },
          { name: "NumPy", level: 5 },
          { name: "R", level: 4 },
          { name: "SQL", level: 5 },
          { name: "Jupyter", level: 5 },
          { name: "Data Cleaning", level: 4 },
          { name: "Statistical Analysis", level: 5 },
          { name: "Hypothesis Testing", level: 4 },
          { name: "Time Series Analysis", level: 4 },
        ],
      },
      Visualization: {
        color: "from-amber-400 to-orange-600",
        description: "",
        skills: [
          { name: "Matplotlib", level: 5 },
          { name: "Seaborn", level: 4 },
          { name: "Plotly", level: 4 },
          { name: "D3.js", level: 3 },
          { name: "Tableau", level: 4 },
          { name: "Data Storytelling", level: 4 },
          { name: "Interactive Dashboards", level: 4 },
          { name: "ggplot2", level: 4 },
          { name: "Information Design", level: 4 },
        ],
      },
      "Machine Learning": {
        color: "from-green-400 to-teal-600",
        description: "",
        skills: [
          { name: "scikit-learn", level: 5 },
          { name: "TensorFlow/Keras", level: 4 },
          { name: "PyTorch", level: 3 },
          { name: "NLP", level: 4 },
          { name: "Time Series Forecasting", level: 4 },
          { name: "Deep Learning", level: 4 },
          { name: "Clustering", level: 4 },
          { name: "Regression/Classification", level: 5 },
          { name: "Model Evaluation", level: 4 },
        ],
      },
    },
  },
  "Problem Solving": {
    color: "from-teal-400 to-green-600",
    description: "",
    children: {
      Algorithms: {
        color: "from-violet-400 to-indigo-600",
        description: "",
        skills: [
          { name: "Data Structures", level: 5 },
          { name: "Complexity Analysis", level: 4 },
          { name: "Recursive Algorithms", level: 4 },
          { name: "Graph Algorithms", level: 4 },
          { name: "Dynamic Programming", level: 4 },
          { name: "Sorting Algorithms", level: 5 },
          { name: "Search Algorithms", level: 5 },
          { name: "Greedy Algorithms", level: 4 },
          { name: "Algorithm Design", level: 4 },
        ],
      },
      "Systems Design": {
        color: "from-blue-400 to-cyan-600",
        description: "",
        skills: [
          { name: "Software Architecture", level: 4 },
          { name: "API Design", level: 5 },
          { name: "Microservices", level: 4 },
          { name: "Caching Strategies", level: 4 },
          { name: "Distributed Systems", level: 3 },
          { name: "Load Balancing", level: 3 },
          { name: "Fault Tolerance", level: 3 },
          { name: "Scalability Patterns", level: 4 },
          { name: "System Integration", level: 4 },
        ],
      },
      "Development Tools": {
        color: "from-gray-600 to-gray-800",
        description: "",
        skills: [
          { name: "Git/GitHub", level: 5 },
          { name: "VS Code", level: 5 },
          { name: "Terminal/CLI", level: 5 },
          { name: "Testing Frameworks", level: 4 },
          { name: "CI/CD Pipelines", level: 4 },
          { name: "npm/yarn/pnpm", level: 5 },
          { name: "Debugging Tools", level: 4 },
          { name: "Performance Profiling", level: 4 },
          { name: "Code Quality Tools", level: 4 },
        ],
      },
    },
  },
};

const SkillTag = ({ name, level }: { name: string; level: number }) => (
  <motion.div
    className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
    whileHover={{ y: -3, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex items-center">
      <span>{name}</span>
    </div>
  </motion.div>
);

// Skill category component
const SkillCategory = ({
  name,
  data,
  level = 0,
  isExpanded = false,
  onToggle,
}: {
  name: string;
  data: any;
  level?: number;
  isExpanded?: boolean;
  onToggle: () => void;
}) => {
  const mainClass =
    level === 0
      ? "w-full cursor-pointer mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
      : "w-full cursor-pointer mb-3 rounded-lg overflow-hidden";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={mainClass}
    >
      <motion.div
        onClick={onToggle}
        className={`w-full p-4 flex items-center justify-between ${
          level === 0
            ? "bg-gradient-to-r dark:bg-gradient-to-r " + data.color
            : "bg-gradient-to-r dark:bg-gradient-to-r " + data.color
        }`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center">
          <h3
            className={`font-semibold ${
              level === 0 ? "text-lg text-white" : "text-base text-white"
            }`}
          >
            {name}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="p-4">
              {data.description && data.description.trim() !== "" && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {data.description}
                </p>
              )}
              {data.skills && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map(
                      (skill: { name: string; level: number }) => (
                        <SkillTag
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                        />
                      )
                    )}
                  </div>
                </div>
              )}
              {data.children && (
                <div className="space-y-3 mt-6">
                  {Object.entries(data.children).map(
                    ([childName, childData]: [string, any]) => (
                      <SkillSubcategory
                        key={childName}
                        name={childName}
                        data={childData}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Skill subcategory component
const SkillSubcategory = ({ name, data }: { name: string; data: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      className="w-full cursor-pointer rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <motion.div
        onClick={toggleExpand}
        className={`w-full p-3 flex items-center justify-between bg-gradient-to-r dark:bg-gradient-to-r ${data.color}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <h4 className="text-base font-semibold text-white">{name}</h4>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="p-3">
              {data.description && data.description.trim() !== "" && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {data.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill: { name: string; level: number }) => (
                  <SkillTag
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My skills span across various domains of software development and
              data science, built through years of hands-on experience and
              continuous learning.
            </p>
          </motion.div>

          <div className="space-y-4">
            {Object.entries(skillsTree).map(
              ([category, data]: [string, any]) => (
                <SkillCategory
                  key={category}
                  name={category}
                  data={data}
                  isExpanded={expandedCategories.includes(category)}
                  onToggle={() => toggleCategory(category)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

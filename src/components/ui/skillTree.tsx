import { motion } from "framer-motion";
import { useState } from "react";

const skills = {
  "Frontend Development": ["React", "Next.js", "Tailwind CSS"],
  "Backend Technologies": ["Node.js", "Express", "GraphQL"],
  "AI & Data Science": ["Python", "TensorFlow", "Pandas"],
  Databases: ["PostgreSQL", "MongoDB", "Firebase"],
};

export default function SkillTree() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Skill Tree</h2>
      <div className="flex flex-col space-y-4">
        {Object.entries(skills).map(([category, subskills]) => (
          <motion.div
            key={category}
            className="w-64 bg-gray-800 rounded-lg p-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpanded(expanded === category ? null : category)}
          >
            <h3 className="text-lg font-semibold text-blue-400 cursor-pointer">
              {category}
            </h3>
            {expanded === category && (
              <motion.div
                className="mt-2 space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                {subskills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="text-sm text-gray-300"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

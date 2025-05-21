import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Updated skills structure - removed Programming Languages and Machine Learning, redistributed skills
const skillsData = {
  Frontend: {
    color: "from-cyan-400 to-blue-600",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "HTML",
      "CSS",
      "Data Visualization",
    ],
  },
  Backend: {
    color: "from-emerald-400 to-green-600",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Java",
      "Django/Flask",
      "RESTful APIs",
      "GraphQL",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "PyTorch",
      "C++",
    ],
  },
  DevOps: {
    color: "from-sky-400 to-blue-700",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Vercel/Netlify",
      "Serverless",
      "GitHub Actions",
      "Cloudflare",
      "Scikit-learn",
      "Model Evaluation",
    ],
  },
  "Currently Learning": {
    color: "from-amber-400 to-orange-600",
    skills: [
      "Swift",
      "Go",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Decision Trees",
      "Random Forest",
    ],
  },
};

const SkillCard = ({
  title,
  color,
  skills,
}: {
  title: string;
  color: string;
  skills: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className={`p-3 sm:p-4 bg-gradient-to-r ${color}`}>
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Through coursework and personal projects, I've built applications at
            the intersection of software engineering, artificial intelligence,
            and data modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {Object.entries(skillsData).map(([title, data]) => (
            <SkillCard
              key={title}
              title={title}
              color={data.color}
              skills={data.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

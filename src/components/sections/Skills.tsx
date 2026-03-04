import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillsData = {
  "Frontend Engineering": {
    color: "from-cyan-400 to-blue-600",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Responsive UI",
      "Accessibility",
      "Framer Motion",
    ],
  },
  "Backend Engineering": {
    color: "from-emerald-400 to-green-600",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth & Sessions",
      "Redis",
    ],
  },
  "Data & ML": {
    color: "from-sky-400 to-blue-700",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "ETL Pipelines",
      "Data Visualization",
    ],
  },
  "Embedded & Robotics": {
    color: "from-violet-400 to-indigo-600",
    skills: [
      "C/C++",
      "ROS",
      "Embedded Linux",
      "Microcontrollers",
      "Sensors",
      "Electronics",
      "RTOS",
      "Robotics",
    ],
  },
  "Cloud & DevOps": {
    color: "from-amber-400 to-orange-600",
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Vercel",
      "Cloudflare",
      "Monitoring",
      "Infrastructure",
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
    <Card className="group overflow-hidden border border-white/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-stretch">
        <div className={`w-2 bg-gradient-to-b ${color}`} />
        <div className="relative flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          {(() => {
            const center = 50;
            const ringRadius = 32;
            const nodeRadius = 46;
            const total = skills.length;
            const startAngle = -90;

            return (
              <div className="relative mt-5 flex justify-center">
                <div className="relative h-64 w-64 sm:h-72 sm:w-72">
                  <svg
                    className="absolute inset-0"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx={center}
                      cy={center}
                      r={ringRadius}
                      fill="none"
                      stroke="rgba(99,102,241,0.28)"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                    />
                    {skills.map((_, index) => {
                      const angle = (startAngle + (360 / total) * index) * (Math.PI / 180);
                      const x1 = center + ringRadius * Math.cos(angle);
                      const y1 = center + ringRadius * Math.sin(angle);
                      const x2 = center + (nodeRadius - 3) * Math.cos(angle);
                      const y2 = center + (nodeRadius - 3) * Math.sin(angle);
                      return (
                        <line
                          key={`link-${index}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="rgba(14,165,233,0.45)"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                  {skills.map((skill, index) => {
                    const angle = (startAngle + (360 / total) * index) * (Math.PI / 180);
                    const x = center + nodeRadius * Math.cos(angle);
                    const y = center + nodeRadius * Math.sin(angle);
                    return (
                      <motion.div
                        key={skill}
                        className="absolute"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      >
                        <div className="rounded-full border border-gray-200/70 dark:border-white/10 bg-white/95 dark:bg-white/5 text-gray-800 dark:text-gray-200 text-[10px] sm:text-[11px] font-medium tracking-wide shadow-sm px-3 py-1.5 text-center leading-tight max-w-[90px]">
                          {skill}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-20 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/3 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
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

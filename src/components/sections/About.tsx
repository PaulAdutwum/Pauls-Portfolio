import { motion } from "framer-motion";
import {
  Palette,
  Music,
  Camera,
  Code,
  Gamepad,
  CircleUser,
  Dumbbell,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Interests/Hobbies array
const interests = [
  {
    name: "Soccer",
    icon: CircleUser,
    color: "from-green-500/30 to-emerald-700/30",
  },
  {
    name: "Volleyball",
    icon: Dumbbell,
    color: "from-amber-500/30 to-orange-700/30",
  },
  { name: "Piano", icon: Music, color: "from-indigo-500/30 to-blue-700/30" },
  {
    name: "Video Games",
    icon: Gamepad,
    color: "from-purple-500/30 to-pink-700/30",
  },
  {
    name: "Art & Design",
    icon: Palette,
    color: "from-pink-500/30 to-rose-700/30",
  },
  {
    name: "Photography",
    icon: Camera,
    color: "from-amber-500/30 to-orange-700/30",
  },
  {
    name: "Mathematics",
    icon: Code,
    color: "from-green-500/30 to-emerald-700/30",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Enhanced Background decorative elements with subtle animations */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500 to-blue-700 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute left-1/3 top-2/3 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-center relative">
              About <span className="text-blue-600 dark:text-blue-400">me</span>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
          </div>

          {/* Modern About Section with Image and Text Side-by-Side */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            {/* Image Column with Animation */}
            <motion.div
              className="lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem]">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/30 rounded-2xl"
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-2xl"
                  animate={{ rotate: [0, -1, 0, 1, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                />

                {/* Main image container with shine effect */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 z-10"
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 7,
                    }}
                    style={{ width: "100%", height: "100%" }}
                  />

                  {/* Main image */}
                  <div className="relative w-full h-full">
                    <img
                      src="/headshot.png"
                      alt="Paul Adutwum"
                      className="w-full h-full object-cover object-top rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Caption at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold"></h3>
                      <p className="text-white/80 text-sm"></p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 max-w-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Hello! My name is Paul Adutwum
                </h3>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I am a first generation{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Engineering and Mathematics student
                    </span>{" "}
                    at Bates College. I combine an engineer’s curiosity with a
                    designer’s eye to craft applications that make everyday life
                    smoother and more efficient.
                  </p>

                  <p>
                    My interests span{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      full-stack development, data science, AI/ML, and
                      quantitative finance
                    </span>
                    . I gravitate toward projects that push me to learn
                    something new, break things, and build them back better.
                  </p>

                  <p>
                    Outside the classroom, you’ll usually find me on the soccer
                    field, chasing a new personal best at the gym, or freezing
                    moments through my camera lens. I’ve recently taken up the
                    piano, dive into the occasional gaming session, and never
                    miss a chance to lose myself in a well-curated playlist.
                    Balance fuels my creativity, and each of these passions
                    keeps my problem-solving fresh.
                  </p>

                  <div className="pt-4">
                    <h4 className="text-xl font-semibold mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-3">
                      {interests.map((interest) => (
                        <motion.div
                          key={interest.name}
                          className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${interest.color} text-gray-800 dark:text-white text-sm flex items-center gap-1.5 border border-gray-200 dark:border-gray-700`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <interest.icon className="h-3.5 w-3.5" />
                          <span>{interest.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom style for glassmorphism */}
      <style>
        {`
        .glass-card {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        `}
      </style>
    </section>
  );
}

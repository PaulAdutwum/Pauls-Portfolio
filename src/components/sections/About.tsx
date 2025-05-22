import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`py-16 md:py-20 relative ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300 px-4 sm:px-6 md:px-10 lg:px-16`}
    >
      {/* About section decorative elements */}
      <div className="absolute left-[5%] bottom-[10%] w-52 h-52 overflow-hidden pointer-events-none z-0 opacity-5">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className={`${isDark ? "text-blue-500" : "text-blue-300"}`}
        >
          <path
            fill="currentColor"
            d="M42.8,-62.2C54.9,-54.3,64.2,-41.5,69.4,-27.2C74.5,-12.9,75.6,2.8,71.5,17.2C67.5,31.5,58.4,44.5,45.9,53.1C33.5,61.7,17.5,66,0.1,65.8C-17.3,65.6,-34.6,61,-47,50.7C-59.4,40.4,-67,24.5,-70.4,7.3C-73.9,-9.9,-73.3,-28.4,-64.5,-41.7C-55.7,-55,-38.7,-63.1,-22.7,-69.1C-6.6,-75.1,8.4,-79,21.9,-75.1C35.4,-71.3,30.6,-70.1,42.8,-62.2Z"
            transform="translate(100 100) scale(0.7)"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative font-sans">
              About <span className="text-blue-600 dark:text-blue-400">me</span>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
          </div>

          {/* Modern About Section with Image and Text Side-by-Side */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Image Column with Animation */}
            <motion.div
              className="lg:w-1/2 flex justify-center mb-6 lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Main image container with subtle hover effect */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-full shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full z-10"></div>

                  {/* Inner glowing border */}
                  <div className="absolute inset-0 rounded-full border-[5px] border-blue-500/50 dark:border-blue-400/50 z-10"></div>

                  {/* Animated inner glow effect */}
                  <div className="absolute inset-0 rounded-full z-5 animate-pulse">
                    <div className="absolute inset-0 rounded-full border-[3px] border-blue-400/30 dark:border-blue-500/30 blur-[1px]"></div>
                  </div>

                  {/* Main image */}
                  <div className="relative w-full h-full">
                    <img
                      src="/heasshot3.PNG"
                      alt="Paul Adutwum"
                      className="w-full h-full object-cover object-top rounded-full"
                      style={{ objectPosition: "center 30%" }}
                    />
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
              <div className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-4 font-sans">
                  Hello! My name is Paul Adutwum
                </h3>

                <div className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-base sm:text-lg md:text-xl">
                  <p>
                    I am a first generation College student studying{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Mathematics and Computer Science.
                    </span>{" "}
                    With hands-on experience in full-stack development, I have
                    contributed to a variety of high-impact projects. I am
                    passionate about the intersection of software engineering,
                    artificial intelligence, and hardware systems.
                  </p>

                  <p>
                    Outside of academics, I love listening to classic music,
                    playing soccer, taking photos, watching the Premier League,
                    and playing chess.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

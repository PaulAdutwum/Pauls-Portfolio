import { motion } from "framer-motion";

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
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Main image container with subtle hover effect */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-full shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full z-10"></div>

                  {/* Main image */}
                  <div className="relative w-full h-full">
                    <img
                      src="/headshot.png"
                      alt="Paul Adutwum"
                      className="w-full h-full object-cover object-top rounded-full"
                      style={{ objectPosition: "top 20%" }}
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
              <div className="space-y-6 max-w-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  Hello! My name is Paul Adutwum
                </h3>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I am a first generation College student studying{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Physics with a concentration in Computer Science.
                    </span>{" "}
                    With hands-on experience in full-stack development, I have
                    contributed to a variety of high-impact projects. I'm
                    passionate about creating beautiful, user-friendly frontends
                    paired with solid, scalable backends.
                  </p>

                  <p>
                    Currently, I am actively building projects spanning{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      full-stack development, hardware systems, and AI
                      applications
                    </span>
                    . I am always eager to learn and explore new technologies,
                    constantly pushing the boundaries of what's possible at the
                    intersection of software, hardware, and artificial
                    intelligence.
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

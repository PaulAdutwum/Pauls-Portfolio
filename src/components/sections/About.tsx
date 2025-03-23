import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/*  Introduction Card */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    Paul
                  </span>
                  , a rising junior at Bates College, studying Computer Science
                  and Mathematics. I'm also an active member of the Africana
                  Community at Bates and serve as a Community Advisor in the
                  Office of Residential Life & Health Education.
                  <br />
                  <br />I am interested in building tech solutions that adds
                  value to our lives, focusing on full-stack development,
                  web/mobile applications, and data analysis. I've participated
                  in hackathons in both data science and web development,
                  collaborating on impactful projects.
                </p>
              </CardContent>
            </Card>

            {/*  Skills & Interests Card */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-500 shadow-lg rounded-xl transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I love learning and growing, constantly pushing myself to
                  explore new technologies and improve my skills. I'm always
                  excited about new opportunities and enjoy working on projects
                  that create meaningful impact. I am currently seeking
                  internship opportunities for the summer of 2025 and excited to
                  contribute meaningfully to any team I join.
                  <br />
                  <br />
                  Beyond coding, you'll find me on the soccer field,
                  volunteering, diving into photography, working on fitness, or
                  embracing diverse cultures and languages.
                  <br />
                  <br />
                  If you are working on something cool, please connect with me.
                  Let's innovate and grow together in this tech journey! 🚀
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

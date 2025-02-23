import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  I am a first-generation college student studying Computer
                  Science and Mathematics, with a minor in Physics, at Bates
                  College. I am a highly driven person with an insatiable
                  curiosity for problem-solving and a deep passion for
                  understanding the world through data and computation.
                  <br />
                  <br />
                  I am particularly fascinated by the intersection of data
                  science and full-stack development—where analytical rigor
                  meets creative design. I enjoy exploring patterns, analyzing
                  trends, and transforming insights into data-driven decisions
                  and predictive models. At the same time, I leverage my
                  full-stack development skills to build scalable, intuitive
                  applications that make data visualization more accessible and
                  impactful.
                  <br />
                  <br />
                  Beyond academics, I am a self-motivated learner who enjoys
                  contributing to open-source projects, engaging in discussions
                  on emerging tech trends in AI, FinTech, and software
                  development, and continuously expanding my knowledge through
                  hands-on projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  When I’m not coding or solving problems, you can find me
                  playing soccer, watching my favorite shows, or engaging in
                  debates on current issues in technology and finance.
                  <br />
                  <br />I am currently seeking internship opportunities that
                  allow me to apply my skills in data science and full-stack
                  development—whether through predictive modeling, database
                  management, or building applications that make data more
                  intuitive and actionable. I am excited to collaborate, learn,
                  and contribute to meaningful projects that challenge me to
                  grow as both a developer and a thinker. If you’re working on
                  something exciting, let’s connect! 🚀
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

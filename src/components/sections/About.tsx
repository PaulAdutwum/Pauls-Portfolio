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
                  College. Driven by an insatiable curiosity and a love for
                  problem-solving, I am passionate about using technology to
                  transform raw ideas into intuitive and impactful solutions. My
                  goal is to develop intentional applications that continuously
                  evolve, adapt, and bring real value to people’s lives.
                  <br />
                  <br />
                  I am always looking for ways to learn, grown and complete the
                  next project. I enjoy contributing to open-source projects,
                  keeping up with emerging trends in AI, Fintech and Softwae
                  Development.
                  <br />
                  <br />
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  When I’m not coding or solving problems, you’ll probably find
                  me on the soccer field, playing volleyball, or even diving
                  into a game of rugby. I also love video games, jamming on my
                  guitar, and getting lost in good music or my favorite shows.
                  <br />
                  <br />
                  I’m currently on the lookout for internship opportunities
                  where I can put my skills in data science and full-stack
                  development to work—whether that’s through predictive
                  modeling, database management, or building intuitive
                  applications that make data more actionable. I’m always eager
                  to learn, collaborate, and take on exciting challenges that
                  push me to grow as both a developer and a problem solver. If
                  you’re working on something cool, let’s connect! 🚀
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

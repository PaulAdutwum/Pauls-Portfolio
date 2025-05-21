import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100/20 dark:border-blue-900/20 bg-gradient-to-b from-gray-50/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 backdrop-blur-sm">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 blur-2xl"
          animate={{
            x: [0, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute left-1/4 -top-16 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 blur-2xl"
          animate={{
            x: [0, 15, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © 2025{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              Paul Adutwum
            </span>
            . All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ y: -3 }} className="transition-all">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-blue-100 dark:border-blue-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                <a
                  href="https://github.com/PaulAdutwum"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="transition-all">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-blue-100 dark:border-blue-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                <a
                  href="https://www.linkedin.com/in/paul-adutwum-aaaabb27b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="transition-all">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-blue-100 dark:border-blue-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                <a href="mailto:pauladutwum303@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Designed and built with
            <span className="inline-block mx-1">❤️</span>
            using React, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}

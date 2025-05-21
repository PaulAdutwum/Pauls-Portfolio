import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertTriangle,
  Mail,
  User,
  MessageSquare,
  Github,
  Linkedin,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    // Replace with your Formspree form ID
    // Sign up at https://formspree.io/
    const formspreeEndpoint = "https://formspree.io/f/xdkgoynb";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form.current),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Failed to send form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Background decorative elements with fluid animations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute -left-16 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 blur-3xl"
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
          className="absolute left-1/3 top-2/3 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-center relative">
              Get in{" "}
              <span className="text-blue-600 dark:text-blue-400">Touch</span>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              Feel free to reach out for collaboration, questions, or just to
              say hello!
            </p>
          </div>

          <div className="flex flex-col gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full max-w-xl"
            >
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl glass-card shadow-xl bg-white/90 dark:bg-gray-800/80 border border-blue-100/30 dark:border-blue-800/30 backdrop-blur-lg"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact from Portfolio"
                />

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900/60 border border-blue-100 dark:border-blue-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900/60 border border-blue-100 dark:border-blue-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900/60 border border-blue-100 dark:border-blue-800/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      rows={6}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 rounded-lg transition-all duration-300 flex items-center justify-center text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    {status === "sending" ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : status === "success" ? (
                      <CheckCircle className="mr-2 h-5 w-5" />
                    ) : status === "error" ? (
                      <AlertTriangle className="mr-2 h-5 w-5" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {status === "sending"
                      ? "Sending..."
                      : status === "success"
                      ? "Message Sent!"
                      : status === "error"
                      ? "Try Again"
                      : "Send Message"}
                  </button>
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-3 rounded-md bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-center"
                  >
                    Your message has been sent successfully! I'll get back to
                    you as soon as possible.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-3 rounded-md bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-center"
                  >
                    There was an error sending your message. Please try again
                    later.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-xl"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
                className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/50 shadow-lg border border-blue-100/30 dark:border-blue-800/30 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Social Media</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Connect with me on social platforms
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/PaulAdutwum/Lumeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/paul-adutwum-aaaabb27b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
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

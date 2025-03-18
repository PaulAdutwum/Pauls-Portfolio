import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
        <p className="text-center mb-8">Get in touch with me.</p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-blue-500 transition-all duration-300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-400 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-400 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-400 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            rows={5}
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded transition-all"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}

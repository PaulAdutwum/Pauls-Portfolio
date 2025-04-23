import { Moon, Sun, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Apply initial theme and listen for system theme changes
  useEffect(() => {
    // This ensures the theme is correctly applied on initial load
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      // Only auto-switch if user hasn't manually set a preference
      const storedTheme = localStorage.getItem("theme-storage");
      if (!storedTheme) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    // Add listener for system theme changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative overflow-hidden rounded-full w-10 h-10 border-2 border-blue-500/50 dark:border-blue-400/50 bg-white dark:bg-gray-900"
        aria-label="Toggle theme"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Day/night background with smoother transition */}
          <motion.div
            className="absolute inset-0 transition-colors duration-700"
            initial={false}
            animate={{
              background:
                theme === "light"
                  ? "linear-gradient(to bottom, #dbeafe, #ffffff)"
                  : "linear-gradient(to bottom, #020617, #000000)",
            }}
          >
            {/* Stars (only visible in dark mode) */}
            <AnimatePresence mode="wait">
              {theme === "dark" && (
                <motion.div
                  key="stars"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                  <motion.div
                    className="absolute top-3 right-2 w-1 h-1 bg-white rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 0.3,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 0.5,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Sun icon with rays for light mode */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: theme === "light" ? 0 : 180,
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="relative">
            <Sun className="h-5 w-5 text-yellow-500" />
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 h-1 w-1 bg-yellow-400 rounded-full"
                style={{
                  transformOrigin: "center",
                  transform: `rotate(${i * 45}deg) translateX(8px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Moon icon for dark mode with improved animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : -180,
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Moon className="h-5 w-5 text-blue-300" />

          {/* Subtle glow effect around moon */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500 opacity-0"
            animate={{
              opacity: theme === "dark" ? [0.1, 0.2, 0.1] : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      </Button>
    </motion.div>
  );
}

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import { useHashNavigation } from "@/hooks/useHashNavigation";

const MENU_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollToElement } = useHashNavigation();

  // Improved navigation click handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If it's an internal hash link
    if (href.startsWith("#")) {
      e.preventDefault();

      // Extract the section ID from the hash
      const id = href.substring(1);

      // Update URL without causing page reload
      window.history.pushState(null, "", href);

      // Try direct scrolling first (for already loaded elements)
      if (!scrollToElement(id)) {
        // If direct scrolling fails, dispatch a custom event
        // This helps with lazy-loaded content
        window.dispatchEvent(new CustomEvent("navClick", { detail: { id } }));
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300
        ${
          isDark ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-200"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.span
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Paul Adutwum
          </motion.span>

          <div className="hidden md:flex space-x-1">
            {MENU_ITEMS.map(({ label, href }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`flex items-center hover:bg-transparent ${
                    isDark
                      ? "text-gray-200 hover:text-white"
                      : "text-gray-700 hover:text-blue-600"
                  } relative group overflow-hidden`}
                >
                  <a
                    href={href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    <span className="relative z-10">{label}</span>

                    {/* Enhanced hover effect with wavy animation */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{
                          duration: 0.4,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                      />

                      <motion.div
                        className="absolute -bottom-1 h-8 w-full opacity-0 group-hover:opacity-10"
                        initial={{ x: "-100%" }}
                        whileHover={{
                          x: "100%",
                          transition: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1.5,
                            ease: "linear",
                          },
                        }}
                      >
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-md" />
                      </motion.div>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: MENU_ITEMS.length * 0.1 }}
              className="relative"
            >
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={`flex items-center hover:bg-transparent ${
                  isDark
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-700 hover:text-blue-600"
                } relative group overflow-hidden`}
              >
                <a
                  href="/_Paul_Adutwum_Resume.py.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <span className="relative z-10">Resume</span>

                  {/* Enhanced hover effect with wavy animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    />

                    <motion.div
                      className="absolute -bottom-1 h-8 w-full opacity-0 group-hover:opacity-10"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "100%",
                        transition: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1.5,
                          ease: "linear",
                        },
                      }}
                    >
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-md" />
                    </motion.div>
                  </div>
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            <MusicPlayer />
            <ThemeToggle />
            <div className="md:hidden flex space-x-1">
              {MENU_ITEMS.map(({ label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`${
                    isDark
                      ? "text-gray-200 hover:text-white hover:bg-gray-800"
                      : ""
                  } relative overflow-hidden group`}
                >
                  <a
                    href={href}
                    className="nav-link-mobile"
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={`${
                  isDark
                    ? "text-gray-200 hover:text-white hover:bg-gray-800"
                    : ""
                } relative overflow-hidden group`}
              >
                <a
                  href="/_Paul_Adutwum_Resume.py.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-mobile"
                >
                  Resume
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

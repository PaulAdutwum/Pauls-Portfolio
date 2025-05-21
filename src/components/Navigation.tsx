import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import MusicPlayer from "./MusicPlayer";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { useState, useEffect } from "react";

const MENU_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollToElement } = useHashNavigation();
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = MENU_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const section = href.substring(1);
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    // Update URL without causing page reload
    window.history.pushState(null, "", href);

    // Get the target element
    const element = document.getElementById(section);
    if (element) {
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for the header

      // Smooth scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300
        ${
          isDark
            ? "bg-black/80 border-gray-800"
            : "bg-[#ffffff]/80 border-[#ffffff]/20"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.span
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-[#ffffff]"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Paul Adutwum
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {MENU_ITEMS.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: MENU_ITEMS.indexOf(item) * 0.1 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`flex items-center hover:bg-transparent ${
                    isDark
                      ? "text-gray-200 hover:text-white"
                      : "text-[#ffffff] hover:text-[#ffffff]/80"
                  } relative group overflow-hidden`}
                >
                  <a
                    href={item.href}
                    className={`nav-link ${
                      activeSection === item.href.substring(1)
                        ? isDark
                          ? "text-white"
                          : "text-[#ffffff]"
                        : isDark
                        ? "text-gray-500 hover:text-white"
                        : "text-[#ffffff]/80 hover:text-[#ffffff]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>

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
                    : "text-[#ffffff] hover:text-[#ffffff]/80"
                } relative group overflow-hidden`}
              >
                <a
                  href="/Paul_Adutwum_SWE_Resume_%20AI2025.pdf"
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isDark
                  ? "text-white hover:text-white/80"
                  : "text-[#ffffff] hover:text-[#ffffff]/80"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              isDark ? "bg-black/95" : "bg-[#ffffff]/95"
            } backdrop-blur-md border-t ${
              isDark ? "border-gray-800" : "border-[#ffffff]/20"
            }`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {MENU_ITEMS.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className={`w-full justify-start ${
                      isDark
                        ? "text-gray-200 hover:text-white hover:bg-gray-800"
                        : "text-[#ffffff] hover:text-[#ffffff]/80 hover:bg-[#ffffff]/10"
                    }`}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const section = item.href.substring(1);
                        setActiveSection(section);
                        setIsMobileMenuOpen(false);

                        // Update URL without causing page reload
                        window.history.pushState(null, "", item.href);

                        // Get the target element
                        const element = document.getElementById(section);
                        if (element) {
                          // Calculate the element's position relative to the viewport
                          const elementPosition =
                            element.getBoundingClientRect().top;
                          const offsetPosition =
                            elementPosition + window.pageYOffset - 80; // 80px offset for the header

                          // Smooth scroll to the element
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="flex items-center space-x-2"
                    >
                      <span>{item.name}</span>
                    </a>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`w-full justify-start ${
                    isDark
                      ? "text-gray-200 hover:text-white hover:bg-gray-800"
                      : "text-[#ffffff] hover:text-[#ffffff]/80 hover:bg-[#ffffff]/10"
                  }`}
                >
                  <a
                    href="/Paul_Adutwum_SWE_Resume_%20AI2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>Resume</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

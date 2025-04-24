import { useEffect } from "react";

/**
 * Hook to handle hash-based navigation
 * This will scroll to the section identified by the URL hash on:
 * 1. Initial page load
 * 2. Hash changes in the URL
 */
export function useHashNavigation() {
  useEffect(() => {
    // Function to handle hash navigation
    const scrollToSection = (retryCount = 0) => {
      // Get the hash from the URL (excluding the #)
      const hash = window.location.hash.substring(1);

      if (hash) {
        // Small delay to ensure all components are rendered
        setTimeout(() => {
          const element = document.getElementById(hash);

          if (element) {
            // Calculate the header height to adjust scrolling
            const header = document.querySelector("nav");
            const headerHeight = header
              ? header.getBoundingClientRect().height
              : 0;

            // Get element's position relative to the viewport
            const elementPosition = element.getBoundingClientRect().top;

            // Calculate position to scroll to, adjusting for the header
            const offsetPosition =
              elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra padding

            // Scroll to the adjusted position
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else if (retryCount < 5) {
            // If element isn't found, it might be due to lazy loading
            // Try again with increasing delay up to 5 times
            const nextRetryDelay = 300 * (retryCount + 1); // Increasing delay
            setTimeout(() => scrollToSection(retryCount + 1), nextRetryDelay);
          }
        }, 100);
      }
    };

    // Call on mount (initial page load)
    scrollToSection();

    // Also listen for hash changes in the URL
    const handleHashChange = () => scrollToSection();
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
}

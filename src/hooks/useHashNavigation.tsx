import { useEffect } from "react";

/**
 * Hook to handle hash-based navigation
 * This will scroll to the section identified by the URL hash on:
 * 1. Initial page load
 * 2. Hash changes in the URL
 */
export function useHashNavigation() {
  // Function to handle scrolling to an element
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      // Calculate the header height to adjust scrolling
      const header = document.querySelector("nav");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      // Scroll with offset for the header
      const yOffset = -headerHeight - 20; // 20px extra padding
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      return true;
    }

    return false;
  };

  // Function to handle hash navigation with retries for lazy-loaded content
  const handleHashNavigation = () => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      // Attempt to scroll immediately
      if (scrollToElement(id)) return;

      // If immediate scroll fails, retry with increasing delays
      // This helps with lazy-loaded content
      let attempts = 0;
      const maxAttempts = 10;

      const attemptScroll = () => {
        if (attempts >= maxAttempts) return;

        attempts++;

        if (scrollToElement(id)) return;

        // Exponential backoff for retry timing
        const delay = Math.min(100 * Math.pow(1.5, attempts), 2000);
        setTimeout(attemptScroll, delay);
      };

      // Start retry attempts
      setTimeout(attemptScroll, 100);
    }
  };

  useEffect(() => {
    // Handle initial load
    if (window.location.hash) {
      // Small delay for initial load to ensure DOM is ready
      setTimeout(handleHashNavigation, 100);
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    // Custom event for internal navigation
    window.addEventListener("navClick", (e: any) => {
      if (e.detail && e.detail.id) {
        scrollToElement(e.detail.id);
      }
    });

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
      window.removeEventListener("navClick", (e: any) => {
        if (e.detail && e.detail.id) {
          scrollToElement(e.detail.id);
        }
      });
    };
  }, []);

  return { scrollToElement };
}

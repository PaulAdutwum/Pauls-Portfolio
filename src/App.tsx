import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Preload from "@/components/Preload";
import { useHashNavigation } from "@/hooks/useHashNavigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { theme } = useTheme();
  // Initialize hash navigation
  const { scrollToElement } = useHashNavigation();

  // Direct hash handling on page load
  useEffect(() => {
    // Check for a hash in the URL
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);

      // Add multiple attempts with increasing timeouts for lazy-loaded content
      const scrollWithRetry = (attempt = 0) => {
        // Give up after several attempts
        if (attempt > 15) return;

        // Try to scroll to the element
        const success = scrollToElement(targetId);

        if (!success) {
          // If unsuccessful, try again with exponential backoff
          setTimeout(() => {
            scrollWithRetry(attempt + 1);
          }, Math.min(50 * Math.pow(1.5, attempt), 3000)); // Cap at 3 seconds
        }
      };

      // Start trying after a short delay to allow for initial render
      setTimeout(() => scrollWithRetry(), 300);
    }
  }, [scrollToElement]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Force a repaint to ensure background colors are applied properly
    document.body.style.display = "none";
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = "";
  }, [theme]);

  // Add performance measurement
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Report web vitals
      const reportWebVitals = () => {
        // Calculate Cumulative Layout Shift
        const cls = performance
          .getEntriesByType("layout-shift")
          .reduce((sum, entry) => {
            // Type assertion for LayoutShift entries which have value property
            const layoutShift = entry as any;
            return sum + (layoutShift.value || 0);
          }, 0);

        // Find First Contentful Paint
        const fcp = performance
          .getEntriesByType("paint")
          .find((entry) => entry.name === "first-contentful-paint")?.startTime;

        console.log(
          `CLS: ${cls.toFixed(3)}, FCP: ${fcp ? `${fcp.toFixed(0)}ms` : "N/A"}`
        );
      };

      // Measure after the page has fully loaded
      window.addEventListener("load", () => {
        // Use requestIdleCallback when browser is idle, falls back to setTimeout
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(reportWebVitals);
        } else {
          setTimeout(reportWebVitals, 1000);
        }
      });
    }
  }, []);

  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <title>Paul Adutwum - Portfolio</title>
        </Helmet>

        <Preload />

        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </QueryClientProvider>
    </TooltipProvider>
  );
}

export default App;

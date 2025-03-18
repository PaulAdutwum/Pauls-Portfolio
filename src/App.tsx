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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <title>Paul Adutwum - Portfolio</title>
        </Helmet>

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

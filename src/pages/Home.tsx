import { lazy, Suspense } from "react";
import { LazyLoad } from "@/hooks/useLazyLoad";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education"; // Eagerly load Education for better performance

// Lazy load components that aren't immediately visible
const Experience = lazy(() => import("@/components/sections/Experience"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Awards = lazy(() => import("@/components/sections/Awards"));
const Blog = lazy(() => import("@/components/sections/Blog"));
const Contact = lazy(() => import("@/components/sections/Contact"));

// Simple loading placeholder
const LoadingPlaceholder = () => (
  <div className="w-full py-12 flex justify-center items-center">
    <div className="w-10 h-10 rounded-full border-3 border-blue-500 border-t-transparent animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Critical sections loaded immediately */}
      <Hero />
      <About />
      <Skills />
      <Education /> {/* Load eagerly since it's likely to be visible soon */}
      {/* First batch of lazy-loaded sections with more eager loading */}
      <LazyLoad rootMargin="500px">
        <Suspense fallback={<LoadingPlaceholder />}>
          <Experience />
        </Suspense>
      </LazyLoad>
      <LazyLoad rootMargin="600px">
        <Suspense fallback={<LoadingPlaceholder />}>
          <Projects />
        </Suspense>
      </LazyLoad>
      {/* Second batch of lazy-loaded sections */}
      <LazyLoad rootMargin="700px">
        <Suspense fallback={<LoadingPlaceholder />}>
          <Awards />
        </Suspense>
      </LazyLoad>
      <LazyLoad rootMargin="800px">
        <Suspense fallback={<LoadingPlaceholder />}>
          <Blog />
        </Suspense>
      </LazyLoad>
      <LazyLoad rootMargin="900px">
        <Suspense fallback={<LoadingPlaceholder />}>
          <Contact />
        </Suspense>
      </LazyLoad>
    </div>
  );
}

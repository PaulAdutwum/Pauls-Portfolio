import { lazy, Suspense } from "react";
import { LazyLoad } from "@/hooks/useLazyLoad";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

// Lazy load components that aren't immediately visible
const Education = lazy(() => import("@/components/sections/Education"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Awards = lazy(() => import("@/components/sections/Awards"));
const Blog = lazy(() => import("@/components/sections/Blog"));
const Contact = lazy(() => import("@/components/sections/Contact"));

// Simple loading placeholder
const LoadingPlaceholder = () => (
  <div className="w-full py-24 flex justify-center items-center">
    <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Critical sections loaded immediately */}
      <Hero />
      <About />
      <Skills />

      {/* Lazily load sections as user scrolls */}
      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Education />
        </Suspense>
      </LazyLoad>

      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Experience />
        </Suspense>
      </LazyLoad>

      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Projects />
        </Suspense>
      </LazyLoad>

      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Awards />
        </Suspense>
      </LazyLoad>

      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Blog />
        </Suspense>
      </LazyLoad>

      <LazyLoad placeholder={<LoadingPlaceholder />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <Contact />
        </Suspense>
      </LazyLoad>
    </div>
  );
}

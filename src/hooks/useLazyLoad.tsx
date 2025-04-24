import { useEffect, useState, useRef, ReactNode } from "react";

interface UseLazyLoadProps {
  threshold?: number;
  rootMargin?: string;
  sectionId?: string;
}

export function useLazyLoad({
  threshold = 0.1,
  rootMargin = "200px",
  sectionId,
}: UseLazyLoadProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // If this section's ID matches the current hash, scroll to it
          // This handles the case where a hash link points to a lazy-loaded section
          if (sectionId && window.location.hash === `#${sectionId}`) {
            setTimeout(() => {
              const section = document.getElementById(sectionId);
              if (section) {
                // Calculate header height for offset
                const header = document.querySelector("nav");
                const headerHeight = header
                  ? header.getBoundingClientRect().height
                  : 0;

                // Scroll with offset for the header
                const yOffset = -headerHeight - 20; // 20px extra padding
                const y =
                  section.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }, 100); // Short delay to ensure component is rendered
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, sectionId]);

  return { ref, isVisible };
}

interface LazyLoadProps {
  children: ReactNode;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  sectionId?: string;
}

export function LazyLoad({
  children,
  placeholder,
  threshold,
  rootMargin,
  sectionId,
}: LazyLoadProps) {
  const { ref, isVisible } = useLazyLoad({ threshold, rootMargin, sectionId });

  return (
    <div ref={ref}>
      {isVisible
        ? children
        : placeholder || <div style={{ height: "100px" }} />}
    </div>
  );
}

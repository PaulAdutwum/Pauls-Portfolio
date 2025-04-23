import { useEffect, useState, useRef, ReactNode } from "react";

interface UseLazyLoadProps {
  threshold?: number;
  rootMargin?: string;
}

export function useLazyLoad({
  threshold = 0.1,
  rootMargin = "200px",
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
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

interface LazyLoadProps {
  children: ReactNode;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazyLoad({
  children,
  placeholder,
  threshold,
  rootMargin,
}: LazyLoadProps) {
  const { ref, isVisible } = useLazyLoad({ threshold, rootMargin });

  return (
    <div ref={ref}>
      {isVisible
        ? children
        : placeholder || <div style={{ height: "100px" }} />}
    </div>
  );
}

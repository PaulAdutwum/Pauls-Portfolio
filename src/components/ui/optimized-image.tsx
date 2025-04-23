import { useState, useEffect } from "react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholderColor?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholderColor = "#f3f4f6",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useLazyLoad({
    threshold: 0.01,
    rootMargin: "200px",
  });

  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);

  // Load the image when it becomes visible or if it has priority
  useEffect(() => {
    if (priority || isVisible) {
      setImgSrc(src);
    }
  }, [priority, isVisible, src]);

  // Handle image load completion
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Handle image load error
  const handleImageError = () => {
    console.error(`Failed to load image: ${src}`);
    // You can set a fallback image here if needed
    // setImgSrc('/fallback-image.jpg');
  };

  const shouldUseNativeLoading = !priority;
  const imageStyles = {
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const placeholderStyles = {
    backgroundColor: placeholderColor,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isLoaded ? 0 : 1,
    transition: "opacity 0.3s ease-in-out",
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ width, height, overflow: "hidden" }}
    >
      <div style={placeholderStyles} />
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={shouldUseNativeLoading ? "lazy" : undefined}
          fetchPriority={priority ? "high" : "auto"}
          style={imageStyles}
          {...props}
        />
      )}
    </div>
  );
}

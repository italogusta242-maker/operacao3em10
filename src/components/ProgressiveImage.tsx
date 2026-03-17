import { useState, useCallback } from "react";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
}

// Cache of already-loaded image URLs to prevent re-blur on remount
const loadedCache = new Set<string>();

const ProgressiveImage = ({ src, alt, className = "", style, priority = false, ...props }: ProgressiveImageProps) => {
  const alreadyCached = loadedCache.has(src);
  const [loaded, setLoaded] = useState(alreadyCached);

  const onLoad = useCallback(() => {
    loadedCache.add(src);
    setLoaded(true);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={onLoad}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={`${className} transition-all duration-700 ${loaded ? "blur-0 opacity-100" : "blur-md opacity-60"}`}
      style={style}
      {...props}
    />
  );
};

export default ProgressiveImage;

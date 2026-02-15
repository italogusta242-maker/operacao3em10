import { useState, useCallback } from "react";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ProgressiveImage = ({ src, alt, className = "", style, ...props }: ProgressiveImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => setLoaded(true), []);

  return (
    <div className="relative overflow-hidden" style={{ display: "contents" }}>
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        className={`${className} transition-all duration-700 ${loaded ? "blur-0 opacity-100" : "blur-md opacity-60"}`}
        style={style}
        {...props}
      />
    </div>
  );
};

export default ProgressiveImage;

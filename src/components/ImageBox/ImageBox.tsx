import "./imageBox.css";
import { useState, useEffect, useRef } from "react";

interface ImageBoxProps {
  src: string;
  hidable?: boolean;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, hidable }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ImageBox ${hidable ? "hidable" : ""} ${
        isVisible ? "animate" : ""
      }`}
    >
      <img src={src} alt='Image Box' />
    </div>
  );
};

export default ImageBox;

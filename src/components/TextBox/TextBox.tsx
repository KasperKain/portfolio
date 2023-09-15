import { useEffect, useRef, useState } from "react";
import "./textBox.css";

interface TextBoxProps {
  text: string;
}
const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <div ref={ref} className={`TextBox ${isVisible ? "TextBoxAnim" : ""}`}>
      <pre>{text}</pre>
    </div>
  );
};

export default TextBox;

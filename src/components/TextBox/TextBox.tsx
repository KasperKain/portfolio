import "./textBox.css";
import useDelayedIntro from "../../hooks/useDelayedIntro";

interface TextBoxProps {
  text: string;
  delay?: number;
}
const TextBox: React.FC<TextBoxProps> = ({ text, delay = 0 }) => {
  const isVisible = useDelayedIntro(delay);
  return (
    <div className={`TextBox ${isVisible ? "TextBoxAnim" : ""}`}>
      <pre>{text}</pre>
    </div>
  );
};

export default TextBox;

import "./button.css";
import useDelayedIntro from "../../hooks/useDelayedIntro";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  delay?: number;
  nullMessage?: string;
}
const Button: React.FC<ButtonProps> = ({
  title,
  onClick = () => {},
  delay = 0,
  nullMessage,
}) => {
  const isVisible = useDelayedIntro(delay);
  return (
    <button
      onClick={onClick}
      className={`Button ${isVisible ? "ButtonAnim" : ""} ${
        nullMessage ? "ButtonNull" : ""
      } `}
    >
      {nullMessage ? nullMessage.toUpperCase() : title.toUpperCase()}
    </button>
  );
};
export default Button;

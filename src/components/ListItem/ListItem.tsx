import "./listItem.css";
import useDelayedIntro from "../../hooks/useDelayedIntro";
interface ListItemProps {
  text: string;
  direction: "left" | "right";
  delay?: number;
}
const ListItem: React.FC<ListItemProps> = ({ text, direction, delay = 0 }) => {
  const isVisible = useDelayedIntro(delay);
  return (
    <li
      className={`ListItem ListItem-${direction} ${
        isVisible ? `ListItemIntro-${direction}` : ""
      }`}
    >
      <div></div>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;

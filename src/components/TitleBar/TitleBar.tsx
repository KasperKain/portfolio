import "./titleBar.css";

interface TitleBarProps {
  text: string;
}
const TitleBar: React.FC<TitleBarProps> = ({ text }) => {
  return <h1 className='TitleBar'>{text}</h1>;
};

export default TitleBar;

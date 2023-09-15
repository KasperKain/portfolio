import "./baseBox.css";

interface BaseBoxProps {
  children: React.ReactNode;
}
const BaseBox: React.FC<BaseBoxProps> = ({ children }) => {
  return <div className='BaseBox'>{children}</div>;
};

export default BaseBox;

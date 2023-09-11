import "./sectionContainer.css";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  flexAmount?: number;
}
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  flexAmount = 1,
}) => {
  return (
    <div style={{ flex: flexAmount }} className='SectionContainer'>
      {children}
    </div>
  );
};

export default SectionContainer;

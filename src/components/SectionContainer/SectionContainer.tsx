import React from "react";
import "./sectionContainer.css";

interface SectionContainerProps {
  titleBar?: React.ReactNode;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  titleBar,
  children,
}) => {
  return (
    <div className='SectionContainer'>
      {titleBar}
      <div className='childrenContainer'>{children}</div>
    </div>
  );
};

export default SectionContainer;

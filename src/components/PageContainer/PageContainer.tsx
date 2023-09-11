import "./pageContainer.css";
import ItemWheel from "../ItemWheel/ItemWheel";
import React, { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  let wheelChild;
  let allOtherChildren: any = [];

  childrenArray.forEach((child) => {
    if (React.isValidElement(child) && child.type === ItemWheel) {
      wheelChild = child;
    } else {
      allOtherChildren.push(child);
    }
  });
  return (
    <div className='PageContainer'>
      <div className='PageContainerContainer'>{allOtherChildren}</div>
      {wheelChild}
    </div>
  );
};

export default PageContainer;

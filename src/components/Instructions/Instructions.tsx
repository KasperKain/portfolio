import React, { useEffect, useState } from "react";
import "./instructions.css";
import Button from "../Button/Button";
interface InstructionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Instructions: React.FC<InstructionsProps> = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      {!open ? (
        <></>
      ) : (
        <div className='Instructions'>
          <div className='instruction-container'>
            <i className='material-icons-outlined animate-slide'>pan_tool</i>
            <p>Swipe the top bar to change the page.</p>
          </div>

          <span>
            <Button
              title='CLOSE'
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            />
          </span>

          <div className='instruction-container'>
            <p>Swipe the bottom bar to change the content within the page.</p>
            <i className='material-icons-outlined animate-slide'>pan_tool</i>
          </div>
        </div>
      )}
    </>
  );
};

export default Instructions;

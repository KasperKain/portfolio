import React, { useEffect, useState } from "react";
import "./instructions.css";
import Button from "../Button/Button";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
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
          </div>
          <div className='instruction-container'>
            <p>Swipe the top bar to change the page.</p>
            <p>Or click the left / right buttons.</p>
            <br />
            <p>Scroll down on any page for more content.</p>
          </div>

          <span style={{ marginBottom: "60px" }}>
            <ButtonContainer>
              {" "}
              <Button
                title='CLOSE'
                onClick={() => {
                  setOpen(false);
                  onClose();
                }}
              />
            </ButtonContainer>
          </span>
        </div>
      )}
    </>
  );
};

export default Instructions;

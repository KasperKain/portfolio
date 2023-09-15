import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Instructions from "../../components/Instructions/Instructions";
import TextBox from "../../components/TextBox/TextBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";

const Landing: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <>
      <Instructions
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
      <SectionContainer titleBar={<TitleBar text='WELCOME' />}>
        <BaseBox>
          <TextBox text='Welcome to my portfolio (ish)! Feel free to browse around and checkout some of the stuff I make.' />
          <ButtonContainer>
            <Button
              title='Instructions'
              onClick={() => setShowInstructions((prev) => !prev)}
            />
          </ButtonContainer>
        </BaseBox>
      </SectionContainer>
    </>
  );
};

export default Landing;

import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Instructions from "../../components/Instructions/Instructions";
import TextBox from "../../components/TextBox/TextBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";

const Landing: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <SectionContainer titleBar={<TitleBar text='WELCOME' />}>
      <BaseBox>
        <Instructions
          isOpen={showInstructions}
          onClose={() => setShowInstructions(false)}
        />
        <TextBox text='Welcome to my portfolio (ish)! Feel free to browse around and checkout some of the stuff I make.' />
        <Button
          title='Instructions'
          onClick={() => setShowInstructions((prev) => !prev)}
        />
      </BaseBox>
    </SectionContainer>
  );
};

export default Landing;

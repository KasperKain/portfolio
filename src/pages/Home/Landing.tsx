import Button from "../../components/Button/Button";
import Instructions from "../../components/Instructions/Instructions";
import TextBox from "../../components/TextBox/TextBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import { useState } from "react";

const Landing: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.47)",
        width: "100%",
      }}
    >
      <Instructions
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
      <TitleBar text='WELCOME' />
      <TextBox
        text="
Welcome to my portfolio (ish)! Feel free to browse around and checkout some of the stuff I make

If you're interested in seeing how I made this, click the [website code] button. if you're unsure how to navigate the website, click [instructions]
        "
        delay={1400}
      />
      <span
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Button
          title='Instructions'
          onClick={() => setShowInstructions((prev) => !prev)}
          delay={3000}
        />
      </span>
      <br></br>
      <br></br>
    </div>
  );
};

export default Landing;

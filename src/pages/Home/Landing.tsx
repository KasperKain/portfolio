import TextBox from "../../components/TextBox/TextBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";

const Landing: React.FC = () => {
  return (
    <SectionContainer titleBar={<TitleBar text='WELCOME' />}>
      <BaseBox>
        <TextBox text='Welcome to my portfolio (ish)! Feel free to browse around and checkout some of the stuff I make.' />
      </BaseBox>
    </SectionContainer>
  );
};

export default Landing;

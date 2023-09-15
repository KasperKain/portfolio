import React from "react";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";

const About: React.FC = () => {
  return (
    <SectionContainer titleBar={<TitleBar text='About Me' />}>
      <BaseBox>
        <TextBox text="Hey there! I'm Patrick, though some folks know me as Kasper. I comfortably wear multiple hats: Developer, Designer, Creator, and whatever else I feel like doing in the moment. My journey through technology and design has led me to work on some exciting projects. " />
      </BaseBox>

      <BaseBox>
        <TextBox text="What you're seeing here is a small example of some of those projects. You'll find demos and drafts (though some incomplete) from my journey as a developer. This is less of a portfolio and more of a dumping ground for cool things that I enjoyed making. If you want to chat, be it about the ins and outs of game design or simply sharing a fun fact, reach out! You can find me on LinkedIn, Itch.io, GitHub, or drop me a quick email at kasperkain@gmail.com.  You can also reach out directly further down the page." />
      </BaseBox>
    </SectionContainer>
  );
};

export default About;

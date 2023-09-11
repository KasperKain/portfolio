import React from "react";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";

const About: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <TitleBar text='Hello' />
        <TextBox
          text="Hey there! I'm Patrick, though some folks know me as Kasper. I comfortably wear multiple hats: Developer, Designer, Creator, and whatever else I like doing in the moment. My journey through technology and design has led me to work on some exciting projects. 

        "
        />
      </SectionContainer>

      <SectionContainer>
        <TitleBar text='World' />
        <TextBox
          text="What you're seeing here is a small example of some of those projects. You'll find demos and drafts (though some incomplete) from my journey as a developer. This is less of a portfolio and more of a dumping ground for cool things that I enjoyed making.

If you want to chat, be it about the ins and outs of game design or simply sharing a fun fact, reach out! You can find me on LinkedIn, Itch.io, GitHub, or drop me a quick email at kasperkain@gmail.com.

You can also email direction in the next section =>
"
        />
      </SectionContainer>
    </>
  );
};

export default About;

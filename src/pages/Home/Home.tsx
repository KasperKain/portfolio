import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Landing />
      <About />
      <Contact />
    </PageContainer>
  );
};

export default Home;

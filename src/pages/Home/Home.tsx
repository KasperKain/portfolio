import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import About from "./About";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <About />
      <Contact />
    </PageContainer>
  );
};

export default Home;

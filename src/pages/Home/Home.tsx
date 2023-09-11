import { useState } from "react";
import ItemWheel from "../../components/ItemWheel/ItemWheel";
import About from "./About";
import Landing from "./Landing";
import Contact from "./Contact";
import PageContainer from "../../components/PageContainer/PageContainer";
const Home: React.FC = () => {
  const sections = [
    { title: "landing", component: <Landing /> },
    { title: "about", component: <About /> },
    { title: "contact", component: <Contact /> },
  ];
  const [currentSection, setCurrentSection] = useState<any>(sections[0]);

  const updateSelectedItem = (itemIndex: any) => {
    setCurrentSection(sections[itemIndex]);
  };
  return (
    <PageContainer>
      {currentSection ? currentSection.component : <></>}
      <ItemWheel
        items={sections}
        updateSelectedItem={updateSelectedItem}
      ></ItemWheel>
    </PageContainer>
  );
};

export default Home;

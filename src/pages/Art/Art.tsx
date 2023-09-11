import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import TitleBar from "../../components/TitleBar/TitleBar";
import ImageBox from "../../components/ImageBox/ImageBox";
import ItemWheel from "../../components/ItemWheel/ItemWheel";
const Art: React.FC = () => {
  const [arts, setArts] = useState(null);
  const [art, setArt] = useState<any>({ title: "loading" });

  useEffect(() => {
    fetchData("art").then((data) => {
      setArts(data);
      setArt(data[0]);
    });
  }, []);

  const updateSelectedItem = (itemIndex: any) => {
    if (arts) setArt(arts[itemIndex]);
  };
  return (
    <PageContainer>
      <ItemWheel
        items={arts}
        updateSelectedItem={updateSelectedItem}
      ></ItemWheel>
      <SectionContainer>
        <TitleBar text={art.title} />
        <ImageBox src={art.image} />
      </SectionContainer>
    </PageContainer>
  );
};

export default Art;

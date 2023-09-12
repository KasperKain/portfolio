import ItemWheel from "../../components/ItemWheel/ItemWheel";
import { fetchData } from "../../services/api";
import { useEffect, useState } from "react";
import ImageBox from "../../components/ImageBox/ImageBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { v4 as uuid } from "uuid";
const Web: React.FC = () => {
  const [websites, setWebsites] = useState<any[]>([]);
  const [website, setWebsite] = useState<any>();

  useEffect(() => {
    fetchData("pages").then((data) => {
      setWebsites(data);
      setWebsite(data[0]);
    });
  }, []);

  const updateSelectedItem = (itemIndex: any) => {
    if (website) setWebsite(websites[itemIndex]);
  };
  return (
    <PageContainer>
      {!website ? (
        <></>
      ) : (
        <>
          <SectionContainer>
            <TitleBar text={website.title} />
            <ImageBox src={website.image1} />
            <span
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Button
                title='VISIT'
                onClick={() => window.open(website.live, "_blank")}
                nullMessage={!website.live ? "unavailable" : undefined}
                delay={300}
                key={uuid()}
              />
              <Button
                title='SOURCE'
                onClick={() => window.open(website.github, "_blank")}
                nullMessage={!website.github ? "unavailable" : undefined}
                delay={800}
                key={uuid()}
              />
            </span>
          </SectionContainer>
          <SectionContainer>
            <ImageBox src={website.image2} />
            <TextBox text={website.description} delay={1500} key={uuid()} />
          </SectionContainer>
        </>
      )}
      <ItemWheel
        items={websites}
        updateSelectedItem={updateSelectedItem}
      ></ItemWheel>
    </PageContainer>
  );
};

export default Web;

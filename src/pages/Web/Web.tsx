import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ImageBox from "../../components/ImageBox/ImageBox";
import { v4 as uuid } from "uuid";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Web: React.FC = () => {
  const [websites, setWebsites] = useState<any[]>();

  useEffect(() => {
    fetchData("pages").then((data) => {
      setWebsites(data);
    });
  }, []);

  return (
    <PageContainer>
      {!websites ? (
        <LoadingSpinner />
      ) : (
        websites.map((website) => (
          <SectionContainer
            key={website.id || uuid()}
            titleBar={<TitleBar text={website.title} />}
          >
            <BaseBox>
              <ImageBox src={website.image2} hidable={true} />
              <ImageBox src={website.image1} />
            </BaseBox>

            <BaseBox>
              <ButtonContainer>
                <Button
                  title='VISIT'
                  onClick={() => window.open(website.live, "_blank")}
                  nullMessage={!website.live ? "unavailable" : undefined}
                  delay={300}
                />
                <Button
                  title='SOURCE'
                  onClick={() => window.open(website.github, "_blank")}
                  nullMessage={!website.github ? "unavailable" : undefined}
                  delay={800}
                />
              </ButtonContainer>
              <TextBox text={website.description} />
            </BaseBox>
          </SectionContainer>
        ))
      )}
    </PageContainer>
  );
};

export default Web;

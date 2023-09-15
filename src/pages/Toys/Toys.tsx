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

const Toys: React.FC = () => {
  const [toys, setToys] = useState<any[]>();

  useEffect(() => {
    fetchData("toys").then((data) => {
      setToys(data);
      console.log(data);
    });
  }, []);

  return (
    <PageContainer>
      {!toys ? (
        <LoadingSpinner />
      ) : (
        toys.map((toy) => (
          <SectionContainer
            key={toy.id || uuid()}
            titleBar={<TitleBar text={toy.title} />}
          >
            <BaseBox>
              <TextBox text={toy.description} />
            </BaseBox>
            <BaseBox>
              <ButtonContainer>
                <Button
                  title='PLAY'
                  nullMessage={!toy.live ? "unavailable" : undefined}
                  onClick={() => window.open(toy.live, "_blank")}
                />
                <Button
                  title='VIEW CODE'
                  nullMessage={!toy.github ? "unavailable" : undefined}
                  onClick={() => window.open(toy.github, "_blank")}
                />
              </ButtonContainer>
              <ImageBox src={toy.image} />
            </BaseBox>
          </SectionContainer>
        ))
      )}
    </PageContainer>
  );
};

export default Toys;

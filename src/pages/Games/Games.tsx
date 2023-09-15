import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ImageBox from "../../components/ImageBox/ImageBox";
import { v4 as uuid } from "uuid";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import CustomList from "../../components/CustomList/CustomList";
import BaseBox from "../../components/BaseBox/BaseBox";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Games: React.FC = () => {
  const [games, setGames] = useState<any[]>();

  useEffect(() => {
    fetchData("games").then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <PageContainer>
      {!games ? (
        <LoadingSpinner />
      ) : (
        games.map((game) => (
          <SectionContainer
            key={game.id || uuid()}
            titleBar={<TitleBar text={game.title} />}
          >
            <BaseBox>
              {" "}
              <ImageBox src={game.image} />
              <ButtonContainer>
                <Button
                  title='PLAY'
                  nullMessage={!game.live ? "unavailable" : undefined}
                  onClick={() => window.open(game.live, "_blank")}
                />
                <Button
                  title='VIEW'
                  nullMessage={!game.github ? "unavailable" : undefined}
                  onClick={() => window.open(game.github, "_blank")}
                />
              </ButtonContainer>
            </BaseBox>

            <BaseBox>
              <CustomList items={game.skills} />
              <TextBox text={game.description} />
            </BaseBox>
          </SectionContainer>
        ))
      )}
    </PageContainer>
  );
};

export default Games;

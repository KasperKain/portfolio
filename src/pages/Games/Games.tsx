import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import ItemWheel from "../../components/ItemWheel/ItemWheel";
import ListItem from "../../components/ListItem/ListItem";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import ImageBox from "../../components/ImageBox/ImageBox";
import { v4 as uuid } from "uuid";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const Games: React.FC = () => {
  const [games, setGames] = useState(null);
  const [game, setGame] = useState<any>();

  useEffect(() => {
    fetchData("games").then((data) => {
      setGames(data);
      setGame(data[0]);
    });
  }, []);

  const updateSelectedItem = (itemIndex: any) => {
    if (games) setGame(games[itemIndex]);
  };

  return (
    <PageContainer>
      {!game ? (
        <></>
      ) : (
        <>
          <SectionContainer>
            <TitleBar text={game.title} />
            <TextBox key={uuid()} text={game.description} delay={1000} />
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {game.skills.map((skill: string, index: number) => {
                return (
                  <ListItem
                    key={uuid()}
                    text={skill}
                    direction='right'
                    delay={2000 + 200 * index}
                  />
                );
              })}
            </ul>
          </SectionContainer>
          <SectionContainer>
            <ImageBox src={game.image} />
            <span
              style={{
                display: "flex",
                flexWrap: "wrap",
                padding: "10px",
              }}
            >
              <Button
                title='PLAY'
                onClick={() => window.open(game.live, "_blank")}
                nullMessage={!game.live ? "unavailable" : undefined}
              />
              <Button
                title='VIEW'
                onClick={() => window.open(game.github, "_blank")}
                nullMessage={!game.github ? "unavailable" : undefined}
              />
            </span>
          </SectionContainer>
        </>
      )}
      <ItemWheel
        items={games}
        updateSelectedItem={updateSelectedItem}
      ></ItemWheel>
    </PageContainer>
  );
};

export default Games;

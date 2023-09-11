import Button from "../../components/Button/Button";
import ImageBox from "../../components/ImageBox/ImageBox";
import ItemWheel from "../../components/ItemWheel/ItemWheel";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import TextBox from "../../components/TextBox/TextBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import { v4 as uuid } from "uuid";
const Toys: React.FC = () => {
  const [toys, setToys] = useState(null);
  const [toy, setToy] = useState<any>();

  useEffect(() => {
    fetchData("toys").then((data) => {
      setToys(data);
      setToy(data[0]);
    });
  }, []);

  const updateSelectedItem = (itemIndex: any) => {
    if (toys) setToy(toys[itemIndex]);
  };

  return (
    <PageContainer>
      {toy ? (
        <>
          <SectionContainer>
            <TextBox key={uuid()} text={toy.description} delay={1000} />

            <span style={{ display: "flex", flexWrap: "wrap" }}>
              <Button
                title='PLAY'
                onClick={() => window.open(toy.live, "_blank")}
                nullMessage={!toy.live ? "unavailable" : undefined}
              />
              <Button
                title='VIEW'
                onClick={() => window.open(toy.github, "_blank")}
                nullMessage={!toy.github ? "unavailable" : undefined}
              />
            </span>
          </SectionContainer>

          <SectionContainer>
            <div className='toy-overview'>
              <TitleBar text={toy.title} />
              <ImageBox src={toy.image} />
            </div>
          </SectionContainer>
        </>
      ) : null}

      <ItemWheel items={toys} updateSelectedItem={updateSelectedItem} />
    </PageContainer>
  );
};

export default Toys;

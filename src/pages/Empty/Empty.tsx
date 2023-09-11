import React from "react";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const Empty: React.FC = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <TitleBar text='404 - Not Found' />
        <TextBox text='Oopsy' />
        <Button
          title='Go Home'
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </SectionContainer>
    </PageContainer>
  );
};

export default Empty;

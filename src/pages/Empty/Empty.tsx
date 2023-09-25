import React from "react";
import TitleBar from "../../components/TitleBar/TitleBar";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import PageContainer from "../../components/PageContainer/PageContainer";

const Empty: React.FC = () => {
  return (
    <PageContainer>
      <TitleBar text='404 - Not Found' />
      <TextBox text='Oopsy' />
      <Button
        title='Go Home'
        onClick={() => {
          window.location.href = "/";
        }}
      />
    </PageContainer>
  );
};

export default Empty;

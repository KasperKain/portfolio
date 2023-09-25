import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import PageContainer from "../../components/PageContainer/PageContainer";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";
const Toys: React.FC = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <BaseBox>
          <TextBox text='NOTHING HERE YET' />
        </BaseBox>
      </SectionContainer>
    </PageContainer>
  );
};

export default Toys;

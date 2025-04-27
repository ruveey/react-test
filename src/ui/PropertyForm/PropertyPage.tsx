import Form from "./form/Form";
import ContactInfo from "./contact-info/ContactInfo";
import FreeInfo from "./free-info/FreeInfo";
import {
  ContactInfoBlock,
  ContentContainer,
  FreeInfoBlock,
  LeftColumn,
  MainFormBlock,
  PageContainer,
  Title,
} from "./PropertyPage.styled";
import { useState } from "react";
import { PropertyFormState, INITIAL_FORM_STATE } from "./FormType";

const PropertyPage = () => {
  const [formState, setFormState] =
    useState<PropertyFormState>(INITIAL_FORM_STATE);

  const updateField = <T extends keyof PropertyFormState>(
    fieldName: T,
    value: PropertyFormState[T]
  ) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  return (
    <PageContainer>
      <Title>Узнайте рыночную стоимость квартиры</Title>
      <ContentContainer>
        <LeftColumn>
          <MainFormBlock>
            <Form formState={formState} updateField={updateField} />
          </MainFormBlock>
          <ContactInfoBlock>
            <ContactInfo formState={formState} updateField={updateField} />
          </ContactInfoBlock>
        </LeftColumn>
        <FreeInfoBlock>
          <FreeInfo />
        </FreeInfoBlock>
      </ContentContainer>
    </PageContainer>
  );
};

export default PropertyPage;

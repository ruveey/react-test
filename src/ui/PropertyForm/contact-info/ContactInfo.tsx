import React from "react";
import { InputField } from "../form/Form.styled";
import {
  Container,
  ContactTitle,
  ContactRow,
  FormFooter,
  CheckboxContainer,
  Checkbox,
  LinkText,
  SubmitButton,
} from "./Contact.styled";
import { PropertyFormState } from "../FormType";

interface FormProps {
  formState: PropertyFormState;
  updateField: <T extends keyof PropertyFormState>(
    fieldName: T,
    value: PropertyFormState[T]
  ) => void;
}

const ContactInfo = ({ formState, updateField }: FormProps) => {
  return (
    <Container>
      <ContactTitle>Контактная информация</ContactTitle>
      <ContactRow>
        <InputField
          type="text"
          placeholder="Имя"
          value={formState.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Номер телефона"
          value={formState.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
      </ContactRow>

      <FormFooter>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={formState.agreeToTerms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateField("agreeToTerms", e.target.checked)
            }
          />
          <span>
            Я принимаю{" "}
            <LinkText href="#">политику обработки персональных данных</LinkText>
          </span>
        </CheckboxContainer>

        <SubmitButton type="submit" disabled={!formState.agreeToTerms}>
          Оставить заявку
        </SubmitButton>
      </FormFooter>
    </Container>
  );
};

export default ContactInfo;

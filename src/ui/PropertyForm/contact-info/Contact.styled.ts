import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ContactTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background-color: #f5f5f5;
  flex: 1;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const LinkText = styled.a`
  color: #0277bd;
  text-decoration: underline;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #333;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  width: 200px;

  @media (max-width: 576px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputField = styled.input`
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background-color: #f5f5f5;
  width: 100%;
  box-sizing: border-box;
`;

export const SelectField = styled.select`
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background-color: #f5f5f5;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #555;
  }
`;

export const SectionTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const OptionButton = styled.button<{ selected: boolean }>`
  padding: 10px 15px;
  background-color: ${(props) => (props.selected ? "#e0f7fa" : "#f5f5f5")};
  border: 1px solid ${(props) => (props.selected ? "#00bcd4" : "#ccc")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#b2ebf2" : "#e0e0e0")};
  }

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

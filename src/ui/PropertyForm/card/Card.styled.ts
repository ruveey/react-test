import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

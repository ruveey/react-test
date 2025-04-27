import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: white;
  padding: 20px;
  gap: 4px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }
`;

import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Block = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
`;

export const MainFormBlock = styled(Block)``;

export const ContactInfoBlock = styled(Block)``;

export const FreeInfoBlock = styled(Block)`
  flex: 1;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

import { styled } from "styled-components";

export const InfoContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

export const FreeInfoBadge = styled.div`
  display: inline-block;
  color: white;
  background-color: #f44336;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const FreeInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const FreeInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
  color: #1bc47d;
  display: flex;
  align-items: center;
`;

export const ItemText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  width: 0;
  flex-grow: 1;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
`;

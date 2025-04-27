import React from "react";
import CheckCircleIcon from "../../../shared/icons/CheckCircleIcon";
import {
  FreeInfoBadge,
  FreeInfoItem,
  FreeInfoList,
  IconWrapper,
  InfoContainer,
  ItemText,
} from "./FreeInfo.styled";

const FreeInfo: React.FC = () => {
  return (
    <InfoContainer>
      <FreeInfoBadge>Бесплатно</FreeInfoBadge>
      <FreeInfoList>
        <FreeInfoItem>
          <IconWrapper>
            <CheckCircleIcon size={20} />
          </IconWrapper>
          <ItemText>
            Проанализируем стоимость квартиры по открытым базам
          </ItemText>
        </FreeInfoItem>
        <FreeInfoItem>
          <IconWrapper>
            <CheckCircleIcon size={20} />
          </IconWrapper>
          <ItemText>Проанализируем по закрытым аукционам риелторов</ItemText>
        </FreeInfoItem>
        <FreeInfoItem>
          <IconWrapper>
            <CheckCircleIcon size={20} />
          </IconWrapper>
          <ItemText>
            Рассчитаем оптимальную цену для быстрой продажи недвижимости
          </ItemText>
        </FreeInfoItem>
      </FreeInfoList>
    </InfoContainer>
  );
};

export default FreeInfo;

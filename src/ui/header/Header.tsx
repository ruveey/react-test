import Card from "../PropertyForm/card/Card";
import { CardContainer, HeaderContainer, Title } from "./header.styled";

function Header() {
  return (
    <HeaderContainer>
      <Title>Зачем продавать с нами?</Title>
      <CardContainer>
        <Card
          title="Быстро"
          body="Оперативно сформируем широкий пул перспективных покупателей."
        />
        <Card
          title="Выгодно"
          body="Мы профессионально продемонстрируем преимущества квартиры."
        />
        <Card
          title="Безопасно"
          body="Все необходимые юридические проверки обеспечат вашу безопасность."
        />
        <Card
          title="Комфортно"
          body="Позаботимся, чтобы покупатели подходили под ваши условия."
        />
      </CardContainer>
    </HeaderContainer>
  );
}

export default Header;

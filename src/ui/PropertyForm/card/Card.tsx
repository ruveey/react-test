import CheckCircleIcon from "../../../shared/icons/CheckCircleIcon";
import { CardContainer, CardTitle, CardBody } from "./Card.styled";

interface CardProps {
  title: string;
  body: string;
}

const Card = ({ title, body }: CardProps) => {
  return (
    <CardContainer>
      <CardTitle>
        <CheckCircleIcon />
        {title}
      </CardTitle>
      <CardBody>{body}</CardBody>
    </CardContainer>
  );
};

export default Card;

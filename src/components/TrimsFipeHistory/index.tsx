import { formatToBRL } from "Utils/formatToBRL";
import { Container, ItemContainer, ItemValue, Title } from "./styles";

type Props = {
  info: PageProps["pageProps"];
};

export function TrimsFipeHistory({ info }: Props) {
  if (!info.relatedTrimsFipeInfo) return null;

  return (
    <Container>
      <Title>
        Tabela de preços Fipe {info.trim.modelName} {info.trim.modelName}{" "}
        {info.year}
      </Title>
      {info.relatedTrimsFipeInfo.map((it, index) => (
        <ItemContainer key={index}>
          <ItemValue>{`${it.makeName} ${it.modelName} ${it.name}`}</ItemValue>
          <ItemValue>
            {formatToBRL(it?.fipePrice) ?? "Não disponível"}
          </ItemValue>
        </ItemContainer>
      ))}
    </Container>
  );
}

import {
  Container,
  ItemContainer,
  ItemLabel,
  ItemValue,
  Title,
} from "./styles";

type Props = {
  info: VehicleInfo;
};

export function TechnicalFile({ info }: Props) {
  return (
    <Container>
      <Title>Ficha técnica</Title>
      <ItemContainer>
        <ItemLabel>
          Marca: <ItemValue>{info.Marca ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Modelo: <ItemValue>{info?.Modelo ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Ano: <ItemValue>{info.AnoModelo ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Combustível:{" "}
          <ItemValue>{info.Combustivel ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
    </Container>
  );
}

import {
  Container,
  ItemContainer,
  ItemLabel,
  ItemValue,
  Title,
} from "./styles";

type Props = {
  info: PageProps["pageProps"];
};

export function TechnicalFile({ info }: Props) {
  if (!info) return null;

  return (
    <Container>
      <Title>Ficha técnica</Title>
      <ItemContainer>
        <ItemLabel>
          Marca: <ItemValue>{info.trim.makeName ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Modelo:{" "}
          <ItemValue>{info?.trim.modelName ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Ano: <ItemValue>{info.year ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Combustível:{" "}
          <ItemValue>{info.trim.fuelName ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Código Fipe:{" "}
          <ItemValue>{info.fipeInfo.fipeId ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Tração :{" "}
          <ItemValue>{info.trim.traction ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Consumo cidade(km/l) :{" "}
          <ItemValue>{info.trim.cityConsumption ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Consumo estrada(km/l) :{" "}
          <ItemValue>{info.trim.roadConsumption ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Alimentação :{" "}
          <ItemValue>{info.trim.alimentation ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Tanque (L) :{" "}
          <ItemValue>{info.trim.tank ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Ocupantes :{" "}
          <ItemValue>{info.trim.seats ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Portas : <ItemValue>{info.trim.doors ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
      <ItemContainer>
        <ItemLabel>
          Velocidade máxima (km/h) :{" "}
          <ItemValue>{info.trim.maxVelocity ?? "Não disponível"}</ItemValue>
        </ItemLabel>
      </ItemContainer>
    </Container>
  );
}

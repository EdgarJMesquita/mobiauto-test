import React from "react";
import {
  GobackText,
  Padding,
  Price,
  PriceChip,
  Row,
  Scroll,
  Subtitle,
  Title,
} from "./styles";
import { Background } from "Components/Background";
import { VehicleDetailsScreenProps } from "Routes/routes";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "Global/theme";
import { TechnicalFile } from "Components/TechnicalFile";

export function VehicleDetails({
  route,
  navigation,
}: VehicleDetailsScreenProps) {
  const { info, maker, model, type, year } = route.params;

  return (
    <Background showPadding={false}>
      <Scroll>
        <Padding>
          <Row onPress={navigation.goBack}>
            <AntDesign name="left" size={14} color={theme.colors.title} />
            <GobackText>Voltar</GobackText>
          </Row>
          <Title>
            Tabela Fipe: Preço {info.Marca} {info.Modelo} {info.AnoModelo}
          </Title>
          <PriceChip>
            <Price>{info.Valor}</Price>
          </PriceChip>
          <Subtitle>
            Este é o preço de compra do veículo Mês de referência:{" "}
            {info.MesReferencia.toLocaleUpperCase()}
          </Subtitle>
        </Padding>
        <TechnicalFile info={info} />
      </Scroll>
    </Background>
  );
}

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
import { PriceHistoryChart } from "Components/PriceHistoryChart";
import { TrimsFipeHistory } from "Components/TrimsFipeHistory";
import { formatToBRL } from "Utils/formatToBRL";

export function VehicleDetails({
  route,
  navigation,
}: VehicleDetailsScreenProps) {
  const { info } = route.params;

  return (
    <Background showPadding={false}>
      <Scroll contentContainerStyle={{ paddingBottom: 100 }}>
        <Padding>
          <Row onPress={navigation.goBack}>
            <AntDesign name="left" size={14} color={theme.colors.title} />
            <GobackText>Voltar</GobackText>
          </Row>
          <Title>
            Tabela Fipe: Preço {info.trim.makeName} {info.trim.modelName}{" "}
            {info.year}
          </Title>
          <PriceChip>
            <Price>{formatToBRL(info.fipeInfo?.price)}</Price>
          </PriceChip>
          <Subtitle>
            Este é o preço de compra do veículo Mês de referência:{" "}
            {info.fipeInfo?.date?.label}
          </Subtitle>
        </Padding>
        <TrimsFipeHistory info={info} />
        <PriceHistoryChart history={info.fipeHistory} />
        <TechnicalFile info={info} />
      </Scroll>
    </Background>
  );
}

import React, { useState } from "react";
import { Card, Row, Subtitle, Title } from "./styles";
import { Background } from "Components/Background";
import { boxShadow } from "Global/boxShadow";
import { Chip } from "Components/Chip";
import { Option, Select } from "Components/Select";
import { Button } from "Components/Button";
import { HomeScreenProps } from "Routes/routes";
import { api } from "Services/api";
import { Alert } from "react-native";

type VehicleType = "carros" | "motos" | "caminhoes";

export function Home({ navigation }: HomeScreenProps) {
  const [type, setType] = useState<VehicleType>("carros");
  const [maker, setMaker] = useState<Option | null>(null);
  const [model, setModel] = useState<Option | null>(null);
  const [year, setYear] = useState<Option | null>(null);
  const [isLoading, setLoading] = useState(false);

  const isButtonEnabled = [type, maker, model, year].every((it) => !!it);

  async function onSubmit() {
    if (!maker) return;
    if (!model) return;
    if (!year) return;

    try {
      if (isLoading) return;
      setLoading(true);
      const path = `${type}/marcas/${maker.codigo}/modelos/${model?.codigo}/anos/${year?.codigo}`;
      const { data } = await api.get(path);

      setLoading(false);

      navigation.navigate("VehicleDetails", {
        type,
        maker,
        model,
        year,
        info: data,
      });
    } catch (error) {
      setLoading(false);
      Alert.alert("Algo deu errado", "Se persistir contate nosso suporte.", [
        {
          text: "Ok, fechar",
        },
      ]);
    }
  }

  function handleChangeType(newType: VehicleType) {
    if (type === newType) {
      return;
    }
    setType(newType);
    setMaker(null);
    setModel(null);
    setYear(null);
  }

  function handleChangeMaker(option: Option) {
    if (option.codigo === maker?.codigo) {
      return;
    }
    setMaker(option);
    setModel(null);
    setYear(null);
  }

  function handleChangeModel(option: Option) {
    if (option.codigo === model?.codigo) {
      return;
    }
    setModel(option);
    setYear(null);
  }

  return (
    <Background>
      <Title>Tabela Fipe</Title>
      <Subtitle>Consulte o valor de um veículo de forma gratuita</Subtitle>
      <Card style={boxShadow}>
        <Row>
          <Chip
            selected={type === "carros"}
            onPress={() => handleChangeType("carros")}
          >
            Carro
          </Chip>
          <Chip
            selected={type === "motos"}
            onPress={() => handleChangeType("motos")}
          >
            Moto
          </Chip>
          <Chip
            selected={type === "caminhoes"}
            onPress={() => handleChangeType("caminhoes")}
          >
            Caminhão
          </Chip>
        </Row>

        <Select
          placeholder="Marca"
          value={maker}
          onChange={handleChangeMaker}
          path={`${type}/marcas`}
        />
        <Select
          placeholder="Modelo"
          value={model}
          onChange={handleChangeModel}
          path={`${type}/marcas/${maker?.codigo}/modelos`}
          disabled={maker == null}
        />
        <Select
          placeholder="Ano"
          value={year}
          onChange={setYear}
          path={`${type}/marcas/${maker?.codigo}/modelos/${model?.codigo}/anos`}
          disabled={model === null || maker === null}
        />
        <Button
          disabled={!isButtonEnabled}
          onPress={onSubmit}
          isLoading={isLoading}
        >
          Consultar preço
        </Button>
      </Card>
    </Background>
  );
}

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
import { formatCarName } from "Utils/formatCarName";

export function Home({ navigation }: HomeScreenProps) {
  const [type, setType] = useState<VehicleType>("CAR");
  const [maker, setMaker] = useState<Option | null>(null);
  const [model, setModel] = useState<Option | null>(null);
  const [year, setYear] = useState<Option | null>(null);
  const [trim, setTrim] = useState<Option | null>(null);

  const [isLoading, setLoading] = useState(false);

  const isButtonEnabled = [type, maker, model, year, trim].every((it) => !!it);

  function parseType(_type: VehicleType) {
    if (type === "CAR") return "carros";
    if (type === "MOTOCYCLE") return "motos";
    if (type === "TRUCK") return "caminhoes";

    throw Error("Inválid type");
  }

  async function onSubmit() {
    if (!maker) return;
    if (!model) return;
    if (!year) return;
    if (!trim) return;

    try {
      if (isLoading) return;
      setLoading(true);
      const parsedType = parseType(type);
      const formattedName = formatCarName(trim.name);
      const path = `https://www.mobiauto.com.br/tabela-fipe/_next/data/pV_MkhniF1eSfLJIQcqt1/${parsedType}/${maker.name.toLocaleLowerCase()}/${model.name.toLocaleLowerCase()}/${
        year.id
      }/${formattedName}.json`;
      const { data } = await api.get<PageProps>(path);
      setLoading(false);

      navigation.navigate("VehicleDetails", {
        info: data.pageProps,
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

  return (
    <Background>
      <Title>Tabela Fipe</Title>
      <Subtitle>Consulte o valor de um veículo de forma gratuita</Subtitle>
      <Card style={boxShadow}>
        <Row>
          <Chip
            selected={type === "CAR"}
            onPress={() => handleChangeType("CAR")}
          >
            Carro
          </Chip>
          <Chip
            selected={type === "MOTOCYCLE"}
            onPress={() => handleChangeType("MOTOCYCLE")}
          >
            Moto
          </Chip>
          <Chip
            selected={type === "TRUCK"}
            onPress={() => handleChangeType("TRUCK")}
          >
            Caminhão
          </Chip>
        </Row>

        <Select
          placeholder="Marca"
          value={maker}
          onChange={setMaker}
          path={`search/api/vehicle/v1.0/${type}/makes?inProduction=false`}
        />
        <Select
          placeholder="Modelo"
          value={model}
          onChange={setModel}
          path={`search/api/vehicle/v1.0/${type}/models/id/${maker?.id}?inProduction=false`}
          disabled={maker == null}
        />
        <Select
          placeholder="Ano"
          value={year}
          onChange={setYear}
          path={`search/api/vehicle/v1.0/${type}/years/id/${model?.id}?inProduction=false`}
          disabled={model === null || maker === null}
        />
        <Select
          placeholder="Versão"
          value={trim}
          onChange={setTrim}
          path={`search/api/vehicle/v1.0/${type}/trims/id/${model?.id}/${year?.id}`}
          disabled={model === null || maker === null || year === null}
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

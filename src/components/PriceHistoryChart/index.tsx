import {
  LineChart,
  Grid,
  YAxis,
  XAxis,
  GridProps,
} from "react-native-svg-charts";
import { Container, Row, Title } from "./styles";
import { Alert, View } from "react-native";
import { theme } from "Global/theme";

import * as shape from "d3-shape";
import { Circle } from "react-native-svg";
import { formatToBRL } from "Utils/formatToBRL";

type Props = {
  history: PageProps["pageProps"]["fipeHistory"];
};

// Ainda não está bom...

export function PriceHistoryChart({ history }: Props) {
  if (!history) return null;

  const sortedByDateAsc = history
    .sort((a, b) =>
      new Date(a.date.year, a.date.month - 1) <
      new Date(b.date.year, b.date.month)
        ? -1
        : 1
    )
    .map((it, index) => ({ ...it, index: index }));

  const ChartPoints = ({
    data,
    x,
    y,
  }: GridProps<number> & { data: typeof sortedByDateAsc }) => {
    if (!data) return null;
    return data.map((item, index) => (
      <Circle
        key={index}
        cx={x!(item.index)}
        cy={y!(item.price)}
        r={4}
        stroke={theme.colors.primary}
        fill={theme.colors.primary}
        onPress={() => Alert.alert(item.price.toString())}
      />
    ));
  };

  return (
    <Container>
      <Title>Histórico de preços Fipe</Title>
      <Row>
        <YAxis
          data={sortedByDateAsc}
          yAccessor={({ item }) => item.price}
          svg={{
            fontSize: 10,
            fill: theme.colors.title,
          }}
          contentInset={{ top: 10, bottom: 10 }}
          formatLabel={(value: number) => formatToBRL(value).slice(0, -3)}
          max={
            sortedByDateAsc.sort((a, b) => (a.price > b.price ? -1 : 1))[0]
              .price
          }
          min={
            sortedByDateAsc.sort((a, b) => (a.price < b.price ? -1 : 1))[0]
              .price
          }
          style={{ height: 300 }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            data={sortedByDateAsc}
            yAccessor={({ item }) => item.price}
            xAccessor={({ item }) => item.index}
            curve={shape.curveNatural}
            style={{ height: 300, width: "100%" }}
            contentInset={{ left: 10, top: 10, bottom: 10, right: 10 }}
            svg={{ stroke: theme.colors.primary }}
            yMax={
              sortedByDateAsc.sort((a, b) => (a.price > b.price ? -1 : 1))[0]
                .price
            }
            yMin={
              sortedByDateAsc.sort((a, b) => (a.price < b.price ? -1 : 1))[0]
                .price
            }
            animate={true}
          >
            <Grid
              svg={{
                stroke: "rgba(0,0,0,0.2)",
              }}
              belowChart={true}
              direction="HORIZONTAL"
            />
            <ChartPoints data={sortedByDateAsc} />
          </LineChart>

          <XAxis
            data={sortedByDateAsc}
            svg={{
              fontSize: 10,
              fill: theme.colors.title,
            }}
            xAccessor={({ item }) => item.index}
            contentInset={{ left: 25, right: 25 }}
            formatLabel={(value) =>
              sortedByDateAsc.find((it) => it.index === value)!.date.label
            }
          />
        </View>
      </Row>
    </Container>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { AppHeader } from "Components/AppHeader";
import { theme } from "Global/theme";
import { Option } from "Components/Select";
import { VehicleDetails } from "Screens/VehicleDetails";

type RootParamsList = {
  Home: undefined;
  VehicleDetails: {
    info: PageProps["pageProps"];
  };
};

export type HomeScreenProps = NativeStackScreenProps<RootParamsList, "Home">;

export type VehicleDetailsScreenProps = NativeStackScreenProps<
  RootParamsList,
  "VehicleDetails"
>;

const Stack = createNativeStackNavigator<RootParamsList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "",
          headerLeft: () => <AppHeader />,

          headerStyle: {
            backgroundColor: theme.colors.onBackground,
          },
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

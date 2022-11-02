import { NavigationContainer, useRoute } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { setBackgroundColorAsync, setPositionAsync } from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import icons from "./assets";
import GotoApp from "./GotoApp";
import { Calculator, Carousel, NextMusic, RoomControl } from "./src";

const Applications = [
  {
    id: "001",
    name: "Calculator",
    app: Calculator,
    icon: icons.calc,
  },
  {
    id: "002",
    name: "Carousel",
    app: Carousel,
    icon: icons.carousel,
  },
  {
    id: "003",
    name: "RoomControl",
    app: RoomControl,
    icon: icons.rcontrol,
  },
  {
    id: "004",
    name: "NextMusic",
    app: NextMusic,
    icon: icons.music,
  },
];
const Stack = createNativeStackNavigator<StackParamList>();

type StackParamList = {
  Home: undefined;
  Calculator: undefined;
};
type HomeProps = NativeStackScreenProps<StackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  if (Platform.OS == "android") {
    setPositionAsync("absolute");
    setBackgroundColorAsync("rgba(0,0,0,0.01)");
  }
  return (
    <View style={styles.container}>
      {Applications.map((app) => {
        return (
          <GotoApp
            key={app.id}
            icon={app.icon}
            onPress={() => navigation.navigate(app.name as never)}
            app={app.name}
          />
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {Applications.map((item) => {
          return (
            <Stack.Screen
              key={item.id}
              name={item.name as never}
              component={item.app}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

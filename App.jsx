import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Algorithms from "./pages/Algorithms";
import DataStructures from "./pages/DataStructures";
import Home from "./pages/Home";
import { sectionData } from "./constants";
import DataStructure from "./pages/DataStructure";
import Algorithm from "./pages/Algorithm";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  const algorithms = Object.values(sectionData[1].topics)
    .reduce((prev, current) => prev.concat(Object.values(current)), [])
    .map((algorithm) => algorithm.name);

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Algorithms" component={Algorithms} />
          <Stack.Screen name="Data Structures" component={DataStructures} />
          {sectionData[0].topics.map((item) => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={DataStructure}
            />
          ))}
          {algorithms.map((item) => (
            <Stack.Screen key={item} name={item} component={Algorithm} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

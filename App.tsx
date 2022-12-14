import { StatusBar } from "react-native";
import { Loader } from "@components/Loader";
import { Home } from "@screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loader />}
    </ThemeProvider>
  );
}

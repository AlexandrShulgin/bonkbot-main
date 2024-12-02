import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Providers } from "./src/store/provider";
import { useAppSelector } from "./src/store/hooks";
import MainNavigationStack from "./src/navigation/mainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import "./src/locale/i18n";
import { pixel } from "./src/utils/native-pixel";
import { statusBarBlue } from "./src/assets/styles/colors.style";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? pixel(44) : 0;
const layoutStyles = StyleSheet.create({
  statusBarContainer: {
    height: STATUS_BAR_HEIGHT,
  },
});

export default function AppRoot() {
  return (
    <Providers>
      <NavigationContainer>
        <View>
          {Platform.OS === "ios" ? (
            <View style={[layoutStyles.statusBarContainer, { backgroundColor: statusBarBlue }]} />
          ) : (
            <StatusBar
              backgroundColor={statusBarBlue}
              barStyle={"light-content"}
            />
          )}
        </View>
        <MainNavigationStack />
      </NavigationContainer>
    </Providers>
  );
}
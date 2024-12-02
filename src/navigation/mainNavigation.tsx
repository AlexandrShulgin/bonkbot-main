import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/welcomeScreen/welcomeScreen";
import ChatScreen from "../screens/chatScreen/chatScreen";
import SettingsScreen from "../screens/settingsScreen/settingsScreen";

// Type definition for navigation parameters
export type NavigationParamList = {
  WELCOMESCREEN: undefined;  // Welcome screen with no parameters
  CHATSCREEN: undefined;     // Chat screen with no parameters
  SETTINGSSCREEN: undefined  // Settings screen with no parameters
};

// Create stack navigator with typed parameters
const Stack = createStackNavigator<NavigationParamList>();

// Main navigation stack component that defines the app's screen hierarchy
const MainNavigationStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="WELCOMESCREEN">
      {/* Welcome screen - First screen users see when opening the app */}
      <Stack.Screen
        name="WELCOMESCREEN"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      
      {/* Chat screen - Main interaction screen */}
      <Stack.Screen
        name="CHATSCREEN"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      
      {/* Settings screen - App configuration and preferences */}
      <Stack.Screen
        name="SETTINGSSCREEN"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
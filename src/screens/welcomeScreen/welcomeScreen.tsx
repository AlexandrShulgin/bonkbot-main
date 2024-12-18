import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./welcomeScreen.style";
import welcomeScreenHook from "./welcomeScreen-hook";
import MainButton from "../../components/mainButton/mainButton";

// Welcome screen component - first screen users see when opening the app
const WelcomeScreen: React.FC = () => {
  const { t, BonkbotIcon, onPressToStart, openPrivacyPolicy } = welcomeScreenHook();

  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image 
        style={{ flex: 1, width: "100%", height: 800, position: "absolute" }} 
        resizeMode="cover" 
        source={require('../../assets/images/background.png')} 
      />

      {/* Title with gradient background */}
      <LinearGradient
        colors={["#010705", "#114634"]}
        locations={[0, 0.4929]}
        start={{ x: 0.01, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.titleContainer}
      >
        <Text style={styles.title}>{"Personal GPT"}</Text>
      </LinearGradient>

      {/* Main content container */}
      <View style={styles.subContainer}>
        {/* Logo and app name */}
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image source={BonkbotIcon} style={styles.icon} />
          <Text style={styles.name}>Bonkbot</Text>
        </View>

        {/* Get started button */}
        <MainButton title={t('getStarted')} onPress={onPressToStart} />
      </View>
      <TouchableOpacity onPress={openPrivacyPolicy}>
        <Text style={styles.terms}>Privacy Policy and Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
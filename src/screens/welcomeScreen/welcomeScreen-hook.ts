import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useCallback, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConnectAI } from "../../store/slices/aiSlice";
import { NavigationParamList } from "../../navigation/mainNavigation";
import { useNavigation } from "@react-navigation/native";

// Navigation props type
type Props = NativeStackScreenProps<NavigationParamList, "CHATSCREEN">;

// Custom hook for welcome screen logic
export default () => {
  const { t } = useTranslation();
  const BonkbotIcon = require("../../assets/images/bonk.png");
  const apiKey = useAppSelector((state) => state.ai.apiKey);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Props["navigation"]>();

  // Navigate to chat screen when API connection is ready
  useEffect(() => {
    if (apiKey && apiKey.message === "Chat is ready!") {
      navigation.navigate("CHATSCREEN");
    }
  }, [apiKey]);

  // Handle get started button press
  const onPressToStart = useCallback(() => {
    dispatch(ConnectAI());
  }, [dispatch]);

  return {
    t,
    BonkbotIcon,
    onPressToStart,
    apiKey,
  };
};
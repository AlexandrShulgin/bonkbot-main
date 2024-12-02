import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addLocalMessage, SendMessageAI } from "../../store/slices/aiSlice";
import { useNavigation } from "@react-navigation/native";
import { NavigationParamList } from "../../navigation/mainNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Clipboard from 'expo-clipboard';

// Navigation props type
type Props = NativeStackScreenProps<NavigationParamList, "CHATSCREEN">;

// Interface for examples data structure
export interface IExamplesData {
  icon: any;
  title: string;
  firstVar: string;
  secondVar: string;
}

// Custom hook for chat screen logic
export default () => {
  const { t } = useTranslation();
  const navigation = useNavigation<Props["navigation"]>();
  const messages = useAppSelector((state) => state.ai.messages);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>('');

  // Handle sending messages to AI
  const handleSendMessage = useCallback(() => {
    dispatch(addLocalMessage({ question: message }));
    dispatch(SendMessageAI(message));
    setMessage('');
  }, [message]);

  // Copy text to clipboard utility
  const copyToClipboard = async (text: string) => {    
    await Clipboard.setStringAsync(text);
  };

  return {
    t,
    message,
    messages,
    setMessage,
    handleSendMessage,
    navigation,
    copyToClipboard
  };
};
import React, { useMemo } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { pixel } from "../../utils/native-pixel";
import { Icons } from "../../assets/icons";
import styles from "./chatScreen.style";
import chatScreenHook, { IExamplesData } from "./chatScreen-hook";
import MessagesListItem from "./components/messagesListItem/messagesListItem";
import ChatExampleItem from "../../components/variantItem/ChatExampleItem";

// Main chat screen component
const ChatScreen: React.FC = () => {
  const { 
    t, 
    message, 
    setMessage, 
    handleSendMessage, 
    messages, 
    navigation, 
    copyToClipboard 
  } = chatScreenHook();

  // Memoized examples data to prevent unnecessary re-renders
  const examplesData: IExamplesData[] = useMemo(() => [
    {
      icon: <Icons.Examples />,
      title: t('examples'),
      firstVar: t('examples1'),
      secondVar: t('examples2'),
    },
    {
      icon: <Icons.Capabilities />,
      title: t('capabilities'),
      firstVar: t('capabilities1'),
      secondVar: t('capabilities2'),
    },
    {
      icon: <Icons.Limitations />,
      title: t('limitations'),
      firstVar: t('limitations1'),
      secondVar: t('limitations2'),
    },
  ], [t]);

  return (
    // Keyboard handling wrapper
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={Platform.select({ 
        ios: pixel(40), 
        android: pixel(-375) 
      })}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/* Background image */}
        <Image 
          style={{ flex: 1, width: "100%", height: 800, position: "absolute" }} 
          resizeMode="cover" 
          source={require('../../assets/images/background.png')} 
        />

        {/* Settings button */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('SETTINGSSCREEN')} 
          style={styles.settingsContainer}
        >
          <Icons.Settings />
          <Text style={styles.settingsText}>{t('settings')}</Text>
        </TouchableOpacity>

        {/* Main content area */}
        <View style={styles.allExamples}>
          {/* Chat messages list */}
          {messages.length > 0 ? (
            <View style={styles.chatContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[...messages].reverse()}
                inverted
                renderItem={({ item }) => (
                  <MessagesListItem
                    copyToClipboard={copyToClipboard}
                    item={item} 
                  />
                )}
              />
            </View>
          ) : (
            // Examples list shown when no messages
            <View style={styles.chatContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={examplesData}
                renderItem={({ item, index }) => (
                  <View key={index} style={{ flex: 1 }}>
                    <View style={
                      index === 0
                        ? styles.exampleTitleContainer
                        : styles.exampleTitleContainerWithGap
                    }>
                      {item.icon}
                      <Text style={styles.exampleTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.variantsContainer}>
                      <ChatExampleItem text={item.firstVar} />
                      <ChatExampleItem text={item.secondVar} />
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </View>

        {/* Input area */}
        <View style={styles.bottomContainer}>
          <View style={styles.divider} />
          <View style={styles.inputContainer}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              multiline
              style={styles.input} 
            />
            <TouchableOpacity onPress={handleSendMessage}>
              <Icons.Send />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
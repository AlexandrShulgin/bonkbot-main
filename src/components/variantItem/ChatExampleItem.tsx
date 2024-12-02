import React from "react";
import { Text, View } from "react-native";
import styles from "./ChatExampleItem.style";

// Interface defining the required props for ChatExampleItem component
interface IProps {
    text: string; // Text content to display in the example item
}

// Component that displays a single chat example with styled container and text
const ChatExampleItem: React.FC<IProps> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.exampleTitle}>{text}</Text>
        </View>
    );
};

export default ChatExampleItem;
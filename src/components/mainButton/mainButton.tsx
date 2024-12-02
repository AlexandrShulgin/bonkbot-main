import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./mainButton.style";

// Interface defining the required props for MainButton component
interface IProps {
    title: string;      // Text to display inside the button
    onPress: () => void; // Callback function for button press
}

// Reusable button component with consistent styling
const MainButton: React.FC<IProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={onPress}
            activeOpacity={0.7} // Add slight opacity change on press
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MainButton;
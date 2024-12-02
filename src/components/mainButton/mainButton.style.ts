import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
    // Main button container with white background and rounded corners
    container: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 1)", // Solid white
        paddingVertical: pixel(24),
        borderRadius: pixel(24),
        alignItems: "center"
    },
    // Button text styling with specific typography settings
    title: {
        fontSize: pixel(14),
        fontWeight: "400", // Regular font weight
        lineHeight: pixel(16), // Optimal line height for readability
        color: "rgba(1, 1, 1, 1)", // Solid black
        textAlign: "center",
    },
});

export default styles;
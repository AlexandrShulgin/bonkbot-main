import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
    // Container for chat example item with semi-transparent background
    container: {
        flex: 1,
        height: pixel(111),
        backgroundColor: "rgba(217, 217, 217, 0.12)", // Light gray with 12% opacity
        borderRadius: pixel(24),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: pixel(10)
    },
    // Text styling for example title with semi-transparent white color
    exampleTitle: {
        fontSize: pixel(14),
        fontWeight: "400", // Regular font weight
        lineHeight: pixel(16), // Optimal line height for readability
        color: "rgba(255, 255, 255, 0.77)", // White with 77% opacity
        textAlign: "center",
    },
});

export default styles;
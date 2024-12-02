import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
    // Full-screen overlay with semi-transparent dark background
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Main modal container with dark theme and rounded corners
    modalContainer: {
        width: pixel(300), // Using pixel for consistent sizing
        position: 'relative',
        backgroundColor: '#010705',
        borderRadius: pixel(10),
        padding: pixel(20),
        alignItems: 'center',
    },
    // Modal header text styling
    modalTitle: {
        fontSize: pixel(18),
        marginBottom: pixel(35),
        color: '#FFFFFF',
    },
    // Individual language option button container
    languageButton: {
        padding: pixel(10),
        width: '100%',
        alignItems: 'center',
    },
    // Language option text styling
    languageText: {
        fontSize: pixel(16),
        color: '#FFFFFF',
    },
    // Highlight style for the currently selected language
    selectedLanguageButton: {
        backgroundColor: '#144F3D', // Dark green background
    },
    // Enhanced text style for selected language
    selectedLanguageText: {
        fontWeight: 'bold',
    },
    // Close button positioning in top-right corner
    closeButton: {
        position: 'absolute',
        top: pixel(10),
        right: pixel(10)
    },
});

export default styles;
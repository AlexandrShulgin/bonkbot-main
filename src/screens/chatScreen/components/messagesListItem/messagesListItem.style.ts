import { StyleSheet } from 'react-native';
import { pixel } from '../../../../utils/native-pixel';

const styles = StyleSheet.create({
    // Main container for message item with vertical padding
    container: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: pixel(8)
    },
    // Base message bubble style with rounded corners
    cloud: {
        borderRadius: pixel(12),
        paddingVertical: pixel(8),
        paddingHorizontal: pixel(16),
        marginBottom: pixel(2),
        maxWidth: pixel(300),
        backgroundColor: "#1E825F", // Green background for user messages
        flex: 1
    },
    // Style modifications for AI responses
    cloudFromMe: {
        borderBottomLeftRadius: pixel(12),
        backgroundColor: "rgba(92, 92, 92, 0.2)", // Semi-transparent gray for AI messages
        flexDirection: "row",
        gap: pixel(5),
        flex: 1
    },
    // Message text styling
    cloudText: {
        fontSize: pixel(16),
        fontWeight: '400',
        color: "white",
    },
    // Container for action buttons (like, dislike, copy)
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: pixel(16),
        flex: 1
    },
    // Bottom container for message actions
    bottomContainer: {
        flexDirection: 'row',
        marginTop: pixel(12),
        justifyContent: "space-between",
        flex: 1,
    },
});

export default styles;
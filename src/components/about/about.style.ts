
import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  // Modal background overlay
  modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
  },
  // Main modal container
  modalContainer: {
      width: pixel(300),
      backgroundColor: 'rgba(217, 217, 217, 0.25)',
      borderRadius: pixel(10),
      padding: pixel(20),
      alignItems: 'center',
      position: 'relative',
  },
  // Modal title styling
  modalTitle: {
      fontSize: pixel(18),
      marginBottom: pixel(35),
      color: '#FFFFFF',
      fontWeight: '500',
  },
  // Close button positioning
  closeButton: {
      position: 'absolute',
      top: pixel(10),
      right: pixel(10)
  },
  // Regular text in modal
  modalText: {
      fontSize: pixel(16),
      color: 'rgba(255, 255, 255, 0.74)',
      marginBottom: pixel(8),
  },
  // Bold text variant
  boldText: {
      fontWeight: 'bold',
      color: 'rgba(255, 255, 255, 0.74)',
  },
});

export default styles;

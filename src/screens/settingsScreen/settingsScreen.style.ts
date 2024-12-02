import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  // Main container styling
  container: {
    flex: 1,
    paddingTop: pixel(35)
  },
  // Header section with back button and title
  header: {
    gap: pixel(16),
    paddingHorizontal: pixel(26),
    paddingVertical: pixel(21),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pixel(75)
  },
  // Common title text styling
  title: {
    fontSize: pixel(16),
    fontWeight: '400',
    color: 'rgba(230, 224, 233, 1)',
    flex: 1
  },
  // Container for settings menu items
  subContainer: {
    paddingHorizontal: pixel(26),
    gap: pixel(12)
  },
  // Language selector container
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixel(35),
  },
  // Selected language display
  language: {
    paddingHorizontal: pixel(22),
    borderRadius: pixel(21),
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  // Language text styling
  languageText: {
    fontSize: pixel(14),
    fontWeight: '400',
    color: 'rgba(230, 224, 233, 1)'
  },
  // Individual menu item styling
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: pixel(16),
    borderBottomWidth: pixel(1),
    borderBottomColor: 'rgba(255, 255, 255, 0.2)'
  }
});

export default styles;
import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  // Main container with dark background
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: pixel(16),
    paddingBottom: pixel(49),
    backgroundColor: "#010705"
  },
  // Content container with horizontal padding
  subContainer: {
    paddingHorizontal: pixel(24),
    width: "100%",
    flex: 1,
    justifyContent: "space-between"
  },
  // Gradient title container
  titleContainer: {
    paddingVertical: pixel(8),
    paddingHorizontal: pixel(16),
    borderRadius: pixel(100),
  },
  // Title text styling
  title: {
    fontSize: pixel(14),
    fontWeight: "400",
    lineHeight: pixel(16),
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  // App icon styling
  icon: {
    // Icon dimensions and styling if needed
  },
  // App name text styling
  name: {
    fontSize: pixel(40),
    fontWeight: "700",
    lineHeight: pixel(54),
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    marginTop: pixel(50)
  },
});

export default styles;
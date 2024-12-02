import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  // Main container with dark background
  container: {
    flex: 1,
    paddingTop: pixel(50),
    paddingBottom: pixel(20),
    backgroundColor: "#010705",
  },
  // Settings button container
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: pixel(16),
    paddingHorizontal: pixel(20),
    alignItems: "center"
  },
  // Settings icon dimensions
  settingsIcon: {
    width: pixel(20),
    height: pixel(20),
  },
  // Settings text styling
  settingsText: {
    fontSize: pixel(16),
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  // Examples section container
  allExamples: {
    gap: pixel(20),
    marginTop: pixel(34),
    flex: 1,
  },
  // Example title row layout
  exampleTitleContainer: {
    flexDirection: "row",
  },
  // Chat messages container
  chatContainer: {
    flex: 1,
    marginHorizontal: pixel(16)
  },
  // Example title with additional spacing
  exampleTitleContainerWithGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: pixel(8),
    paddingHorizontal: pixel(15),
    marginTop: pixel(20),
    marginBottom: pixel(10)
  },
  // Example variants layout
  variantsContainer: {
    flexDirection: "row",
    marginHorizontal: pixel(27),
    gap: pixel(19),
  },
  // Example title text styling
  exampleTitle: {
    fontSize: pixel(20),
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  // Input field styling
  input: {
    flex: 1,
    color: "white",
  },
  // Input container with semi-transparent background
  inputContainer: {
    marginHorizontal: pixel(20),
    borderRadius: pixel(8),
    paddingVertical: pixel(8),
    paddingHorizontal: pixel(8),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row"
  },
  // Separator line
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 1,
    width: "100%",
    marginVertical: pixel(12)
  },
  // Bottom section container
  bottomContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#010705",
  }
});

export default styles;
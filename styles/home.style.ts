import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  overlay: {
    flex: 1,
    padding: 30,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#FFFFFF", // text stands out on background image
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  card: {
    width: 200,
    height: 100,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    backgroundColor: "rgba(255, 255, 255, 0.44)", // transparent bg so image shows through
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF", // white text so it contrasts with image
  },
  bottomSection: {
  position: "absolute",
  bottom: 49,
  left: 30,
  right: 10,
}

});

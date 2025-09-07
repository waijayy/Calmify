import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "serif",
  },
  searchBar: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  cardContainer: {
    justifyContent: "space-between",
  },

  card: {
    flex: 1,
    margin: 10,
    height: 200,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  noMatch: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 40,
  },
});

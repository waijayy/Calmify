import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3ff",
  },
  header: {
    backgroundColor: "#b788f4ff", // purple background
    alignItems: "center",
    paddingVertical: 35,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIcon: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  option: {
    backgroundColor: "#fec89cff",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 12,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "700",
  },
  reportContainer: {
    alignItems: "center",
    marginTop: 30,
    flex:1
  },

  reportImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  }
});

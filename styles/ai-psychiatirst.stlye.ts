import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  messagesContainer: { padding: 10, paddingBottom: 70 },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 20,
    marginVertical: 6,
  },
  userBubble: {
    backgroundColor: "#4f46e5",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  aiBubble: {
    backgroundColor: "#e5e7eb",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  messageText: { fontSize: 16, color: "#111" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#4f46e5",
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: { color: "#fff", fontSize: 16 },
});

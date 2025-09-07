// import axios from "axios";
import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../styles/ai-psychiatirst.stlye";

export default function PsychiatristScreen() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "assistant", text: "💭 What is messing with your mind today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch('/api/ai-psychiatrist', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        text: data.reply,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Sorry, I couldn’t process that." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat messages */}
      <KeyboardAwareFlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.role === "user" ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesContainer}
        extraScrollHeight={20}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      />

      {/* Input bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your thoughts..."
          placeholderTextColor="#aaa"
          multiline
          onSubmitEditing={Keyboard.dismiss}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={loading}
        >
          <Text style={styles.sendButtonText}>{loading ? "..." : "➤"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


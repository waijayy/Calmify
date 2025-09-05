import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* This SafeAreaView makes sure content is below status bar */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111827" }}>
        <StatusBar barStyle="light-content" backgroundColor="#111827" />

        <Stack screenOptions={{ headerShown: false }}>
          {/* This loads your index.tsx → which redirects into tabs */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="mood-checkin" />
          <Stack.Screen name="ai-psychiatrist" />
          <Stack.Screen name="therapy" />
          <Stack.Screen name="journal" /> */}
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

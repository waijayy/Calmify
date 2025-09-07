import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../styles/discover.style";
import { useRouter } from "expo-router";

const functionsData = [
  { id: "1", name: "Mood Check-in", color: "#A855F7", route: "mood-checkin" },
  { id: "2", name: "Ai Psychiatrist", color: "#EF4444", route: "ai-psychiatrist" },
  { id: "3", name: "Therapy", color: "#3B82F6" , route: "therapy" },
  { id: "4", name: "Journal", color: "#B45309" , route: "journal" },
  { id: "5", name: "Calender", color: "#10B981" , route: "calender" },
];

export default function DiscoverScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredData =
    search.trim().length === 0
      ? functionsData
      : functionsData.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ImageBackground
      source={require("../../assets/images/background/background-discover.png")}
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <Text style={styles.header}>Discover</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        {/* Cards */}
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.cardContainer}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => router.push(`/function/${item.route}`)}
              >
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={styles.noMatch}>Cannot match</Text>
        )}
      </View>
    </ImageBackground>
  );
}


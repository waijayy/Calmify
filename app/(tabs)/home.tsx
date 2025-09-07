import React from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/home.style";
import { useRouter } from "expo-router"

export default function HomeScreen() {
  const today = new Date();
  const day = today.getDate();
  const options: Intl.DateTimeFormatOptions = { month: 'long' };
  const month = new Intl.DateTimeFormat('default', options).format(today);
  const year = today.getFullYear();
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/background/background-home.png")}
      style={styles.container}
      resizeMode="stretch"
    >
      {/* Optional overlay for readability */}

      <View style={styles.overlay}>
        <Text style={styles.header}>Welcome Back 👋</Text>
        <Text style={styles.sectionTitle}>{`${day} ${month} ${year}`}</Text>



        <View style={styles.bottomSection}>
          <Text style={styles.sectionTitle}>What do you need today?</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={styles.card}
              onPress={() => router.push("/function/meditation")}
            >
              <Text style={styles.cardText}>Meditation</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.card}
              onPress={() => router.push("/function/journal")}

              >
              <Text style={styles.cardText}>Journaling</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>
      </View>
    </ImageBackground>
  );
}

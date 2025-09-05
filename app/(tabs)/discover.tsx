import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/discover.style'
import { useRouter } from 'expo-router';

export default function discover() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#a855f7" }]}
          onPress={() => router.push("/function/mood-checkin")}
        >
          <Text style={styles.cardText}>Mood Check-in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#f87171" }]}
          onPress={() => router.push("/function/ai-psychiatrist")}
        >
          <Text style={styles.cardText}>AI Psychiatrist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#60a5fa" }]}
          onPress={() => router.push("/function/therapy")}
        >
          <Text style={styles.cardText}>Therapy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#fbbf24" }]}
          onPress={() => router.push("/function/journal")}
        >
          <Text style={styles.cardText}>Journal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
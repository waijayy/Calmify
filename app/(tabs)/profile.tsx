import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/profile.style";

export default function ProfileScreen() {
  const handleReportPress = () => {
    Linking.openURL("tel:999"); // replace with your emergency number
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} />
        <Image
          source={require("../../assets/images/sample-images/profile-pic.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Amanda</Text>
        <Text style={styles.email}>amanda@gmail.com</Text>
      </View>

      {/* Options */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Statistics</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Emergency Contact</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Privacy settings</Text>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.reportContainer}
      >
        <Image
          source={require("../../assets/images/report.png")}
          style={styles.reportImage}

        />
      </TouchableOpacity>
    </View>
  );
}

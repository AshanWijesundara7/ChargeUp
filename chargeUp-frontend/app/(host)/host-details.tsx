import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function HostDetailsScreen() {
  const router = useRouter();

  // State for all the form inputs
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [chargerType, setChargerType] = useState("");

  const handleContinue = () => {
    // Later, you will save this data to your backend!
    console.log("Host details submitted!");

    // Send the host to their specific dashboard/map
    // Update this route to wherever your Host home screen is
    router.replace("/(auth)/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Brand Header */}
        <Text style={styles.headerTitle}>ChargeUp</Text>

        {/* Hero Icon & Title */}
        <View style={styles.heroSection}>
          <MaterialCommunityIcons name="ev-station" size={80} color="white" />
          <Text style={styles.heroTitle}>Share & Earn</Text>
        </View>

        <Text style={styles.subtitle}>Add your details here.</Text>

        {/* The Big Form Card */}
        <View style={styles.formCard}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>ID/Passport number</Text>
          <TextInput
            style={styles.input}
            value={idNumber}
            onChangeText={setIdNumber}
          />

          <Text style={styles.label}>Telephone number</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Charging unit type</Text>
          <View style={styles.dropdownFake}>
            <TextInput
              style={styles.dropdownInput}
              placeholder="Ex : Fast charger"
              placeholderTextColor="#889"
              value={chargerType}
              onChangeText={setChargerType}
            />
            <Ionicons name="chevron-down-circle" size={24} color="white" />
          </View>

          {/* Continue Button */}
          <Pressable style={styles.continueBtn} onPress={handleContinue}>
            <Text style={styles.continueBtnText}>continue</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3F47", // Matching your dark bluish-grey theme
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 40,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  heroTitle: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 10,
  },
  formCard: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.05)", // Slight glass effect
  },
  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  dropdownFake: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  dropdownInput: {
    flex: 1,
    color: "white",
    paddingVertical: 12,
    fontSize: 16,
  },
  continueBtn: {
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  continueBtnText: {
    color: "white",
    fontSize: 16,
  },
});

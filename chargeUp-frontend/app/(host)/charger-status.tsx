import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  Pressable, 
  ScrollView,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ManageChargerScreen() {
  const router = useRouter();
  
  // State to track which status is currently selected
  const [status, setStatus] = useState("available");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.brandText}>ChargeUp</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Charger Image Section */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1620021469557-45607bdfa67a?q=80&w=400&auto=format&fit=crop" }} 
            style={styles.chargerImage} 
            resizeMode="contain"
          />
        </View>

        {/* Main Details Card */}
        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>Charger Type</Text>
          
          <View style={styles.divider} />

          {/* Info Fields */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Fast Charger - Single Port</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>30 kW to 75 kW scalable</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>CHAdeMO or CCS</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Status</Text>
          <Text style={styles.subtitle}>Update your Status</Text>

          {/* Status Selectors */}
          <View style={styles.statusRow}>
            {/* In-Use Button */}
            <Pressable 
              style={[styles.statusBtn, status === "in-use" && styles.activeBorder]}
              onPress={() => setStatus("in-use")}
            >
              <Text style={styles.inUseText}>in-use</Text>
            </Pressable>

            {/* Available Button */}
            <Pressable 
              style={[styles.statusBtn, status === "available" && styles.activeBorder]}
              onPress={() => setStatus("available")}
            >
              <Text style={styles.availableText}>available</Text>
            </Pressable>

            {/* Unavailable Button */}
            <Pressable 
              style={[styles.statusBtn, status === "unavailable" && styles.activeBorder]}
              onPress={() => setStatus("unavailable")}
            >
              <Text style={styles.unavailableText}>unavailable</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem} onPress={() => router.replace("/(host)/scan-to-start" as any)}>
          <Ionicons name="home" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="location-outline" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="reader-outline" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="person-circle-outline" size={32} color="white" />
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1D21" },
  header: { paddingHorizontal: 25, paddingTop: 15, paddingBottom: 10 },
  brandText: { color: "white", fontSize: 20, fontWeight: "bold" },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  
  imageContainer: { alignItems: "center", marginTop: 10, marginBottom: -30, zIndex: 1 },
  chargerImage: { width: 180, height: 220 },

  detailsCard: { 
    backgroundColor: "transparent", 
    borderRadius: 25, 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.4)", 
    padding: 25, 
    paddingTop: 50, // extra padding top so the image overlaps nicely
    zIndex: 0 
  },
  
  sectionTitle: { color: "white", fontSize: 18, fontWeight: "600", marginBottom: 10 },
  divider: { height: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", marginVertical: 15 },
  
  infoBox: { 
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
    borderRadius: 10, 
    paddingVertical: 12, 
    paddingHorizontal: 15, 
    marginBottom: 15 
  },
  infoText: { color: "#E0E0E0", fontSize: 14 },

  subtitle: { color: "white", fontSize: 14, marginBottom: 15 },

  statusRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 },
  statusBtn: { 
    flex: 1, 
    alignItems: "center", 
    paddingVertical: 10, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: "rgba(255,255,255,0.3)",
    marginHorizontal: 5 
  },
  activeBorder: { borderColor: "white", backgroundColor: "rgba(255,255,255,0.1)" },
  
  inUseText: { color: "white", fontSize: 14 },
  availableText: { color: "#4CAF50", fontSize: 14 }, // Green
  unavailableText: { color: "#D32F2F", fontSize: 14 }, // Red

  bottomNav: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#1A2E33", 
    paddingVertical: 15, 
    paddingBottom: 25, 
    borderTopWidth: 1, 
    borderTopColor: "rgba(255,255,255,0.1)", 
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 
  },
  navItem: { alignItems: "center", justifyContent: "center" }
});
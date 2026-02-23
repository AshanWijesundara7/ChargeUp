import React from "react";
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
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HostDashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Header - Logo */}
      <View style={styles.header}>
        <Text style={styles.brandText}>ChargeUp</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Greeting & Top Icons */}
        <View style={styles.greetingRow}>
          <View>
            <Text style={styles.greetingText}>Hello, Ashan</Text>
            <Text style={styles.subGreeting}>Lend Your charger</Text>
          </View>
          
          <View style={styles.iconGroup}>
            <Pressable style={styles.iconCircle}>
              <Feather name="search" size={20} color="white" />
            </Pressable>
            <Pressable style={styles.iconCircle}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>4</Text>
              </View>
              <Feather name="bell" size={20} color="white" />
            </Pressable>
          </View>
        </View>

        {/* Main Charger Card */}
        <View style={styles.chargerCard}>
          <View style={styles.plugIconContainer}>
            <MaterialCommunityIcons name="power-plug-outline" size={28} color="white" />
          </View>
          
          {/* Using a placeholder network image of a charger for now! 
              You can replace the URI later with your actual local asset. */}
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1620021469557-45607bdfa67a?q=80&w=400&auto=format&fit=crop" }} 
            style={styles.chargerImage} 
            resizeMode="contain"
          />
        </View>

        {/* Manage Section */}
        <Text style={styles.sectionTitle}>Manage Your Charger</Text>

        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>EVOCK Charging Station</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Feather name="plus" size={20} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.actionButtonText}>Add a new Charging Station</Text>
        </Pressable>

      </ScrollView>

      {/* Bottom Navigation Bar (Mockup for now) */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
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
  scrollContent: { paddingHorizontal: 25, paddingBottom: 100 },
  
  greetingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, marginBottom: 25 },
  greetingText: { color: "white", fontSize: 32, fontWeight: "bold" },
  subGreeting: { color: "#AAA", fontSize: 14, marginTop: 4 },
  
  iconGroup: { flexDirection: "row", gap: 15 },
  iconCircle: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderColor: "rgba(255,255,255,0.2)", justifyContent: "center", alignItems: "center", position: "relative" },
  badge: { position: "absolute", top: -5, right: -5, backgroundColor: "#7BB1BA", width: 18, height: 18, borderRadius: 9, justifyContent: "center", alignItems: "center", zIndex: 10 },
  badgeText: { color: "#0B1D21", fontSize: 10, fontWeight: "bold" },

  chargerCard: { backgroundColor: "rgba(255,255,255,0.03)", borderRadius: 25, borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.3)", padding: 20, height: 350, alignItems: "center", justifyContent: "center", marginBottom: 30, position: "relative" },
  plugIconContainer: { position: "absolute", top: 20, right: 20 },
  chargerImage: { width: "70%", height: "80%", borderRadius: 15 },

  sectionTitle: { color: "white", fontSize: 22, fontWeight: "400", marginBottom: 15 },
  
  actionButton: { flexDirection: "row", alignItems: "center", backgroundColor: "transparent", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.4)", borderRadius: 20, paddingVertical: 18, paddingHorizontal: 20, marginBottom: 15 },
  actionButtonText: { color: "white", fontSize: 16 },

  bottomNav: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#1A2E33", paddingVertical: 15, paddingBottom: 25, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.1)", position: "absolute", bottom: 0, width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  navItem: { alignItems: "center", justifyContent: "center" }
});
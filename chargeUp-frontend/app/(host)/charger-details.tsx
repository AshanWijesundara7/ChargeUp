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

export default function ChargerInfoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Brand Text */}
      <View style={styles.brandHeader}>
        <Text style={styles.brandText}>ChargeUp</Text>
      </View>

      {/* Header Row: Back Button & Notification */}
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={28} color="white" />
        </Pressable>
        
        <Pressable style={styles.iconCircle}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>4</Text>
          </View>
          <Feather name="bell" size={20} color="white" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Card: Charger Image */}
        <View style={styles.imageCard}>
          <Text style={styles.cardTitle}>Charger info</Text>
          
          <View style={styles.imageWrapper}>
             {/* Using a placeholder network image of a charger for now! */}
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1620021469557-45607bdfa67a?q=80&w=400&auto=format&fit=crop" }} 
              style={styles.chargerImage} 
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Bottom Card: Charging Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.sectionHeader}>CHARGING DETAILS</Text>

          {/* Row 1: Charging Time */}
          <View style={styles.detailRow}>
            <View style={styles.rowLeft}>
              <Ionicons name="battery-half-outline" size={22} color="#E0E0E0" style={styles.rowIcon} />
              <Text style={styles.rowLabel}>Charging time</Text>
            </View>
            <Text style={styles.rowValue}>2h 23 min</Text>
          </View>

          {/* Row 2: Schedule Charging */}
          <View style={styles.detailRow}>
            <View style={styles.rowLeft}>
              <Feather name="clock" size={22} color="#E0E0E0" style={styles.rowIcon} />
              <Text style={styles.rowLabel}>Schedule charging</Text>
            </View>
            <View style={styles.rowRightWithArrow}>
              <Text style={styles.rowValueDimmed}>No schedule</Text>
              <Feather name="chevron-right" size={20} color="#888" style={{ marginLeft: 5 }} />
            </View>
          </View>

          {/* Row 3: Amount */}
          <View style={styles.detailRow}>
            <View style={styles.rowLeft}>
              <Feather name="bar-chart-2" size={22} color="#E0E0E0" style={styles.rowIcon} />
              <Text style={styles.rowLabel}>Amount</Text>
            </View>
            <Text style={styles.rowValue}>Rs.350.00</Text>
          </View>

        </View>

      </ScrollView>

      {/* Bottom Navigation Bar */}
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
  
  brandHeader: { paddingHorizontal: 25, paddingTop: 15 },
  brandText: { color: "white", fontSize: 20, fontWeight: "bold" },
  
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: 15, marginBottom: 20 },
  backButton: { padding: 5 },
  iconCircle: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: "rgba(255,255,255,0.05)", borderWidth: 1, borderColor: "rgba(255,255,255,0.2)", justifyContent: "center", alignItems: "center", position: "relative" },
  badge: { position: "absolute", top: -5, right: -5, backgroundColor: "#5E5A66", width: 18, height: 18, borderRadius: 9, justifyContent: "center", alignItems: "center", zIndex: 10 },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },

  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },
  
  imageCard: { 
    backgroundColor: "transparent", 
    borderRadius: 25, 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.4)", 
    padding: 20, 
    marginBottom: 20 
  },
  cardTitle: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  imageWrapper: { alignItems: "center", justifyContent: "center", height: 220 },
  chargerImage: { width: "70%", height: "100%", borderRadius: 15 },

  detailsCard: { 
    backgroundColor: "transparent", 
    borderRadius: 25, 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.4)", 
    padding: 25 
  },
  sectionHeader: { color: "#E0E0E0", fontSize: 13, letterSpacing: 1, marginBottom: 25 },
  
  detailRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 25 },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowIcon: { marginRight: 15 },
  rowLabel: { color: "white", fontSize: 16 },
  rowValue: { color: "white", fontSize: 16 },
  rowValueDimmed: { color: "#888", fontSize: 15 },
  rowRightWithArrow: { flexDirection: "row", alignItems: "center" },

  bottomNav: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#22353B", // Slightly lighter to match design
    paddingVertical: 15, 
    paddingBottom: 25, 
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20 
  },
  navItem: { alignItems: "center", justifyContent: "center" }
});7
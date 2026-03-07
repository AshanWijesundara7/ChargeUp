import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Pressable, 
  ScrollView,
  StatusBar
} from "react-native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AccountDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.brandText}>ChargeUp</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Page Title */}
        <Text style={styles.pageTitle}>Account details</Text>

        {/* Card Details Section */}
        <View style={styles.detailsCard}>
          <Text style={styles.sectionHeader}>Card Details</Text>

          {/* Saved Card 1 */}
          <Pressable style={styles.cardRow}>
            <View style={styles.cardRowLeft}>
              <View style={styles.iconBox}>
                <FontAwesome name="cc-visa" size={20} color="white" />
              </View>
              <Text style={styles.cardText}>HNB Debit Card -5525</Text>
            </View>
            <Feather name="chevron-right" size={20} color="white" />
          </Pressable>

          {/* Saved Card 2 */}
          <Pressable style={styles.cardRow}>
            <View style={styles.cardRowLeft}>
              <View style={styles.iconBox}>
                <FontAwesome name="cc-visa" size={20} color="white" />
              </View>
              <Text style={styles.cardText}>HNB Debit Card -5525</Text>
            </View>
            <Feather name="chevron-right" size={20} color="white" />
          </Pressable>

          {/* Saved Card 3 */}
          <Pressable style={styles.cardRow}>
            <View style={styles.cardRowLeft}>
              <View style={styles.iconBox}>
                <FontAwesome name="cc-visa" size={20} color="white" />
              </View>
              <Text style={styles.cardText}>HNB Debit Card -5525</Text>
            </View>
            <Feather name="chevron-right" size={20} color="white" />
          </Pressable>

          {/* Add a New Card Button */}
          <Pressable style={styles.cardRow}>
            <View style={styles.cardRowLeft}>
              <View style={styles.iconBox}>
                <Feather name="plus" size={20} color="white" />
              </View>
              <Text style={styles.cardText}>Add a New Card</Text>
            </View>
            <Feather name="chevron-right" size={20} color="white" />
          </Pressable>

        </View>

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem} onPress={() => router.push("/(tabs)/explore" as any)}>
          <Ionicons name="home" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => router.push("/(tabs)/map" as any)}>
          <Ionicons name="location-outline" size={28} color="white" />
        </Pressable>
        <Pressable style={styles.navItem}>
          <Ionicons name="reader-outline" size={28} color="white" />
        </Pressable>
        {/* Highlighted Profile Icon to show we are on the account tab */}
        <Pressable style={styles.navItem}>
          <Ionicons name="person-circle" size={32} color="white" /> 
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
  
  pageTitle: { color: "white", fontSize: 26, fontWeight: "400", marginTop: 20, marginBottom: 30, paddingHorizontal: 5 },

  detailsCard: { 
    backgroundColor: "transparent", 
    borderRadius: 25, 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.3)", 
    padding: 20, 
    paddingTop: 25
  },
  
  sectionHeader: { color: "white", fontSize: 14, marginBottom: 20, marginLeft: 5 },
  
  cardRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "rgba(255, 255, 255, 0.3)", 
    borderRadius: 15, 
    paddingVertical: 15, 
    paddingHorizontal: 15, 
    marginBottom: 15 
  },
  
  cardRowLeft: { flexDirection: "row", alignItems: "center" },
  
  iconBox: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  
  cardText: { color: "white", fontSize: 15 },

  bottomNav: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#1A2E33", 
    paddingVertical: 15, 
    paddingBottom: 25, 
    position: "absolute", 
    bottom: 0, 
    width: "100%", 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },
  navItem: { alignItems: "center", justifyContent: "center" }
});
import React from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function RoleSelectScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Background Gradient using your exact Figma stops */}
      <LinearGradient
        colors={['#101922', '#15252E', '#193038', '#1D3B42', '#0E4548']}
        locations={[0.13, 0.35, 0.55, 0.74, 1.0]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Brand Logo */}
        <View style={styles.header}>
          <Text style={styles.brandHeader}>ChargeUp</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeTitle}>Welcome to ChargeUp</Text>
          <Text style={styles.subtitle}>Choose your role to get started</Text>

          <View style={styles.cardContainer}>
            {/* EV Owner Option - Navigates to vehicle-details.tsx */}
            <Pressable
              style={({ pressed }) => [styles.roleCard, pressed && styles.pressed]}
              onPress={() => router.push("/vehicle-details")}
            >
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="car-electric" size={28} color="white" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.roleTitle}>EV Owner</Text>
                <Text style={styles.roleDesc}>Find, book and pay for charging.</Text>
              </View>
              <Entypo name="chevron-right" size={32} color="rgba(255,255,255,0.3)" />
            </Pressable>

            {/* Lender Option - Navigates to Login */}
            <Pressable
              style={({ pressed }) => [styles.roleCard, pressed && styles.pressed]}
              onPress={() => router.push("/(auth)/login")}
            >
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="ev-station" size={28} color="white" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.roleTitle}>Lender</Text>
                <Text style={styles.roleDesc}>Share your charger and earn.</Text>
              </View>
              <Entypo name="chevron-right" size={32} color="rgba(255,255,255,0.3)" />
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.legalFooter}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms and conditions</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 30
  },
  header: {
    marginTop: 20,
  },
  brandHeader: {
    color: "white",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.5
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeTitle: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    color: "#E0E0E0",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 60,
    fontWeight: '400'
  },
  cardContainer: {
    width: '100%',
    gap: 20,
  },
  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(255,255,255,0.12)",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    marginLeft: 18
  },
  roleTitle: {
    color: "white",
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 4
  },
  roleDesc: {
    color: "#D1D1D1",
    fontSize: 14,
    fontWeight: '400'
  },
  footer: {
    paddingBottom: 20,
  },
  legalFooter: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    opacity: 0.9
  },
  linkText: {
    color: "#81D4FA",
    fontWeight: "bold"
  }
});
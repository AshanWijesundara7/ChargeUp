import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* LAYER 1: Background Image shifted to the right */}
      <Image
        source={require("../../assets/images/car_charging.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* LAYER 2:Linear Gradient Overlay */}
      <LinearGradient
        colors={['#101922', '#15252E', '#193038', '#1D3B42', '#0E4548']}
        locations={[0.13, 0.35, 0.55, 0.74, 1.0]}
        style={StyleSheet.absoluteFillObject}
        opacity={0.85}
      />

      {/* LAYER 3: UI Content */}
      <SafeAreaView style={styles.safeArea}>
        {/* Top Logo */}
        <View style={styles.header}>
          <Text style={styles.brandText}>ChargeUp</Text>
        </View>

        <View style={styles.content}>
          {/* Center Titles */}
          <View style={styles.textGroup}>
            <Text style={styles.mainTitle}>The Future of</Text>
            <Text style={styles.mainTitle}>εV Charging...</Text>

            <Text style={styles.subText}>
              Connect with charging stations instantly.{"\n"}
              Manage your fleet effortlessly.
            </Text>
          </View>

          {/* Bottom Button - PATH FIXED TO LOGIN */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => router.push("/(auth)/login")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101922",
  },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    height: height,
    width: width * 1.6,
    top: 0,
    left: -width * 0.5,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  brandText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 40,
  },
  mainTitle: {
    color: "#FFF",
    fontSize: 48,
    fontWeight: "200",
    textAlign: "center",
    lineHeight: 55,
  },
  subText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 24,
    fontWeight: "600",
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    width: width * 0.75,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
  },
});
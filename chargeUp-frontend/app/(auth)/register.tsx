import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"; // 👈 Imported Memory

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Info", "Please fill in all fields to sign up.");
      return;
    }

    try {
      const response = await fetch(
        "http://10.0.2.2:5001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert("Welcome!", "Account created successfully.");

        // 💾 Check the "memory box" to see what role they picked
        const role = await AsyncStorage.getItem("userRole");

        // 🛣️ The Fork in the Road
        if (role === "host") {
          router.replace("/(host)/host-details");
        } else {
          router.replace("/(auth)/vehicle-details");
        }
      } else {
        Alert.alert("Signup Failed", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      Alert.alert(
        "Connection Error",
        "Could not connect to the server. Make sure your backend is running and you used your IP address.",
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {/* Brand Header */}
        <Text style={styles.headerTitle}>ChargeUp</Text>

        {/* Hero Branding */}
        <View style={styles.brandHero}>
          <Ionicons name="flash" size={80} color="white" />
          <Text style={styles.tagline}>Find, book and pay</Text>
        </View>

        {/* Signup Form */}
        <View style={styles.form}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#889"
            style={styles.inputUnderline}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#889"
            style={styles.inputUnderline}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Fixed Password Wrapper */}
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#889"
              secureTextEntry
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />
            <Ionicons
              name="eye-off-outline"
              size={20}
              color="white"
              style={styles.eyeIcon}
            />
          </View>
        </View>

        {/* Main Action Button */}
        <Pressable style={styles.signupBtn} onPress={handleRegister}>
          <Text style={styles.signupBtnText}>Signup</Text>
        </Pressable>

        <Text style={styles.orText}>or</Text>

        {/* Social Options */}
        <View style={styles.socialDivider}>
          <View style={styles.line} />
          <Text style={styles.socialLabel}>Signup with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <FontAwesome name="apple" size={45} color="white" />
          <FontAwesome name="google" size={42} color="#EA4335" />
        </View>

        {/* Footer Toggle */}
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an Account? </Text>
          <Pressable onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.loginLink}>Login</Text>
          </Pressable>
        </View>

        {/* Legal Disclaimer */}
        <Text style={styles.legalNotice}>
          By continuing, you agree to our{" "}
          <Text style={styles.legalLink}>Terms and conditions</Text> and{" "}
          <Text style={styles.legalLink}>Privacy Policy</Text>.
        </Text>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F23",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: "center",
  },
  headerTitle: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  brandHero: {
    alignItems: "center",
    marginBottom: 50,
  },
  tagline: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
  form: {
    width: "100%",
    marginBottom: 40,
  },
  inputUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 25,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 25,
  },
  passwordInput: {
    flex: 1,
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  signupBtn: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 15,
  },
  signupBtnText: {
    color: "white",
    fontSize: 18,
  },
  orText: {
    color: "white",
    marginBottom: 15,
  },
  socialDivider: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  socialLabel: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    marginBottom: 40,
  },
  footerRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
  loginLink: {
    color: "#7BB1BA",
    fontSize: 14,
    fontWeight: "bold",
  },
  legalNotice: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 18,
  },
  legalLink: {
    textDecorationLine: "underline",
  },
});

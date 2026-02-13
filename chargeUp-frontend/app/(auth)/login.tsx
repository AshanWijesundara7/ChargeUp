import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.brandTitle}>ChargeUp</Text>

        <View style={styles.brandCenter}>
          <Ionicons name="flash" size={80} color="white" />
          <Text style={styles.brandTagline}>Find, book and pay</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Email address" placeholderTextColor="#999" style={styles.underlineInput} />
          <View style={styles.passwordRow}>
            <TextInput placeholder="Password" placeholderTextColor="#999" secureTextEntry style={[styles.underlineInput, {flex: 1}]} />
            <Ionicons name="eye-off-outline" size={20} color="white" />
          </View>
        </View>

        <Pressable style={styles.pillButton} onPress={() => router.replace("/(tabs)")}>
          <Text style={styles.pillButtonText}>Login</Text>
        </Pressable>

        <Text style={styles.orText}>or</Text>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.loginWithText}>Login with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <FontAwesome name="apple" size={40} color="white" />
          <FontAwesome name="google" size={40} color="#DB4437" />
        </View>

        <View style={styles.signupRow}>
          <Text style={styles.noAccountText}>Don't have an Account? </Text>
          <Pressable onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.signupLink}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B1D21" },
  inner: { paddingHorizontal: 30, flex: 1, alignItems: "center" },
  brandTitle: { color: "white", fontSize: 24, fontWeight: "bold", alignSelf: "flex-start", marginTop: 20 },
  brandCenter: { alignItems: "center", marginVertical: 40 },
  brandTagline: { color: "white", fontSize: 16, marginTop: 10 },
  inputContainer: { width: "100%", marginBottom: 30 },
  underlineInput: { borderBottomWidth: 1, borderBottomColor: "white", color: "white", paddingVertical: 10, fontSize: 16, marginBottom: 20 },
  passwordRow: { flexDirection: "row", alignItems: "center" },
  pillButton: { borderWidth: 1, borderColor: "white", borderRadius: 30, paddingVertical: 12, paddingHorizontal: 60 },
  pillButtonText: { color: "white", fontSize: 18 },
  orText: { color: "white", marginVertical: 10 },
  dividerContainer: { flexDirection: "row", alignItems: "center", width: "100%", marginVertical: 15 },
  line: { flex: 1, height: 1, backgroundColor: "white", opacity: 0.3 },
  loginWithText: { color: "white", marginHorizontal: 10 },
  socialRow: { flexDirection: "row", gap: 50, marginVertical: 20 },
  signupRow: { flexDirection: "row", marginTop: 20 },
  noAccountText: { color: "white" },
  signupLink: { color: "#83B4BB", fontWeight: "bold" }
});
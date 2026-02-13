import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.content}>
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
            placeholder="Email address"
            placeholderTextColor="#889"
            style={styles.inputUnderline}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#889"
              secureTextEntry
              style={[styles.inputUnderline, { flex: 1 }]}
            />
            <Ionicons name="eye-off-outline" size={20} color="white" style={styles.eyeIcon} />
          </View>
        </View>

        {/* Main Action Button */}
        <Pressable style={styles.signupBtn} onPress={() => router.push("/(auth)/vehicle-details")}>
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
          By continuing, you are agree to our{" "}
          <Text style={styles.legalLink}>Terms and conditions</Text> and{" "}
          <Text style={styles.legalLink}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1F23", // Matches the dark UI theme
  },
  content: {
    flex: 1,
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
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    bottom: 35,
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
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

/**
 * SCAN TO START PAGE
 * Automatically detects the current date/time and handles QR scanning.
 */
export default function ScanToStart() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  // Automatically capture current date and time
  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Request camera access on mount
  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>We need camera access to scan the QR code.</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Logic when a QR code is detected
  const handleBarcodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    // You would send 'data' (Charger ID) + currentDate + currentTime to your backend/host
    Alert.alert(
      "QR Scanned Successfully",
      `Charger ID: ${data}\nDate: ${currentDate}\nTime: ${currentTime}`,
      [{ text: "Confirm Connection", onPress: () => router.push('/(tabs)') }]
    );
  };

  return (
    <View style={styles.container}>
      {/* 1. Camera Scanning View */}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.brandText}>Charge<Text style={{ color: '#00D1FF' }}>Up</Text></Text>
            <Text style={styles.mainTitle}>Scan to Start</Text>
            <Text style={styles.subTitle}>EVOCK Charging Station</Text>
          </View>

          {/* QR Guide Frame */}
          <View style={styles.scannerContainer}>
            <View style={styles.scannerFrame}>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </View>
            <Text style={styles.guideText}>
              Ensure your car is plugged in, then align the QR code within the frame.
            </Text>
          </View>

          {/* Status Display Card */}
          <BlurView intensity={30} tint="dark" style={styles.statusCard}>
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Date: </Text>
              <Text style={styles.statusValue}>{currentDate}</Text>
            </View>
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Time: </Text>
              <Text style={styles.statusValue}>{currentTime}</Text>
            </View>
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Plug Status: </Text>
              <Text style={[styles.statusValue, { color: '#00FF75' }]}>
                Connected <Ionicons name="checkmark-circle" size={14} color="#00FF75" />
              </Text>
            </View>
          </BlurView>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  overlay: { flex: 1, padding: 30, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  header: { alignItems: 'center', marginTop: 40 },
  brandText: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  mainTitle: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  subTitle: { color: '#BDC3C7', fontSize: 16, marginTop: 5 },
  scannerContainer: { alignItems: 'center', width: '100%' },
  scannerFrame: {
    width: 250,
    height: 250,
    borderWidth: 0,
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  corner: { position: 'absolute', width: 40, height: 40, borderColor: '#00D1FF', borderWidth: 4 },
  topLeft: { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0 },
  topRight: { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0 },
  bottomLeft: { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0 },
  bottomRight: { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0 },
  guideText: { color: 'white', textAlign: 'center', marginTop: 30, paddingHorizontal: 20, fontSize: 14, lineHeight: 20 },
  statusCard: { width: '100%', padding: 25, borderRadius: 30, overflow: 'hidden', marginBottom: 30, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  statusRow: { flexDirection: 'row', marginBottom: 5 },
  statusLabel: { color: '#BDC3C7', fontSize: 15 },
  statusValue: { color: 'white', fontSize: 15, fontWeight: '600' },
  button: { backgroundColor: '#00D1FF', padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#000', fontWeight: 'bold' }
});
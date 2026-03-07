import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();

  const recentBookings = [
    {
      id: '1',
      station: 'EVOCK Colombo 07',
      charger: 'Type 2 (Mennekes)',
      date: '05/03/2026',
      time: '2:30 PM',
      status: 'Completed',
    },
    {
      id: '2',
      station: 'Liberty Plaza Charging',
      charger: 'CCS',
      date: '02/03/2026',
      time: '10:00 AM',
      status: 'Completed',
    },
    {
      id: '3',
      station: 'Ekanayake - Boralagamuwa',
      charger: 'CHAdeMO',
      date: '28/02/2026',
      time: '4:15 PM',
      status: 'Cancelled',
    },
  ];

  const quickActions = [
    { icon: 'qr-code-outline' as const, label: 'Scan QR', route: '/scan-to-start' },
    { icon: 'map-outline' as const, label: 'Find Charger', route: '/map' },
    { icon: 'flash-outline' as const, label: 'Quick Charge', route: '/map' },
    { icon: 'bookmark-outline' as const, label: 'Saved', route: null },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.brandTitle}>ChargeUp</Text>
        <Text style={styles.pageTitle}>Explore</Text>
        <Text style={styles.pageSubtitle}>Quick actions & recent activity</Text>

        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionCard}
              onPress={() => {
                if (action.route) {
                  router.push(action.route as any);
                }
              }}
            >
              <View style={styles.actionIconContainer}>
                <Ionicons name={action.icon} size={28} color="#00D1FF" />
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Bookings</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {recentBookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingLeft}>
              <View style={styles.bookingIconContainer}>
                <Ionicons name="flash" size={20} color="#00D1FF" />
              </View>
              <View style={styles.bookingInfo}>
                <Text style={styles.bookingStation}>{booking.station}</Text>
                <Text style={styles.bookingCharger}>{booking.charger}</Text>
                <Text style={styles.bookingDateTime}>
                  {booking.date} at {booking.time}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor:
                    booking.status === 'Completed'
                      ? 'rgba(46, 204, 113, 0.15)'
                      : 'rgba(231, 76, 60, 0.15)',
                },
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  {
                    color: booking.status === 'Completed' ? '#2ECC71' : '#E74C3C',
                  },
                ]}
              >
                {booking.status}
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitleStandalone}>Tips</Text>
        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={24} color="#F39C12" />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Charge during off-peak hours</Text>
            <Text style={styles.tipDesc}>
              Save up to 30% by charging between 10pm - 6am
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1F23' },
  scrollContent: { padding: 20, paddingTop: 50, paddingBottom: 100 },
  brandTitle: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  pageTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  pageSubtitle: { color: '#888', fontSize: 14, marginTop: 5, marginBottom: 25 },
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30 },
  actionCard: {
    width: '48%',
    backgroundColor: '#132A2F',
    borderRadius: 18,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  actionIconContainer: {
    width: 55, height: 55, borderRadius: 16,
    backgroundColor: 'rgba(0, 209, 255, 0.1)',
    justifyContent: 'center', alignItems: 'center', marginBottom: 10,
  },
  actionLabel: { color: 'white', fontSize: 13, fontWeight: '600' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { color: 'white', fontSize: 20, fontWeight: '600' },
  sectionTitleStandalone: { color: 'white', fontSize: 20, fontWeight: '600', marginBottom: 12, marginTop: 10 },
  seeAll: { color: '#00D1FF', fontSize: 13 },
  bookingCard: {
    backgroundColor: '#132A2F', borderRadius: 16, padding: 16, marginBottom: 10,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)',
  },
  bookingLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  bookingIconContainer: {
    width: 42, height: 42, borderRadius: 12,
    backgroundColor: 'rgba(0, 209, 255, 0.1)',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  bookingInfo: { flex: 1 },
  bookingStation: { color: 'white', fontSize: 14, fontWeight: '600' },
  bookingCharger: { color: '#888', fontSize: 12, marginTop: 2 },
  bookingDateTime: { color: '#666', fontSize: 11, marginTop: 3 },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  statusText: { fontSize: 11, fontWeight: 'bold' },
  tipCard: {
    backgroundColor: '#132A2F', borderRadius: 16, padding: 18,
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)',
  },
  tipContent: { flex: 1, marginLeft: 14 },
  tipTitle: { color: 'white', fontSize: 14, fontWeight: '600' },
  tipDesc: { color: '#888', fontSize: 12, marginTop: 4 },
});

import { View, Text, StyleSheet } from "react-native";

export default function ReportsScreen() {
  const totalRevenueCents = 24855;
  const totalOrders = 12;
  const averageOrderCents = totalRevenueCents / totalOrders;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      <Text style={styles.subtitle}>Basic daily restaurant performance</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Today&apos;s Revenue</Text>
        <Text style={styles.cardValue}>
          ${(totalRevenueCents / 100).toFixed(2)}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Total Orders</Text>
        <Text style={styles.cardValue}>{totalOrders}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Average Order Value</Text>
        <Text style={styles.cardValue}>
          ${(averageOrderCents / 100).toFixed(2)}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Top Item</Text>
        <Text style={styles.cardValue}>Classic Burger</Text>
      </View>

      <Text style={styles.note}>
        These numbers are fake for now. Later, this screen will use SQL queries
        from Supabase.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#f3f3f3",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  cardLabel: {
    color: "#666",
    fontSize: 15,
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
  },
  note: {
    marginTop: 18,
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },
});
import { Link, router } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Text style={styles.subtitle}>Welcome to ShiftPOS</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today</Text>
        <Text style={styles.cardText}>Orders: 12</Text>
        <Text style={styles.cardText}>Revenue: $248.55</Text>
      </View>

      <Link href="/menu" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navButtonText}>Menu Management</Text>
        </Pressable>
      </Link>

      <Link href="/orders" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navButtonText}>Orders</Text>
        </Pressable>
      </Link>

      <Link href="/kitchen" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navButtonText}>Kitchen Display</Text>
        </Pressable>
      </Link>

      <Link href="/reports" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navButtonText}>Reports</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.logoutButton} onPress={() => router.replace("/")}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </Pressable>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#f3f3f3",
    padding: 18,
    borderRadius: 14,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 4,
  },
  navButton: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  navButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  logoutButtonText: {
    color: "#111",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
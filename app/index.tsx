import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShiftPOS</Text>

      <Text style={styles.subtitle}>
        A restaurant operations app for menus, orders, kitchen workflow, and reports.
      </Text>

      <Link href="/login" asChild>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Log In</Text>
        </Pressable>
      </Link>

      <Link href="/register" asChild>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
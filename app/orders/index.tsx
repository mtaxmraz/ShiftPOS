import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";

type Order = {
  id: string;
  tableNumber: string;
  status: "new" | "in_progress" | "ready" | "completed";
  totalCents: number;
  itemCount: number;
};

const orders: Order[] = [
  {
    id: "1001",
    tableNumber: "4",
    status: "new",
    totalCents: 3097,
    itemCount: 3,
  },
  {
    id: "1002",
    tableNumber: "7",
    status: "in_progress",
    totalCents: 2198,
    itemCount: 2,
  },
  {
    id: "1003",
    tableNumber: "2",
    status: "ready",
    totalCents: 1598,
    itemCount: 2,
  },
];

function formatPrice(priceCents: number) {
  return `$${(priceCents / 100).toFixed(2)}`;
}

function formatStatus(status: Order["status"]) {
  if (status === "in_progress") return "In Progress";
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Orders</Text>
          <Text style={styles.subtitle}>View and create customer orders</Text>
        </View>

        <Link href="/orders/new" asChild>
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </Link>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.orderTitle}>Order #{item.id}</Text>
              <Text style={styles.orderText}>Table {item.tableNumber}</Text>
              <Text style={styles.orderText}>{item.itemCount} items</Text>
            </View>

            <View style={styles.rightSide}>
              <Text style={styles.total}>{formatPrice(item.totalCents)}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{formatStatus(item.status)}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  card: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  orderText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  rightSide: {
    alignItems: "flex-end",
  },
  total: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
});
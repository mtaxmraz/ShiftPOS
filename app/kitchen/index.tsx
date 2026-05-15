import { useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";

type OrderStatus = "new" | "in_progress" | "ready" | "completed";

type KitchenOrder = {
  id: string;
  tableNumber: string;
  status: OrderStatus;
  items: string[];
};

const startingOrders: KitchenOrder[] = [
  {
    id: "1001",
    tableNumber: "4",
    status: "new",
    items: ["Classic Burger", "Fries", "Soda"],
  },
  {
    id: "1002",
    tableNumber: "7",
    status: "in_progress",
    items: ["Chicken Tacos", "Fries"],
  },
  {
    id: "1003",
    tableNumber: "2",
    status: "ready",
    items: ["Classic Burger"],
  },
];

function getNextStatus(status: OrderStatus): OrderStatus {
  if (status === "new") return "in_progress";
  if (status === "in_progress") return "ready";
  if (status === "ready") return "completed";
  return "completed";
}

function getButtonText(status: OrderStatus) {
  if (status === "new") return "Start";
  if (status === "in_progress") return "Mark Ready";
  if (status === "ready") return "Complete";
  return "Completed";
}

function formatStatus(status: OrderStatus) {
  if (status === "new") return "New";
  if (status === "in_progress") return "In Progress";
  if (status === "ready") return "Ready";
  return "Completed";
}

export default function KitchenScreen() {
  const [orders, setOrders] = useState(startingOrders);

  const activeOrders = orders.filter((order) => order.status !== "completed");

  function updateOrderStatus(orderId: string) {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: getNextStatus(order.status) }
          : order
      )
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen Display</Text>
      <Text style={styles.subtitle}>Active orders for the kitchen</Text>

      <FlatList
        data={activeOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 14, marginTop: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No active kitchen orders.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.orderTitle}>Order #{item.id}</Text>
              <Text style={styles.tableText}>Table {item.tableNumber}</Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{formatStatus(item.status)}</Text>
            </View>

            <View style={styles.itemsList}>
              {item.items.map((orderItem) => (
                <Text key={orderItem} style={styles.itemText}>
                  • {orderItem}
                </Text>
              ))}
            </View>

            <Pressable
              style={styles.primaryButton}
              onPress={() => updateOrderStatus(item.id)}
            >
              <Text style={styles.primaryButtonText}>
                {getButtonText(item.status)}
              </Text>
            </Pressable>
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#f3f3f3",
    padding: 18,
    borderRadius: 14,
  },
  cardHeader: {
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tableText: {
    fontSize: 15,
    color: "#666",
    marginTop: 4,
  },
  statusBadge: {
    backgroundColor: "#ddd",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
  itemsList: {
    marginBottom: 16,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 4,
  },
  primaryButton: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
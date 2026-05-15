import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";

type MenuItem = {
  id: string;
  name: string;
  category: string;
  priceCents: number;
  isAvailable: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    category: "Entrees",
    priceCents: 1299,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Chicken Tacos",
    category: "Entrees",
    priceCents: 1099,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Fries",
    category: "Sides",
    priceCents: 499,
    isAvailable: false,
  },
];

function formatPrice(priceCents: number) {
  return `$${(priceCents / 100).toFixed(2)}`;
}

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Menu</Text>
          <Text style={styles.subtitle}>Manage restaurant menu items</Text>
        </View>

        <Link href="/menu/new" asChild>
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </Link>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCategory}>{item.category}</Text>
              <Text style={styles.itemPrice}>{formatPrice(item.priceCents)}</Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                item.isAvailable ? styles.available : styles.unavailable,
              ]}
            >
              <Text style={styles.statusText}>
                {item.isAvailable ? "Available" : "Unavailable"}
              </Text>
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
  itemName: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  itemCategory: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  available: {
    backgroundColor: "#d7f7df",
  },
  unavailable: {
    backgroundColor: "#f5d4d4",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
});
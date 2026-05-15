import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from "react-native";

type MenuItem = {
  id: string;
  name: string;
  priceCents: number;
};

type CartItem = MenuItem & {
  quantity: number;
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    priceCents: 1299,
  },
  {
    id: "2",
    name: "Chicken Tacos",
    priceCents: 1099,
  },
  {
    id: "3",
    name: "Fries",
    priceCents: 499,
  },
];

function formatPrice(priceCents: number) {
  return `$${(priceCents / 100).toFixed(2)}`;
}

export default function NewOrderScreen() {
  const [tableNumber, setTableNumber] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: MenuItem) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function removeOneFromCart(itemId: string) {
    setCart(
      cart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  const totalCents = cart.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );

  function submitOrder() {
    if (!tableNumber) {
      Alert.alert("Missing table", "Please enter a table number.");
      return;
    }

    if (cart.length === 0) {
      Alert.alert("Empty order", "Please add at least one item.");
      return;
    }

    Alert.alert("Order Created", "This is fake for now. Database comes next.");
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Order</Text>

      <Text style={styles.label}>Table Number</Text>
      <TextInput
        style={styles.input}
        placeholder="4"
        value={tableNumber}
        onChangeText={setTableNumber}
        keyboardType="number-pad"
      />

      <Text style={styles.sectionTitle}>Menu Items</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{formatPrice(item.priceCents)}</Text>
            </View>

            <Pressable style={styles.smallButton} onPress={() => addToCart(item)}>
              <Text style={styles.smallButtonText}>Add</Text>
            </Pressable>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>No items added yet.</Text>
      ) : (
        cart.map((item) => (
          <View key={item.id} style={styles.cartRow}>
            <Text style={styles.cartText}>
              {item.name} x {item.quantity}
            </Text>

            <Pressable
              style={styles.removeButton}
              onPress={() => removeOneFromCart(item.id)}
            >
              <Text style={styles.removeButtonText}>-</Text>
            </Pressable>
          </View>
        ))
      )}

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalText}>{formatPrice(totalCents)}</Text>
      </View>

      <Pressable style={styles.primaryButton} onPress={submitOrder}>
        <Text style={styles.primaryButtonText}>Send to Kitchen</Text>
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
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 10,
  },
  menuCard: {
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
  },
  itemPrice: {
    color: "#666",
    marginTop: 4,
  },
  smallButton: {
    backgroundColor: "#111",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  smallButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  emptyText: {
    color: "#666",
    marginBottom: 10,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    alignItems: "center",
  },
  cartText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#ddd",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 18,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 14,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  primaryButton: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});

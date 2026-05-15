import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";

export default function NewMenuItemScreen() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);

  function handleSave() {
    if (!name || !category || !price) {
      Alert.alert("Missing info", "Please fill in all fields.");
      return;
    }

    const priceNumber = Number(price);

    if (Number.isNaN(priceNumber) || priceNumber < 0) {
      Alert.alert("Invalid price", "Please enter a valid price.");
      return;
    }

    Alert.alert("Saved", "This is fake for now. Database comes next.");
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Menu Item</Text>

      <Text style={styles.label}>Item Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Classic Burger"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrees"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="12.99"
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
      />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Available</Text>
        <Switch value={isAvailable} onValueChange={setIsAvailable} />
      </View>

      <Pressable style={styles.primaryButton} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>Save Item</Text>
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
    marginBottom: 24,
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
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
import React from "react";
import { View, Text, FlatList } from "react-native";

export default function Flatlist() {
  const data = [
    { id: "1", name: "Pritam" },
    { id: "2", name: "Sharma" },
    { id: "3", name: "Rahul" },
    { id: "4", name: "Aman" },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: "#ddd",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

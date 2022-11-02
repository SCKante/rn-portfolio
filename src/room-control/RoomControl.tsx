import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    label: "Scenario",
    content: [
      {
        id: "1.1",
        label: "Sleeping",
        color: "#3bcafb",
      },
      {
        id: "1.2",
        label: "Relax",
        color: "#ea9dfa",
      },
      {
        id: "1.3",
        label: "Cinema",
        color: "#fabed6",
      },
      {
        id: "1.4",
        label: "Clean up",
        color: "#13c1c5",
      },
      {
        id: "1.5",
        label: "Emergency",
        color: "#fad253",
      },
      {
        id: "1.6",
        label: "Do not disturb",
        color: "#1234f9",
      },
    ],
  },
  { id: "2", label: "Light control", content: [] },
  { id: "3", label: "Air conditional", content: [] },
  { id: "4", label: "Curtain", content: [] },
  { id: "5", label: "Heat Pump", content: [] },
  { id: "6", label: "Entrance door", content: [] },
];

const { width } = Dimensions.get("window");

const RoomControl = () => {
  const [active, setActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./bg.png")}
        style={styles.background}
        blurRadius={100}
      />
      {DATA.map((item) => {
        return (
          <View
            style={{
              backgroundColor: "white",
              marginBottom: 16,
              borderRadius: 10,
              overflow: "hidden",
              height: active ? 350 : 60,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActive(!active)}
            >
              <View
                key={item.id}
                style={[
                  styles.cardRow,
                  {
                    backgroundColor: active ? "#0f3af6" : "#ffffff",
                    height: 60,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: active ? "#ffffff" : "#0f3af6",
                  }}
                >
                  {item.label}
                </Text>
                <Image
                  source={require("./play.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: active ? "#ffffff" : "#0f3af6",
                    transform: [{ rotateY: active ? "90deg" : "0deg" }],
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.cardRow, { flexWrap: "wrap" }]}>
              {item.content.map((scene) => (
                <View
                  key={scene.id}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: width / 3 - 32,
                  }}
                >
                  <View
                    style={[styles.scene, { backgroundColor: scene.color }]}
                  />
                  <Text style={{ textAlign: "center", padding: 8 }}>
                    {scene.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default RoomControl;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 10,
    marginBottom: 16,
  },
  scene: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

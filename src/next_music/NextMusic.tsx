import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
  setPositionAsync,
} from "expo-navigation-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const PopAlbum = [
  {
    id: "001",
    img: require("./images/eclipse.jpg"),
    title: "Watson",
    artist: "Watson",
    songs: 10,
  },
  {
    id: "002",
    img: require("./images/saturn.jpg"),
    title: "Wade",
    artist: "Curry",
    songs: 2,
  },
  {
    id: "003",
    img: require("./images/space1.png"),
    title: "Roland",
    artist: "Watson",
    songs: 10,
  },
];
const { width } = Dimensions.get("window");

const NextMusic = () => {
  if (Platform.OS == "android") {
    setPositionAsync("absolute");
    setBackgroundColorAsync("rgba(0,0,0,0.1)");
    setButtonStyleAsync("light");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#141414", "#3c3332", "#141414"]}
        style={styles.background}
      />
      <Text style={styles.label}>Pop Album</Text>
      <View style={{ paddingVertical: 16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={"fast"}
          scrollEventThrottle={16}
          snapToInterval={width / 2 - 32}
        >
          {PopAlbum.map((item) => {
            return (
              <TouchableOpacity style={{ marginRight: 16 }}>
                <View key={item.id} style={styles.popCard}>
                  <Image
                    source={item.img}
                    style={{ width: "80%", height: "80%", borderRadius: 15 }}
                  />
                  <View style={styles.absolutePlay}>
                    <Image
                      source={require("./images/play.png")}
                      style={{
                        width: 10,
                        height: 10,
                        resizeMode: "contain",
                        tintColor: "#fff",
                      }}
                    />
                  </View>
                </View>
                <Text style={styles.popTitle}>{item.title}</Text>
                <View style={styles.rowBetween}>
                  <Text style={styles.popText}>{item.artist}</Text>
                  <Text style={styles.popText}>
                    <Text style={{ color: "#fff" }}>{item.songs}</Text> Songs
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.label}>Music</Text>
      <View style={{ height: 200, paddingTop: 20 }}>
        <ScrollView horizontal>
          {PopAlbum.map((item) => {
            return (
              <View key={item.id} style={styles.popCard}>
                <Image
                  source={item.img}
                  style={{ width: "80%", height: "80%", borderRadius: 15 }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.label}>Favorite</Text>
    </SafeAreaView>
  );
};

export default NextMusic;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  background: { ...StyleSheet.absoluteFillObject },
  label: { fontSize: 22, fontWeight: "bold", color: "white" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popCard: {
    width: width / 2 - 32,
    height: 150,
    backgroundColor: "#303030",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  popTitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, .8)",
    paddingTop: 8,
  },
  popText: { fontSize: 12, color: "rgba(255, 255, 255, .4)" },
  absolutePlay: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#737373",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    right: 0,
  },
});

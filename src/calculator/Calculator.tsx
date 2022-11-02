import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import images from "./images";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const { height } = Dimensions.get("window");
const PALETTE = {
  dark: {
    bg: "#323c48",
    primary: "#d2721e",
    grey: "#535f6f",
    white: "#ffff",
    black: "#000000",
    lightgrey: "#596271",
  },
  light: {
    bg: "#eaebef",
    primary: "#d2721e",
    grey: "#535f6f",
    white: "#ffff",
    black: "#000000",
    lightgrey: "#b4bcc9",
  },
};
const keyboard = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Calculator = () => {
  const [theme, setTheme] = React.useState("dark");
  const colors = theme == "dark" ? PALETTE.dark : PALETTE.light;
  const [displayOperation, setDisplayOperation] = React.useState("");
  const [displayeResult, setDisplayResult] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleOperation = (operation: String) => {
    if (operation == "C") {
      setDisplayOperation(" ");
      setDisplayResult(" ");
    } else if (operation === "=") {
      setDisplayResult(result);
    } else {
      const display = displayOperation + operation;
      let r = result;
      try {
        let fixedOperation = display.split("x").join(" * ");
        fixedOperation = fixedOperation.split("÷").join(" / ");
        fixedOperation = fixedOperation.split(",").join(" . ");

        r = new String(eval(fixedOperation)).toString();
      } catch (e) {}
      setResult(r);
      setDisplayOperation(display);
    }
  };
  React.useEffect(() => {
    if (Platform.OS == "android") {
      NavigationBar.setBackgroundColorAsync(colors.bg);
    }
  }, [theme]);

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: colors.bg }}>
      <StatusBar style={theme == "dark" ? "light" : "dark"} />
      {/* ---------------------Header-------------------------- */}
      <View style={{ ...styles.row, justifyContent: "space-between" }}>
        <View
          style={{ ...styles.microphone, backgroundColor: colors.lightgrey }}
        >
          <Image source={images.micro} style={{ ...styles.img }} />
        </View>
        <View
          style={{
            ...styles.row,
            ...styles.switchThemeC,
            borderColor: theme == "dark" ? colors.white : colors.primary,
          }}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setTheme("light")}
          >
            <Image
              source={images.sun}
              style={{
                ...styles.img,
                tintColor: theme == "light" ? colors.primary : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setTheme("dark")}>
            <Image
              source={images.moon}
              style={{
                ...styles.img,
                tintColor: theme == "dark" ? colors.primary : colors.grey,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* -------------------------Operation---------------------- */}
      <View style={{ ...styles.operationContainer }}>
        <Text style={{ ...styles.operation }}>{displayOperation}</Text>
      </View>
      {/* -------------------------Result---------------------- */}
      <View style={{ ...styles.resultContainer }}>
        <Text style={{ ...styles.operation }}>{displayeResult}</Text>
      </View>
      {/* -------------------------keyboard---------------------- */}
      <View style={{ ...styles.keyboard }}>
        {keyboard.map((_, i) => {
          return (
            <View
              key={i}
              style={{
                ...styles.row,
                flex: 1,
                height: (height * 0.6) / keyboard.length,
                marginTop: i != 0 ? 10 : 0,
              }}
            >
              {keyboard[i].map((item, id) => {
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => handleOperation(item)}
                    style={{
                      ...styles.keyboardBtn,
                      backgroundColor:
                        i == 0 && id != keyboard[i].length - 1
                          ? colors.grey
                          : id == keyboard[i].length - 1
                          ? colors.primary
                          : theme == "dark"
                          ? colors.black
                          : colors.white,
                      flex: i == keyboard.length - 1 && id == 0 ? 2.1 : 1,
                      marginLeft: id != 0 ? 10 : 0,
                      shadowColor:
                        theme == "dark" ? colors.white : colors.black,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.keyboardText,
                        color: theme == "dark" ? colors.white : colors.black,
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Calculator;

import { setBackgroundColorAsync, setPositionAsync } from "expo-navigation-bar";
import * as React from "react";
import {
  StatusBar,
  Image,
  View,
  Dimensions,
  StyleSheet,
  Platform,
  ImageSourcePropType,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const data = [
  {
    id: "001",
    src: require("./images/slide1.jpg"),
  },
  {
    id: "002",
    src: require("./images/slide2.jpg"),
  },
  {
    id: "003",
    src: require("./images/slide3.jpg"),
  },
  {
    id: "004",
    src: require("./images/slide4.jpg"),
  },
  {
    id: "005",
    src: require("./images/slide5.jpg"),
  },
  {
    id: "006",
    src: require("./images/slide6.jpg"),
  },
  {
    id: "007",
    src: require("./images/slide7.jpg"),
  },
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

interface BackgroundProps {
  scrollX: Animated.SharedValue<number>;
  src: Animated.Node<ImageSourcePropType>;
  i: number;
}

const Background = ({ scrollX, src, i }: BackgroundProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [(i - 1) * width, i * width, (i + 1) * width],
        [0, 1, 0]
      ),
    };
  });
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Animated.Image
        source={src}
        style={[animatedStyles, { width, height }]}
        blurRadius={50}
      />
    </View>
  );
};

const Carousel = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      scrollX.value = x;
    },
  });

  if (Platform.OS == "android") {
    setPositionAsync("absolute");
    setBackgroundColorAsync("rgba(0,0,0,0.1)");
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {data.map((item, index) => (
        <Background key={index} scrollX={scrollX} src={item.src} i={index} />
      ))}
      <Animated.FlatList
        data={data}
        onScroll={scrollHandler}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                height,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: imageW,
                  height: imageH,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 20,
                  elevation: 30,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={item.src}
                  style={{
                    width: imageW,
                    height: imageH,
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Carousel;

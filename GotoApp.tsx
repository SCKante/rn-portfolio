import {
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface GotoAppProps {
  app: string;
  onPress: () => void;
  icon: ImageSourcePropType;
}
const GotoApp = ({ app, onPress, icon }: GotoAppProps) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 24,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 200,
      }}
      {...{ onPress }}
    >
      <Image
        source={icon}
        style={{
          width: 22,
          height: 22,
          resizeMode: "contain",
          marginRight: 12,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: 1.1,
          textDecorationLine: "underline",
        }}
      >
        {app}
      </Text>
    </TouchableOpacity>
  );
};

export default GotoApp;

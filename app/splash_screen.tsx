import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

export default function splash_screen() {
  return (
    <View>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: "80%", aspectRatio: 1 }}
      />
      <Text className="text-3xl">Home</Text>
    </View>
  );
}

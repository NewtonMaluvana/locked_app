import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Animated, Text, View } from "react-native";
export default function splash_screen() {
  const route = useRouter();

  const gotoWelcome = () => {
    route.replace("//welcome_screen");
  };
  //setTimeout(gotoWelcome, 3000);
  return (
    <View
      style={{ backgroundColor: Colors.btnColor }}
      className="h-full flex justify-center place-items-center"
    >
      <Animated.Image
        source={require("../assets/images/logo.png")}
        style={{ height: "50%", aspectRatio: 1 }}
      />
      <Text className="text-6xl text-slate-200 mt-20 text-center font-light">
        Stay Focused.
      </Text>
    </View>
  );
}

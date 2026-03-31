import { Colors } from "@/constants/colors";
import React from "react";
import { Text, View } from "react-native";

export default function welcome_screen() {
  return (
    <View
      className="h-full  border-none  relative z-30"
      style={{ backgroundColor: Colors.btnColor }}
    >
      <View
        style={{
          backgroundColor: Colors.btnColor,
          borderBottomRightRadius: 120,
        }}
        className="h-[65%] w-full z-40 border-none   top-0 left-0"
      ></View>
      <View className="h-[65%] w-full z-10  border-none absolute top-0 left-0 bg-white"></View>
      <View
        style={{ borderTopStartRadius: 120 }}
        className="h-[35%] w-full z-50 bottom-0  border-none left-0 bg-white absolute "
      >
        <Text className="text-black"></Text>
      </View>
    </View>
  );
}

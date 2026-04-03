import { Colors } from "@/constants/colors";
import React from "react";
import { View } from "react-native";

export default function index() {
  return (
    <View>
      <View
        style={{ backgroundColor: Colors.btnColor }}
        className="h-[300px]"
      ></View>
      <View style={{ borderRadius: 30 }} className="w-full"></View>
    </View>
  );
}

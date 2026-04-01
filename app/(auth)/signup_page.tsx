import { Colors } from "@/constants/colors";
import React from "react";
import { Text, View } from "react-native";

export default function signup_page() {
  return (
    <View
      style={{ backgroundColor: Colors.btnColor }}
      className=" h-full flex justify-end "
    >
      <Text
        style={{ color: Colors.textColor }}
        className="text-3xl text-center mb-10"
      >
        Welcome to Lockify
      </Text>
      <View
        style={{ borderRadius: 30, backgroundColor: "#B9B7B7" }}
        className="h-[82%] w-full  flex justify-center"
      >
        <Text
          style={{ color: Colors.textColor }}
          className="text-3xl text-center"
        >
          Create an Account
        </Text>
        <Text
          style={{ color: Colors.textColor }}
          className="text-lg text-center font-light mt-4"
        >
          Lets get started
        </Text>
      </View>
    </View>
  );
}

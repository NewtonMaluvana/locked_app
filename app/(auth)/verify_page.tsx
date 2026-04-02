import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

export default function verify_page() {
  return (
    <View className="h-full flex place-items-center justify-center">
      <Text className="text-5xl font-bold">Verify your email</Text>
      <Image
        style={{ aspectRatio: 1, height: "50%" }}
        source={require("../../assets/images/email.png")}
      ></Image>
      <Text className="text-3xl text-red-500">
        Please check you email inbox to verify your email ,in order to complete
        your account creation
      </Text>
    </View>
  );
}

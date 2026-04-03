import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

export default function verify_page() {
  return (
    <View className="h-full flex place-items-center justify-center ">
      <View className="flex flex-row gap-2">
        <Text className="text-4xl font-bold">Verify your email</Text>
        <Text className="text-5xl font-bold text-red-600 text-center align-middle">
          ?
        </Text>
      </View>

      <Image
        style={{ aspectRatio: 1, height: "50%" }}
        source={require("../../assets/images/email.png")}
      ></Image>
      <Text style={{ margin: 6 }} className="text-lg text-center text-red-300">
        Please check you email inbox to verify your email ,in order to complete
        your account creation
      </Text>
    </View>
  );
}

import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function welcome_screen() {
  const route = useRouter();

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
        className="h-[65%] justify-center place-items-center w-full z-40 border-none   top-0 left-0"
      >
        <Image
          className="z-30"
          source={require("../assets/images/logo.png")}
          style={{ height: "60%", aspectRatio: 1 }}
        />
        <Text
          style={{ color: "#B9B7B7", fontSize: 25 }}
          className="mt-6 text-3xl  text-center"
        >
          Stay focused by blocking distracting Apps that slows you down
        </Text>
      </View>
      <View
        style={{ backgroundColor: Colors.bgColor }}
        className="h-[65%] w-full z-10  border-none absolute top-0 left-0 "
      ></View>
      <View
        style={{ borderTopStartRadius: 120, backgroundColor: "#B9B7B7" }}
        className="h-[35%] w-full z-50 bottom-0 flex justify-center place-items-center  border-none left-0  absolute "
      >
        <Text
          style={{ color: Colors.btnColor, fontSize: 26 }}
          className="mb-10 text-gray-200"
        >
          One app . zero distractions
        </Text>
        <Pressable
          onPress={() => route.push("/(tabs)")} //onpress .goes to sign up page
          style={{
            height: 60,
            width: "65%",
            backgroundColor: "white",
            borderRadius: 30,
          }}
          className="justify-center flex-row place-items-center   "
        >
          <Text
            style={{ color: Colors.btnColor }}
            className="text-center text-lg"
          >
            Get Started
          </Text>
          <Pressable
            onPress={() => route.push("/signup_page")} //onpress .goes to sign up page
            className="h-full absolute right-0 justify-center place-items-center"
            style={{
              aspectRatio: 1,
              borderRadius: 30,
              backgroundColor: Colors.btnColor,
            }}
          >
            <Image
              tintColor={"white"}
              style={{ width: 40, aspectRatio: 1 }}
              source={require("../assets/images/arrow-right.png")}
            ></Image>
          </Pressable>
        </Pressable>

        <View className="flex flex-row gap-2 mt-2 place-items-center">
          <Text className="text-white">Alredy have an Account?</Text>
          <Text
            style={{ color: Colors.btnColor }}
            onPress={() => route.push("/(auth)/signin_page")}
          >
            Sign in
          </Text>
        </View>
      </View>
    </View>
  );
}

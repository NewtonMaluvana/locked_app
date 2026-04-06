import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface SessionType {
  day: string;
  hour: string;
  minute: string;
  seconds: string;
}
export default function Session_card({
  day,
  hour,
  minute,
  seconds,
}: SessionType) {
  return (
    <View
      className="p-2 w-[98%] self-center flx flex-row gap-4"
      style={{ backgroundColor: Colors.bgColor2, borderRadius: 25 }}
    >
      <View className="place-items-center justify-center">
        <Ionicons name="timer" size={40} />
      </View>
      <View className="w-[70%]">
        <View className="flex flex-row justify-evenly">
          <Text
            className=" text-3xl md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            {day}
          </Text>
          <Text
            className="text-3xl  md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            :
          </Text>
          <Text
            className=" text-3xl  md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            {hour}
          </Text>
          <Text
            className="text-3xl   md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            :
          </Text>
          <Text
            className=" text-3xl  md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            {minute}
          </Text>
          <Text
            className="text-3xl   md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            :
          </Text>
          <Text
            className=" text-3xl  md:text-4xl"
            style={{ color: Colors.btnColor }}
          >
            {seconds}
          </Text>
        </View>
        <View className="flex flex-row justify-evenly">
          <Text
            className=" text-2xl md:text-4xl"
            style={{ color: Colors.textColor3 }}
          >
            Day
          </Text>
          <Text
            className="text-2xl   md:text-4xl"
            style={{ color: Colors.textColor3 }}
          ></Text>
          <Text
            className=" text-2xl  md:text-4xl"
            style={{ color: Colors.textColor3 }}
          >
            Hour
          </Text>
          <Text
            className="text-2xl   md:text-4xl"
            style={{ color: Colors.textColor3 }}
          ></Text>
          <Text
            className=" text-2xl  md:text-4xl"
            style={{ color: Colors.textColor3 }}
          >
            Min
          </Text>
          <Text
            className="text-2xl   md:text-4xl"
            style={{ color: Colors.textColor2 }}
          ></Text>
          <Text
            className=" text-2xl  md:text-4xl"
            style={{ color: Colors.textColor3 }}
          >
            Sec
          </Text>
        </View>
        <Text className="text-center font-semibold  text-lg md:text-xl">
          Today, 09:00Am-14:45Pm
        </Text>
      </View>
    </View>
  );
}

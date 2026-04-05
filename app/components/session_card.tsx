import { Colors } from "@/constants/colors";
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
      className="p-2 w-[95%] self-center"
      style={{ backgroundColor: Colors.bgColor2, borderRadius: 25 }}
    >
      <View>
        <Text>upcoming</Text>
      </View>
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
      <View></View>
      <View></View>
    </View>
  );
}

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
    <View className="p-2">
      <View>
        <Text>upcoming</Text>
      </View>
      <View className="flex flex-row justify-center">
        {/* <Text className=" text-3xl md:text-4xl">{day}</Text>
        <Text className="text-3xl mx-1  md:text-4xl">:</Text>
        <Text className=" text-3xl  md:text-4xl">{hour}</Text>
        <Text className="text-3xl mx-1  md:text-4xl">:</Text>
        <Text className=" text-3xl  md:text-4xl">{minute}</Text>
        <Text className="text-3xl mx-1  md:text-4xl">:</Text>
        <Text className=" text-3xl  md:text-4xl">{seconds}</Text> */}
      </View>
      <View></View>
      <View></View>
    </View>
  );
}

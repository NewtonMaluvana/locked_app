import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface AppType {
  name: string;
  time: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}
export default function App_usage_card({ name, time, icon }: AppType) {
  return (
    <View
      style={{ backgroundColor: Colors.bgColor2, borderRadius: 25 }}
      className="flex flex-row gap-10 w-[98%] p-4 self-center my-1 "
    >
      <View className="">
        <Ionicons name={icon} size={40} color={"red"} />
      </View>
      <View>
        <Text className="text-2xl capitalize md:text3xl font-semibold">
          {name}
        </Text>
        <Text className="text-xl md:text2xl font-light">{time}</Text>
      </View>
    </View>
  );
}

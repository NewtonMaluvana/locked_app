import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface PropType {
  title: string;
  color: string;
  subtitle: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}
const Card = ({ title, subtitle, icon, color }: PropType) => {
  return (
    <View
      style={{ backgroundColor: color, borderRadius: 25 }}
      className="w-[50%] aspect-square  px-2 place-items-center justify-center"
    >
      <View className="flex place-items-start justify mt-4 ">
        <Ionicons className="text-7xl" size={50} name={icon} color={"white"} />
      </View>
      <Text
        className="md:text-6xl  text-3xl"
        style={{
          color: "white",

          fontWeight: "medium",
          textAlign: "left",
        }}
      >
        {title}
      </Text>

      <Text
        className="text-lg md:text-2xl"
        style={{ color: "#C3C3C3", textAlign: "center" }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default Card;

import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Button } from "react-native-paper";
import App_usage_card from "../components/app_usage_card";
import Card from "../components/card";
import Session_card from "../components/session_card";
export default function index() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Today", disabled: true },
    { key: "2", value: "This Week" },
    { key: "2", value: "This Month" },
  ];
  return (
    <ScrollView>
      <View className="" style={{ backgroundColor: Colors.bgColor }}>
        <View
          style={{ backgroundColor: Colors.btnColor }}
          className="h-[220px] ps-6"
        >
          <View className="flex justify-end flex-row place-items-center m-2">
            <Button
              onPress={() => {}}
              icon="lock"
              contentStyle={{
                backgroundColor: Colors.textColor2,
              }}
              textColor="white"
              style={{ width: "40%", borderRadius: 15 }}
              mode="elevated"
            >
              Premium
            </Button>
          </View>

          <Text className="text-5xl md:text-7xl font-medium text-white">
            Welcome
          </Text>
          <Text
            className="text-2xl md:text-4xl mt-2  text w-[60%] md:w-[40%]"
            style={{ color: "#A8A7A7" }}
          >
            You are in control now. Stay focused!.
          </Text>
        </View>
        <View
          style={{ borderRadius: 30, backgroundColor: Colors.bgColor }}
          className="w-full p-2 "
        >
          <Text
            className="font-bold mb-4 text-3xl md:text-5xl"
            style={{ color: Colors.textColor3 }}
          >
            Features
          </Text>
          <View
            style={{ backgroundColor: "#1492E0", borderRadius: 25 }}
            className=" w-full px-2 place-items-center mb-2 justify-center"
          >
            <View className="flex place-items-start justify mt-4 ">
              <Ionicons
                className="text-7xl"
                size={50}
                name="timer"
                color={"white"}
              />
            </View>
            <Text
              className="md:text-6xl  text-3xl"
              style={{
                color: "white",

                fontWeight: "medium",
                textAlign: "left",
              }}
            >
              Session Lock
            </Text>

            <Text
              className="text-lg md:text-2xl mb-4"
              style={{ color: "#C3C3C3", textAlign: "center" }}
            >
              Control when and which apps are blocked
            </Text>
          </View>
          <View className="flex flex-row justify-center gap-2 mb-2 place-content-center">
            {
              <Card
                color={Colors.btnColor}
                title="Strict Lock"
                subtitle="Block the intire smartphone"
                icon="lock-closed"
              />
            }
            {
              <Card
                color="#b72748"
                title="Anti-scroll"
                subtitle="block short videos only"
                icon="phone-portrait"
              />
            }
          </View>
        </View>

        <View className="flex justify-between  flex-row p-2">
          <Text
            style={{ color: Colors.textColor3 }}
            className="text-3xl md:text-4xl font-medium text-center"
          >
            Lock Sessions
          </Text>
          <Text
            style={{ color: Colors.textColor3 }}
            className="text-lg md:text-2xl text-center"
          >
            See all
          </Text>
        </View>
        <Session_card day="02" hour="12" minute="23" seconds="34" />

        {/* <App_usage_card /> */}
        <Text
          style={{ color: Colors.textColor3 }}
          className="text-3xl md:text-4xl my-4 ms-2"
        >
          App usage
        </Text>

        <SelectList
          defaultOption={data[0]}
          search={false}
          boxStyles={{
            width: 150,
            borderWidth: 0,
            backgroundColor: Colors.bgColor2,
            borderRadius: 20,
            marginVertical: 4,
          }}
          inputStyles={{ color: Colors.textColor3 }}
          setSelected={(val: string) => setSelected(val)}
          data={data}
          save="value"
        />
        <App_usage_card />
      </View>
    </ScrollView>
  );
}

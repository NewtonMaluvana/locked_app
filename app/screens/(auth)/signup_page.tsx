import { Colors } from "@/app/constants/colors";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
export default function signup_page() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  return (
    <View
      style={{ backgroundColor: Colors.btnColor }}
      className=" h-full flex justify-end "
    >
      <Text style={{ color: Colors.textColor }} className="text-lg text-center">
        Welcome to Lockify
      </Text>
      <Text
        style={{ color: Colors.textColor }}
        className="text-4xl text-center mb-10"
      >
        Sign up
      </Text>
      <View
        style={{ borderRadius: 30, backgroundColor: Colors.bgColor }}
        className="h-[82%] w-full  flex justify-start place-items-center"
      >
        <Text
          style={{ color: Colors.btnColor }}
          className="text-3xl font-semibold text-center mt-20"
        >
          Create an Account
        </Text>
        <Text style={{}} className="text-lg text-center  font-light mt-4">
          Enter Details to create an account
        </Text>

        <TextInput
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 60 }}
          mode="outlined"
          label="Email"
        />
        <TextInput
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 60 }}
          mode="outlined"
          label="Password"
        />

        <Button
          style={{
            width: "90%",

            marginTop: 20,
            backgroundColor: Colors.btnColor,
          }}
          contentStyle={{ height: 50 }}
          textColor="white"
          className=""
          labelStyle={{ fontSize: 18 }}
          mode="outlined"
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
}

import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/useAuthContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
export default function signin_page() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordMatch, setPaswordMatch] = useState(false);
  const [Loading, setLoading] = useState(false);
  const route = useRouter();
  const { signup, Error } = useAuth();

  const signNewUser = async () => {
    //checking if password matches with the comfirmed
    if (confirmPassword == Password) {
      try {
        await signup(Email, Password, confirmPassword);
      } catch (error) {
        throw error;
      }
    } else {
      setPaswordMatch(true);
    }
  };
  return (
    <View
      style={{ backgroundColor: Colors.btnColor }}
      className=" h-full flex justify-end "
    >
      <Text style={{ color: Colors.textColor }} className="text-lg text-center">
        Welcome Back
      </Text>
      <Text
        style={{ color: Colors.textColor }}
        className="text-4xl text-center mb-10"
      >
        Log in
      </Text>
      <View
        style={{ borderRadius: 30, backgroundColor: Colors.bgColor }}
        className="h-[82%] w-full  flex justify-start place-items-center"
      >
        <Text
          style={{ color: Colors.btnColor }}
          className="text-4xl font-semibold text-center mt-10"
        >
          Please Sign in
        </Text>
        <Text
          style={{}}
          className="text-lg text-center text-gray-400  font-normal mt-4"
        >
          Enter Details to Log in
        </Text>

        <TextInput
          onChangeText={setEmail}
          value={Email}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 10, height: 70 }}
          mode="outlined"
          label="Email"
        />
        <TextInput
          contentStyle={{ color: "gray" }}
          onChangeText={setPassword}
          value={Password}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 70 }}
          mode="outlined"
          label="Password"
        />
        <Text
          onPress={() => {}}
          className="text-lg text-start self-start ms-6 mt-2 text-red-600"
        >
          Forgot password?
        </Text>

        {Error && <Text className="text-red-600 text-left">{Error}</Text>}
        <Button
          mode="elevated"
          onPress={signNewUser}
          style={{
            width: "90%",
            paddingVertical: 0,
            marginTop: 20,
            backgroundColor: Colors.btnColor,
          }}
          // loading={true}
          contentStyle={{ height: 70, paddingVertical: 0 }}
          textColor="white"
          className=""
          labelStyle={{ fontSize: 24 }}
        >
          Sign Up
        </Button>
        <View className="flex flex-row gap-2 mt-2">
          {" "}
          <Text className="text-lg text-gray-500">Dont have an account?</Text>
          <Text
            onPress={() => route.push("/(auth)/signup_page")}
            style={{ color: Colors.btnColor }}
            className="text-lg"
          >
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
}

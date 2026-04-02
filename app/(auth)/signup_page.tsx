import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/useAuthContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
export default function signup_page() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordMatch, setPaswordMatch] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [secure2, setSecure2] = useState(true);
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
          className="text-4xl font-semibold text-center mt-10"
        >
          Create an Account
        </Text>
        <Text
          style={{}}
          className="text-lg text-center text-gray-400  font-normal mt-4"
        >
          Enter Details to create an account
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
          secureTextEntry={secure}
          right={
            <TextInput.Icon
              onPress={() => setSecure(!secure)}
              icon={secure ? "eye-off" : "eye"}
            />
          }
        />
        <TextInput
          contentStyle={{ color: "gray" }}
          onChangeText={setconfirmPassword}
          value={confirmPassword}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 70 }}
          mode="outlined"
          label="Confirm assword"
          secureTextEntry={secure2}
          right={
            <TextInput.Icon
              onPress={() => setSecure2(!secure2)}
              icon={secure2 ? "eye-off" : "eye"}
            />
          }
        />
        {passwordMatch && (
          <View className="w-[90%]">
            <Text className="text-red-600 mt-2 self-start ">
              Passwords do not match
            </Text>
          </View>
        )}
        {Error && (
          <View className="w-[90%]">
            {" "}
            <Text className="text-red-600 self-start mt-2">{Error}</Text>
          </View>
        )}

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
          <Text className="text-lg text-gray-500">
            Already have an account?
          </Text>
          <Text
            onPress={() => route.push("/(auth)/signin_page")}
            style={{ color: Colors.btnColor }}
            className="text-lg"
          >
            Log in
          </Text>
        </View>
      </View>
    </View>
  );
}

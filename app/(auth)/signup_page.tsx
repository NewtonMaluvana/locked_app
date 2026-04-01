import { Colors } from "@/constants/colors";
import { useAuth } from "@/context/useAuthContext";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
export default function signup_page() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordMatch, setPaswordMatch] = useState(false);
  const [Loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const signNewUser = async () => {
    //checking if password matches with the comfirmed
    if (confirmPassword.toString == Password.toString) {
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
          className="text-3xl font-semibold text-center mt-20"
        >
          Create an Account
        </Text>
        <Text style={{}} className="text-lg text-center  font-light mt-4">
          Enter Details to create an account
        </Text>

        <TextInput
          onChangeText={setEmail}
          value={Email}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 60 }}
          mode="outlined"
          label="Email"
        />
        <TextInput
          onChangeText={setPassword}
          value={Password}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 60 }}
          mode="outlined"
          label="Password"
        />
        <TextInput
          onChangeText={setconfirmPassword}
          value={confirmPassword}
          outlineStyle={{ borderRadius: 20 }}
          style={{ width: "90%", marginTop: 20, height: 60 }}
          mode="outlined"
          label="Confirm Password"
        />
        {passwordMatch && (
          <Text className="text-red-600 text-left">Passwords do no match</Text>
        )}

        <Button
          onPress={signNewUser}
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

import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen options={{ title: "home" }} name="index" />

      <Tabs.Screen options={{}} name="profile" />
    </Tabs>
  );
}

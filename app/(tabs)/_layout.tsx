import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen options={{}} name="features" />
      <Tabs.Screen options={{}} name="profile" />
    </Tabs>
  );
}

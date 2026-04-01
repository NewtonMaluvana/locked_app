import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signin_page" options={{}} />
      <Stack.Screen name="signup_page" options={{}} />
    </Stack>
  );
}

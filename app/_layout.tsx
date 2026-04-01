import { AuthProvider } from "@/context/useAuthContext";
import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="welcome_screen" />
        <Stack.Screen name="splash_screen" />
      </Stack>
    </AuthProvider>
  );
}

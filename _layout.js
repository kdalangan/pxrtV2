import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'LOG IN' }} />
      <Stack.Screen name="signup" options={{ title: 'SIGN UP' }} />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="result" options={{ headerShown: false }} /> {/* Added result screen */}
    </Stack>
  );
}

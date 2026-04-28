import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="role" />
      <Stack.Screen name="client" />
      <Stack.Screen name="provider" />
      <Stack.Screen name="provider-verification" />
    </Stack>
  );
}

import { Stack } from 'expo-router';

export default function ResearcherLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="requests" />
      <Stack.Screen name="request/[id]" />
    </Stack>
  );
}

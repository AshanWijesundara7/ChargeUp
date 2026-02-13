import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* (auth) and (main) are stacks that we switch between */}
      <Stack.Screen name="(auth)" /> 
      <Stack.Screen name="(main)" />
    </Stack>
  );
}
import { Stack } from 'expo-router';

export default function AuthLayout() {
  console.log('registration');
  return (
    // <Stack> screenOptions={{ headerShown: false }}>
    <Stack initialRouteName='login'>
      <Stack.Screen name="login" options={{ title: 'login' }}/>
      <Stack.Screen name="register" options={{ title: 'register' }}/>
    </Stack>
  );
}
// import { useEffect } from 'react';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useFrameworkReady } from '@/hooks/useFrameworkReady';
// import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
// import { View, Text } from 'react-native';

// export default function RootLayout() {
//   useFrameworkReady();

//   const [fontsLoaded] = useFonts({
//     'Poppins-Regular': Poppins_400Regular,
//   });
  
//   console.log('RootLayout rendered');
  
//   // Don't render until fonts are loaded
//   if (!fontsLoaded) {
//     return <View><Text>Loading fonts...</Text></View>;
//   }

//   return (
//     <>
//       <Stack screenOptions={{ headerShown: false }} initialRouteName='(auth)'>
//         <Stack.Screen name="(auth)"/>
//         <Stack.Screen name="(tabs)"/>
//       </Stack>
//       <StatusBar style="auto" />
//     </>
//   );
// }


import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { View, Text } from 'react-native';

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
  });
  
  console.log('RootLayout rendered');
  
  // Don't render until fonts are loaded
  if (!fontsLoaded) {
    return <View><Text>Loading fonts...</Text></View>;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
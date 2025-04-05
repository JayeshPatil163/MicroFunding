import { Tabs } from 'expo-router';
import { Users as Users2, Coins, Globe as Globe2, CircleUser as UserCircle2 } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e1e1e1',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="pitch-point"
        options={{
          title: 'Pitch Point',
          tabBarIcon: ({ color, size }) => <Users2 size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="fundings"
        options={{
          title: 'Fundings',
          tabBarIcon: ({ color, size }) => <Coins size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: 'Network',
          tabBarIcon: ({ color, size }) => <Globe2 size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <UserCircle2 size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
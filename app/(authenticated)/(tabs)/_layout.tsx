import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.dark,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: "#f8f8f8",
        },
      }}
    >
      {/* Today Tab */}
      <Tabs.Screen
        name="today"
        options={{
          title: "Sign In",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.dark}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="upcoming"
        options={{
          title: "Sign Up",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar-sharp" : "calendar-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.dark}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Forgot",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.dark}
            />
          ),
        }}
      />

      {/* Browse Tab */}
      <Tabs.Screen
        name="browse"
        options={{
          title: "Reset",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.dark}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="otp"
        options={{
          title: "Otp",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "options" : "options-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.dark}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

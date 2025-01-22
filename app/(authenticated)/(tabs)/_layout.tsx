import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 60, // Adjust the height of the tab bar
          backgroundColor: "#f8f8f8", // Tab bar background color
        },
      }}
    >
      {/* Today Tab */}
      <Tabs.Screen
        name="today"
        options={{
          title: "Today",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={24}
              color={focused ? "#000" : "#888"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="upcoming"
        options={{
          title: "Upcoming",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar-sharp" : "calendar-outline"}
              size={24}
              color={focused ? "#000" : "#888"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={focused ? "#000" : "#888"}
            />
          ),
        }}
      />

      {/* Browse Tab */}
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              size={24}
              color={focused ? "#000" : "#888"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

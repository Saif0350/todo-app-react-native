import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;

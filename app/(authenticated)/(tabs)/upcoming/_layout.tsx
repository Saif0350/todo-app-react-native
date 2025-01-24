import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MoreButtons from "@/components/MoreButtons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Upcoming",

          headerRight: () => <MoreButtons pageName="Upcoming" />,
        }}
      />
    </Stack>
  );
};

export default Layout;

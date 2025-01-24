import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import MoreButtons from "@/components/MoreButtons";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Browse",

          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />
    </Stack>
  );
};

const HeaderLeft = () => {
  const { user } = useUser();
  return <Image source={{ uri: user?.imageUrl }} style={styles.image} />;
};

const HeaderRight = () => {
  return (
    // <Link href={"/browse/setting"}>
    <Ionicons name="settings-outline" size={24} color={Colors.secondary} />
    // </Link>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default Layout;

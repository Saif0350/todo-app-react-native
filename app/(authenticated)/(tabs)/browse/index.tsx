import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { SignedOut, useAuth } from "@clerk/clerk-expo";

const Page = () => {
  const { signOut } = useAuth();
  return (
    <View className="bg-black">
      <Text>Page</Text>
      <Button title="Sign Out" onPress={() => signOut()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Page;

import React from "react";
import SignUp from "@/components/SignUp";
import { StyleSheet, Text, View } from "react-native";
import Fab from "@/components/Fab";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Upcoming</Text>
      <Fab />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
  },
});

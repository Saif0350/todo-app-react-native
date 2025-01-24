import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignIn from "@/components/SignIn";
import Fab from "@/components/Fab";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>saif</Text>
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

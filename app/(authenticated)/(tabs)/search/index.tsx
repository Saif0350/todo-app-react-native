import { View, Text, ScrollView } from "react-native";
import React from "react";
import ForgotPassword from "@/components/ForgotPassword";
import Fab from "@/components/Fab";

const Page = () => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Seach</Text>
        </View>
      </ScrollView>
      <Fab />
    </>
  );
};

export default Page;

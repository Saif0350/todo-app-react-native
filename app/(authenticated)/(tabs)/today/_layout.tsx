import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
// import MoreButton from "@/components/MoreButton";

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

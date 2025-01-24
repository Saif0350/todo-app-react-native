import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import MoreButtons from "@/components/MoreButtons";
// import MoreButton from "@/components/MoreButton";

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
          title: "Today",
          headerLargeTitle: true,
          headerRight: () => <MoreButtons pageName="Today" />,
        }}
      />
    </Stack>
  );
};
export default Layout;

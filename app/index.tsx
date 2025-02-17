import { useOAuth } from "@clerk/clerk-expo";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { top } = useSafeAreaInsets();

  const handleAppleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await googleAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  const openLink = async () => {
    await WebBrowser.openBrowserAsync("https://saifalam.com");
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Image
        source={require("@/assets/images/todoist-logo.png")}
        style={styles.loginImage}
      />

      <Image
        source={require("@/assets/images/login.png")}
        style={styles.bannerImage}
      />

      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={styles.buttons} onPress={handleAppleLogin}>
          <Ionicons name="logo-apple" size={24} />
          <Text style={styles.buttonText}>Continute With Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={handleGoogleLogin}>
          <Ionicons name="logo-google" size={24} />
          <Text style={styles.buttonText}>Continute With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <Ionicons name="mail" size={24} />
          <Text style={styles.buttonText}>Continute With Email</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          By continuing you agree to Todoist's{" "}
          <Text style={styles.link} onPress={openLink}>
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={openLink}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    marginTop: 20,
  },

  loginImage: { height: 40, resizeMode: "contain", alignSelf: "center" },

  bannerImage: { height: 280, resizeMode: "contain", alignSelf: "center" },

  buttonContainer: {
    gap: 20,
    marginHorizontal: 40,
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    gap: 10,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightBorder,
  },

  buttonText: { fontSize: 20, fontWeight: "500" },

  description: {
    fontSize: 12,
    textAlign: "center",
    color: Colors.lightText,
  },
  link: {
    color: Colors.lightText,
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

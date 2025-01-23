import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";

const ForgotPassword = () => {
  const { width, height } = useWindowDimensions();

  const openLink = async () => {
    await WebBrowser.openBrowserAsync("https://saifalam.com");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../assets/images/frame.png")}
            style={styles.imageBackground}
          >
            <Text style={styles.headerTitle}>Forgot Password</Text>
            <Text style={styles.headerSubtitle}>
              Fill your email and set new security!
            </Text>
          </ImageBackground>
        </View>

        <View style={styles.arrowCont}>
          <TouchableOpacity onPress={openLink}>
            <Ionicons name={"arrow-back"} size={26} color={Colors.NewMain} />
          </TouchableOpacity>
        </View>

        <View style={styles.vectordiv}>
          <Image
            source={require("../assets/images/forgotv/1.avif")}
            style={{ width: width / 1.5, height: width / 1 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
            <LinearGradient
              colors={[Colors.NewMain, Colors.NewMain2]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Text style={styles.signInButtonText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 250,

    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.8,
  },

  arrowCont: {
    marginTop: 10,
    paddingHorizontal: 23,
  },

  vectordiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
    marginRight: 5,
  },
  forgotPassword: {
    color: Colors.NewButton,
    textAlign: "right",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: Colors.NewMain,
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden", // To make sure the gradient doesn't overflow the rounded corners
  },
  gradient: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  signInButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ForgotPassword;

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
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require("../assets/images/frame.png")}
              style={styles.imageBackground}
            >
              <Text style={styles.headerTitle}>Sign In</Text>
              <Text style={styles.headerSubtitle}>Welcome Back!</Text>
            </ImageBackground>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Number"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pin</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter Pin"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#A0A0A0"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <LinearGradient
                colors={[Colors.NewMain, Colors.NewMain2]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradient}
              >
                <Text style={styles.signInButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  // imageStyle: {
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  // },

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
  formContainer: {
    padding: 30,
    marginTop: 20,
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

export default SignIn;

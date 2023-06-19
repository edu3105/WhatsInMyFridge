import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import InputField from "./InputField";
import CustomButton from "./CustomButton";
import GoogleSVG from "../../assets/misc/google.svg";
import FacebookSVG from "../../assets/misc/facebook.svg";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignInButton = () => {
    loginUser(email, password);
  };

  const handleSignUpButton = () => {
    navigation.navigate("Register", {
      email,
      password,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Text style={styles.title}>Hello</Text>

        <Text style={styles.subtitle}>Welcome Back!</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <Text
          style={styles.forgotPassword}
          onPress={() => console.log("Forgot Password touched")}
        >
          Forgot Password?
        </Text>

        <CustomButton label={"Sign In"} onPress={handleSignInButton} />

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or Sign in With</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <GoogleSVG height={22} width={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <FacebookSVG height={22} width={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <Text style={styles.signUpLink} onPress={handleSignUpButton}>
            Sign up
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  scrollView: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#333",
    marginBottom: 5,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 50,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    color: "gold",
    marginBottom: 15,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  dividerText: {
    width: 125,
    textAlign: "center",
    color: "gray",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  socialButton: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 30,
  },
  signUpContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  signUpText: {
    marginRight: 5,
  },
  signUpLink: {
    color: "gold",
  },
});

export default LoginScreen;

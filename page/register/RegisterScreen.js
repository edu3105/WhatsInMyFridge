import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { Checkbox, NativeBaseProvider } from "native-base";
import InputField from "./InputField.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { firebase } from "../../config.js";
import CustomButton from "./CustomButton.js";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const profilePicture =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const registerUser = async (email, password, userName, profilePicture) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: "https://what-s-in-my-fridge-d35cd.firebaseapp.com",
      });
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          userName,
          email,
          password,
          profilePicture,
        });
      alert("Verification email sent");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <Text style={styles.title}>Create an account</Text>

          <Text style={styles.subtitle}>
            Let's help you set up your account, it won't take long!
          </Text>

          <TextInput
            style={styles.input}
            placeholder="User Name"
            onChangeText={(userName) => setUserName(userName)}
            autoCorrect={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />

          {/* <Checkbox style={styles.checkbox} value="test">
            <Text style={styles.checkboxText}>
              I Accept the terms and conditions
            </Text>
          </Checkbox> */}

          <CustomButton
            label={"Sign Up"}
            onPress={() =>
              registerUser(email, password, userName, profilePicture)
            }
          />

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.signInLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
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
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  checkbox: {
    marginBottom: 15,
  },
  checkboxText: {
    fontSize: 14,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  signInText: {
    marginRight: 5,
  },
  signInLink: {
    color: "#AD40AF",
    fontWeight: "700",
  },
});

export default RegisterScreen;

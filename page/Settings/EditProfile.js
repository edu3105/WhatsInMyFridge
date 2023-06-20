//EditProfile.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import {
  NativeBaseProvider,
  HStack,
  IconButton,
  Box,
  Avatar,
  ScrollView,
  VStack,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//import { Navigation } from "react-native-navigation";
import "react-native-gesture-handler";
import { Touchable } from "react-native";

export default function EditProfile() {
  const [avatarSource, setAvatarSource] = useState({
    uri: "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg",
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleAvatarPress = () => {
    console.log("avatar_pressed");
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
    };
    selectImage();
  };

  const handleChangePicturePress = () => {
    console.log("change_picture_pressed");
    selectImage();
  };

  const [successVisible, setSuccessVisible] = useState(false);
  const fadeAnimation = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();
  const handleUpdatePress = () => {
    console.log("update_pressed");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);

    setSuccessVisible(true);
  };

  const handleDismissPress = () => {
    setSuccessVisible(false);
    navigation.navigate("Settings", {
      username: username,
    });
  };

  useEffect(() => {
    if (successVisible) {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [successVisible, fadeAnimation]);

  var ImagePicker = require("expo-image-picker");
  const selectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      setAvatarSource({ uri: selectedAsset.uri });
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack style={styles.profile}>
          <TouchableOpacity onPress={handleAvatarPress}>
            <Avatar
              style={styles.profilePicture}
              size="sm"
              source={avatarSource}
              alt="Avatar"
              mr={2}
            />
          </TouchableOpacity>
        </VStack>
        <View>
          <VStack>
            <TouchableOpacity onPress={handleChangePicturePress}>
              <View style={[styles.change_picture]}>
                <Text style={styles.change_picture_text}>Change Picture</Text>
              </View>
            </TouchableOpacity>
          </VStack>
        </View>
      </View>

      <View style={styles.inputs}>
        <VStack style={styles.username1}>
          <Text>Username</Text>
        </VStack>
        <VStack style={styles.username_input}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            // Add other props and event handlers as needed
          />
        </VStack>
        <VStack style={styles.email1}>
          <Text>Email</Text>
        </VStack>
        <VStack style={styles.email_input}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            // Add other props and event handlers as needed
          />
        </VStack>
        <VStack style={styles.phone}>
          <Text>Phone Number</Text>
        </VStack>
        <VStack style={styles.phone_input}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            // Add other props and event handlers as needed
          />
        </VStack>
      </View>

      <VStack style={styles.update_container}>
        <TouchableOpacity onPress={handleUpdatePress}>
          <View style={[styles.update]}>
            <Text style={styles.update_text}>Update</Text>
          </View>
        </TouchableOpacity>
      </VStack>
      {successVisible && (
        <Modal animationType="none" transparent visible={successVisible}>
          <View style={styles.modalContainer}>
            <Animated.View
              style={[styles.modalContent, { opacity: fadeAnimation }]}
            >
              <Text style={styles.successText}>Successfully updated!</Text>
              <TouchableOpacity onPress={handleDismissPress}>
                <Text style={styles.dismissButton}>Dismiss</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>
      )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    //justifyContent: "center",
    //borderWidth: 1,
    marginTop: 0,
    margin: 20,
    //padding: 10,
  },

  profile: {
    alignItems: "center",
    marginTop: 50,
  },

  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  change_picture: {
    borderWidth: 1,
    borderRadius: 20,
    //padding: 15,
    marginTop: 20,
    right: 2,
    backgroundColor: "purple",
  },

  change_picture_text: {
    margin: 10,
    fontSize: 15,
    color: "white",
  },

  username1: {
    marginTop: 10,
  },

  username_input: {
    marginTop: 10,
  },

  email_input: {
    marginTop: 10,
  },

  email1: {
    marginTop: 10,
  },

  phone_input: {
    marginTop: 10,
  },

  phone: {
    marginTop: 10,
  },

  inputs: {
    marginTop: 0,
    margin: 30,
    //borderWidth: 1,
  },
  inputField: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  update_container: {
    flex: 0,
    alignItems: "center",
    //justifyContent: "center",
    //borderWidth: 1,
    marginTop: 0,
    margin: 20,
    padding: 10,
    //borderWidth: 1,
  },

  update: {
    margin: 30,
    borderWidth: 1,
    borderRadius: 20,
    //padding: 15,
    backgroundColor: "purple",
  },

  update_text: {
    margin: 20,
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    //opacity: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    //opacity: 0,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  dismissButton: {
    fontSize: 16,
    textAlign: "center",
    color: "blue",
    marginTop: 10,
  },
});

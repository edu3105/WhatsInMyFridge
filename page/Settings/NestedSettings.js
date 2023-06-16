// Nested SettingsPage.js

import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Avatar, NativeBaseProvider, IconButton } from "native-base";
import { useState } from "react";
import { HStack, Box, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function NestedSettings() {
  const navigation = useNavigation();

  const handleAboutUsPress = () => {
    console.log("about_us_pressed");
    navigation.navigate("About Us");
  };

  const handleFAQPress = () => {
    console.log("faq_pressed");
    navigation.navigate("FAQ");
  };

  const handleEditProfilePress = () => {
    console.log("edit_profile_pressed");
    navigation.navigate("Edit Profile");
  };

  const handleChangePasswordPress = () => {
    console.log("change_password_pressed");
    navigation.navigate("Change Password");
  };

  const [avatarSource, setAvatarSource] = useState({
    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
  const handleAvatarPress = () => {
    console.log("avatar_pressed");
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
    };
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <HStack>
          <Box>
            <TouchableWithoutFeedback onPress={handleAvatarPress}>
              <Avatar
                style={styles.profilePicture}
                size="sm"
                source={avatarSource}
                alt="Avatar"
                mr={2}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.profileName}>Profile Name</Text>
            <Text style={styles.profileRecipe}>Recipes</Text>
          </Box>
        </HStack>

        <HStack>
          <Box>
            <View>
              <Text style={styles.account_settings_title}>
                Account Settings
              </Text>
            </View>
          </Box>
        </HStack>

        <View style={styles.account_settings_container}>
          <VStack>
            <TouchableWithoutFeedback onPress={handleEditProfilePress}>
              <View style={styles.edit_button}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleChangePasswordPress}>
              <View style={styles.change_button}>
                <Text style={styles.changePasswordText}>Change Password</Text>
              </View>
            </TouchableWithoutFeedback>
          </VStack>
        </View>

        <HStack>
          <Box>
            <View>
              <Text style={styles.others_title}>Others</Text>
            </View>
          </Box>
        </HStack>

        <View style={styles.others_container}>
          <VStack>
            <TouchableWithoutFeedback onPress={handleFAQPress}>
              <View style={styles.FAQ_button}>
                <Text style={styles.FAQText}>FAQ</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleAboutUsPress}>
              <View style={styles.AboutUs_button}>
                <Text style={styles.AboutUsText}>About Us</Text>
              </View>
            </TouchableWithoutFeedback>
          </VStack>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display: "flex",
    backgroundColor: "#00000025",
  },

  //Profile

  profileName: {
    position: "absolute",
    top: 60,
    left: 165,
    fontSize: 20,
    //fontFamily: '', // Set font
    justifyContent: "center",
    fontWeight: "bold",
  },
  profileRecipe: {
    position: "absolute",
    top: 90,
    left: 165,
    fontSize: 15, // Set the desired font size
    //fontFamily: '', // Set the desired font family name
    justifyContent: "center",
    color: "gray",
  },

  profilePicture: {
    position: "absolute",
    width: 100,
    top: 10,
    margin: 30,
    height: 100,
    borderRadius: 50,
  },

  /////////////////////////////

  //Account Settings

  account_settings_title: {
    fontSize: 22,
    position: "absolute",
    marginLeft: 40,
    top: 180,
  },

  account_settings_container: {
    flex: 1,
    position: "absolute",
    marginLeft: 40,
    textAlign: "center",
    top: 225,
    //borderWidth: 1,
    height: 115,
    width: 350,
  },

  edit_button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
  },

  change_button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    top: 15,
  },

  editProfileText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },

  changePasswordText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },

  ////////////////////

  //Others

  others_title: {
    fontSize: 22,
    position: "absolute",
    marginLeft: 40,
    top: 360,
  },

  others_container: {
    flex: 1,
    position: "absolute",
    marginLeft: 40,
    textAlign: "center",
    top: 400,
    //borderWidth: 1,
    height: 115,
    width: 350,
  },

  FAQ_button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
  },

  FAQText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },

  AboutUs_button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    top: 15,
  },

  AboutUsText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     // justifyContent: "center",
//     // alignItems: "center",
//     backgroundColor: "#00000025",
//   },
//   text: {
//     color: "#000",
//     fontWeight: "700",
//     fontSize: 50,
//   },

// });

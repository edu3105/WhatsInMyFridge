// NestedSetting.js

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from "react-native";
import { Avatar, NativeBaseProvider, IconButton } from "native-base";
import { useState, useEffect } from "react";
import { HStack, Box, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Settings } from "react-native";

import { firebase } from "../../config";

const NestedSettings = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const user = firebase.auth().currentUser;
  const recipeDataRef = user
    ? firebase.firestore().collection("users").doc(user.uid)
    : null;

  useEffect(() => {
    if (recipeDataRef) {
      recipeDataRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const { email, userName, profilePicture } = doc.data();
            setUserName(userName);
            setEmail(email);
            setProfilePicture(profilePicture);
          } else {
            console.log("User document does not exist");
          }
        })
        .catch((error) => {
          console.log("Error getting user document:", error);
        });
    }
  }, [recipeDataRef]);

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
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleSignOutPress = () => {
    firebase.auth().signOut();
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
  // const [isDraftButtonFocused, setIsDraftButtonFocused] = useState(true);
  // const [isUploadButtonFocused, setIsUploadButtonFocused] = useState(false);

  // const handleDraftRecipePress = () => {
  //   console.log("Draft_pressed");
  //   setActiveTab("draft");
  //   setIsDraftButtonFocused(true);
  //   setIsUploadButtonFocused(false);
  // };

  // const handleUploadRecipePress = () => {
  //   console.log("Upload_pressed");
  //   setActiveTab("upload");
  //   setIsDraftButtonFocused(false);
  //   setIsUploadButtonFocused(true);
  // };

  // const [activeTab, setActiveTab] = useState("draft");

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <HStack>
          <Box>
            <TouchableOpacity onPress={handleAvatarPress}>
              <Avatar
                style={styles.profilePicture}
                size="sm"
                source={profilePicture}
                alt="Avatar"
                mr={2}
              />
            </TouchableOpacity>
            <Text style={styles.profileName}>{userName}</Text>
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
            <TouchableOpacity onPress={handleEditProfilePress}>
              <View style={styles.edit_button}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangePasswordPress}>
              <View style={styles.change_button}>
                <Text style={styles.changePasswordText}>Change Password</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={handleFAQPress}>
              <View style={styles.FAQ_button}>
                <Text style={styles.FAQText}>FAQ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.AboutUs_button}
              onPress={handleAboutUsPress}
            >
              <View>
                <Text style={styles.AboutUsText}>About Us</Text>
              </View>
            </TouchableOpacity>
          </VStack>
          <VStack style={styles.signOutButtonContainer}>
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={handleSignOutPress}
            >
              <View>
                <Text style={styles.signOutButtonText}>Sign Out</Text>
              </View>
            </TouchableOpacity>
          </VStack>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default NestedSettings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //display: "flex",
    backgroundColor: "white",
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
    marginLeft: 25,
    textAlign: "center",
    top: 225,
    //borderWidth: 1,
    height: 115,
    width: 350,
  },

  edit_button: {
    backgroundColor: "purple",

    borderRadius: 15,
    height: 50,
    width: 355,
  },

  change_button: {
    backgroundColor: "purple",
    borderRadius: 15,
    height: 50,
    width: 355,
    top: 15,
  },

  editProfileText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
    color: "white",
  },

  changePasswordText: {
    fontSize: 17,
    textAlign: "left",
    margin: 10,
    color: "white",
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
    marginLeft: 25,
    textAlign: "center",
    top: 400,
    //borderWidth: 1,
    height: 115,
    width: 350,
  },

  FAQ_button: {
    backgroundColor: "purple",
    borderRadius: 15,
    height: 50,
    width: 355,
  },

  FAQText: {
    color: "white",
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },

  AboutUs_button: {
    backgroundColor: "purple",
    borderRadius: 15,
    width: 355,
    height: 50,
    top: 15,
    marginBottom: 100,
  },

  AboutUsText: {
    color: "white",
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },
  signOutButtonContainer: {
    alignItems: "center",
  },

  signOutButton: {
    backgroundColor: "red",
    borderRadius: 15,
    height: 40,
    width: 100,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
  },

  signOutButtonText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    margin: 10,
  },
});

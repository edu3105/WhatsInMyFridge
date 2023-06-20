// NestedSetting.js

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Avatar, NativeBaseProvider, IconButton } from "native-base";
import { useState } from "react";
import { HStack, Box, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Settings } from "react-native";

const NestedSettings = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params?.username ?? "Default";

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
    uri: "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg",
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
                source={avatarSource}
                alt="Avatar"
                mr={2}
              />
            </TouchableOpacity>
            <Text style={styles.profileName}>{username}</Text>
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
            <TouchableOpacity onPress={handleAboutUsPress}>
              <View style={styles.AboutUs_button}>
                <Text style={styles.AboutUsText}>About Us</Text>
              </View>
            </TouchableOpacity>
          </VStack>
        </View>

        <VStack>
          {/* <View style={styles.centeredContainer}>
            <HStack>
              <TouchableOpacity onPress={handleDraftRecipePress}>
                <View
                  style={[
                    styles.draft_button,
                    isDraftButtonFocused && styles.focusedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.draftedRecipeText,
                      isDraftButtonFocused && styles.focusedText,
                    ]}
                  >
                    Drafted Recipe
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleUploadRecipePress}>
                <View
                  style={[
                    styles.upload_button,
                    isUploadButtonFocused && styles.focusedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.uploadedRecipeText,
                      isUploadButtonFocused && styles.focusedText,
                    ]}
                  >
                    Uploaded Recipe
                  </Text>
                </View>
              </TouchableOpacity>
            </HStack>
          </View> */}
        </VStack>
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
  },

  AboutUsText: {
    color: "white",
    fontSize: 17,
    textAlign: "left",
    margin: 10,
  },

  // centeredContainer: {
  //   //flex: 1,
  //   position: "absolute",
  //   left: 57,
  //   textAlign: "center",
  //   top: 170,
  //   borderWidth: 1,
  // },

  // draft_button: {
  //   //borderWidth: 1,
  //   borderColor: "black",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   right: 10,
  //   backgroundColor: "transparent",
  // },

  // upload_button: {
  //   //borderWidth: 1,

  //   borderColor: "black",
  //   borderRadius: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginLeft: 10,
  //   paddingRight: 10,
  //   right: 10,
  // },

  // draftedRecipeText: {
  //   fontSize: 17,

  //   textAlign: "center",
  //   marginTop: 10,
  //   marginBottom: 10,
  //   right: 10,
  //   marginLeft: 20,
  // },

  // uploadedRecipeText: {
  //   fontSize: 17,
  //   color: "gray",
  //   textAlign: "center",
  //   marginTop: 10,
  //   marginBottom: 10,
  //   marginLeft: 10,
  // },
});

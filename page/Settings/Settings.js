import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  ImageBackground,
} from "react-native";
import {
  NativeBaseProvider,
  HStack,
  IconButton,
  Box,
  Button,
  Avatar,
  ScrollView,
  VStack,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Touchable } from "react-native";
// import "react-native-gesture-handler";
// import SettingsPage from "./SettingsPage.js";

//var ImagePicker = require('react-native-image-picker');
//import ImagePicker from 'react-native-image-crop-picker';
import { firebase } from "../../config";

export default function SettingsScreen() {
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

  const handleSettingsPress = () => {
    navigation.navigate("Settings");
    console.log("settings_pressed");
  };

  const handleStatPress = () => {
    navigation.navigate("Stats");
    console.log("stat_pressed");
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

    //navigation.navigate("Edit Profile");
  };

  const [isDraftButtonFocused, setIsDraftButtonFocused] = useState(true);
  const [isUploadButtonFocused, setIsUploadButtonFocused] = useState(false);
  useEffect(() => {
    handleDraftRecipePress();
  }, []); // Add this useEffect block
  const handleDraftRecipePress = () => {
    console.log("Draft_pressed");
    setActiveTab("draft");
    setIsDraftButtonFocused(true);
    setIsUploadButtonFocused(false);
    setContent([
      {
        title: "Drafted Recipe 1",
        creator: "John",
        time: "30 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Drafted Recipe 2",
        creator: "John2",
        time: "40 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Drafted Recipe 3",
        creator: "John3",
        time: "50 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Drafted Recipe 4",
        creator: "John4",
        time: "60 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    ]);
  };

  const handleUploadRecipePress = () => {
    console.log("Upload_pressed");
    setActiveTab("upload");
    setIsDraftButtonFocused(false);
    setIsUploadButtonFocused(true);
    setContent([
      {
        title: "Upload Recipe 1",
        creator: "Johna",
        time: "30 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Upload Recipe 2",
        creator: "Johnb",
        time: "40 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Upload Recipe 3",
        creator: "Johnc",
        time: "50 min",
        imageSource:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    ]);
  };

  const [activeTab, setActiveTab] = useState("draft");

  //const scrollViewRef = useRef(null);

  const [content, setContent] = useState(["Check", "Check2", "Check3"]);
  // useEffect(() => {
  //   scrollViewRef.current.scrollToEnd({ animated: true });
  // }, [content]);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack>
          <HStack>
            <TouchableOpacity onPress={handleAvatarPress}>
              <Avatar
                style={styles.profilePicture}
                size="sm"
                source={profilePicture}
                alt="Avatar"
                mr={2}
              />
            </TouchableOpacity>
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>{userName}</Text>
            </View>
            <Text style={styles.profileRecipe}>Recipes</Text>

            <TouchableOpacity onPress={handleStatPress} style={styles.stats}>
              <Ionicons
                name="podium-outline"
                size={40}
                variant="unstyled"
                colorScheme="gray"
              />
            </TouchableOpacity>
          </HStack>
        </VStack>
        <VStack>
          <View style={styles.centeredContainer}>
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
          </View>
        </VStack>

        <VStack style={{ marginTop: 250, flexGrow: 1 }}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            //ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
          >
            {content.map((item, index) => (
              <TouchableOpacity>
                <View key={index} style={styles.box}>
                  <Text style={styles.boxContent_header}>{item.title}</Text>
                  <Text style={styles.boxContent_creator}>{item.creator}</Text>
                  <Text style={styles.boxContent_time}> {item.time}</Text>
                  <ImageBackground
                    style={styles.boxContent_image}
                    source={{ uri: item.imageSource }}
                  />
                  {/* {index === content.length - 1 && (
                    <View
                      style={{ position: "absolute", bottom: 10 }} // Position the view at the bottom of the last box
                      onLayout={() => {
                        // Scroll to the bottom of the ScrollView once the last box has been rendered
                        scrollViewRef.current?.scrollToEnd({ animated: true });
                      }}
                    />
                  )} */}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </VStack>

        <HStack position="absolute" top={0} right={0} m={4}>
          <TouchableOpacity onPress={handleSettingsPress}>
            <Ionicons
              name="settings-outline"
              size={30}
              variant="unstyled"
              colorScheme="gray"
            />
          </TouchableOpacity>
        </HStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //borderWidth: 1,
    //height: "auto",
  },
  profilePicture: {
    position: "absolute",
    width: 100,
    top: 10,
    margin: 30,
    height: 100,
    borderRadius: 50,
  },

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

  stats: {
    position: "absolute",
    top: 70,
    left: 325,
    //borderWidth: 1,
  },

  centeredContainer: {
    //flex: 1,
    position: "absolute",
    left: 57,
    textAlign: "center",
    top: 170,
    //borderWidth: 1,
  },

  draft_button: {
    //borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    backgroundColor: "transparent",
  },

  upload_button: {
    //borderWidth: 1,

    borderColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    paddingRight: 10,
    right: 10,
  },

  draftedRecipeText: {
    fontSize: 17,

    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    right: 10,
    marginLeft: 20,
  },

  uploadedRecipeText: {
    fontSize: 17,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },

  header_title: {
    fontWeight: "bold",
    bottom: 10,
    fontSize: 20,
  },
  body: {},

  scroll: {
    //top: 700,
    //flexDirection: "column",
    //borderWidth: 1,
    //borderColor: "red",
    //top: 300,
    // height: "auto",
    // width: "auto",
    //display: "none",
  },

  boxContent_header: {
    flex: 1,
    top: 160,
    margin: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  boxContent_creator: {
    //flex: 1,
    margin: 15,
    top: 55,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  boxContent_time: {
    //flex: 1,
    margin: 15,
    top: 0,
    left: 225,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  boxContent_image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    marginTop: 10,
    zIndex: -1,
    resizeMode: "cover",
  },

  shared_draft: {
    //flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    //marginTop: -700,
    //top: 700,
    //bottom: 300,
  },

  focusedButton: {
    backgroundColor: "purple", // Add your desired focused button style here
    color: "blue",
  },

  focusedText: {
    color: "white",
  },

  scrollViewContainer: {
    //borderWidth: 1,
    paddingBottom: 50, // Adjust the bottom padding if needed
    flexGrow: 1,
    display: "flex",
    borderColor: "green",
  },
  box: {
    alignSelf: "center",
    backgroundColor: "gray",

    width: "80%",
    height: 250,
    marginVertical: 10,
    borderRadius: 8,
    //alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
});

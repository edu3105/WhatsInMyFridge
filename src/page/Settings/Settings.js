import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
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
import "react-native-gesture-handler";
// import SettingsPage from "./SettingsPage.js";

//var ImagePicker = require('react-native-image-picker');
//import ImagePicker from 'react-native-image-crop-picker';

export default function SettingsScreen() {
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate("SettingsPage");
    console.log("pressed");
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

    // ImagePicker.launchImageLibrary(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.errorMessage) {
    //     console.log('ImagePicker Error: ', response.errorMessage);
    //   } else if (response.uri) {
    //     setAvatarSource({ uri: response.uri });
    //   }
    // });
  };

  const handleDraftRecipePress = () => {
    console.log("Draft_pressed");
    setActiveTab("draft");
  };

  const handleUploadRecipePress = () => {
    console.log("Upload_pressed");
    setActiveTab("upload");
  };

  const [activeTab, setActiveTab] = useState("draft");

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
            <IconButton
              icon={<Ionicons name="bar-chart-outline" size={30} />}
              style={styles.stats}
              variant="unstyled"
              colorScheme="gray"
            />
          </Box>
        </HStack>
      </View>

      <HStack position="absolute" top={0} right={0} m={4}>
        <IconButton
          icon={<Ionicons name="settings-outline" size={24} />}
          onPress={handleSettingsPress}
          variant="unstyled"
          colorScheme="gray"
        />
      </HStack>

      <View style={styles.centeredContainer}>
        <HStack>
          <TouchableWithoutFeedback onPress={handleDraftRecipePress}>
            <View style={styles.draft_button}>
              <Text style={styles.draftedRecipeText}>Drafted Recipe</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleUploadRecipePress}>
            <View style={styles.upload_button}>
              <Text style={styles.uploadedRecipeText}>Uploaded Recipe</Text>
            </View>
          </TouchableWithoutFeedback>
        </HStack>
      </View>

      <View style={styles.shared_draft}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          //bg="coolGray.300"
          showsVerticalScrollIndicator={false}
          mx="5"
          mt="3"
          w={375}
          h={300}
        >
          {activeTab === "draft" && (
            <>
              {/* Drafted Recipe content */}
              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Drafted Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM KFC</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>

              {/* Add more draft recipe boxes here */}

              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Drafted Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM KFC2</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>

              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Drafted Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM KFC3</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>
            </>
          )}

          {activeTab === "upload" && (
            <>
              {/* Uploaded Recipe content */}
              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Uploaded Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM MCD</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>

              {/* Add more uploaded recipe boxes here */}

              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Uploaded Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM MCD2</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>

              <Box
                alignSelf="center"
                bg="white"
                w="100%"
                h={200}
                my="2"
                borderRadius={8}
              >
                {/* Content for Uploaded Recipe */}
                <View style={styles.boxContent}>
                  <Text style={styles.header_title}>AYAM MCD3</Text>
                  <Text style={styles.body}>
                    Fried chicken, also known as Southern fried chicken, is a
                    dish consisting of chicken pieces that have been coated with
                    seasoned flour or batter and pan-fried chicken while
                    retaining.....
                  </Text>
                </View>
              </Box>
            </>
          )}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: 65,
    left: 350,
  },

  centeredContainer: {
    flex: 1,
    position: "absolute",
    left: 57,
    textAlign: "center",
    top: 170,
  },

  draft_button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    right: 10,
  },

  upload_button: {
    borderWidth: 1,

    borderColor: "black",
    borderRadius: 5,
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

  boxContent: {
    flex: 1,
    padding: 10,
    margin: 15,
    marginLeft: 125,
  },

  shared_draft: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: -350,
  },
});

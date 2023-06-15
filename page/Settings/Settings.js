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

      <View style={styles.shared_draft}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          bg="coolGray.300"
          mx="5"
          mt="3"
          w="80%"
          h={10 * 0.5}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Box
              key={item}
              alignSelf="center"
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                letterSpacing: "lg",
              }}
              bg={["red.400", "blue.400"]}
              w="100%"
              h="100%"
              my="2"
              borderRadius={8}
            >
              This is box {item}
            </Box>
          ))}
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

  shared_draft: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: -300,
  },
});

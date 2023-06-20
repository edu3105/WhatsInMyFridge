import React, { useState } from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  Text,
  ScrollView,
  Input,
  Pressable,
  Button,
  TouchableOpacity,
  Avatar,
  VStack,
} from "native-base";
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

export default function RegionPage() {
  const [isClicked, setIsClicked] = useState(false);

  const [selectedTimes, setSelectedTimes] = useState([]);
  const [pressedTimes, setPressedTimes] = useState([]);

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack space={5} justifyContent="center" marginTop={5}>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>5.0</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Chinese Fried Rice
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By kak J
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://hips.hearstapps.com/hmg-prod/images/soba-royalty-free-image-1621288461.",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.9</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Japanese Cold Noodles
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Chef John
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
        </HStack>
        <HStack space={5} justifyContent="center" marginTop={5}>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.8</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Sushi
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Edu
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Sweet-and-sour-chicken-square-FS-0833.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.8</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Sweet and Sour Chicken
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Sam
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
        </HStack>
        <HStack space={5} justifyContent="center" marginTop={5}>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://ohsnapletseat.com/wp-content/uploads/2020/09/taiwanese-beef-noodle-soup-recipe-scaled.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.7</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Taiwanese Beef Noodle Soup
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Felix
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.6</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Soy Sauce Pan Fried Noodles
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Dylan
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
        </HStack>
        <HStack
          space={5}
          justifyContent="center"
          marginTop={5}
          marginBottom={10}
        >
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://www.foodandwine.com/thmb/2d3F2s5C8PDD0weKZApg-sUT-p8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pancit-Miki-Bihon-FT-RECIPE0722-4f9eabd7e8f5447ea2473d7eef5f69e7.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.5</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Pancit Miki Bihon
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Owen
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
          <Box rounded="xl" overflow="hidden">
            <ImageBackground
              source={{
                uri: "https://www.thanksforthemeal.net/wp-content/uploads/2021/05/chicken-curry2.jpg",
              }}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={[styles.timeView]}>
                <FontAwesomeIcon icon={faStar} size={15} color="orange" />
                <Text style={[styles.timeText]}>4.4</Text>
              </View>
              <View style={styles.textContainer}>
                <View style={styles.overlay}>
                  <Text textAlign="left" style={styles.overlayText}>
                    Japanese Curry Rice
                  </Text>
                  <Text textAlign="left" style={styles.creatorText}>
                    By Chef Jonarto
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Box>
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Adjust the border radius value as per your preference
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
    borderRadius: 10,
    padding: 10,
    width: 175,
  },
  overlayText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 5, // Add padding to the left
  },
  creatorText: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
    paddingLeft: 5, // Add padding to the left
  },
  timeView: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE1B3",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: "#FFE1B3",
    borderWidth: 1,
  },
  timeText: {
    marginLeft: 6,
  },
});

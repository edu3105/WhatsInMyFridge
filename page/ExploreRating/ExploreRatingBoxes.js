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

export default function MainBoxes() {
  const [isClicked, setIsClicked] = useState(false);

  const [selectedTimes, setSelectedTimes] = useState([]);
  const [pressedTimes, setPressedTimes] = useState([]);

  return (
    <NativeBaseProvider>
      <HStack space={5} justifyContent="center" marginTop={5}>
        <Box rounded="xl" overflow="hidden">
          <ImageBackground
            source={{
              uri: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg",
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
                  Chicken Fried Rice
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
              uri: "https://www.craftbeering.com/wp-content/uploads/2019/10/Pork-Spare-Ribs-with-BBQ-sauce-1.jpg",
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
                  Traditional Spare Ribs Baked
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
              uri: "https://i0.wp.com/isinginthekitchen.com/wp-content/uploads/2016/01/dsc_0103.jpg?resize=640%2C424&ssl=1",
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
                  Lamb Chops with Fruity Couscous and Mint
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
      <HStack space={5} justifyContent="center" marginTop={5} marginBottom={10}>
        <Box rounded="xl" overflow="hidden">
          <ImageBackground
            source={{
              uri: "https://www.ocado.com/cmscontent/recipe_image_large/33362787.png?awck",
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
                  Spaghetti Bolognese
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
    fontSize: 14,
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

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Center,
  VStack,
} from "native-base";

export default function MainBoxes() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NativeBaseProvider>
      <VStack space={10} marginTop={5}>
        <Center>
          <Box
            width="90%"
            height={100}
            borderRadius={10}
            overflow="hidden"
            marginBottom={7}
          >
            <ImageBackground
              source={{
                uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=70/https://doordash-static.s3.amazonaws.com/media/store/header/225978.jpg",
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                ASIAN
              </Text>
            </ImageBackground>
          </Box>
          <Box
            width="90%"
            height={100}
            borderRadius={10}
            overflow="hidden"
            marginBottom={7}
          >
            <ImageBackground
              source={{
                uri: "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg",
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                INDIAN
              </Text>
            </ImageBackground>
          </Box>
          <Box
            width="90%"
            height={100}
            borderRadius={10}
            overflow="hidden"
            marginBottom={7}
          >
            <ImageBackground
              source={{
                uri: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=70/https://doordash-static.s3.amazonaws.com/media/store/header/225978.jpg",
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                ITALIAN
              </Text>
            </ImageBackground>
          </Box>
          <Box
            width="90%"
            height={100}
            borderRadius={10}
            overflow="hidden"
            marginBottom={7}
          >
            <ImageBackground
              source={{
                uri: "https://singaporelocalfavourites.com/wp-content/uploads/2018/08/singapore-western-food-recipes.jpg",
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                WESTERN
              </Text>
            </ImageBackground>
          </Box>
          <Box
            width="90%"
            height={100}
            borderRadius={10}
            overflow="hidden"
            marginBottom={7}
          >
            <ImageBackground
              source={{
                uri: "https://www.thedailymeal.com/img/gallery/mexican-food-can-be-traced-all-the-way-back-to-7000-bc/intro-1674486308.jpg",
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 70,
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                MEXICAN
              </Text>
            </ImageBackground>
          </Box>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}

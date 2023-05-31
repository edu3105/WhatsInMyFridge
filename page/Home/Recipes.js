import React from "react";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  ScrollView,
  Input,
  Pressable,
  Button,
  Flex,
  Text,
} from "native-base";

const Recipes = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} height="100%" alignItems="center" py={10}>
        <Box
          maxW="40"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={1 / 1}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Recipes;

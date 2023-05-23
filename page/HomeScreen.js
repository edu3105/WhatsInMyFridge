import {React, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
  Button
} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen() {
  const [isClicked, setIsClicked] = useState(false);

  const { height } = Dimensions.get('window');

  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <Box alignItems="center" mt="4">
          <Input variant="rounded" mx="3" placeholder="Search Ingredients" w="80%" />
        </Box>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView horizontal={true} mx="5" mt="3"  style={{ width: '90%' }}>
            <Box alignItems="center" mx="0.5">
              <Pressable maxW="96"  onPress={() => setIsClicked(!isClicked)}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? 'coolGray.200'
                          : isHovered || isClicked
                          ? 'coolGray.200'
                          : 'coolGray.100'
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }]
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      All
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center" mx="0.5">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? 'coolGray.200'
                          : isHovered || isClicked
                          ? 'coolGray.200'
                          : 'coolGray.100'
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }]
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Fruit
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center" mx="0.5">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? 'coolGray.200'
                          : isHovered || isClicked
                          ? 'coolGray.200'
                          : 'coolGray.100'
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }]
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Dairy
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center" mx="0.5">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? 'coolGray.200'
                          : isHovered || isClicked
                          ? 'coolGray.200'
                          : 'coolGray.100'
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }]
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Vegetable
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center" mx="0.5">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? 'coolGray.200'
                          : isHovered || isClicked
                          ? 'coolGray.200'
                          : 'coolGray.100'
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }]
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Meat
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </ScrollView>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView nestedScrollEnabled={true} vertical={true} style={{ flexDirection: "column" }} bg="coolGray.300" mx="5" mt="3" w="80%" h={height * 0.5}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Box
                  key={item}
                  alignSelf="center"
                  _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "warmGray.50",
                    letterSpacing: "lg"
                  }}
                  bg={["red.400", "blue.400"]}
                  w="100%"
                  my="1"
                  borderRadius={8}
                >
                  This is box {item}
                </Box>
              ))}
            </ScrollView>
        </View>

        <Box alignItems="center" mt="3">
          <Button colorScheme="secondary" onPress={() => console.log("hello world")}>Add Ingredients</Button>
        </Box>





        <ScrollView horizontal={true}>
          <HStack space={2} overflow="scroll" px={10}>
            <Box flex={1} height="100%" alignItems="center" py={10}>
              <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }} _web={{
                shadow: 2,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                  </AspectRatio>
                  <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                  }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }} position="absolute" bottom="0" px="3" py="1.5">
                      PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      The Garden City
                    </Heading>
                    <Text fontSize="xs" _light={{
                    color: "violet.500"
                  }} _dark={{
                    color: "violet.400"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
            <Box flex={1} height="100%"alignItems="center" py={10}>
              <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }} _web={{
                shadow: 2,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                  </AspectRatio>
                  <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                  }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }} position="absolute" bottom="0" px="3" py="1.5">
                      PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      The Garden City
                    </Heading>
                    <Text fontSize="xs" _light={{
                    color: "violet.500"
                  }} _dark={{
                    color: "violet.400"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
            <Box flex={1} height="100%" alignItems="center" py={10}>
              <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }} _web={{
                shadow: 2,
                borderWidth: 0
              }} _light={{
                backgroundColor: "gray.50"
              }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                  </AspectRatio>
                  <Center bg="violet.500" _dark={{
                    bg: "violet.400"
                  }} _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                  }} position="absolute" bottom="0" px="3" py="1.5">
                      PHOTOS
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      The Garden City
                    </Heading>
                    <Text fontSize="xs" _light={{
                    color: "violet.500"
                  }} _dark={{
                    color: "violet.400"
                  }} fontWeight="500" ml="-0.5" mt="-1">
                      The Silicon Valley of India.
                    </Text>
                  </Stack>
                  <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                  </Text>
                  <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                      <Text color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                      </Text>
                    </HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </HStack>
        </ScrollView>

        
      </ScrollView>
    </NativeBaseProvider>
  );

    
}





const style = StyleSheet.create({

});
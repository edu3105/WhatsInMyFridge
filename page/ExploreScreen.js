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
    Button,
    TouchableOpacity,
    Avatar
  } from "native-base";

export default function SettingsScreen() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <NativeBaseProvider>
            <ScrollView vertical={true}>
                <Box alignItems="center" mt="4">
                    <Input variant="rounded" mx="3" placeholder="Explore Recipes" w="80%" />
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
                      For You
                    </Box>
                  )
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
                      Region
                    </Box>
                  )
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
                      Rating
                    </Box>
                  )
                }}
              </Pressable>
            </Box>
            
          </ScrollView>
        </View>

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
        <Text fontSize="3xl">For You</Text>
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
              
            <Text fontSize="3xl">Trending now</Text>
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
            <Text fontSize="3xl">Popular Creators</Text>
            <HStack justifyContent="center" space={2}>
              <Avatar bg="green.500" source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
                AJ
              </Avatar>
              <Avatar bg="cyan.500" source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
                JB
              </Avatar>
              <Avatar bg="amber.500" source={{
              uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }}>
                TS
              </Avatar>
            </HStack>
            </ScrollView>
        </NativeBaseProvider>
    )
  }
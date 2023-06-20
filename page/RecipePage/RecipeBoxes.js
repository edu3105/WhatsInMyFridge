import { React, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
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
  Container,
  Pressable,
  Button,
  TouchableOpacity,
  Avatar,
  Flex,
  VStack,
} from "native-base";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { FontAwesome } from "react-native-vector-icons";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function RecipeBox({ navigation }) {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const boxStyle = {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    padding: 12,
    width: 380,
  };
  return (
    <NativeBaseProvider>
      <VStack marginBottom={16}>
        <Center>
          <Image
            rounded="md"
            source={{
              uri: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/juicy-cheeseburger-pack-cea71279.jpg",
            }}
            width={370}
            height={150}
            marginTop={5}
            alt="Burger"
          />
          <VStack space={3}>
            <HStack space={50} marginTop={3} justifyContent="center">
              <View alignItems="center">
                <Heading size="sm">Time</Heading>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome
                    name="clock-o"
                    size={20}
                    color="black"
                    marginTop={13}
                  />
                  <Text marginLeft={4} marginTop={15}>
                    20 min
                  </Text>
                </View>
              </View>
              <View alignItems="center">
                <Heading size="sm">Rating</Heading>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "rgb(255, 204, 153)",
                    borderRadius: 30,
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                  }}
                  marginTop={10}
                >
                  <FontAwesome name="star" size={20} color="orange" />
                  <Text marginLeft={2}>4.0</Text>
                </View>
              </View>
              <View alignItems="center">
                <Heading size="sm">Creator</Heading>
                <View
                  style={{ flexDirection: "row", alignItems: "center" }}
                  marginTop={10}
                >
                  <Avatar
                    bg="green.500"
                    alignSelf="center"
                    size="sm"
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                  >
                    AJ
                  </Avatar>
                  <Text marginLeft={5}>Jamie</Text>
                </View>
              </View>
            </HStack>
          </VStack>
        </Center>
        <VStack space={2} marginLeft={6} marginTop={3}>
          <Heading size="md">Description</Heading>
          <Text>
            A cheeseburger is a hamburger with a slice of melted cheese on top
            of the meat patty, added near the end of the cooking time.
            Cheeseburgers can include variations in structure, ingredients and
            composition. As with other hamburgers, a cheeseburger may include
            various condiments and other toppings such as lettuce, tomato,
            onion, pickles, bacon, avocado, mushrooms, mayonnaise, ketchup, and
            mustard.
          </Text>
        </VStack>
        <VStack space={2} marginLeft={6} marginTop={3}>
          <Text>ㅤ</Text>
          <HStack>
            <View flex={1}>
              <Heading size="md">Ingredients</Heading>
              <Text>{counter} servings</Text>
            </View>
            <HStack space={3} alignItems="center" marginRight={4}>
              <Button onPress={decrementCounter} colorScheme="purple">
                -
              </Button>
              <Text>{counter}</Text>
              <Button onPress={incrementCounter} colorScheme="purple">
                +
              </Button>
            </HStack>
          </HStack>

          <Box style={boxStyle}>
            <HStack space={2} alignItems="center">
              <Image
                rounded="md"
                source={{
                  uri: "https://media.istockphoto.com/id/1178954509/photo/sesame-seed-hamburger-bun-isolated-on-white-top-view.jpg?s=612x612&w=0&k=20&c=84pawZpRqoYl0YBAMiKRZ4Va1lA9ELkiIucAK_wTODQ=",
                }}
                width={8}
                height={8}
                alt="burger"
              />
              <Heading size="sm">Burger Bun</Heading>
              <Heading size="sm" flex={1} textAlign="right">
                {2 * counter} pcs
              </Heading>
            </HStack>
          </Box>

          <Box style={boxStyle}>
            <HStack space={2} alignItems="center">
              <Image
                rounded="md"
                source={{
                  uri: "https://media.istockphoto.com/id/172673558/photo/pickle-slices.jpg?s=612x612&w=0&k=20&c=TnZwAc_vBvmJIWryPo_1SM2T5p5xXv-FS4OhPZl85TE=",
                }}
                width={8}
                height={8}
                alt="pickles"
              />
              <Heading size="sm">Pickles</Heading>
              <Heading size="sm" flex={1} textAlign="right">
                {3 * counter} pcs
              </Heading>
            </HStack>
          </Box>
          <Box style={boxStyle}>
            <HStack space={2} alignItems="center">
              <Image
                rounded="md"
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqUb-EiqCoQ3oX64U_G2aaPdpcOvBtjY_-g&usqp=CAU",
                }}
                width={8}
                height={8}
                alt="cheese"
              />
              <Heading size="sm">American Cheese</Heading>
              <Heading size="sm" flex={1} textAlign="right">
                {counter} pcs
              </Heading>
            </HStack>
          </Box>
          <Box style={boxStyle}>
            <HStack space={2} alignItems="center">
              <Image
                rounded="md"
                source={{
                  uri: "https://burgermeistermia.com/wp-content/uploads/2022/06/Tips-Tricks-for-Making-The-Best-Burger-Patty.jpg",
                }}
                width={8}
                height={8}
                alt="patty"
              />
              <Heading size="sm">Beef Patty</Heading>
              <Heading size="sm" flex={1} textAlign="right">
                {counter} pcs
              </Heading>
            </HStack>
          </Box>
        </VStack>
        <VStack space={2} marginLeft={6} marginTop={3}>
          <Heading size="md">Steps</Heading>
          <Box style={boxStyle}>
            <Text marginBottom={10}>
              1. Preheat an outdoor grill for high heat and lightly oil grate.
            </Text>
            <Text marginBottom={10}>
              2. Whisk together egg, salt, and pepper in a medium bowl.
            </Text>
            <Text marginBottom={10}>
              3. Add ground beef and bread crumbs and mix with your hands or a
              fork until well blended.
            </Text>
            <Text marginBottom={10}>
              4. Form into four 3/4-inch-thick patties.{" "}
            </Text>
            <Text marginBottom={10}>
              5. Place patties on the preheated grill. Cover and cook 6 to 8
              minutes per side, or to desired doneness. An instant-read
              thermometer inserted into the center should read at least 160
              degrees F (70 degrees C).
            </Text>
            <Text marginBottom={10}> 6. Serve hot and enjoy!</Text>
          </Box>
        </VStack>
      </VStack>
    </NativeBaseProvider>
  );
}

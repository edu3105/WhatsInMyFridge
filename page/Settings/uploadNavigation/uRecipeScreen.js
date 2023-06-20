import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NativeBaseProvider, VStack } from "native-base";
import { FontAwesome } from "react-native-vector-icons";
import {
  Box,
  Image,
  Center,
  Heading,
  HStack,
  Button,
  Avatar,
} from "native-base";

export default function uRecipeScreen({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  const route = useRoute();
  const {
    title,
    creator,
    time,
    imageSource,
    diff,
    step,
    des
  } = route.params;
  const handleStartPress = () => {
    navigation.navigate("uRecipeSteps", { title, creator, time, imageSource, diff, step, des });
  };

  const [counter, setCounter] = useState(1);
  console.log(des)
  console.log(imageSource)

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
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <NativeBaseProvider>
      <VStack marginBottom={16}>
        <Center>
          <Image
            rounded="md"
            source={{
              uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmy-app-c611ea61-6263-4758-85bc-0a57820ba3ea/ImagePicker/67e82f92-dc79-48e8-a3ea-1541e3e2e2ac.jpeg",
            }}
            width={370}
            height={150}
            marginTop={5}
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
          American cheese burger is an iconic food that is loved by millions of people around the world, it consist of a patty, cheese slice, and bun on top and bottom
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
              1. preheat the grill.
            </Text>
            <Text marginBottom={10}>
              2. whisk egg and add in blackpepper.
            </Text>
            <Text marginBottom={10}>
              3. Add ground beef.
            </Text>
            <Text marginBottom={10}>
              4. Form into patties.{" "}
            </Text>
            <Text marginBottom={10}>
              5. cook for 3 minutes each side
            </Text>
            <Text marginBottom={10}> 6. Serve hot and enjoy</Text>
          </Box>
        </VStack>
      </VStack>
    </NativeBaseProvider>
        </ScrollView>
        <View style={styles.buttonContainer} marginBottom={15}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleStartPress()}
          >
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9747FF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

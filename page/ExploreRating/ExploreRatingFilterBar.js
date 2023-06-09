import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Center, HStack, Button } from "native-base";

export default function FilterBar({ navigation }) {
  const [selectedButton, setSelectedButton] = useState("Rating");
  const pressHandler = () => {
    navigation.navigate("ForYou");
  };
  const pressHandler2 = () => {
    navigation.navigate("Region");
  };
  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <HStack space={1} marginTop={5}>
            <Button
              size="md"
              onPress={pressHandler}
              colorScheme={selectedButton === "ForYou" ? "purple" : "white"}
              _text={{
                color: selectedButton === "ForYou" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "ForYou" ? 1 : 0,
                borderColor: "purple",
                width: 100,
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              For You
            </Button>
            <Button
              onPress={pressHandler2}
              size="md"
              colorScheme={selectedButton === "Region" ? "purple" : "white"}
              _text={{
                color: selectedButton === "Region" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "Region" ? 1 : 0,
                borderColor: "purple",
                width: 100,
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              Region
            </Button>
            <Button
              size="md"
              colorScheme={selectedButton === "Rating" ? "purple" : "white"}
              _text={{
                color: selectedButton === "Rating" ? "white" : "purple",
              }}
              style={{
                borderWidth: selectedButton !== "Rating" ? 1 : 0,
                borderColor: "purple",
                width: 100,
              }}
              hoverProps={{
                backgroundColor: "purple",
                _text: { color: "white" },
              }}
            >
              Rating
            </Button>
          </HStack>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

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
  Pressable,
  Button,
  Flex,
  useDisclose,
  Actionsheet,
  KeyboardAvoidingView,
  Modal,
} from "native-base";

import { onSubmit, getData } from "../../api/ingredientsData.js";

const addButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState(undefined);
  const [ingredientName, setIngredientName] = useState("");

  const handleExplorePress = (placement) => {
    setIsOpen(true);
    setPlacement(placement);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNameChange = (value) => {
    setIngredientName(value);
  };

  const handleSubmit = async () => {
    const ingredient = {
      name: ingredientName,
      quantity: count.toString(),
    };

    try {
      await onSubmit(ingredient);
      console.log("Ingredient submitted successfully.");
    } catch (error) {
      console.error("Error submitting ingredient:", error);
    }

    handleClose();
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCountChange = (value) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
      setCount(numericValue);
    } else {
      setCount(0);
    }
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center" mt="3">
        <Button
          colorScheme="secondary"
          onPress={() => handleExplorePress("center")}
        >
          Add Ingredients
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleClose} avoidKeyboard>
        <Modal.Content {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Add Ingredients</Modal.Header>
          <Modal.Body>
            <Box p="4">
              <Text>Ingredients Name:</Text>
              <Input placeholder="Name" onChangeText={handleNameChange} />
              <Text>Quantity:</Text>
              <Box justifyContent="space-between" alignItems="center">
                <Button
                  style={{ width: "25%" }}
                  m="2"
                  onPress={handleDecrement}
                >
                  -
                </Button>
                <Input
                  value={count.toString()}
                  onChangeText={handleCountChange}
                  keyboardType="numeric"
                  textAlign="center"
                />
                <Button
                  style={{ width: "25%" }}
                  m="2"
                  onPress={handleIncrement}
                >
                  +
                </Button>
                <Text></Text>
              </Box>
              <Button mt="3" onPress={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

const styles = {
  center: {},
};

export default addButton;

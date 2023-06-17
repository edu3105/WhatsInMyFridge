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

const addButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState(undefined);

  const handleExplorePress = (placement) => {
    setIsOpen(true);
    setPlacement(placement);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    handleClose();
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
              <Input placeholder="Name" />
              <Input placeholder="Quantity" />
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
  top: {
    marginBottom: "auto",
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
  left: {
    marginLeft: 0,
    marginRight: "auto",
  },
  right: {
    marginLeft: "auto",
    marginRight: 0,
  },
  center: {},
};

export default addButton;

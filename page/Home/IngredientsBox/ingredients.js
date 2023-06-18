import { React, useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Center,
  Input,
  Pressable,
  Button,
  Flex,
  FormControl,
  Modal,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  getData,
  deleteData,
  updateQuantity,
} from "../../api/Data/ingredientsData.js";

const ingredients = ({ ingredients, setIngredients }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedQuantity, setUpdatedQuantity] = useState(1);
  //   const [ingredients, setIngredients] = useState([]);

  const handleIncrement = () => {
    setUpdatedQuantity(updatedQuantity + 1);
  };

  const handleDecrement = () => {
    if (updatedQuantity > 1) {
      setUpdatedQuantity(updatedQuantity - 1);
    }
  };

  const handleQuantityChange = (value) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
      setUpdatedQuantity(numericValue);
    } else {
      setUpdatedQuantity(1);
    }
  };

  const openModal = (ingredient) => {
    setSelectedItem(ingredient);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
    setUpdatedQuantity(1);
  };

  const handleDeleteData = async () => {
    try {
      console.log(selectedItem.name);
      await deleteData(selectedItem.name, setIngredients);

      console.log("Ingredient data deleted successfully.");
      setSelectedItem(null);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting ingredient data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setIngredients(data);
    };

    fetchData();
  }, []);

  //end of ingredients

  return (
    <NativeBaseProvider>
      {ingredients.map((ingredient) => (
        <Box
          key={ingredient.name}
          alignSelf="center"
          bg={["red.400", "blue.400"]}
          w="90%"
          my="1"
          borderRadius={8}
        >
          <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            w="100%"
            justifyContent="center"
          >
            <Pressable onPress={() => openModal(ingredient)}>
              <Center
                mr="1"
                height="8"
                width="48"
                bg="primary.100"
                _text={{
                  color: "coolGray.800",
                }}
              >
                {ingredient.name}
              </Center>
            </Pressable>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Update Inventory</Modal.Header>
                <Modal.Body>
                  <Text>Name:</Text>
                  <Text>{selectedItem?.name}</Text>
                  <FormControl mt="3">
                    <FormControl.Label>Amount</FormControl.Label>
                    <Box justifyContent="space-between" alignItems="center">
                      <Button
                        style={{ width: "25%" }}
                        m="2"
                        onPress={handleDecrement}
                      >
                        -
                      </Button>
                      <Input
                        value={updatedQuantity.toString()}
                        onChangeText={handleQuantityChange}
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
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      // variant="ghost"
                      colorScheme="danger"
                      onPress={handleDeleteData}
                    >
                      Delete
                    </Button>
                    <Button
                      onPress={async () => {
                        // Check if updated quantity is greater than 0
                        if (updatedQuantity <= 0) {
                          throw new Error("Quantity must be greater than 0");
                        }

                        await updateQuantity(
                          selectedItem.name,
                          updatedQuantity,
                          setIngredients
                        );
                        closeModal();
                      }}
                    >
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            <Center
              height="8"
              width="16"
              bg="primary.200"
              _text={{
                color: "coolGray.800",
              }}
            >
              {ingredient.quantity}
            </Center>
          </Flex>
        </Box>
      ))}
    </NativeBaseProvider>
  );
};

export default ingredients;

export { ingredients };

import { React, useState, useEffect } from "react";
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

import { getData } from "../../api/ingredientsData.js";

const ingredients = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (ingredient) => {
    setSelectedItem(ingredient);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  //FOR ingredients list
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setIngredients(data);
    };

    fetchData();
  }, [ingredients]);

  // const fetchData = async () => {
  //   const data = await getData();
  //   setIngredients(data);
  // };

  // const ingredients = [
  //   { name: "Item 1", amount: 100 },
  //   { name: "Item 2", amount: 500 },
  //   { name: "Poxad", amount: 1 },
  // ];

  //end of ingredients

  // FOR THE NUMBER INSIDE THE MODAL
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
  // END OF NUMBER

  return (
    <NativeBaseProvider>
      {ingredients.map((ingredient) => (
        <Box
          key="item"
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
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button
                      // variant="ghost"
                      colorScheme="danger"
                      onPress={closeModal}
                    >
                      Delete
                    </Button>
                    <Button onPress={closeModal}>Save</Button>
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
              {ingredient.amount}
            </Center>
          </Flex>
        </Box>
      ))}
    </NativeBaseProvider>
  );
};

export default ingredients;

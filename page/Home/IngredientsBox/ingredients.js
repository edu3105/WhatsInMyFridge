import { React, useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  extendTheme,
  Box,
  Center,
  Input,
  Pressable,
  Button,
  Flex,
  FormControl,
  Modal,
  Image,
  VStack,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { loadFonts } from "../../../fonts.js";
import {
  getData,
  deleteData,
  updateQuantity,
} from "../../api/Data/ingredientsData.js";
import IngredientImage from "../../../assets/logo/1.png";

const Ingredients = ({ ingredients, setIngredients, searchIngredients }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedQuantity, setUpdatedQuantity] = useState(1);

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
      const allData = await getData(); // Fetch all the data
      const filteredData = allData.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(searchIngredients.toLowerCase())
      ); // Filter the data based on the search query
      setIngredients(filteredData);
    };

    fetchData();
  }, [searchIngredients]);

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadCustomFonts = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadCustomFonts();
  }, []);

  if (!fontLoaded) {
    return <View />; // Render an empty view while the font is loading
  }

  return (
    <NativeBaseProvider>
      {ingredients.map((ingredient) => (
        <Box
          key={ingredient.name}
          alignSelf="center"
          bg={["gray.300", "blue.400"]}
          w="90%"
          my="1"
          borderRadius={10}
        >
          <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            w="100%"
            justifyContent="center"
          >
            <Pressable onPress={() => openModal(ingredient)}>
              <Flex alignItems="center" direction="row">
                <Image
                  source={IngredientImage}
                  alt="Ingredient Image"
                  mr={0}
                  height={8}
                  width={10}
                />
                <Center
                  height={8}
                  width="60%"
                  bg="gray.300"
                  _text={{
                    color: "coolGray.800",
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  {ingredient.name}
                </Center>
              </Flex>
            </Pressable>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header _text={{ fontFamily: "Poppins-Medium" }}>
                  Update Inventory
                </Modal.Header>
                <Modal.Body>
                  <Text style={{ fontFamily: "Poppins-Medium" }}>Name:</Text>
                  <Text style={{ fontFamily: "Poppins-Medium" }}>
                    {selectedItem?.name}
                  </Text>
                  <FormControl mt="3">
                    <Text style={{ fontFamily: "Poppins-Medium" }}>
                      Amount:{" "}
                    </Text>
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
                      _text={{ fontFamily: "Poppins-Medium" }}
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
                      _text={{ fontFamily: "Poppins-Medium" }}
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
              bg="gray.300"
              _text={{
                color: "coolGray.800",
                fontFamily: "Poppins-Medium",
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

export default Ingredients;

export { Ingredients };

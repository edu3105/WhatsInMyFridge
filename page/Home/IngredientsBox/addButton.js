import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  Input,
  Pressable,
  Button,
  Modal,
  Flex,
} from "native-base";
import {
  onSubmit,
  getData,
  deleteAllData,
} from "../../api/Data/ingredientsData.js";
import ingredientDb from "../../../assets/ingredientsList/ingredientsDb.js";
import Autocomplete from "react-native-autocomplete-input";
import { loadFonts } from "../../../fonts.js";

const addButton = ({ setIngredients }) => {
  // Accept setIngredients as a prop
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState(undefined);
  const [ingredientName, setIngredientName] = useState("");
  const [filteredIngredientList, setFilteredIngredientList] = useState(
    ingredientDb.slice(0, 3)
  );

  const handleExplorePress = (placement) => {
    setIsOpen(true);
    setPlacement(placement);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCount(1);
    setIngredientName("");
  };

  // const handleNameChange = (value) => {
  //   setIngredientName(value);
  // };
  const handleNameChange = (value) => {
    setIngredientName(value);
    const filteredList = ingredientDb
      .filter((ingredient) =>
        ingredient.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 3);
    setFilteredIngredientList(filteredList);
  };

  const handleItemPress = (value) => {
    setIngredientName(value);
  };

  const handleSubmit = async () => {
    const ingredient = {
      name: ingredientName,
      quantity: count.toString(),
    };

    // Check if quantity is greater than 0
    if (parseInt(ingredient.quantity) <= 0) {
      throw new Error("Quantity must be greater than 0");
    }

    if (!ingredientDb.includes(ingredient.name)) {
      throw new Error("Ingredient not found in the database");
    }

    try {
      const data = await getData(); // Retrieve the data from AsyncStorage

      // Handle case when data is not an array
      const storedIngredients = Array.isArray(data) ? data : [];

      // Check if the ingredientName already exists in the stored data
      if (storedIngredients.some((item) => item.name === ingredient.name)) {
        throw new Error("Ingredient already exists");
      }

      await onSubmit(ingredient, setIngredients); // Pass setIngredients to onSubmit
      console.log("Ingredient submitted successfully.");
    } catch (error) {
      console.error("Error submitting ingredient:", error);
    }

    handleClose();
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
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

  const handleDeleteAll = () => {
    deleteAllData(setIngredients);
  };

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadCustomFonts = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadCustomFonts();
  }, []);

  //   useEffect(() => {
  //     // Load the Poppins Medium 500 font
  //     const loadCustomFonts = async () => {
  //       await loadFonts();
  //     };

  //     loadCustomFonts();
  //   }, []);

  if (!fontLoaded) {
    return <View />; // Render an empty view while the font is loading
  }

  return (
    <NativeBaseProvider>
      <Box alignItems="center" mt="3">
        <Button
          colorScheme="purple"
          onPress={() => handleExplorePress("center")}
          _text={{ fontFamily: "Poppins-Medium" }}
          _pressed={{ backgroundColor: "#9747FF" }}
        >
          Add Ingredients
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header _text={{ fontFamily: "Poppins-Medium" }}>
            Add Ingredients
          </Modal.Header>
          <Modal.Body>
            <Box p="4">
              <Text style={{ fontFamily: "Poppins-Medium" }}>
                Ingredients Name:
              </Text>
              <Autocomplete
                // placeholder="Name"
                // onChangeText={handleNameChange}
                // value={ingredientName}
                // data={filteredIngredientList}
                // renderItem={({ item }) => (
                //   <Autocomplete.Item label={item} value={item} />
                // )}=
                data={filteredIngredientList}
                value={ingredientName}
                onChangeText={handleNameChange}
                placeholder="Name"
                flatListProps={{
                  keyboardShouldPersistTaps: "always",
                  renderItem: ({ item }) => (
                    <TouchableOpacity onPress={() => handleNameChange(item)}>
                      <Text
                        label={item}
                        value={item}
                        style={{ fontFamily: "Poppins-Medium" }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ),
                }}
                _text={{ fontFamily: "Poppins-Medium" }}
              />
              <Text style={{ fontFamily: "Poppins-Medium" }}>Quantity:</Text>

              <Box justifyContent="space-between" alignItems="center">
                <Flex direction="row">
                  <Button
                    style={{ width: "25%", fontFamily: "Poppins-Bold" }}
                    width="10%"
                    mx="1"
                    my="3"
                    onPress={handleDecrement}
                  >
                    test
                  </Button>
                  <Input
                    value={count.toString()}
                    onChangeText={handleCountChange}
                    keyboardType="numeric"
                    textAlign="center"
                    width="40%"
                    my="2"
                    style={{ width: "75%" }}
                    _text={{ fontFamily: "Poppins-Medium" }}
                  />
                  <Button
                    style={{ width: "25%", fontFamily: "Poppins-Medium" }}
                    width="10%"
                    mx="1"
                    my="3"
                    onPress={handleIncrement}
                  >
                    +
                  </Button>
                  <Text></Text>
                </Flex>
              </Box>

              <Button
                mt="3"
                onPress={handleSubmit}
                _text={{ fontFamily: "Poppins-Medium" }}
                colorScheme="purple"
              >
                Add/Submit
              </Button>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Box alignItems="center" mt="1">
        <Button title="Delete All Ingredients" onPress={handleDeleteAll}>
          Delete All
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = {
  center: {},
};

export default addButton;

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
} from "native-base";
import {
  onSubmit,
  getData,
  deleteAllData,
} from "../../api/Data/ingredientsData.js";
import ingredientDb from "../../../database/ingredientsDb.js";
import Autocomplete from "react-native-autocomplete-input";

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
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Content {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header>Add Ingredients</Modal.Header>
          <Modal.Body>
            <Box p="4">
              <Text>Ingredients Name:</Text>
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
                      <Text label={item} value={item}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ),
                }}
              />
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
      <Button title="Delete All Ingredients" onPress={handleDeleteAll}>
        Delete All
      </Button>
    </NativeBaseProvider>
  );
};

const styles = {
  center: {},
};

export default addButton;

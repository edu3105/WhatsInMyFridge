//BasicInfo.js

import {
  NativeBaseProvider,
  Box,
  AspectRatio,
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
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import AddButton from "../../Home/IngredientsBox/addButton";
import { useNavigation } from "@react-navigation/native";
var ImagePicker = require("expo-image-picker");
import { Asset } from "expo-asset";
import { firebase } from "../../../config";
import Autocomplete from "react-native-autocomplete-input";
import ingredientDb from "../../../database/ingredientsDb.js";

//handle imagepicker

import { Platform } from "react-native";
// import { Picker, DatePicker } from "react-native-wheel-pick";

const BasicInfo = () => {
  const navigation = useNavigation();

  //Sending Datas
  const handleNext = () => {
    navigation.navigate("Steps", {
      dishName,
      hours: duration.hours,
      minutes: duration.minutes,
      chefHatCount,
      descriptions,
      dishImageUri,
    });
    setIngredientNeeded([]);
  };
  //---------------------------------------------

  const [dishName, setDishName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState(undefined);
  const [chefHatCount, setChefHatCount] = useState(0);
  const [activeChefHat, setActiveChefHat] = useState(0);
  const [filteredIngredientList, setFilteredIngredientList] = useState(
    ingredientDb.slice(0, 3)
  );
  const [ingredientName, setIngredientName] = useState("");

  const [dishImageUri, setDishImageUri] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [showReplaceButton, setShowReplaceButton] = useState(false);
  const handleDurationChange = (value, type) => {
    setDuration((prevState) => ({
      ...prevState,
      [type]: parseInt(value),
    }));
  };

  const handleChefHatPress = () => {
    if (chefHatCount < 5) {
      setChefHatCount(chefHatCount + 1);
    }
  };

  const handleDeleteChefHat = () => {
    if (chefHatCount >= 0) {
      setChefHatCount(chefHatCount - 1);
      setActiveChefHat(
        activeChefHat === chefHatCount - 1 ? activeChefHat - 1 : activeChefHat
      );
    }
  };

  const handleExplorePress = (placement) => {
    setIsOpen(true);
    setPlacement(placement);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [ingredientNeeded, setIngredientNeeded] = useState([]);

  const handleSubmit = () => {
    // Create a new ingredient object with the name and quantity
    const newIngredient = { name: ingredientName, quantity: count };

    // Update the ingredientNeeded state by adding the new ingredient
    setIngredientNeeded((prevIngredients) => [
      ...prevIngredients,
      newIngredient,
    ]);

    // Clear the input fields
    setIngredientName("");
    setCount(0);

    // Close the modal
    handleClose();
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setDishImageUri(pickerResult.assets[0].uri);
    setIsImageSelected(true);
    setShowReplaceButton(true);
  };

  const handleNameChange = (value) => {
    setIngredientName(value);
    const filteredList = ingredientDb
      .filter((ingredient) =>
        ingredient.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 3);
    setFilteredIngredientList(filteredList);
  };

  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
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
    <ScrollView style={styles.screen}>
      <View style={styles.top}></View>
      <Text style={styles.heading}>Dish Picture</Text>
      <View style={styles.DishPicture}>
        {dishImageUri ? (
          <Image source={{ uri: dishImageUri }} style={styles.dishimage} />
        ) : (
          <Button onPress={handleImagePicker} style={styles.selectImageButton}>
            <Text style={styles.buttonTextimage}>Add Picture +</Text>
          </Button>
        )}

        {showReplaceButton && (
          <Button onPress={handleImagePicker} style={styles.replaceImageButton}>
            <Text style={styles.buttonTextimage}>Replace Image</Text>
          </Button>
        )}
      </View>

      <View style={styles.DishName}>
        <Text style={styles.heading}>Dish Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Dish name"
          value={dishName}
          onChangeText={setDishName}
        />
      </View>

      <View style={styles.time}>
        <Text style={styles.heading}>Time</Text>
      </View>

      <View style={styles.durationPicker}>
        {
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Hours</Text>
            <Picker
              selectedValue={duration.hours.toString()}
              onValueChange={(value) => handleDurationChange(value, "hours")}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              mode="dropdown"
            >
              {Array.from(Array(24).keys()).map((hour) => (
                <Picker.Item
                  key={hour}
                  label={hour.toString()}
                  value={hour.toString()}
                />
              ))}
            </Picker>
            <Text style={styles.pickerLabel}>Minutes</Text>
            <Picker
              selectedValue={duration.minutes.toString()}
              onValueChange={(value) => handleDurationChange(value, "minutes")}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              mode="dropdown"
            >
              {Array.from(Array(60).keys()).map((minute) => (
                <Picker.Item
                  key={minute}
                  label={minute.toString()}
                  value={minute.toString()}
                />
              ))}
            </Picker>
          </View>
        }
      </View>
      <Text style={styles.heading}>Difficulty</Text>
      <View style={styles.chefhats}>
        {Array.from(Array(5).keys()).map((index) => (
          <Image
            key={index}
            source={require("../../../assets/Create/chefhat.jpg")}
            style={[
              styles.chefhat,
              { opacity: index > chefHatCount ? 0.3 : 1 },

              //   console.log("index", index),
              //   console.log("chef hat", chefHatCount),
            ]}
          />
        ))}

        <View style={styles.plus_minus_buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleDeleteChefHat}
            disabled={chefHatCount === -1}
          >
            <Feather name="minus" size={18} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleChefHatPress}
            disabled={chefHatCount === 4}
          >
            <Feather name="plus" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Descriptions}>
        <Text style={styles.heading}>Descriptions</Text>
        <TextInput
          style={styles.inputDescription}
          placeholder="Description here . . ."
          multiline={true}
          value={descriptions}
          onChangeText={setDescriptions}
        />
      </View>
      <View>
        <Text style={styles.heading}>Add Ingredients</Text>
        <View style={{ alignSelf: "flex-start", marginLeft: 15 }}>
          <Box alignItems="center" mt="3">
            <Button
              colorScheme="secondary"
              onPress={() => handleExplorePress("center")}
              style={styles.addingrbutton}
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
                        <TouchableOpacity
                          onPress={() => handleNameChange(item)}
                        >
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
                  <Text style={{ fontFamily: "Poppins-Medium" }}>
                    Quantity:
                  </Text>

                  <Box justifyContent="space-between" alignItems="center">
                    <Flex direction="row">
                      <Button
                        style={{ width: "25%", fontFamily: "Poppins-Bold" }}
                        width="10%"
                        mx="1"
                        my="3"
                        bg="gray.300"
                        onPress={handleDecrement}
                      >
                        <Text style={{ fontFamily: "Poppins-Bold" }}>-</Text>
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
                        style={{ width: "25%" }}
                        width="10%"
                        mx="1"
                        my="3"
                        bg="gray.300"
                        onPress={handleIncrement}
                      >
                        <Text style={{ fontFamily: "Poppins-Bold" }}>+</Text>
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
        </View>
        <View style={styles.Descriptions}>
          <Text style={styles.heading}>Ingredients:</Text>
          <Box style={styles.inputDescription}>
            {ingredientNeeded.map((ingredient, index) => (
              <Text key={index}>
                {ingredient.name}: {ingredient.quantity}
              </Text>
            ))}
          </Box>
        </View>

        <Button style={styles.nextButton} onPress={handleNext}>
          Next
        </Button>
      </View>
    </ScrollView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
  },
  DishName: {},
  DishPicture: {
    justifyContent: "center",
    alignItems: "center",
  },
  durationPicker: {
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    flex: 1,
  },
  pickerItem: {
    fontSize: 40,
    height: 10,
  },
  pickerLabel: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 10,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  dishimage: {
    width: 300,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  chefhat: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  chefhats: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    padding: 5,
    marginLeft: 5,
  },
  plus_minus_buttons: {
    marginLeft: 20,
    flexDirection: "row",
  },
  Descriptions: {},

  inputDescription: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },

  nextButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: "#9747ff",
  },
  selectImageButton: {
    height: 120,
    width: 250,
    backgroundColor: "#9747ff",
  },
  buttonTextimage: {
    color: "white",
  },
  replaceImageButton: {
    height: 45,
    width: 180,
    marginTop: -10,
    backgroundColor: "#9747ff",
  },
  addingrbutton: {
    backgroundColor: "#9474ff",
  },
});

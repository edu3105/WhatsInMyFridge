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

const BasicInfo = () => {
  const navigation = useNavigation();
  //Sending Datas

  const handleNext = () => {
    navigation.navigate("Steps", {
      dishName,
      hours: duration.hours,
      minutes: duration.minutes,
    });
  };

  //---------------------------------------------
  const [dishName, setDishName] = useState("");
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const handleDurationChange = (value, type) => {
    setDuration((prevState) => ({
      ...prevState,
      [type]: parseInt(value),
    }));
  };

  const [chefHatCount, setChefHatCount] = useState(0);
  const [activeChefHat, setActiveChefHat] = useState(0);

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
    <ScrollView style={styles.screen}>
      <View style={styles.top}></View>
      <Text style={styles.heading}>Dish Picture</Text>
      <View style={styles.DishPicture}>
        <Image
          source={require("../../../assets/Create/cabbage.jpg")}
          style={styles.dishimage}
        />
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
              //   console.log(index),
              console.log("index", index),
              console.log("chef hat", chefHatCount),
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
        />
      </View>
      <View>
        <Text style={styles.heading}>Add Ingredients</Text>
        <View style={{ alignSelf: "flex-start", marginLeft: 15 }}>
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
    width: 325,
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
    height: 100,
    textAlignVertical: "top",
  },

  nextButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 50,
  },
});

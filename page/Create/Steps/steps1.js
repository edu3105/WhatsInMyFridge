import { ScrollView, VStack, HStack } from "native-base";
import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { Create_BasicInfo } from "../Custom1";
import BasicInfo from "../BasicInfo/BasicInfo.js";
import { Button, Input } from "native-base";
import { useState } from "react";
import ImagePicker from "react-native-image-picker";

const Steps = ({ navigation }) => {
  const [inputs, setInputs] = useState([]);
  const [inputCount, setInputCount] = useState(1);

  const addInput = () => {
    setInputs([...inputs, { text: "", imageUri: null }]);
    setInputCount(inputCount + 1);
  };

  const handleInputChange = (value, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].text = value;
    setInputs(updatedInputs);
  };

  const selectImage = (index) => {
    const options = {
      mediaType: "photo",
      quality: 1,
      includeBase64: false,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image selection");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const updatedInputs = [...inputs];
        updatedInputs[index].imageUri = response.uri;
        setInputs(updatedInputs);
      }
    });
  };

  return (
    <ScrollView style={styles.screen}>
      {/* ...existing code... */}
      <View style={styles.inputContainer}>
        <Text style={styles.heading1}>Inputs</Text>
        {inputs.map((inputValue, index) => (
          <VStack key={index} space={2}>
            <HStack alignItems="center">
              <Text style={styles.inputNumber}>{index + 1}</Text>
              <TextInput
                style={styles.input}
                placeholder="Insert step"
                value={inputValue.text}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            </HStack>
            {inputValue.imageUri && (
              <Image
                source={{ uri: inputValue.imageUri }}
                style={{ width: 100, height: 100 }}
              />
            )}
            <Button
              onPress={() => selectImage(index)}
              style={styles.selectImageButton}
            >
              <Text style={styles.buttonTextimage}>Add image</Text>
            </Button>
          </VStack>
        ))}
      </View>
      <Button
        onPress={addInput}
        style={styles.addinbutton}
        textStyle={styles.buttonText}
      >
        <Text style={styles.buttonText}>+ Step</Text>
      </Button>
    </ScrollView>
  );
};

export default Steps;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    //  justifyContent: "center",
    //  alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  top: {
    //  flexDirection: "row",
    //  alignItems: "center",
    //  justifyContent: "space-between",
  },
  DishName: {},

  text: {
    color: "#000",
    fontWeight: "500",
    fontSize: 17,
    textAlign: "right",
  },
  title: {
    color: "#000",
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
  },

  heading1: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    borderRadius: 10, // Adjust the value as needed
    backgroundColor: "#e8e8e8",
    padding: 5,
    flex: 1,
  },
  dishimage: {
    width: 350,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonimagedowncontainer: {
    flexDirection: "column",
  },

  inputContainer: {
    marginTop: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputNumber: {
    marginRight: 10,
    fontWeight: "bold",
  },
  selectImageButton: {
    marginTop: 0,
    marginRight: 250,
    marginLeft: 19,
    backgroundColor: "#e8e8e8",
    color: "black",
  },
  addinbutton: {
    marginTop: 20,
    marginRight: 250,
    marginLeft: -5,
    backgroundColor: "white",
    paddingBottom: 200,
  },
  buttonTextimage: {
    color: "black",
  },
  buttonText: {
    color: "black",
    fontWeight: "500",
    fontSize: 22,
    marginRight: 5,
  },
});

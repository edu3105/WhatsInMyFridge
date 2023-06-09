import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NativeBaseProvider, VStack } from "native-base";
import RecipeBox from "./RecipeBoxes";

export default function RecipeScreen({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecipeBox />
        </ScrollView>
        <View style={styles.buttonContainer} marginBottom={15}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RecipeSteps")}
          >
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9747FF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

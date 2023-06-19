import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Done = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <View style={styles.gifcontainer}>
          <Image
            source={{
              uri: "https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif",
            }}
            alt="Check Mark GIF"
            style={styles.gif}
          />
        </View>
        <Text style={styles.text}>RECIPE CREATED</Text>
        <Text style={styles.text}>You can see the created recipe in your profile</Text>
        <Button
          style={styles.profilebutton}
          onPress={() => navigation.navigate("Profile")}
        >
          Profile
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default Done;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gifcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    // fontSize: 20,
  },
  profilebutton: {
    backgroundColor: "#9474ff",
    marginHorizontal: 100,
    marginTop: 20,
    width: 100,
  },
  gif: {
    width: 200,
    height: 200,
  },
});

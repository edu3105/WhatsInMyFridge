import React, { useState, useRoute, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
// import "react-native-gesture-handler";
import { firebase } from "../../../config";
import { CommonActions } from "@react-navigation/native";

const Done = ({ navigation }) => {
  //   const route = useRoute();
  //   const {
  //     dishName,
  //     hours,
  //     minutes,
  //     chefHatCount,
  //     descriptions,
  //     inputs,
  //     dishImageUri,
  //   } = route.params;

  //coba-coba
  //   const [name, setName] = useState("");
  //   useEffect(() => {
  //     firebase
  //       .firestore()
  //       .collection("users")
  //       .doc(firebase.auth().currentUser.uid)
  //       .get()
  //       .then((snapshot) => {
  //         if (snapshot.exists) {
  //           setName(snapshot.data());
  //         } else {
  //           console.log("Users doesnt exist");
  //         }
  //       }, []);
  //   });
  //----------------------------------

  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const user = firebase.auth().currentUser;
  //   const recipeDataRef = user
  //     ? firebase.firestore().collection("users").doc(user.uid)
  //     : null;

  //   useEffect(() => {
  //     if (recipeDataRef) {
  //       recipeDataRef
  //         .get()
  //         .then((doc) => {
  //           if (doc.exists) {
  //             const { email, userName } = doc.data();
  //             setUserName(userName);
  //             setEmail(email);
  //           } else {
  //             console.log("User document does not exist");
  //           }
  //         })
  //         .catch((error) => {
  //           console.log("Error getting user document:", error);
  //         });
  //     }
  //   }, [recipeDataRef]);

  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Image
            source={{
              uri: "https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif",
            }}
            alt="Check Mark GIF"
            style={styles.gif}
          />
        <Text>Recipe Created</Text>
        <Text>Created recipes can be viewed in your</Text>

        <Button
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Profile" }],
              })
            )
          }
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

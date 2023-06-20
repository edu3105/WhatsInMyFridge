import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Box, HStack, NativeBaseProvider, Stack, Button } from "native-base";

import { fetchRecipeById } from "../api/api.js";

import recipeDB from "../../database/recipeDb.js";

/*
Right now the box will disappear in both stacks, probably because the index of both the boxes are the same.
fix with uuid later on. thanks. -Owen 6/15

test is this changed?

*/
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";


export default function BookmarkScreen({ navigation }) {
  const [oddStack, setOddStack] = useState([]);
  const [evenStack, setEvenStack] = useState([]);
  const [recipeCount, setRecipeCount] = useState(1);


  //maybe use this later?
  // useEffect(()=>{
  //   const data = recipeDB;
  //   for(let i = 0;i < data.length; i++){
  //     if(i % 2 === 0){
  //       const newData = [...evenStack, data[i]];
  //       setEvenStack(newData);
  //     }
  //     else{
  //       const newData = [...oddStack, data[i]];
  //       setOddStack(newData);
  //     }
  //   }

  //   return () => {
  //     setOddStack([]);
  //     setEvenStack([]);
  //   }
  // }, []);


  function addComponent() {
    var isOdd = recipeCount % 2 === 1 ? true : false;

    if (isOdd) {
      setOddStack([...oddStack, recipeCount]);
    } else {
      setEvenStack([...evenStack, recipeCount]);
    }
    setRecipeCount(recipeCount + 1);
  }

  function removeComponent(index) {
    var newStack = oddStack.filter((_, i) => i !== index);
    setOddStack(newStack);
    newStack = evenStack.filter((_, i) => i !== index);
    setEvenStack(newStack);
  }

  // return (
  //   <NativeBaseProvider>
  //     <ScrollView>
  //       <Stack direction="row" justifyContent="space-evenly" top="5">
  //         <Stack direction="column" space="md">
  //           {oddStack.map((recipe) => newnewBox(recipe))}
  //         </Stack>
  //         <Stack direction="column" space="md">
  //           {evenStack.map((recipe) => newnewBox(recipe))}
  //         </Stack>
  //       </Stack>
  //       {/* <Button onTouchStart={addComponent}> Create a Box </Button> */}
  //     </ScrollView>
  //   </NativeBaseProvider>
  // )
  return (
    <NativeBaseProvider>
      <HStack space={5} justifyContent="center" marginTop={5}>
        <Box rounded="xl" overflow="hidden" onTouchStart={() => {navigation.navigate("RecipePage")}}>
          <ImageBackground
            source={{
              uri: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/juicy-cheeseburger-pack-cea71279.jpg",
            }}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={[styles.timeView]}>
              <FontAwesomeIcon icon={faStar} size={15} color="orange" />
              <Text style={[styles.timeText]}>5.0</Text>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.overlay}>
                <Text textAlign="left" style={styles.overlayText}>
                  Cheeseburger
                </Text>
                <Text textAlign="left" style={styles.creatorText}>
                  By kak J
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Box>
        {/* <Box rounded="xl" overflow="hidden">
          <ImageBackground
            source={{
              uri: "https://www.craftbeering.com/wp-content/uploads/2019/10/Pork-Spare-Ribs-with-BBQ-sauce-1.jpg",
            }}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <View style={[styles.timeView]}>
              <FontAwesomeIcon icon={faStar} size={15} color="orange" />
              <Text style={[styles.timeText]}>4.9</Text>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.overlay}>
                <Text textAlign="left" style={styles.overlayText}>
                  Traditional Spare Ribs Baked
                </Text>
                <Text textAlign="left" style={styles.creatorText}>
                  By Chef John
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Box> */}
      </HStack>
    </NativeBaseProvider>
  );


  function newBox(recipeId, index) {
    return (
      <Box
        key={index}
        _text={styles.recipePage.text}
        bg={styles.recipePage.bg}
        height={styles.recipePage.height}
        width={styles.recipePage.width}
        onTouchStart={() => removeComponent(index)}>
        {recipeId}
      </Box>
    );
  }

  function newnewBox(recipe){
    return(
      <Box rounded="xl" overflow="hidden">
        <ImageBackground
          source={recipe.image}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={[styles.timeView]}>
            <FontAwesomeIcon icon={faStar} size={15} color="orange" />
            <Text style={[styles.timeText]}>5.0</Text>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.overlay}>
              <Text textAlign="left" style={styles.overlayText}>
                {recipe.recipeName}
              </Text>
              <Text textAlign="left" style={styles.creatorText}>
                {"By " + recipe.creator}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Box>
    );
  };
}

// var styles = StyleSheet.create({

//   recipePage: {
//     text: {
//       color: "white",
//       fontWeight: "bold",
//     },
//     bg: 'primary.200',
//     height: 158,
//     width: {
//       base: 150,
//       lg: 250
//     }
//   }
// });

const styles = StyleSheet.create({
  imageBackground: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Adjust the border radius value as per your preference
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
    borderRadius: 10,
    padding: 10,
    width: 175,
  },
  overlayText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 5, // Add padding to the left
  },
  creatorText: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
    paddingLeft: 5, // Add padding to the left
  },
  timeView: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE1B3",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: "#FFE1B3",
    borderWidth: 1,
  },
  timeText: {
    marginLeft: 6,
  },
});
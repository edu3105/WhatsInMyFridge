import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Box, Card, NativeBaseProvider, Stack, Center, Divider, Button } from "native-base";

import { fetchRecipeById } from "../api/api.js";



export default function BookmarkScreen({ navigation }) {
  const [oddStack, setOddStack] = useState([]);
  const [evenStack, setEvenStack] = useState([]);
  const [recipeCount, setRecipeCount] = useState(1);
  const [uid, setUId] = useState(9238);

  function addComponent() {
    var isOdd = recipeCount % 2 === 1 ? true : false;

    if (isOdd) {
      setOddStack([...oddStack, {recipeCount, uid}]);
    } else {
      setEvenStack([...evenStack, {recipeCount, uid}]);
    }
    setUId(uid + 1);
    setRecipeCount(recipeCount + 1);
  }

  function removeComponent(id) {
    var newStack = oddStack.filter((el) => el.uid != id);
    setOddStack(newStack);
    newStack = evenStack.filter((el) => el.uid != id);
    setEvenStack(newStack);
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack direction="row" justifyContent="space-evenly" top="5">
          <Stack direction="column" space="md">
            {oddStack.map((el)=> newBox(el.recipeCount, el.uid))}
          </Stack>
          <Stack direction="column" space="md">
            {/* {evenStack.map((recipeId, uid) => newBox(recipeId, uid))} */}
            {evenStack.map((el) => newBox(el.recipeCount, el.uid))}
          </Stack>
        </Stack>
        <Button onTouchStart={addComponent}> Create a Box </Button>
      </ScrollView>
    </NativeBaseProvider>
  )


  function newBox(recipeId, uid) {
    return (
      <Box
        key={uid}
        _text={styles.recipePage.text}
        bg={styles.recipePage.bg}
        height={styles.recipePage.height}
        width={styles.recipePage.width}
        onTouchStart={() => removeComponent(uid)}>
        {recipeId}
      </Box>
    );
  }
}

var styles = StyleSheet.create({

  recipePage: {
    text: {
      color: "white",
      fontWeight: "bold",
    },
    bg: 'primary.200',
    height: 158,
    width: {
      base: 150,
      lg: 250
    }
  }
});
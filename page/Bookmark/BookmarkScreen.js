import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Box, Card, NativeBaseProvider, Stack, Center, Divider, Button } from "native-base";

import { fetchRecipeById } from "../api/api.js";

/*
Right now the box will disappear in both stacks, probably because the index of both the boxes are the same.
fix with uuid later on. thanks. -Owen 6/15

test is this changed?

*/


export default function BookmarkScreen({ navigation }) {
  const [oddStack, setOddStack] = useState([]);
  const [evenStack, setEvenStack] = useState([]);
  const [recipeCount, setRecipeCount] = useState(1);

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

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack direction="row" justifyContent="space-evenly" top="5">
          <Stack direction="column" space="md">
            {oddStack.map((recipeId, index) => newBox(recipeId, index))}
          </Stack>
          <Stack direction="column" space="md">
            {evenStack.map((recipeId, index) => newBox(recipeId, index))}
          </Stack>
        </Stack>
        <Button onTouchStart={addComponent}> Create a Box </Button>
      </ScrollView>
    </NativeBaseProvider>
  )


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
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Box, Card, NativeBaseProvider, Stack, Center, Divider, Button } from "native-base";
import { fetchRecipeById } from "../api/api.js";

export default function BookmarkScreenPg({ navigation }) {
    const [oddStack, setOddStack] = useState([]);
    const [evenStack, setEvenStack] = useState([]);
    const [recipeCount, setRecipeCount] = useState(1);

    function addComponent() {
        var isOdd = recipeCount % 2 === 1 ? true : false;

        if (isOdd) {
            setOddStack([...oddStack, newBox(recipeCount)]);
        } else {
            setEvenStack([...evenStack, newBox(recipeCount)]);
        }
        setRecipeCount(recipeCount + 1);
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <Stack direction="row" justifyContent="space-evenly" top="5">
                    <Stack direction="column" space="md">
                        {oddStack}
                    </Stack>
                    <Stack direction="column" space="md">
                        {evenStack}
                    </Stack>
                </Stack>
                <Button onTouchStart={addComponent}> Create a Box </Button>
            </ScrollView>
        </NativeBaseProvider>
    )
}


function newBox(id) {
    return (
        <Box
            _text={styles.recipePage.text}
            bg={styles.recipePage.bg}
            height={styles.recipePage.height}
            width={styles.recipePage.width}>
            {id}
        </Box>
    );
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
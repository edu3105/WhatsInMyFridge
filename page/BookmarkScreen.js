import React from "react";
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Box, Card, NativeBaseProvider, Stack, Center, Divider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function BookmarkScreen({navigation}){
    return (
        <NativeBaseProvider>
            <ScrollView >
                <Stack direction="row" justifyContent="space-evenly" top = "5">
                    <Stack direction="column" space="md">
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}>
                            onTouchStart={() => navigation.navigate("test")}
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                    </Stack>

                    <Stack direction="column" space="md" >
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                        <Box
                            _text={styles.recipePage.text}
                            bg = {styles.recipePage.bg} 
                            height={styles.recipePage.height}
                            width={styles.recipePage.width}
                            onTouchStart={() => console.log("Hello this is center 1")}>
                            CENTER 1
                        </Box>
                    </Stack>
                </Stack>
            </ScrollView>
        </NativeBaseProvider>
    );
}

var styles = StyleSheet.create({
    
    recipePage:{
        text:{
            color:"white",
            fontWeight: "bold",
        },
        bg:'primary.200',
        height: 158,
        width:{
            base: 150,
            lg: 250
        }
    }

    

});
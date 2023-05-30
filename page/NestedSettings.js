// Nested SettingsPage.js

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NestedSettings = () => {
  return (
    <View style={styles.screen}>
      <Text>Nested Screen 1</Text>
    </View>
  );
};

export default NestedSettings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 50,
  },
});

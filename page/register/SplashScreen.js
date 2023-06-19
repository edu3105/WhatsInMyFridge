import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import splashImage from "../../assets/splash.png";

export default function SplashScreen() {
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={splashImage}
        style={styles.imageBackground}
        resizeMode="strecth"
      >
        <View style={styles.container}>
          <View style={styles.viewtitle}>
            <Text style={styles.title}>Get Cooking</Text>
            <Text>Simple way to find Tasty Recipe</Text>
            <CustomButton label={"Start Cooking"}></CustomButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    Color: "#C3C3C3",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 60,
    textAlign: "center",
  },
  viewtitle: {
    height: 150,
    width: 420,
    alignItems: "center",
  },
});

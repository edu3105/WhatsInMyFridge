import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    // "Poppins-Bold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });
};

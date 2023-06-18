import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NativeBaseProvider,
  HStack,
  IconButton,
  Box,
  Avatar,
  ScrollView,
  VStack,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function Stat_s() {
  const [createdData, setCreatedData] = useState("");
  const [cookedData, setCookedData] = useState("");
  const [ratingData, setRatingData] = useState("");
  const [popularData, setPopularData] = useState("");
  const [usedData, setUsedData] = useState("");
  const [favoriteData, setFavoriteData] = useState("");

  // Fetch the data
  useEffect(() => {
    fetchCreatedData();
    fetchCookedData();
    fetchRatingData();
    fetchPopularData();
    fetchUsedData();
    fetchFavoriteData();
  }, []);

  const fetchCreatedData = () => {
    // Perform your data fetching logic here for "Created" data
    // Replace the following line with your actual data fetching code
    const data = "Created data"; // Example data for "Created"

    // Set the fetched data in the state
    setCreatedData(data);
  };

  const fetchCookedData = () => {
    // Perform your data fetching logic here for "Cooked" data
    // Replace the following line with your actual data fetching code
    const data = "Cooked data"; // Example data for "Cooked"

    // Set the fetched data in the state
    setCookedData(data);
  };

  const fetchRatingData = () => {
    // Perform your data fetching logic here for "Average Rating" data
    // Replace the following line with your actual data fetching code
    const data = "Rating data"; // Example data for "Average Rating"

    // Set the fetched data in the state
    setRatingData(data);
  };

  const fetchPopularData = () => {
    // Perform your data fetching logic here for "Most Popular" data
    // Replace the following line with your actual data fetching code
    const data = "Popular data"; // Example data for "Most Popular"

    // Set the fetched data in the state
    setPopularData(data);
  };

  const fetchUsedData = () => {
    // Perform your data fetching logic here for "Most Popular" data
    // Replace the following line with your actual data fetching code
    const data = "Used data"; // Example data for "Most Popular"

    // Set the fetched data in the state
    setUsedData(data);
  };

  const fetchFavoriteData = () => {
    // Perform your data fetching logic here for "Most Popular" data
    // Replace the following line with your actual data fetching code
    const data = "Favorite data"; // Example data for "Most Popular"

    // Set the fetched data in the state
    setFavoriteData(data);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack style={styles.recipe_title}>
          <Text style={styles.recipe_title_text}>Recipes</Text>
        </VStack>
        <VStack style={styles.recipe_box}>
          <Text style={styles.recipe_box_content}>
            • Created: <Text style={styles.data}> {createdData} </Text>
          </Text>
          <Text style={styles.recipe_box_content}>
            • Cooked: <Text style={styles.data}>{cookedData}</Text>
          </Text>
          <Text style={styles.recipe_box_content}>
            • Average Rating: <Text style={styles.data}>{ratingData}</Text>
          </Text>
          <Text style={styles.recipe_box_content}>
            • Most Popular: <Text style={styles.data}>{popularData}</Text>
          </Text>
        </VStack>
        <VStack style={styles.ingredients_title}>
          <Text style={styles.ingredients_title_text}>Ingredients</Text>
        </VStack>
        <VStack style={styles.ingredients_box}>
          <Text style={styles.recipe_box_content}>
            • Used(types):
            <Text style={styles.data}>{usedData}</Text>
          </Text>
          <Text style={styles.recipe_box_content}>
            • Favorite:
            <Text style={styles.data}>{favoriteData}</Text>
          </Text>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    margin: 20,
  },
  recipe_title: {
    marginTop: 20,
    marginBottom: 10,
  },
  recipe_title_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recipe_box: {
    width: 375,
    height: 300,
    borderRadius: 10,
    backgroundColor: "#00000025",
    height: "auto",
  },

  recipe_box_content: {
    //lineHeight: 40,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },

  ingredients_title: {
    marginTop: 25,
    marginBottom: 10,
  },
  ingredients_title_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ingredients_box: {
    width: 375,
    height: 300,
    borderRadius: 10,
    backgroundColor: "#00000025",
    height: "auto",
  },

  data: {
    color: "white", // Modify the color as desired
  },
});

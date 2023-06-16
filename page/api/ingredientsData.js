import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to get ingredient data
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("ingredients");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error retrieving ingredient data:", error);
    return [];
  }
};

// Function to store ingredient data
export const onSubmit = async (ingredient) => {
  try {
    // Get existing data
    const existingData = await getData();

    // Add new ingredient to the existing data
    const updatedData = [...existingData, ingredient];

    // Store the updated data
    await AsyncStorage.setItem("ingredients", JSON.stringify(updatedData));

    console.log("Ingredient data stored successfully.");
  } catch (error) {
    console.error("Error storing ingredient data:", error);
  }
};

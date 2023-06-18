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
// ...

export const onSubmit = async (ingredient, setIngredients) => {
  try {
    // Get existing data
    const existingData = await getData();

    // Add new ingredient to the existing data
    const updatedData = [...existingData, ingredient];

    // Store the updated data
    await AsyncStorage.setItem("ingredients", JSON.stringify(updatedData));

    console.log("Ingredient data stored successfully.");

    // Update the state after saving
    setIngredients(updatedData); // Update the state in the parent component
  } catch (error) {
    console.error("Error storing ingredient data:", error);
  }
};

export const deleteData = async (ingredientName, setIngredients) => {
  try {
    const existingData = await AsyncStorage.getItem("ingredients");
    if (existingData) {
      const parsedData = JSON.parse(existingData);
      const updatedData = parsedData.filter(
        (ingredient) => ingredient.name !== ingredientName
      );
      await AsyncStorage.setItem("ingredients", JSON.stringify(updatedData));
      console.log("Ingredient data deleted successfully.");

      // Update the state after deletion
      setIngredients(updatedData);
    }
  } catch (error) {
    console.error("Error deleting ingredient data:", error);
    throw error;
  }
};

export const updateQuantity = async (
  ingredientName,
  newQuantity,
  setIngredients
) => {
  try {
    const existingData = await getData();
    const updatedData = existingData.map((ingredient) => {
      if (ingredient.name === ingredientName) {
        // Update the quantity of the selected ingredient
        return { ...ingredient, quantity: newQuantity };
      }
      return ingredient;
    });

    await AsyncStorage.setItem("ingredients", JSON.stringify(updatedData));
    console.log("Ingredient quantity updated successfully.");

    // Update the state after saving
    setIngredients(updatedData);
  } catch (error) {
    console.error("Error updating ingredient quantity:", error);
  }
};

export const deleteAllData = async (setIngredients) => {
  try {
    await AsyncStorage.removeItem("ingredients");
    console.log("All ingredient data deleted successfully.");

    // Update the state after deletion
    setIngredients([]);
  } catch (error) {
    console.error("Error deleting all ingredient data:", error);
    throw error;
  }
};

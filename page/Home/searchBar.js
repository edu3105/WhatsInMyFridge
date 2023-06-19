import React from "react";
import { NativeBaseProvider, Box, Input } from "native-base";

const searchBar = ({ setSearchIngredients }) => {
  const handleSearch = (text) => {
    // Perform the search or filtering logic here
    // Update the ingredient list in the BigBox component using setIngredients
    // Example: setIngredients(filteredIngredients);
    setSearchIngredients(text);
    // console.log("Search query:", text);
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center" mt="4">
        <Input
          variant="rounded"
          mx="3"
          placeholder="Search Ingredients"
          w="80%"
          onChangeText={handleSearch}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default searchBar;

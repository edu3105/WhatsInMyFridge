import React from 'react';
import { NativeBaseProvider, Box, Input } from 'native-base';

const searchBar = () => {
    return (
      <NativeBaseProvider>
        <Box alignItems="center" mt="4">
          <Input variant="rounded" mx="3" placeholder="Search Ingredients" w="80%" />
        </Box>
      </NativeBaseProvider>
    );
  };
  
  export default searchBar;
  
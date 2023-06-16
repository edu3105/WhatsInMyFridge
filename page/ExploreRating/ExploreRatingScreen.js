import { React, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  ScrollView,
  Input,
  Pressable,
  Button,
  TouchableOpacity,
  Avatar,
} from "native-base";

import SearchBar from "../Explore/ExploreSearchbar";
import FilterBar from "./ExploreRatingFilterBar";
import MainBoxes from "./ExploreRatingBoxes";

export default function ExploreRatingScreen({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <SearchBar />
        <FilterBar navigation={navigation} />
        <MainBoxes />
      </ScrollView>
    </NativeBaseProvider>
  );
}

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
import FilterBar from "./ExploreRegionFilterBar";
import MainBoxes from "./ExploreRegionBoxes";

export default function ExploreRegionScreen({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <FilterBar navigation={navigation} />
        <MainBoxes />
      </ScrollView>
    </NativeBaseProvider>
  );
}

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

import SearchBar from "./ExploreSearchbar";
import FilterBar from "./ExploreFilterBar";
import MainBoxes from "./ExploreBoxes";
import Recommended from "./ExploreRecommendedBox";
import Creators from "./ExploreCreators";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
export default function ExploreScreen({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <SearchBar />
        <FilterBar navigation={navigation} />
        <Recommended />
        <MainBoxes navigation={navigation} />
        <Creators />
      </ScrollView>
    </NativeBaseProvider>
  );
}

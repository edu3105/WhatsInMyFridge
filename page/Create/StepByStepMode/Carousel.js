import { StatusBar } from "expo-status-bar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useRef, useState } from "react";
import { firebase } from "../../../config";
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "Slide 1",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
  },
  {
    id: 2,
    name: "Slide 2",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
  },
  {
    id: 3,
    name: "Slide 3",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={{ uri: item.url }} style={styles.slideImage} />
      <Text style={styles.slideText}>{item.name}</Text>
    </View>
  );
};

const StepByStepMode = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.paginationDot}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    alignItems: "center",
  },
  slideContainer: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  slideImage: {
    width: 200,
    height: 200,
  },
  slideText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "green",
  },
});

export default StepByStepMode;

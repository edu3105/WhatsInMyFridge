import { StatusBar } from "expo-status-bar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: "1. Preheat an outdoor grill for high heat and lightly oil grate.",
    url: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2019-05-how-to-grill-pork-chops%2FHTGrillPorkChops_TheKitchn042919_30",
  },
  {
    id: 2,
    name: "2. Whisk together egg, salt, and pepper in a medium bowl.",
    url: "https://www.allrecipes.com/thmb/ejYc4Z595xyLr3pYhRudbHYYKpY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-ddmfs-Step1-4x3-88c586ec9b9943fe84257fdce3db9971.jpg",
  },
  {
    id: 3,
    name: "3. Add ground beef and bread crumbs and mix with your hands or a fork until well blended.",
    url: "https://www.allrecipes.com/thmb/REfyjjwOOsP1NgDpSIUuSI70kEE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-ddmfs-Step2-4x3-6ce4908408304d92aedfc5f22dc16669.jpg",
  },
  {
    id: 4,
    name: "4. Form into four 3/4-inch-thick patties",
    url: "https://www.allrecipes.com/thmb/_-DTNxcIh0RDOioZxaJTVuYmXUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-ddmfs-Step3-4x3-cf6321a5f613446ea6d50e60ade7473e.jpg",
  },
  {
    id: 5,
    name: "5. Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C).",
    url: "https://www.allrecipes.com/thmb/L-amk0sGapeHkqeonFVO4d9OEVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-ddmfs-Step4-4x3-e462a501f4594502ab549e89230af242.jpg",
  },
  {
    id: 6,
    name: "6. Serve hot and enjoy!",
    url: "https://www.allrecipes.com/thmb/5bbowF39Flo1sblOqjMQifuj1a8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={{ uri: item.url }} style={styles.slideImage} alt="hi"/>
      <Text style={styles.slideText}>{item.name}</Text>
    </View>
  );
};

const RecipeSteps = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonz}
        onPress={() => navigation.navigate("RecipeDone")}
      >
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    marginTop: 125,
  },
  slideContainer: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
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
  buttonz: {
    top: -55,
    backgroundColor: "#9747FF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default RecipeSteps;

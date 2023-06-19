// import { StatusBar } from "expo-status-bar";
// import Carousel, { Pagination } from "react-native-snap-carousel";
// import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
// import React, { useRef, useState } from "react";

// export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

// const data = [
//   {
//     id: 1,
//     name: "Slide 1",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
//   },
//   {
//     id: 2,
//     name: "Slide 2",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
//   },
//   {
//     id: 3,
//     name: "Slide 3",
//     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/180px-React-icon.svg.png",
//   },
// ];

// const renderItem = ({ item }) => {
//   return (
//     <View style={styles.slideContainer}>
//       <Image source={{ uri: item.url }} style={styles.slideImage} />
//       <Text style={styles.slideText}>{item.name}</Text>
//     </View>
//   );
// };

// const StepByStepMode = () => {
//   const [index, setIndex] = useState(0);
//   const isCarousel = useRef(null);

//   return (
//     <View style={styles.container}>
//       <Carousel
//         ref={isCarousel}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         onSnapToItem={(index) => setIndex(index)}
//       />
//       <Pagination
//         dotsLength={data.length}
//         activeDotIndex={index}
//         carouselRef={isCarousel}
//         dotStyle={styles.paginationDot}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 200,
//     alignItems: "center",
//   },
//   slideContainer: {
//     padding: 20,
//     borderRadius: 20,
//     alignItems: "center",
//     backgroundColor: "lightblue",
//   },
//   slideImage: {
//     width: 200,
//     height: 200,
//   },
//   slideText: {
//     marginVertical: 10,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 10,
//     marginHorizontal: 10,
//     backgroundColor: "green",
//   },
// });

// export default StepByStepMode;
import { StatusBar } from "expo-status-bar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useRef, useState } from "react";
import { firebase } from "../../../config";
import { TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const StepByStepMode = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const route = useRoute();
  const { inputs } = route.params;

  const handleInputChange = (name, value) => {
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const generateDataArray = () => {
    const dataArray = [];

    for (let i = 1; i <= inputs.length; i++) {
      dataArray.push({
        id: i,
        name: `${i}. ` + inputs[i - 1].text,
        url: inputs[i - 1].imageUri,
      });
    }

    return dataArray;
  };

  const data = generateDataArray();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={{ uri: item.url }} style={styles.slideImage} />
        <Text style={styles.slideText}>{item.name}</Text>
      </View>
    );
  };

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
    paddingTop: 90,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  slideContainer: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#e8e8e8",
  },
  slideImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  slideText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "normal",
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "purple",
  },
});

export default StepByStepMode;

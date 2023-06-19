import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  Pressable,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  HStack,
  Input,
  VStack,
  Heading,
} from "native-base";
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function SearchBar() {
  const [showSquare, setShowSquare] = useState(false);
  const [selectedStars, setSelectedStars] = useState([]);
  const [pressedStars, setPressedStars] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [pressedTimes, setPressedTimes] = useState([]);

  const handleFilterIconPress = () => {
    setShowSquare(true);
  };

  const handleCloseModal = () => {
    setShowSquare(false);
  };

  const handleOverlayPress = () => {
    setShowSquare(false);
  };

  const handleContainerPress = (event) => {
    event.stopPropagation(); // Stop event propagation when the container is pressed
  };

  const handleStarPress = (starValue) => {
    if (selectedStars.includes(starValue)) {
      setSelectedStars(selectedStars.filter((value) => value !== starValue));
      setPressedStars(pressedStars.filter((value) => value !== starValue));
    } else {
      setSelectedStars([...selectedStars, starValue]);
      setPressedStars([...pressedStars, starValue]);
    }
  };

  const isStarSelected = (starValue) => {
    return selectedStars.includes(starValue);
  };

  const isStarPressed = (starValue) => {
    return pressedStars.includes(starValue);
  };

  const handleTimePress = (timeValue) => {
    if (selectedTimes.includes(timeValue)) {
      setSelectedTimes(selectedTimes.filter((value) => value !== timeValue));
      setPressedTimes(pressedTimes.filter((value) => value !== timeValue));
    } else {
      setSelectedTimes([...selectedTimes, timeValue]);
      setPressedTimes([...pressedTimes, timeValue]);
    }
  };

  const isTimeSelected = (timeValue) => {
    return selectedTimes.includes(timeValue);
  };

  const isTimePressed = (timeValue) => {
    return pressedTimes.includes(timeValue);
  };

  return (
    <NativeBaseProvider>
      <Box alignItems="center" mt={4}>
        <HStack space={0} alignItems="center">
          <Input
            variant="rounded"
            mx={3}
            placeholder="Explore Recipes"
            w="80%"
          />
          <Pressable onPress={handleFilterIconPress}>
            <Image
              source={require("../../assets/filtericon.jpg")}
              style={{ width: 40, height: 40 }}
            />
          </Pressable>
        </HStack>
      </Box>

      <Modal visible={showSquare} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback onPress={handleContainerPress}>
              <View style={styles.modalContainer}>
                <Pressable
                  style={styles.closeButton}
                  onPress={handleCloseModal}
                >
                  <FontAwesomeIcon icon={faTimes} size={18} color="black" />
                </Pressable>
                <VStack alignItems="flex-start">
                  <Heading size="md" alignSelf="center" marginBottom={5}>
                    Filter Search
                  </Heading>
                  <Heading size="sm">Time</Heading>
                  <HStack space={3}>
                    {["All", "Newest", "Oldest", "Popularity"].map((value) => (
                      <Pressable
                        key={value}
                        onPress={() => handleTimePress(value)}
                        style={[
                          styles.timeView,
                          isTimeSelected(value) && styles.selectedTimeView,
                          isTimePressed(value) && styles.pressedTimeView,
                        ]}
                      >
                        <Text
                          style={[
                            styles.timeText,
                            isTimeSelected(value) && styles.selectedTimeText,
                            isTimePressed(value) && styles.pressedTimeText,
                          ]}
                        >
                          {value}
                        </Text>
                      </Pressable>
                    ))}
                  </HStack>
                  <Heading size="sm">Rating</Heading>
                  <VStack>
                    <HStack space={3}>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <Pressable
                          key={value}
                          onPress={() => handleStarPress(value)}
                          style={[
                            styles.starView,
                            isStarSelected(value) && styles.selectedStarView,
                            isStarPressed(value) && styles.pressedStarView,
                          ]}
                        >
                          <Text
                            style={[
                              styles.starText,
                              isStarSelected(value) && styles.selectedStarText,
                              isStarPressed(value) && styles.pressedStarText,
                            ]}
                          >
                            {value}
                          </Text>
                          <FontAwesomeIcon
                            icon={faStar}
                            size={18}
                            color={
                              isStarPressed(value)
                                ? "white"
                                : isStarSelected(value)
                                ? "#9747FF"
                                : "#9747FF"
                            }
                            style={styles.starIcon}
                          />
                        </Pressable>
                      ))}
                    </HStack>
                    <Heading size="sm">Category</Heading>

                    <HStack space={3}>
                      {["AII", "Cereal", "Vegetables", "Dinner"].map(
                        (value) => (
                          <Pressable
                            key={value}
                            onPress={() => handleTimePress(value)}
                            style={[
                              styles.timeView,
                              isTimeSelected(value) && styles.selectedTimeView,
                              isTimePressed(value) && styles.pressedTimeView,
                            ]}
                          >
                            <Text
                              style={[
                                styles.timeText,
                                isTimeSelected(value) &&
                                  styles.selectedTimeText,
                                isTimePressed(value) && styles.pressedTimeText,
                              ]}
                            >
                              {value}
                            </Text>
                          </Pressable>
                        )
                      )}
                    </HStack>
                    <HStack space={3}>
                      {["Chinese", "Local Dish", "Fruit", "Breakfast"].map(
                        (value) => (
                          <Pressable
                            key={value}
                            onPress={() => handleTimePress(value)}
                            style={[
                              styles.timeView,
                              isTimeSelected(value) && styles.selectedTimeView,
                              isTimePressed(value) && styles.pressedTimeView,
                            ]}
                          >
                            <Text
                              style={[
                                styles.timeText,
                                isTimeSelected(value) &&
                                  styles.selectedTimeText,
                                isTimePressed(value) && styles.pressedTimeText,
                              ]}
                            >
                              {value}
                            </Text>
                          </Pressable>
                        )
                      )}
                    </HStack>

                    <HStack space={3}>
                      {["Spanish", "Lunch"].map((value) => (
                        <Pressable
                          key={value}
                          onPress={() => handleTimePress(value)}
                          style={[
                            styles.timeView,
                            isTimeSelected(value) && styles.selectedTimeView,
                            isTimePressed(value) && styles.pressedTimeView,
                          ]}
                        >
                          <Text
                            style={[
                              styles.timeText,
                              isTimeSelected(value) && styles.selectedTimeText,
                              isTimePressed(value) && styles.pressedTimeText,
                            ]}
                          >
                            {value}
                          </Text>
                        </Pressable>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
                <Pressable
                  style={styles.filterButton}
                  onPress={handleCloseModal}
                >
                  <Text style={styles.filterButtonText}>Filter</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    marginTop: 400,
    backgroundColor: "white",
    borderRadius: 60,
    padding: 16,
    width: 390,
    height: 500,
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 50,
    backgroundColor: "#9747FF",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 175,
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  starView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: "#9747FF",
    borderWidth: 1,
    marginTop: 10,
  },
  selectedStarView: {
    backgroundColor: "#9747FF",
  },
  starText: {
    marginRight: 6,
  },
  selectedStarText: {
    color: "white",
  },
  starIcon: {
    borderWidth: 1,
    marginRight: 5,
  },
  pressedTimeView: {
    backgroundColor: "#9747FF",
  },
  pressedTimeText: {
    color: "white",
  },
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: "#9747FF",
    borderWidth: 1,
    marginTop: 10,
  },
  selectedTimeView: {
    backgroundColor: "#9747FF",
  },
  timeText: {
    marginRight: 6,
  },
  selectedTimeText: {
    color: "white",
  },
});

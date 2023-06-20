import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NativeBaseProvider,
  Box,
  Image,
  Pressable,
  Heading,
  Center,
  VStack,
  HStack,
} from "native-base";
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

export default function uRecipeDone({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [shared, setShared] = useState(false);
  const route = useRoute();
  const { item } = route.params;

  const handleShareButtonPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayPress = () => {
    setShowModal(false);
  };

  const handleImagePress = () => {
    setShared(true);
    setTimeout(() => {
      setShared(false);
    }, 2000);
  };

  const handleContainerPress = (event) => {
    event.stopPropagation(); // Stop event propagation when the container is pressed
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Image
          source={{
            uri: "https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif",
          }}
          alt="Check Mark GIF"
          style={styles.gif}
        />
      </Box>
      <Center>
        <Heading
          size="2xl"
          top={-200}
          justifyContent="center"
          alignItems="center"
        >
          Cooking Finished!
        </Heading>
        <Heading size="2xl" top={-200}>
          Do you want to
        </Heading>
        <Heading size="2xl" top={-200}>
          share this recipe?
        </Heading>
        <TouchableOpacity
          style={styles.buttonz}
          onPress={() => handleDonePress()}
        >
          <View>
            <Text style={styles.buttonText}>Share</Text>
          </View>
        </TouchableOpacity>
      </Center>

      {/* Modal */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} size={20} color="black" />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={handleContainerPress}>
          <View style={styles.modalContainer}>
            <Heading size="sm" top={-8}>
              Share to
            </Heading>
            <Pressable onPress={handleImagePress}>
              <Image
                source={require("../../../assets/share.png")}
                style={{ width: 400, aspectRatio: 5 }}
              />
            </Pressable>
            {shared && (
              <View style={styles.sharedTextContainer}>
                <Text style={styles.sharedText}>Shared</Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  // Update the closeButton style
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },

  // Add a new style for the closeIconContainer
  closeIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  gif: {
    width: 200,
    height: 200,
    top: -100,
  },
  buttonz: {
    top: -175,
    backgroundColor: "#9747FF",
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 32,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sharedTextContainer: {
    position: "absolute",
    top: -300,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    borderRadius: 10,
  },
  sharedText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

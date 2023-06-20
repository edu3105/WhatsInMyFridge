import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  Platform,
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
  Button,
} from "native-base";
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
export default function RecipeDone({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [shared, setShared] = useState(false);

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
    schedulePushNotification();
  };

  const handleContainerPress = (event) => {
    event.stopPropagation(); // Stop event propagation when the container is pressed
  };
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
          onPress={handleShareButtonPress}
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
                source={require("../../assets/share.png")}
                style={{ width: 400, aspectRatio: 5 }}
                alt="share"
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Recipe successfully shared!",
      body: "Thank you for sharing the recipe",
      data: { data: "goes here" },
      imageUrl: "https://i.imgur.com/ZKi3v8j.png", // Replace with the URL of your desired image
    },
    trigger: { seconds: 1 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
  }

  return token;
}

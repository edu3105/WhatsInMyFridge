//settings.js

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NativeBaseProvider, HStack, IconButton, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
// import SettingsPage from './SettingsPage.js';

// export default function SettingsScreen({navigation}){
//   return (
//     <NativeBaseProvider>
//       <View style = {styles.container}>
//         <Text style={styles.text}>I am screen1</Text>
//         <IconButton
//             position="absolute" top={0} right={0} m={4}
//             icon={<Ionicons name="settings-outline" size={24} />}
//             onPress = {()=>navigation.navigate('NestedScreen1',{msg:"From Screen 1"})}
//             variant="unstyled"
//             colorScheme="gray"
//           />
//       </View>

//     </NativeBaseProvider>
//   );
// }

const SettingsScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Text style={styles.text}>I am screen1</Text>
        <IconButton
          position="absolute"
          top={0}
          right={0}
          m={4}
          icon={<Ionicons name="settings-outline" size={24} />}
          onPress={() => navigation.navigate("NestedScreen1")}
          variant="unstyled"
          colorScheme="gray"
        />
      </View>
    </NativeBaseProvider>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});

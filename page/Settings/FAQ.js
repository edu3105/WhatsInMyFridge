import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { NativeBaseProvider, Box, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function FAQ() {
  const [faqItems, setFaqItems] = useState([
    {
      question: "1. How does the ingredient tracking feature Work?",
      answer:
        "The ingredient tracking feature enables users to keep a record of the ingredients they have in their pantry or kitchen. Users can add ingredients manually. The app will then use this information to suggest recipe based on the available ingredients",
      expanded: false,
    },
    {
      question: "2. What is the purpose of the app?",
      answer:
        "The app is designed to assist users in managing their ingredients and finding recipes. It allows users to track the ingredients they have, reducing food waste and maximizing food resource.",
      expanded: false,
    },
    {
      question: "3. Can I customize the ingredient list in the app?",
      answer:
        "Yes, you can personalize the ingredient list in the app. You have the option to add, remove, or update the ingredients as per your preferences. This flexibility allows you to maintain an accurate inventory of your kitchen supplies.",
      expanded: false,
    },
    {
      question: "4. How frequently is the recipe database updated?",
      answer:
        "The recipe database in the app is regularly updated as users contribute new recipes. The community actively adds and shares recipes, ensuring a diverse and expanding collection of culinary creations. The app also periodically introduces update to enhance user experience and add new features",
      expanded: false,
    },
  ]);

  const toggleAccordion = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].expanded = !updatedFaqItems[index].expanded;
    setFaqItems(updatedFaqItems);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          //bg="coolGray.300"
          showsVerticalScrollIndicator={false}
          mx="5"
          mt="3"
          w={375}
          h={300}
        >
          {faqItems.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => toggleAccordion(index)}
            >
              <View style={styles.accordionItem}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.question}>{item.question}</Text>
                {item.expanded && (
                  <Box style={styles.answerBox}>
                    <Text style={styles.answer}>{item.answer}</Text>
                  </Box>
                )}
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //borderWidth: 1,
    //margin: 10,
    alignItems: "center", // Center items vertically
    justifyContent: "center", // Center items horizontally
  },
  accordionItem: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 8,
    marginBottom: 8,
    padding: 16,
    //justifyContent: "center",
  },
  question: {
    fontWeight: "bold",
    fontSize: 16,
  },
  answerBox: {
    backgroundColor: "#f0f0f0",
    marginTop: 8,
    padding: 16,
  },
  answer: {
    fontSize: 14,
  },
  icon: {
    marginRight: 8,
  },
});

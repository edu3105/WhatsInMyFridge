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

export default function Recommended() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={2} overflow="scroll" px={6}>
          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Grilled-Marinated-Ribeyes_EXPS_SDJJ17_26398_C02_15_3b-12.jpg?resize=522%2C522&w=680",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>

          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.thespruceeats.com/thmb/ABkIbUeYTsxUQZYiFdJTzIK_r9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taiwanese-beef-noodle-soup-4777014-hero-01-e06a464badec476684e513cad44612da.jpg",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>

          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps112106_SD153322A04_02_3b-2.jpg?resize=522%2C522&w=680",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>

          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.dintaifungusa.com/us/image/1294",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>

          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>

          <Box flex={1} height="100%" alignItems="center" py={5}>
            <Box
              maxW="32"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={1 / 1}>
                  <Image
                    source={{
                      uri: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Buffalo-Chicken-Dip_EXPS_FT21_34952_F_0115_1-2.jpg?resize=522%2C522&w=680",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Box>
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}

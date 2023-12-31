import { View, Text, Pressable, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import { styles } from "../theme/index";
import { useNavigation } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");
export default function MovieList({ title, data, hideSeeAll }) {
  let movieName = "Ant-Man and the Wasp: Quantumania";
  const navigation = useNavigation();
  return (
    <View className="mt-8 space-y-4">
      <View className="flex-row justify-between items-center mx-4">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeeAll && (
          <Pressable>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </Pressable>
        )}
      </View>
      {/* Movie row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.push("Movie", item)}>
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/images/moviePoster2.png")}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300 ml-1">
                  {movieName.length > 14 ? movieName.slice(0, 14) + "..." : movieName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

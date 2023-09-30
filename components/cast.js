import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";

export default function Cast({ cast, navigation }) {
  let actorName = "Keanu Reeves";
  let characterName = "John Wick";
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-6">Top Cast</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((actor, index) => (
            <Pressable key={index} className="mr-4 items-center" onPress={() => navigation.navigate("Actor", actor)}>
              <View className="h-20 w-20 overflow-hidden rounded-full items-center border border-neutral-500">
                <Image source={require("../assets/images/castImage1.png")} className="h-24 w-20 rounded-full" />
              </View>
              <Text className="text-white text-xs mt-1">
                {characterName.length > 10 ? characterName.slice(0, 10) + "..." : characterName}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {characterName.length > 10 ? characterName.slice(0, 10) + "..." : characterName}
              </Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}

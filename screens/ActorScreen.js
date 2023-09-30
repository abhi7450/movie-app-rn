import { View, Text, ScrollView, Pressable, Image, Dimensions, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles, theme } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function ActorScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);

  return (
    <View className="flex-1 bg-neutral-900">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="mt-3">
        <View className="w-full">
          {/* Back Button */}

          <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4">
            <Pressable style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
            </Pressable>
            <Pressable className="rounded-xl p-1" onPress={() => toggleFavorite(!isFavorite)}>
              <HeartIcon size={35} color={isFavorite ? theme.background : "white"} />
            </Pressable>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

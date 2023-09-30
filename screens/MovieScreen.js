import { View, Text, ScrollView, Pressable, TouchableOpacity, Image, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { theme, styles } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";

let { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  const navigation = useNavigation();
  let movieName = "Ant-Man and the Wasp: Quantumania";

  // useEffect(() => {}, [item]);

  return (
    <View className="flex-1 bg-neutral-900">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="mt-3">
        <View className="w-full">
          {/* Back Button */}

          <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
            <Pressable style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
            </Pressable>
            <Pressable className="rounded-xl p-1" onPress={() => toggleFavorite(!isFavorite)}>
              <HeartIcon size={35} color={isFavorite ? theme.background : "white"} />
            </Pressable>
          </SafeAreaView>
          <View>
            <Image source={require("../assets/images/moviePoster2.png")} style={{ width, height: height * 0.55 }} />
            <LinearGradient
              colors={["transparent", "rgba(23, 23, 23, 0.8)", " rgba(23, 23, 23, 1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        </View>

        {/* Movie Details */}
        <View style={{ marginTop: -height * 0.09 }} className="space-y-3">
          <Text className="text-white font-bold text-3xl text-center tracking-wider">{movieName}</Text>
          {/* Status , Release ,Runtime */}
          <Text className="text-neutral-400 text-center text-base font-semibold">Released • 2022 • 170m</Text>

          {/* Genres */}
          <View className="flex-row justify-center space-x-2 mx-4">
            <Text className="text-neutral-400 text-center text-base font-semibold">Action •</Text>
            <Text className="text-neutral-400 text-center text-base font-semibold">Thrill•</Text>
            <Text className="text-neutral-400 text-center text-base font-semibold">Comedy</Text>
          </View>

          {/* description */}
          <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aut iste inventore. At rerum possimus odio
            corporis officia veritatis nesciunt doloribus vero commodi, dignissimos ullam consectetur nihil aut
            deserunt. Neque. Corrupti impedit cumque sunt rerum rem perspiciatis dicta ipsam nisi reprehenderit? Dolor
            natus ipsa ea vitae ducimus excepturi, voluptate quod sunt. Blanditiis sed quod nulla at temporibus ipsum
            sint dolorem? Nulla ad ipsa ex nostrum, maiores inventore amet, alias doloremque eaque aliquam excepturi
            modi. Similique, repellendus molestias! Laudantium recusandae in, fugit autem porro totam ut nam aut,
          </Text>
        </View>

        {/* Cast */}
        <Cast navigation={navigation} cast={cast} />

        {/* Similar Movie*/}
        <MovieList title="Similar Movies" data={similarMovies} hideSeeAll={true} />
      </ScrollView>
    </View>
  );
}

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
// import { styles } from "../theme";

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcomimg] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mt-3">
        {/* Search Bar and logo*/}
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          {/* TODO: Change the M's color*/}
          <Text className="text-white font-bold text-3xl">Movies</Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Trending Movies Carousel */}
        <TrendingMovies data={trending} />

        {/* Upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />

        {/* Top rated movies row */}
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
}

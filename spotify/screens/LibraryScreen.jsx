import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";
import ShowCard from "../components/ShowCard";
import { LinearGradient } from 'expo-linear-gradient';
import TrendingCard from "../components/TrendingCard";
import { trendingData,showsData, mixData, cardData, showsDataCopy } from "../data/Data";
import MixCard from "../components/MixCard";
import LibraryHeader from "../components/LibraryHeader";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#111','#111','#111','#111',]}
      >
      <ScrollView>
      <View style={styles.subContainer}>
      <LibraryHeader />
      <View style={styles.showContainer}>
        <View style={styles.cardContainer}>
        <ScrollView>
          {showsData.map(dat => 
          <ShowCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
            )}
        </ScrollView>
        <ScrollView>
          {showsDataCopy.map(dat => 
          <ShowCard key={dat.title} title={dat.title} artists={dat.artists} img={dat.img} />
            )}
        </ScrollView>
        </View>
      </View>
      </View>
        </ScrollView>
        </LinearGradient>
    </SafeAreaView>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
  },
  subContainer:{
    paddingRight: 15,
    paddingLeft:15
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  showContainer: {
    marginTop: 30,
    flex: 1,
    minHeight:60
  },
  bestContainer:{
    flex: 1,
    marginTop:30,
  }
})
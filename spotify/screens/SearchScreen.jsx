import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { searchCard01,searchCard02 } from "../data/Data";
import SearchHeader from "../components/SearchHeader";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";


const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#111', '#111', '#111', '#111',]}
      >
        <ScrollView>
          <View style={styles.subContainer}>
            <View>
              <SearchHeader />
            </View>
            <View style={styles.searchBarContainer}>
              <SearchBar />
            </View>
            <View style={styles.topicContainer}>
              <Text style={styles.text}>Browse All</Text>
            </View>
            <View style={styles.cardContainer}> 
              <ScrollView>
                {searchCard01.map(dat =>
                  <SearchCard key={dat.text} imageUrl={dat.imageUrl} text={dat.text} backgroundColor={dat.backgroundColor} />
                )}
              </ScrollView>
              <ScrollView>
                {searchCard02.map(dat =>
                  <SearchCard key={dat.text} imageUrl={dat.imageUrl} text={dat.text} backgroundColor={dat.backgroundColor} />
                )}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default SearchScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  subContainer: {
    paddingRight: 15,
    paddingLeft: 15
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  topicContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    minHeight: 60
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
})
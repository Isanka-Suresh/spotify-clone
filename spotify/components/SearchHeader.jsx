import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SearchHeader = () => {
    return (
        <View style={styles.topCont}>
            <View>
              <Text style={styles.text}>Search</Text>
            </View>
          </View>
      )
}

export default SearchHeader

const styles = StyleSheet.create({
    topCont:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop: 40,
        justifyContent:"space-between"
      },
      text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
      },
})
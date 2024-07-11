import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBox}>
      <Feather name="search" size={24} color="black" style={styles.searchIcon} />
      <Text style={styles.text}>What do you  want to Listen to ?</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBox:{
        backgroundColor:"white",
        minHeight:45,
        maxHeight:50,
        minWidth:380,
        maxWidth:400,
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingHorizontal:5
    },
    text:{
        marginLeft:5,
        fontSize:16,
        color:"gray",
        fontWeight:"bold"
    }
    
})
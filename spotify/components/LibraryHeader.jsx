import { StyleSheet, Text, View,Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'

const LibraryHeader = () => {
  return (
    <View style={styles.topCont}>
        <Image style={{height:50,width:50,borderRadius:50}} source={{uri:"https://i.scdn.co/image/ab67706c0000bebb12c675c3cef66412b3c88a38"}}/>
        <View>
          <Text style={styles.text}>Your Library</Text>
        </View>
        <View style={styles.iconCont}>
          <Feather style={styles.icon} name="search" size={30} color="white" />
          <Feather style={styles.icon} name="plus" size={30} color="white" />
        </View>
      </View>
  )
}

export default LibraryHeader

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
      iconCont:{
        flexDirection:"row"
      },
      icon:{
        marginLeft:15
      }
})
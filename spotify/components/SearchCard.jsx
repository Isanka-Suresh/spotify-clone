import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchCard = ({ imageUrl, text, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.text}>{text}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 140,
        maxWidth: 180,
        minHeight:100,
        maxHeight: 150,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical:5,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        position: 'absolute',
        top: 35,
        left: 125,
        width: 70,
        height: 70,
        borderRadius: 15,
        transform: [{ rotate: '45deg' }]
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight:"bold"
    },
});

export default SearchCard;

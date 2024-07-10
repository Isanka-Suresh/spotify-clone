import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    function openHome() {
        navigation.navigate("Main");
    }
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <View
                    style={{
                        height: 80
                    }} />
                <Entypo
                    style={{
                        textAlign: "center"
                    }}
                    name="spotify"
                    size={80}
                    color="white" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 40,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 40,
                        marginHorizontal: 5
                    }}>
                    Listen to your favorite songs
                </Text>
                <View
                    style={{
                        height: 80
                    }} />
                <Pressable
                onPress={openHome}
                    style={{
                        backgroundColor: "#1DB954",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Text>Sign Up with Spotify</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <MaterialIcons
                        name="smartphone"
                        size={24}
                        color="white" />
                    <Text
                        style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>Continue with Mobile</Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <AntDesign
                        name="google"
                        size={24}
                        color="red" />
                    <Text
                        style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>Sign in with Google</Text>
                </Pressable>
                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                    <AntDesign
                        name="facebook-square"
                        size={24}
                        color="lightblue" />
                    <Text
                        style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>Sign in with Facebook</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
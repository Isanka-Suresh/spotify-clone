import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const tab = createBottomTabNavigator();

function BottomTabs(){
    return(
        <tab.Navigator>
            <tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarLabelStyle: {color: "white"},
                tabBarIcon: ({focused}) =>
                    focused ? (
                        <Entypo name="home" size={24} color="black" />
                    ):(
                        <Feather name="home" size={24} color="black" />
                    )
                    }
                }  />
                <tab.Screen 
            name="profile" 
            component={ProfileScreen} 
            options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarLabelStyle: {color: "white"},
                tabBarIcon: ({focused}) =>
                    focused ? (
                        <Ionicons name="person" size={24} color="black" />
                    ):(
                        <Ionicons name="person-outline" size={24} color="black" />
                    )
                    }
                }  />
        </tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();
function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
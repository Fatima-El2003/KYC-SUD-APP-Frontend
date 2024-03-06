import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './Screens/HomeScreen'
import Services from './Screens/Services' 
import Secteurs from './Screens/Secteurs' 
import Rejoindre from './Screens/Rejoindre' 
//Screen names
const HomeName = 'Home';
const ServicesName = 'Services';
const SecteursName = 'Secteurs';
const RejoindreName= 'Rejoindre';

const Tab = createBottomTabNavigator();

export default function MainContainer () {
    return (
       <NavigationContainer>
         <Tab.Navigator
         initialRouteName={HomeName}
         screenOptions= {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === HomeName){
                    iconName = focused ? 'home' : 'home-outline'
                } else if(rn === ServicesName){
                    iconName = focused ? 'list' : 'list-outline'
                } else if(rn === SecteursName){
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn === RejoindreName){
                    iconName = focused ? 'settings' : 'settings-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
         })}
         tabBarOptions = {{
            activeTintColor: '#47BE8A',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10,fontsize: 10 },
            
         }}>

            <Tab.Screen name={HomeName} component={HomeScreen} />
            <Tab.Screen name={ServicesName} component={Services} />
            <Tab.Screen name={SecteursName} component={Secteurs} />
            <Tab.Screen name={RejoindreName} component={Rejoindre} />
         </Tab.Navigator>

       </NavigationContainer>
    )
}
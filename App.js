import * as React from 'react';
import { StyleSheet , ScrollView} from 'react-native';;
import Second from './Navigation/Second';
import Company from './Navigation/Company';
import Consultant from './Navigation/Consultant';
import Finance from './components/Finance/Finance';
import MainContainer from './Navigation/MainContainer';
import Management from './components/Management/Management';
import FormtForm from './components/FormtForm/FormtForm';
import HomeScreen from './Navigation/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <>

<FormtForm />


  

    </>
  )
}
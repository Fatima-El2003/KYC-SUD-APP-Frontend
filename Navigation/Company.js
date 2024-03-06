import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Second = ({navigation }) => {
  return (
    <>
      <View style={styles.container}> 
          <Image source={require('../assets/logocolor.png')} style={styles.logo} />
          <View style={styles.content}>
            <Image source={require('../assets/company.jpg')} style={styles.company__img} />
            <View style={styles.componentText}>
              <Text style={styles.headText}>Know your Company</Text>
              <View style={styles.subText}>
              <Text style={styles.centerdText}>Notre engagement à connaître votre entreprise de l'intérieur nous permet de créer des solutions sur mesure qui s'alignent parfaitement sur vos objectifs</Text>
              </View>
            </View>
            <View style={styles.icons}>
              <Ionicons name="ellipse" size={10} color='grey'/>
              <Ionicons name="ellipse" size={10} color='black'/>
              <Ionicons name="ellipse" size={10} color='grey'/>
            </View>
            <View style={styles.ButtonPadding}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Consultant")}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            </View>
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems:'center',
        backgroundColor: '#D6EAE1'
    },
    logo:{
      width: 80,
      height: 40,
      marginTop:110,
    },
    company__img:{
      width:240,
      height:240,
      borderRadius:110,
    },
    content:{
      marginTop:60,
      alignItems: 'center',
    },
    componentText:{
      alignItems: 'center',
      marginTop:40,
    },
    headText:{
      fontWeight:'bold',
      fontSize:17,
    },
    subText:{
      alignItems: 'center',
      marginTop:20,
      textAlign:'center',
      paddingRight:15,
      paddingLeft:15,
    },
    centerdText:{
      textAlign:'center',
      fontSize:15,
      color:'black',
      lineHeight:24,
    },
    icons:{
      flexDirection: 'row',
      paddingTop:40,
    },
    ButtonPadding:{
      paddingTop:20,
    },
    button: {
      backgroundColor: '#47BE8A',
      paddingTop:10,
      paddingBottom:10,
      paddingRight:40,
      paddingLeft:40,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
})

export default Second

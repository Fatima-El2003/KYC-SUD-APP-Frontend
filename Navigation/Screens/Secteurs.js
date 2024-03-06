import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import { sharedStyles } from '../../components/sharedStyles/sharedStyles'; 
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';

export default function Secteurs({navigation}){
    return(
        <ScrollView>
            <View >
                <View style={sharedStyles.heading}>
                    <Text style={sharedStyles.heading_title}>Services</Text>
                    <View style={sharedStyles.heading_flex}>        
                        <Image source={require('../../assets/deco.png')} style={sharedStyles.heading_img}/>                   
                        <Text style={sharedStyles.heading_text}>Le conseil et l'expertise en matiere financiere et juridique</Text>                                   
                    </View>
                </View>
                <View style={styles.secteur__content}>
                <View style={styles.box}>
                    <Text style={styles.head}>Agricole</Text>
                    <Text style={styles.info}>Notre objectif c'est d'accompagner vos équipes dans la mise en place de votre démarche 'Lean' pour vous assurer une performance durable</Text>
                    <CustomButton title="Lire Plus" />
                    
                </View>
                <View style={styles.img}>
                <Image source={require('../../assets/agricole.jpg')} style={styles.image} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.head}>Agricole</Text>
                    <Text style={styles.info}>Notre objectif c'est d'accompagner vos équipes dans la mise en place de votre démarche 'Lean' pour vous assurer une performance durable</Text>
                    <CustomButton title="Lire Plus" />
                   
                </View>
                <View style={styles.img}>
                <Image source={require('../../assets/agricole.jpg')} style={styles.image} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.head}>Agricole</Text>
                    <Text style={styles.info}>Notre objectif c'est d'accompagner vos équipes dans la mise en place de votre démarche 'Lean' pour vous assurer une performance durable</Text>
                    <CustomButton title="Lire Plus" />
                    
                </View>
                <View style={styles.img}>
                <Image source={require('../../assets/peche.jpg')} style={styles.image} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.head}>Agricole</Text>
                    <Text style={styles.info}>Notre objectif c'est d'accompagner vos équipes dans la mise en place de votre démarche 'Lean' pour vous assurer une performance durable</Text>
                    <CustomButton title="Lire Plus" />           
                </View>
                <View style={styles.img}>
                <Image source={require('../../assets/transport.jpg')} style={styles.image} />
                </View>
                
                </View>
            </View>
            <Footer/>
         </ScrollView>
    )
}
const styles = StyleSheet.create({
    secteur__content: {
    marginTop:50,

    },
    box: {
    backgroundColor:"white", 
      padding: 20,
      marginLeft:20,
      marginRight:20,
      
    },
    head: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign:'center',
      color:"#47BE8A",
    },
    info: {
      fontSize: 16,
      lineHeight: 24,
      textAlign:'center',
      padding:15,
      marginBottom:20,
    },
    image: {
        width:"100%",
        height: 200,
        resizeMode: 'cover',

    },
    img: {
        marginLeft:20,
        paddingRight:20,
    }
  });
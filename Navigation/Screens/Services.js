import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import { sharedStyles } from '../../components/sharedStyles/sharedStyles'; 
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';
export default function Services({navigation}){
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={sharedStyles.heading}>
                    <Text style={sharedStyles.heading_title}>Services</Text>
                    <View style={sharedStyles.heading_flex}>        
                        <Image source={require('../../assets/deco.png')} style={sharedStyles.heading_img}/>                   
                        <Text style={sharedStyles.heading_text}>Le conseil et l'expertise en matiere financiere et juridique</Text>                                      
                    </View>

                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box}>
                    <Image source={require('../../assets/finance.png')} style={styles.box__image}/>
                    <Text style={styles.title}>Finance</Text>
                    <Text style={styles.detali}>Suivi Comptable et réakisation des comptes annuels:bilan,compte de résuktat, annexe légales..</Text>
                    <CustomButton title="Lire Plus" />   
                </View>
                <View style={styles.box}>
                    <Image source={require('../../assets/finance.png')} style={styles.box__image}/>
                    <Text style={styles.title}>Management de qualité</Text>
                    <Text style={styles.detali}>Suivi Comptable et réakisation des comptes annuels:bilan,compte de résuktat, annexe légales..</Text>
                    <CustomButton title="Lire Plus" />   
                </View>
                <View style={styles.box}>
                    <Image source={require('../../assets/finance.png')} style={styles.box__image}/>
                    <Text style={styles.title}>Marketing</Text>
                    <Text style={styles.detali}>Suivi Comptable et réakisation des comptes annuels:bilan,compte de résuktat, annexe légales..</Text>
                    <CustomButton title="Lire Plus" />   
                </View>
                <View style={styles.box}>
                    <Image source={require('../../assets/finance.png')} style={styles.box__image}/>
                    <Text style={styles.title}>Ressources Humaines</Text>
                    <Text style={styles.detali}>Suivi Comptable et réakisation des comptes annuels:bilan,compte de résuktat, annexe légales..</Text>
                    <CustomButton title="Lire Plus" />   
                </View>
                <View style={styles.box}>
                    <Image source={require('../../assets/finance.png')} style={styles.box__image}/>
                    <Text style={styles.title}>Finance</Text>
                    <Text style={styles.detali}>Suivi Comptable et réakisation des comptes annuels:bilan,compte de résuktat, annexe légales..</Text>
                    <CustomButton title="Lire Plus" />   
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}
const styles = StyleSheet.create ({
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20,
      },
      box: {
        backgroundColor: '#e0e0e0',
        
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:20,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      detail: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
      },
      box__image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginBottom: 10,
      },
    
})
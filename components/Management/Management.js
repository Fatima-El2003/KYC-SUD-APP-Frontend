import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import Footer from '../Footer/Footer';
export default function Management () {
    return(
        
        <ScrollView>
            <View style={styles.management__container}>
            <View style={styles.management__head}>
                        <Image source={require('../../assets/management1.jpg')} style={styles.head__img} />
                        <Text style={styles.management__title}>Management et Qualité</Text>
                    </View>
                <View style={styles.management__content}>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_title}>Accompagnement</Text>
                        <Text style={styles.management__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                        <Image  source={require('../../assets/accompagnement.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_title}>Formation</Text>
                        <Text style={styles.management__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                        <Image  source={require('../../assets/formation.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_title}>Audit</Text>
                        <Text style={styles.management__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                        <Image  source={require('../../assets/audit.png')} style={styles.management__img}/>
                    </View>
                    
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_title}>Documentation</Text>
                        <Text style={styles.management__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                        <Image  source={require('../../assets/documentation.png')} style={styles.management__img}/>
                    </View>
                    <Image />
                </View>
            </View>
            <Footer />
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    management__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 20, // Adding padding for spacing
    },

    management__img:{
        width:380,
        height:250,
        marginTop:20,
        marginBottom:20,
    },
    management__head: {    
        alignItems: 'center',
    },
    head__img: {
        position: 'absolute', 
        width:380,
        height:250,
        resizeMode: 'cover', // Resize mode for the image
        zIndex: -1,  
        marginTop:20,  
    },
 
    management__title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop:60,
    },
    management__content: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:160,
      },
      management__box: {
        padding: 20,
      },
      management__box_title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign:'center',
      },
      management__box_text: {
        fontSize: 18,
        color: '#333333',
        marginBottom: 40,
      },
      management__img: {
        width: 280,
        height: 180,
        resizeMode: 'cover',
      },
    




});

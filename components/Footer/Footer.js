import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import { sharedStyles } from '../../components/sharedStyles/sharedStyles'; 
import CustomButton from '../CustomButton/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Footer () {
    return(
        <ScrollView>
            <Text style={styles.footer__contact}>Contactez Nous sur</Text>
            <CustomButton title="+212 6 60 67 04 95"/>
            <View style={styles.footer__container}>
                <Image source={require('../../assets/logocolor.png')} style={styles.footer__img}/>
                <Text style={styles.footer__text}>Nous sommes un cabinet de conseil en solution finance, Ressources humaines, management de qualité et marketing digital</Text>
                <View style={styles.footer__icons}>
                    <Ionicons name="shield-checkmark" style={styles.footer__icon}/>
                    <Ionicons name="shield-checkmark" style={styles.footer__icon}/>
                    <Ionicons name="shield-checkmark" style={styles.footer__icon}/>
                </View>

                <View style={styles.footer__info}>
                    <Text style={styles.footer__info_head}>Services</Text>
                    <View style={styles.footer__info_elements}>
                        <Text style={styles.footer__info_item}>Finance</Text>
                        <Text style={styles.footer__info_item}>Management Qualité</Text>
                        <Text style={styles.footer__info_item}>Marketing Digital</Text>
                        <Text style={styles.footer__info_item}>Ressources Humaines</Text>
                    </View>
                </View>

                <View style={styles.footer__info}>
                    <Text style={styles.footer__info_head}>Secteurs</Text>
                    <View style={styles.footer__info_elements}>
                        <Text style={styles.footer__info_item}>Agricole-Agroalimentaire</Text>
                        <Text style={styles.footer__info_item}>Peche Maritime</Text>
                        <Text style={styles.footer__info_item}>Transport et Logistique</Text>
                        <Text style={styles.footer__info_item}>Tourisme</Text>
                    </View>
                </View>

                <View style={styles.footer__info}>
                    <Text style={styles.footer__info_head}>Contact</Text>
                    <View style={styles.footer__info_elements}>
                        <Text style={styles.footer__info_item}>Immeuble n° 252, 2 ème étage, Avenue Ibn Alhaitam, Tassila 80000, Agadir</Text>
                        <Text style={styles.footer__info_item}>contact@kycsudconsulting.com</Text>
                        <Text style={styles.footer__info_item}>+212 5 25 10 51 27</Text>
                        <Text style={styles.footer__info_item}>+212 6 60 67 04 95</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer__copyright}>
                    <Text>2023.kycSudConsulting. Tous les droits sont réservés</Text>
                </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    footer__contact: {
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:20,
    },
    footer__container: {
        marginTop:30,
        backgroundColor:'grey',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    footer__img: {
        width:150,
        height:80,
        marginTop:80,
        marginBottom:50,
    },
    footer__text: {
        textAlign:'center',
        paddingLeft:15,
        paddingRight:15,
        fontSize:16,
        lineHeight:25,
    },
    footer__icons: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:60,
        marginBottom:30,
    },
    footer__icon: {
        fontSize:20,
        backgroundColor:'white',
        marginRight:15,
        borderRadius:55,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
        color:"#47BE8A",
    },
    footer__info: {
        marginTop:20,
    },
    footer__info_head: {
        fontSize:20,
        fontWeight:700,
        color:"#47BE8A",
        textAlign:'center',
    },
    footer__info_elements: {
        marginTop:40,
    },
    footer__info_item: {
        fontSize:14,
        marginBottom:30,
        textAlign:'center',
    },
    footer__copyright: {
        backgroundColor:"#47BE8A",
        padding:10,
    }

})
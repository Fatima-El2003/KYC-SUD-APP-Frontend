import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import Footer from '../Footer/Footer';
export default function Finance () {
    return(
        
        <ScrollView>
            <View style={styles.finance__container}>
            <View style={styles.finance__head}>
                        <Image source={require('../../assets/finance1.jpg')} style={styles.head__img} />
                        <Text style={styles.finance__title}>Finance</Text>
                    </View>
                <View style={styles.finance__content}>
                    <View style={styles.finance__box}>
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <View style={styles.finance__box}>
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <View style={styles.finance__box}>
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <Image  source={require('../../assets/finance3.jpg')} style={styles.finance__img}/>
                    <View style={styles.finance__box}>
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <View style={styles.finance__box}>
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <View style={styles.finance__box}> 
                        <Text style={styles.finance__box_title}>La supérvision et la révision comptablr</Text>
                        <View style={styles.finance__border}></View>
                        <Text style={styles.finance__box_text}>Suivi comptable et réalisation des comptes annuels: bilan, compte de resultat, annexe légale</Text>
                    </View>
                    <Image />
                </View>
            </View>
            <Footer />
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    finance__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 20, // Adding padding for spacing
    },

    finance__img:{
        width:380,
        height:250,
        marginTop:20,
        marginBottom:20,
    },
    finance__head: {    
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
 
    finance__title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop:60,
    },
    finance__content: {
        marginTop: 200,
        flex:1,
        alignItems:'center',
    },
    finance__box: {
        padding: 10,
        marginBottom: 10, // Adding margin at the bottom of each box
    },

    finance__box_title: {
        fontSize:20,
        fontWeight:600,        
    },
    finance__border: {
        marginTop:10,
        backgroundColor:'grey',
        width:40,
        height:3,
    },
    finance__box_text: {
        marginTop:20,
        fontSize:16,
    }
});

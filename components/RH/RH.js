import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import Footer from '../Footer/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Marketing () {
    return(
        
        <ScrollView>
            <View style={styles.management__container}>
            <View style={styles.management__head}>
                        <Image source={require('../../assets/hr.jpg')} style={styles.head__img} />
                        <Text style={styles.management__title}>Ressources Humaines</Text>
                    </View>
                <View style={styles.management__content}>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_text}>Nous intervenons en tant que prestataire extérieur sollicité en qualité de conseil, nous accompagnons et apportons 
                        de l’aide aux entreprises dans leur stratégie RH : formation, recrutement, audit social…etc. Nous identifions les besoins de l’entreprise et effectuons un diagnostic de la situation pour orienter nos clients vers des solutions adéquates qui pourront améliorer leur stratégie RH.</Text>
                        <Image  source={require('../../assets/hr1.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_text}>Notre vision du côté ‘’ressources humaines” est de placer l’Homme au sein de nos préoccupations, par l’insertion dans le monde professionnel (recrutement), ainsi que de se servir en tant que tremplin pour les collaborateurs désireux de franchir des pas d’évolution dans leurs carrières, et cela par les multiples programmes de formation que nous proposons.
                        </Text>
                        <Image  source={require('../../assets/hr2.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.hr}>
                        <View style={styles.hr_box}> 
                            <Text style={styles.hr_title}>Formation</Text>
                            <Text style={styles.hr_text}>KYC Sud Consulting sert de tremplin pour les collaborateurs désireux de franchir des pas d’évolution dans leurs carrières, 
                                et ce par les multiples programmes de formation qu’elle propose, elle accompagne également les entités (sociétés ; Coopératives ; 
                                associations ; PME ; TPE…) dans l’identification de leurs besoins en matière de 
                                formation et leur établit des plans de formation personnalisés pour atteindre les objectifs spécifiques et généraux qu’elles fixent.</Text>
                        </View> 
                        <View style={styles.hr_box}>
                            <Text style={styles.hr_title}>Mesure de climat social</Text>
                            <Text style={styles.hr_text}>KYC Sud Consulting sert de tremplin pour les collaborateurs désireux de franchir des pas d’évolution dans leurs carrières, 
                                et ce par les multiples programmes de formation qu’elle propose, elle accompagne également les entités (sociétés ; Coopératives ; 
                                associations ; PME ; TPE…) dans l’identification de leurs besoins en matière de 
                                formation et leur établit des plans de formation personnalisés pour atteindre les objectifs spécifiques et généraux qu’elles fixent.</Text>
                        </View> 
                        <View style={styles.hr_box}>
                            <Text style={styles.hr_title}>Organisation de conférences et de séminaires</Text>
                            <Text style={styles.hr_text}>KYC Sud Consulting sert de tremplin pour les collaborateurs désireux de franchir des pas d’évolution dans leurs carrières, 
                                et ce par les multiples programmes de formation qu’elle propose, elle accompagne également les entités (sociétés ; Coopératives ; 
                                associations ; PME ; TPE…) dans l’identification de leurs besoins en matière de 
                                formation et leur établit des plans de formation personnalisés pour atteindre les objectifs spécifiques et généraux qu’elles fixent.</Text>
                        </View>    
                    </View>
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
      hr: {
        marginTop:20,
      },
      hr_box: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 8,
        marginBottom: 25,
        textAlign:'center',
        width:280,
        elevation: 5,
        // Add shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Add more styling properties as needed
      },
      hr_title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'center',
      },
      hr_box_text: {
        fontSize: 14,
        color: '#333333',
        // Add more styling properties as needed
      },
      hr_text: {
        lineHeight:22,
      }

});

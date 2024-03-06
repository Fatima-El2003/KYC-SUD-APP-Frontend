import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet } from 'react-native';
import Footer from '../Footer/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Marketing () {
    return(
        
        <ScrollView>
            <View style={styles.management__container}>
            <View style={styles.management__head}>
                        <Image source={require('../../assets/meeting.jpg')} style={styles.head__img} />
                        <Text style={styles.management__title}>Management et Qualité</Text>
                    </View>
                <View style={styles.management__content}>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_text}>Nous accompagnons et guidons nos clients afin de les aider à mieux investir dans la transformation numérique de leur département des ventes et du marketing. Nous générons de la croissance.
                        Notre objectif est de créer le lien spécial et particulier entre le public et la marque qui cherche à établir une relation de confiance envers ses utilisateurs.</Text>
                        <Image  source={require('../../assets/meet.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_title}>Avez- vous une stratégie pour se positionner par rapport à la concurrence ?</Text>
                        <Text style={styles.management__box_text}>Nous vous aiderons à la définir. La compétition est tellement féroce aujourd’hui, aucune entreprise ne peut se contenter d’attendre que son téléphone sonne. Faites-nous confiance pour atteindre vos objectifs et améliorer votre profitabilité de façon exponentielle.
                        </Text>
                        <Image  source={require('../../assets/social.jpg')} style={styles.management__img}/>
                    </View>
                    <View style={styles.management__box}>
                        <Text style={styles.management__box_text}>Nous accompagnons nos clients dans la création, l’hébergement, le référencement et le contenu des sites web.
                            Pourquoi vous aurez besoin d’ un site web ?
                            -Fournir tous les renseignements nécessaires sur votre entreprise, ses services ou ses produits.
                            -Automatisez vos tâches.
                            -attirez de nouveaux clients.
                            -Ajoutez de la crédibilité à votre entreprise.</Text>
                        <Image  source={require('../../assets/coding.jpg')} style={styles.management__img}/>
                    </View>
                    <Text style={styles.activity_title}>Activités</Text>
                    <View style={styles.activities}>
                        <View style={styles.activity}>
                            <Ionicons name="rocket"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Branding</Text>
                        </View>
                        <View style={styles.activity}>
                            <Ionicons name="code-slash"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Création de Site</Text>
                        </View>
                        <View style={styles.activity}>
                            <Ionicons name="create"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Création de Contenu</Text>
                        </View>
                        <View style={styles.activity}>
                            <Ionicons name="desktop"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Référencement Naturel et Payant (SEO - SEA)</Text>
                        </View>
                        <View style={styles.activity}>
                            <Ionicons name="people-circle"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Management de Communauté</Text>
                        </View>
                        <View style={styles.activity}>
                            <Ionicons name="happy"style={styles.activity_icon} />
                            <Text style={styles.activity_text}>Relation Client</Text>
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
      activities: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'navy',
        marginTop:40,
        paddingBottom:45,
        borderRadius:10,
      },
      activity: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:45,
        textAlign:'center',
      },
      activity_title: {
        fontSize:24,
        fontWeight:700,
        marginTop:40,
      },
      activity_text: {
        fontSize:24,
        fontWeight:800,
        textAlign:'center',
      },
      activity_icon: {
        fontSize:28,
        marginBottom:15,
      }


});

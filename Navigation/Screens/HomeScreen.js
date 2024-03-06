import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function HomeScreen({navigation}){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.head}>
                <Ionicons name="ellipse" style={styles.icon}/>
                <Text>KYC SUD CONSULTING</Text>
            </View>
            <View style={styles.info}>
                
                <Text style={styles.info__text}>Notre expertise au service de votre prospérité</Text>
                <Text style={styles.info__subtext}>know your customer know your business</Text>
                <View  style={styles.info__button} >
                <CustomButton title="Demander un Devis" />
                </View>   
                <View style={styles.info__imgContainer1}>
                    <Image source={require('../../assets/computer.jpg')} style={styles.info__img1} />
                </View>
                <View style={styles.info__imgContainer2}>
                <Image source={require('../../assets/homeimg.jpg')} style={styles.info__img2} />
                </View>
                
                
                <Text style={styles.info__text2}>Notre Cabinet</Text>
                <Text style={styles.info__subtext}>Kycsudconsulting est un cabinet de conseil à 
                        taille humaine,doté d’une équipe de consultants jeune, dynamique,flexible et rigoureuse.
                        Notre domaine d’expertise couvre principalement la finance, le management de qualité,passant par 
                        la gestion des ressources humaines et la mobilisation des leviers du marketing digital.Et ce pour 
                        relancer vos ventes, promouvoir votre business et améliorer votre présence en ligne.
                        Nous vous proposons des packs services personnalisés 
                        et parfaitement adéquats à vos besoins. 
                        Kyc vous offre également un environnement 
                        idéal pour discuter les difficultés de 
                        gestion dont souffre votre entreprise,détecte pour vous les dysfonctionnements 
                        potentiels dans vos systèmes opérationnels 
                        et développe des solutions pertinentes permettant d’atteindre vos objectifs.</Text>
                <View style={styles.sectors}>
                  <View style={styles.sectors__head}>
                    <View style={styles.sectors__head_line}></View>
                    <Text style={styles.sectors__head_text}>KYC</Text>
                    <View style={styles.sectors__head_line}></View>
                  </View>
                  
                  <Text style={styles.sectors__header}>Services</Text>
                  <View style={styles.sectors__detail}>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Finance</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Management Qualité</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Ressources Humaines</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark"style={styles.sectors__icon} />
                      <Text style={styles.sectors__items}>Marketing Digital</Text>
                    </View>
                  </View>
                  <Text style={styles.sectors__header}>Secteurs</Text>
                  <View style={styles.sectors__detail}>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Agricole - Agroalimentaire</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Pêche Maritime</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark" style={styles.sectors__icon}/>
                      <Text style={styles.sectors__items}>Transport et Logistique</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark"style={styles.sectors__icon} />
                      <Text style={styles.sectors__items}>Banques et Assurance</Text>
                    </View>
                    <View style={styles.head}>                    
                      <Ionicons name="shield-checkmark"style={styles.sectors__icon} />
                      <Text style={styles.sectors__items}>Tourisme</Text>
                    </View>
                  </View>
                  </View>
                  <Text style={styles.info__text2}>Nos Références</Text>               
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.references}>
                    <Image source={require('../../assets/reference1.png')} style={styles.referenceImage} />
                    <Image source={require('../../assets/reference2.png')} style={styles.referenceImage} />
                    <Image source={require('../../assets/reference3.png')} style={styles.referenceImage} />
                    <Image source={require('../../assets/reference4.png')} style={styles.referenceImage} />
                    <Image source={require('../../assets/reference5.png')} style={styles.referenceImage} />
                    <Image source={require('../../assets/reference6.png')} style={styles.referenceImage} />
                  </ScrollView>
                <Text style={styles.info__text2}>KYC au yeux de ses clients Satisfaits</Text>
                <View style={[
                            styles.reviews,
                            Platform.OS === 'android'
                              ? { elevation: 5 } // Apply elevation for Android
                              : { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 5 }, // Apply shadow properties for iOS
                          ]}>
                  <Text style={styles.opinions}>“ Je suis un client de kyc sud consulting qui nous offre 
                    des conseils en matière de gestion et management de nos affaires et 
                    dont on a trouvé la fiabilité, la créativité et la qualité”</Text>
                    <View style={styles.reviewDetails}>
                    <Image source={require('../../assets/client1.jpg')} style={styles.clientImage} />
                    <View>
                    <Text style={styles.clientName}>Jamal ASLAKAH</Text>
                    <Text style={styles.clientPosition}>DIRECTEUR DE LA SOCIÉTÉ ASLAKAH INVEST COMPANY</Text>
                    </View>
                    </View>
                </View>
                <View style={[
                            styles.reviews,
                            Platform.OS === 'android'
                              ? { elevation: 5 } // Apply elevation for Android
                              : { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 5 }, // Apply shadow properties for iOS
                          ]}>
                  <Text style={styles.opinions}>“ Je suis un client de kyc sud consulting qui nous offre 
                    des conseils en matière de gestion et management de nos affaires et 
                    dont on a trouvé la fiabilité, la créativité et la qualité”</Text>
                    <View style={styles.reviewDetails}>
                    <Image source={require('../../assets/client2.jpg')} style={styles.clientImage} />
                    <View>
                    <Text style={styles.clientName}>Mme Naima</Text>
                    <Text style={styles.clientPosition}>CHEF DE PROJET CHEZ ACHGHAL AL JANOUB</Text>
                    </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
    },
    head: {
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      paddingTop: 20, 
    },
    icon: {
      marginRight: 10,
      fontSize:18,
      color:"#47BE8A",
    },
    text: {
      fontSize: 18, 
    },
    info: {
      flex:1,
      paddingTop:50,
    },
    info__text: {
      fontSize: 20,
      fontWeight:'bold',
      paddingBottom:30,
    },
    info__text2: {
      fontSize: 20,
      fontWeight:'bold',
      paddingBottom:30,
      paddingTop:10,
      textAlign:'center',
    },
    info__subtext: {
        paddingBottom:30,
    },
    info__img1: {
      width:320,
      height:300,
      paddingBottom:40,
      borderRadius:10,
    },
    info__imgContainer1: {
        paddingBottom:90,   
    },
    info__imgContainer2: {
        paddingBottom:20,   
    },
    info__button: {
        marginBottom:40,
    },
    info__img2: {
        width:320,
        height:300,
        borderRadius:10,
      },
    sectors: {
      backgroundColor:'#DDE1E0',
    },
    sectors__head: {
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:10,
    },
    sectors__head_line: {
      width:120,
      height:2,
      backgroundColor:"#47BE8A",
      top:10,
      marginLeft:10,
      marginRight:10,
    },
    sectors__header: {
      fontSize:18,
      fontWeight:'bold',
      marginBottom:10,
      marginTop:10,
      paddingLeft:15,
    },
    sectors__detail: {
      paddingLeft:15,
    },
    sectors__items: {
      paddingBottom:3,
      fontSize:17,
    },
    reviews: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 25,
      margin: 10,
      marginBottom: 20,
    },
    reviewDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    clientImage: {
      width: 50,
      height: 50,
      marginRight: 10,
      marginTop: 10,
      borderRadius: 25,
    },
    opinions: {
      fontSize:14,
    },
    clientName: {
      fontWeight:'bold',
    },
    clientPosition: {
      fontSize:12,
    },
    references: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center images vertically
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    referenceImage: {
      width: 180, 
      height: 90, 
      marginRight: 20,

    },
    sectors__icon: {
      fontSize:16,
      paddingTop:4,
      paddingRight:4,
      color:'#47BE8A',
    }
  });
  

  
  
  
  
  
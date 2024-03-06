import * as React from 'react';
import { View,Text,Image,ScrollView,StyleSheet,Button } from 'react-native';
import { sharedStyles } from '../../components/sharedStyles/sharedStyles'; 
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';
import { useNavigation } from '@react-navigation/native';
export default function Rejoindre( poses ){
    const navigation = useNavigation();
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
                <View>
                    <Text style={styles.Rejoindre_title}>POURQUOI KYC SUD CONSULTING ?</Text>
                    <Text style={styles.Rejoindre_text}> Devenir une collaborateur·rice du KYC SUD Consulting, c’est l’opportunité d’apporter et développer ses compétences à l’action d’une entreprise qui agit au 
                        quotidien pour accompagner et fournir des réponses aux difficultés rencontrées par d’autres marques de secteurs diversifiés.</Text>
                    <View style={styles.Rejoindre_container}>
                        <View style={styles.Rejoindre_box}>
                            <Text style={styles.Rejoindre_box_text}>Rejoindre KYC En Tant Que Client</Text>
                            <Button title="Rejoindre Comme Client" 
                            onPress={() => poses.navigation.navigate('Footer')}/>
                        </View>
                        <View style={styles.Rejoindre_box}>
                            <Text style={styles.Rejoindre_box_text}>Rejoindre KYC En Tant Que Formateur</Text>
                            <Button title="Rejoindre Comme Formateur" />
                        </View>
                        <View style={styles.Rejoindre_box}>
                            <Text style={styles.Rejoindre_box_text}>Rejoindre KYC En Tant Que Consultant</Text>
                            <CustomButton title="Rejoindre Comme Consultant" />
                        </View>
                    </View>
                </View>
            </View>
         

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
    Rejoindre_title: {
        fontSize:20,
        fontWeight:700,
        textAlign:'center',
    },
    Rejoindre_text: {
        marginRight:20,
        marginLeft:20,
        marginTop:20,
        marginBottom:20,
        fontSize:16,
    },

    Rejoindre_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
      },
      Rejoindre_box: {
        marginBottom: 20,
        width:'89%',
        paddingTop:30,
        paddingBottom:30,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      Rejoindre_box_text: {
        fontSize:18,
        fontWeight:500,
        marginBottom:20,
      }
})
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Alert,PermissionsAndroid, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
const EmployForm = () => {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [text, setText] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePrenomChange = (text) => {
    setPrenom(text)
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleNumChange = (text) => {
    setNum(text);
  };
  const handleTextChange = (text) => {
    setText(text);
  };
//add employ


const handleSubmit = async () => {
  try {
    const response = await axios.post('http://192.168.8.113:3000/submitForm', {
      name,
      prenom,
      email,
      num,
      text
    });

    if (response.status === 200) {
      // Handle success
      Alert.alert('Success', 'Vos informations sont enregistrées avec succés');
    } else {
      // Handle error
      Alert.alert('Error', 'Failed to insert data');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'An error occurred while submitting the form');
  }
};

 

  return (

    <ScrollView>
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Rejoindre Nous</Text>
                <Text style={styles.text}>Rejoindre Kyc pour un environement de travail stimulant et pour se developper entre nos experts</Text>
            </View>
            <View style={styles.inputs}>
                <TextInput
                style={styles.input}
                placeholder="Nom"
                value={name}
                onChangeText={handleNameChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Prenom"
                value={prenom}
                onChangeText={handlePrenomChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Numéro de Téléphone"
                value={num}
                onChangeText={handleNumChange}
            />
            <Text>Entrer votre motivation</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                value={text}
                onChangeText={handleTextChange}
            />


      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>   

      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft:20,
    paddingRight:20,
  },

  title: {
    fontFamily:'Roboto',
    fontSize:20,
    marginBottom:20,
    fontWeight:700,
  },
  text: {
    fontFamily:'Roboto',
    fontSize:16,
    marginBottom:40,
    lineHeight:22,
  },
  input: {
    height: 50,
    borderRadius:10,
    border:'none',
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#F1F2F2'
  },
  textInput: {
    height: 100,
    borderRadius:10,
    border:'none',
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#F1F2F2'
  },
  buttonTextStyle: {
    color: '#47BE8A',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#47BE8A',
    paddingTop:10,
    paddingBottom:10,
    paddingRight:30,
    paddingLeft:30,
    borderRadius: 18,
    marginTop:40,
    alignItems: 'center',
    flex:1,
    justifyContent:'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputs: {
    marginTop:10,
  },
  buttonStyle: {
    backgroundColor: '#F1F2F2',
    paddingTop:10,
    paddingBottom:10,
    borderRadius: 8,
    
    alignItems: 'center',
    width:'45%',
  }

});

export default EmployForm;
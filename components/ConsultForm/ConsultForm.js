import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView,Text, TouchableOpacity } from 'react-native';
const EmployForm = () => {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState('');
  const [singleFile, setSingleFile] = useState(null);

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
  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    // You can perform further actions here, like sending the data to a server.
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
                 

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
       {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
        </Text>
      ) : null}

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
    borderRadius: 8,
    marginTop:40,
    alignItems: 'center',
    width:'45%',
    flex:1,
    justifyContent:'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputs: {
    marginTop:20,
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
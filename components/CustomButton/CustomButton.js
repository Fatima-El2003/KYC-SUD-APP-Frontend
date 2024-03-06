import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, handlepress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlepress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#47BE8A',
    paddingTop:10,
    paddingBottom:10,
    paddingRight:40,
    paddingLeft:40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;

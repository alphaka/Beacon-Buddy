import React, { useReducer } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';



const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='UNI' style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(36, 37,42)',
        
        width: 300,
        height: 40,
        borderColor: 'rgb(33, 34, 38)',
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 23,
    },
    input: {
        color:'white',
        fontSize: 23,
        paddingVertical:10,
    },
});

export default CustomInput;
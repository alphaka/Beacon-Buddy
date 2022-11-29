import React, { useReducer } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import SignInImg from '../../../assets/img/signInPic2.jpeg';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source={SignInImg} style={[styles.signInImg, {height: height * 0.65}]} />
      <CustomInput/>
      {/* <CustomInput/> */}
    </View>

    
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems: 'center'
  },
  signInImg: {
    width: 500,
    maxHeight: 900,
    maxWidth: 500,
  },

});

export default SignInScreen;


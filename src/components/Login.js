/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react'
import {Alert, View,Text, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from '../styles/main';

function sigin(email, password)
{
  Alert.alert(email + " " + password);
}


export default function Login() {
 
  const [email, setemail] = useState('') ;
  const [password, setpassword] = useState('');

  return (
    <>
     
      <View style={styles.container} >
        <Image source={require('../assets/bg.jpg')} style={{position:"absolute"}}  />
        <View style={{position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)', height:'10000%', width:'10000%'}}></View> 
          
        <Text style={styles.loginIntroText}>
          Peça já sua refeição vegana no
        </Text>
        <Text style={styles.loginIntroTextLogin}>Green Herbs</Text>



        
        <TextInput onChangeText={setemail} 
          style={styles.loginText} placeholder="Digite seu email"></TextInput>
        <TextInput onChangeText={setpassword} 
          style={styles.loginText} placeholder="Digite sua senha" secureTextEntry={true}></TextInput>

        <TouchableOpacity style={styles.loginButton} onPress={() => {sigin(email, password)} }>
          

          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={styles.loginForgottenPasswordText}>
          Esqueceu a senha?
        </Text>
      </View>
     
    </>
  );      
}